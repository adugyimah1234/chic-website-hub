import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className = "",
  dark = false,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  dark?: boolean;
  centered?: boolean;
}) {
  if (centered) {
    return (
      <div className={`mx-auto max-w-2xl text-center ${className}`}>
        <span className="eyebrow-gold justify-center">{eyebrow}</span>
        <h2
          className={`mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-5 text-sm leading-7 md:text-base ${
              dark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        )}
        {action && <div className="mt-6 flex justify-center">{action}</div>}
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-5 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="max-w-2xl">
        <span className="eyebrow-gold">{eyebrow}</span>
        <h2
          className={`mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-5 text-sm leading-7 md:text-base ${
              dark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
