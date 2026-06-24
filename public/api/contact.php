<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '{}', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request payload.']);
    exit;
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$org = trim((string)($data['org'] ?? ''));
$subject = trim((string)($data['subject'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$website = trim((string)($data['website'] ?? ''));

if ($website !== '') {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please complete all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please provide a valid email address.']);
    exit;
}

$to = getenv('CONTACT_TO_EMAIL') ?: 'info.wcmghana@gmail.com';
$from = getenv('CONTACT_FROM_EMAIL') ?: 'no-reply@wcmghana.org';
$site = getenv('CONTACT_SITE_NAME') ?: 'WCM Ghana';

$lines = [
    "Name: {$name}",
    "Email: {$email}",
];

if ($org !== '') {
    $lines[] = "Organization: {$org}";
}

$lines[] = "Subject: {$subject}";
$lines[] = '';
$lines[] = $message;

$body = implode("\n", $lines);
$encodedSubject = mb_encode_mimeheader("[{$site}] {$subject}", 'UTF-8');
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    "From: {$site} <{$from}>",
    "Reply-To: {$name} <{$email}>",
];

$sent = @mail($to, $encodedSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Unable to send message. Please try again later.']);
    exit;
}

echo json_encode(['ok' => true]);
