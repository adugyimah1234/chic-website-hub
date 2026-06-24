import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "./site-nav";

export function MobileNav({
  open,
  setOpen,
  onNavigate,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  onNavigate: (href: string) => void;
}) {
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-md p-2 text-navy transition-transform active:scale-90 lg:hidden"
        aria-label="Menu"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="block"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border bg-white lg:hidden"
          >
            <div className="container-page flex flex-col py-2">
              {nav.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <a
                    href={n.href}
                    onClick={(event) => {
                      event.preventDefault();
                      setOpen(false);
                      onNavigate(n.href);
                    }}
                    className="flex items-center gap-3 border-b border-border py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-slate-700 hover:text-navy"
                  >
                    <span>{n.label}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
