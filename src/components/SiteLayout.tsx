import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png.asset.json";
import { PageTransition, ScrollProgress } from "./Motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Leadership" },
  { to: "/programs", label: "Programs" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <motion.img
        src={logo.url}
        alt="WCM Ghana"
        className={`h-10 w-auto ${variant === "dark" ? "brightness-0 invert" : ""}`}
        whileHover={{ rotate: -6, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
      <div className="leading-tight hidden sm:block">
        <div className={`font-display text-sm font-bold ${variant === "dark" ? "text-primary-foreground" : "text-navy"}`}>
          WCM Ghana
        </div>
        <div className={`text-[10px] uppercase ${variant === "dark" ? "text-gold" : "text-muted-foreground"}`}>
          World Conference of Mayors
        </div>
      </div>
    </Link>
  );
}

function NavLink({ to, label, exact }: { to: string; label: string; exact?: boolean }) {
  return (
    <Link
      to={to}
      className="group relative px-4 py-2 text-sm font-medium text-foreground/75 rounded-md transition-colors hover:text-navy"
      activeProps={{ className: "px-4 py-2 text-sm font-semibold text-navy rounded-md" }}
      activeOptions={{ exact }}
    >
      {({ isActive }) => (
        <>
          <span className="relative z-10">{label}</span>
          <span
            className={`absolute left-3 right-3 -bottom-0.5 h-[2px] bg-gold origin-left transition-transform duration-300 ${
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}
          />
        </>
      )}
    </Link>
  );
}

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <div className="hidden md:block bg-navy text-primary-foreground/85 text-xs">
        <div className="container-page flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Mail className="h-3 w-3 text-gold" /> info.wcmghana@gmail.com</span>
            <span className="flex items-center gap-1.5"><Phone className="h-3 w-3 text-gold" /> +233 553 018 442</span>
          </div>
          <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-gold" /> Accra, Ghana</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container-page flex h-18 items-center justify-between py-3">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} label={n.label} exact={n.to === "/"} />
            ))}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/contact"
                className="ml-3 inline-flex items-center rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-navy/20 hover:bg-navy-light transition-colors"
              >
                Get Involved
              </Link>
            </motion.div>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-navy transition-transform active:scale-90"
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
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t border-border bg-background"
            >
              <div className="container-page py-3 flex flex-col">
                {nav.map((n, i) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-sm font-medium text-foreground/80 border-b border-border/50"
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <footer className="bg-navy text-primary-foreground mt-24">
        <div className="container-page py-16 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo variant="dark" />
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-md leading-relaxed">
              Rallying, uniting, and empowering mayors globally to drive the rebirth of patriotism,
              volunteerism, and national transformation in Ghana and across the world.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-gold uppercase mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="inline-block transition-all hover:text-gold hover:translate-x-1"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-gold uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /> Alhaji Azeez Building, 1st Floor, Room #3, Salem Junction, Adjiringanor, Accra, Ghana</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-gold shrink-0" /> info.wcmghana@gmail.com</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 text-gold shrink-0" /> +233 553 018 442</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="container-page py-5 flex flex-wrap justify-between gap-3 text-xs text-primary-foreground/60">
            <span>© {new Date().getFullYear()} World Conference of Mayors, Ghana. All rights reserved.</span>
            <span>The Rebirth of Patriotism and Volunteerism in Ghana</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
