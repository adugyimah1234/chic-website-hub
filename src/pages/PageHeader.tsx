export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light opacity-95" />
      <div className="container-page relative py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase text-gold">{eyebrow}</span>
          <h1 className="mt-4 text-balance font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
