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
    <section className="relative overflow-hidden border-b border-steel-blue/15 bg-navy text-[#E2E8F0]">
      <div className="hero-wcm-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-40%,#243a5e_0%,transparent_70%)]" />
      <div className="container-page relative py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow-gold">{eyebrow}</span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-normal text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
