import { nav } from "./site-nav";
import { NavLink } from "./NavLink";

export function DesktopNav({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate: (href: string) => void;
}) {
  return (
    <nav className="hidden items-center justify-center gap-0.5 xl:flex">
      {nav.map((n, i) => (
        <NavLink
          key={n.href}
          href={n.href}
          label={n.label}
          index={i}
          pathname={pathname}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}
