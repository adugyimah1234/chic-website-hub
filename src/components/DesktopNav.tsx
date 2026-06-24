import { motion } from "framer-motion";
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
    <nav className="hidden items-center gap-0.5 lg:flex">
      {nav.map((n, i) => (
        <NavLink key={n.href} href={n.href} label={n.label} index={i} pathname={pathname} onNavigate={onNavigate} />
      ))}
      <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
        <a
          href="/contact"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("/contact");
          }}
          className="ml-4 inline-flex items-center rounded-full border border-navy/10 bg-white px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-navy transition-all hover:bg-navy hover:text-white hover:border-navy"
        >
          Get Involved
        </a>
      </motion.div>
    </nav>
  );
}
