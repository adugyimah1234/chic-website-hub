import "../src/lib/error-capture";

import { consumeLastCapturedError } from "../src/lib/error-capture";
import { renderErrorPage } from "../src/lib/error-page";
import nodemailer from "nodemailer";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  org?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function getEnvValue(env: unknown, key: string): string | undefined {
  if (env != null && typeof env === "object" && key in env) {
    const value = (env as Record<string, unknown>)[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  if (typeof process !== "undefined") {
    const value = process.env[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return undefined;
}

function getPublicBaseUrl(env: unknown): string | undefined {
  return getEnvValue(env, "SITE_URL") ?? getEnvValue(env, "PUBLIC_SITE_URL") ?? undefined;
}

function getEmailLogoUrl(env: unknown): string | undefined {
  const explicit = getEnvValue(env, "EMAIL_LOGO_URL");
  if (explicit) return explicit;

  const baseUrl = getPublicBaseUrl(env);
  if (!baseUrl) return undefined;

  return `${baseUrl.replace(/\/$/, "")}/email-logo.png`;
}

function getContactRecipients(env: unknown): string[] {
  const list = getEnvValue(env, "CONTACT_TO_EMAILS") ?? getEnvValue(env, "CONTACT_TO_EMAIL");
  if (!list) {
    return ["ghanawcm@gmail.com"];
  }

  return list
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildContactEmailHtml(params: {
  env: unknown;
  name: string;
  email: string;
  org: string;
  subject: string;
  message: string;
}): string {
  const { env, name, email, org, subject, message } = params;
  const logoUrl = getEmailLogoUrl(env);
  const baseUrl = getPublicBaseUrl(env);
  const currentYear = new Date().getFullYear();

  return `
    <div style="margin:0;background:#f6f3ea;padding:32px 0;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;box-shadow:0 12px 40px rgba(15,23,42,0.08);">
        <div style="background:linear-gradient(135deg,#102a43,#1f3b5b);padding:28px 32px;text-align:center;">
          ${
            logoUrl
              ? `<img src="${escapeHtml(logoUrl)}" alt="WCM Ghana" width="84" height="84" style="display:block;margin:0 auto 14px auto;border-radius:18px;background:#fff;padding:10px;object-fit:contain;" />`
              : ""
          }
          <div style="color:#d4af37;font-size:12px;font-weight:700;letter-spacing:0.24em;text-transform:uppercase;">World Conference of Mayors, Ghana</div>
          <h1 style="margin:12px 0 0 0;color:#fff;font-size:28px;line-height:1.2;">New contact enquiry received</h1>
          <p style="margin:10px 0 0 0;color:rgba(255,255,255,0.84);font-size:14px;line-height:1.6;">A visitor has submitted the contact form on the website.</p>
        </div>

        <div style="padding:32px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:20px 22px;margin-bottom:24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.7;">
              <tr><td style="padding:6px 0;color:#64748b;width:140px;font-weight:700;">Name</td><td style="padding:6px 0;color:#0f172a;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;font-weight:700;">Email</td><td style="padding:6px 0;color:#0f172a;"><a href="mailto:${escapeHtml(email)}" style="color:#102a43;text-decoration:none;">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:6px 0;color:#64748b;font-weight:700;">Organization</td><td style="padding:6px 0;color:#0f172a;">${escapeHtml(org || "N/A")}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;font-weight:700;">Subject</td><td style="padding:6px 0;color:#0f172a;">${escapeHtml(subject)}</td></tr>
            </table>
          </div>

          <h2 style="margin:0 0 12px 0;font-size:16px;line-height:1.4;color:#102a43;">Message</h2>
          <div style="white-space:pre-wrap;background:#fffaf0;border-left:4px solid #d4af37;border-radius:12px;padding:18px 18px 18px 20px;color:#0f172a;font-size:14px;line-height:1.8;">${escapeHtml(message)}</div>

          <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e5e7eb;color:#64748b;font-size:12px;line-height:1.6;">
            <p style="margin:0 0 8px 0;">This message was generated from the WCM Ghana contact form.</p>
            ${
              baseUrl
                ? `<p style="margin:0;">Website: <a href="${escapeHtml(baseUrl)}" style="color:#102a43;text-decoration:none;">${escapeHtml(baseUrl)}</a></p>`
                : ""
            }
          </div>
        </div>

        <div style="background:#102a43;padding:16px 32px;color:rgba(255,255,255,0.7);font-size:12px;text-align:center;">
          © ${currentYear} World Conference of Mayors, Ghana
        </div>
      </div>
    </div>
  `;
}

function buildContactEmailSubject(params: { name: string; org: string; subject: string }): string {
  const name = params.name.trim();
  const org = params.org.trim();
  const subject = params.subject.trim();
  const parts = ["WCM Ghana", name || org || "New contact"];

  if (subject) {
    parts.push(subject);
  }

  const joined = parts.join(" - ");
  return joined.length > 78 ? `${joined.slice(0, 75).trimEnd()}...` : joined;
}

async function handleContactSubmission(request: Request, env: unknown): Promise<Response> {
  if (request.method !== "POST") {
    return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
  }

  const payload = (await request.json().catch(() => null)) as ContactPayload | null;
  if (!payload) {
    return Response.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const org = typeof payload.org === "string" ? payload.org.trim() : "";
  const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const website = typeof payload.website === "string" ? payload.website.trim() : "";

  if (website) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !subject || !message) {
    return Response.json(
      { ok: false, error: "All required fields must be filled out." },
      { status: 400 },
    );
  }

  const recipients = getContactRecipients(env);

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${org || "N/A"}`,
    `Subject: ${subject}`,
    "",
    message,
  ];

  const html = `
    ${buildContactEmailHtml({ env, name, email, org, subject, message })}
  `;
  const emailSubject = buildContactEmailSubject({ name, org, subject });

  const fromEmail = getEnvValue(env, "CONTACT_FROM_EMAIL");
  const smtpHost = getEnvValue(env, "SMTP_HOST");
  const smtpUser = getEnvValue(env, "SMTP_USER");
  const smtpPass = getEnvValue(env, "SMTP_PASS");

  if (smtpHost && smtpUser && smtpPass) {
    const smtpPort = Number(getEnvValue(env, "SMTP_PORT") ?? "587");
    const smtpSecure = (getEnvValue(env, "SMTP_SECURE") ?? "").toLowerCase() === "true";
    const smtpFrom = getEnvValue(env, "SMTP_FROM_EMAIL") ?? fromEmail;

    if (!smtpFrom) {
      return Response.json(
        {
          ok: false,
          error: "SMTP is configured but SMTP_FROM_EMAIL or CONTACT_FROM_EMAIL is missing.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number.isFinite(smtpPort) ? smtpPort : 587,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: recipients,
      replyTo: email,
      subject: emailSubject,
      text: lines.join("\n"),
      html,
    });

    return Response.json({ ok: true, transport: "smtp" });
  }

  const apiKey = getEnvValue(env, "RESEND_API_KEY");

  if (!apiKey || !fromEmail) {
    return Response.json(
      {
        ok: false,
        error:
          "Email delivery is not configured. Set SMTP_HOST/SMTP_USER/SMTP_PASS or RESEND_API_KEY and CONTACT_FROM_EMAIL.",
      },
      { status: 500 },
    );
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: recipients,
      reply_to: email,
      subject: emailSubject,
      text: lines.join("\n"),
      html,
    }),
  });

  if (!resendResponse.ok) {
    const details = await resendResponse.text().catch(() => "");
    console.error("Contact email failed", resendResponse.status, details);
    return Response.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/contact") {
        return await handleContactSubmission(request, env);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
