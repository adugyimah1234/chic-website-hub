import { Facebook, Instagram } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  { href: "https://twitter.com", label: "X (Twitter)", Icon: XIcon },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
] as const;

export function SocialLinks({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const iconClass =
    variant === "dark"
      ? "text-slate-400 hover:bg-white/10 hover:text-white"
      : "text-navy/70 hover:bg-navy/5 hover:text-navy";

  return (
    <div className={`flex items-center gap-3 pr-28 ${className}`}>
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${iconClass}`}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
