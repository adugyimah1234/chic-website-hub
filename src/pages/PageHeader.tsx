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
    <section className="relative overflow-hidden bg-background text-[#E2E8F0] border-b border-steel-blue/15">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-40%,#163660_0%,transparent_70%)] pointer-events-none" />
      <div className="container-page relative py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
            {eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-slate-300 italic">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
