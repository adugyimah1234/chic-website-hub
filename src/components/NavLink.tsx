export function NavLink({
  href,
  label,
  index,
  pathname,
  onNavigate,
}: {
  href: string;
  label: string;
  index: number;
  pathname: string;
  onNavigate: (href: string) => void;
}) {
  const active = pathname === href;
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(href);
      }}
      className={`group relative flex items-center gap-1.5 rounded-md px-2.5 py-2 font-display text-[10px] font-bold uppercase tracking-[0.12em] transition-colors hover:text-navy ${
        active ? "text-navy" : "text-slate-600"
      }`}
    >
      <span className="relative z-10">{label}</span>
      <span
        className={`absolute left-3.5 right-3.5 bottom-0 h-[1.5px] origin-left bg-navy transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </a>
  );
}
