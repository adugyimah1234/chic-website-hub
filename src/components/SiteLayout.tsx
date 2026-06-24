import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png.asset.json";
import { assetUrl } from "@/lib/assetUrl";
import { PageTransition, ScrollProgress } from "./Motion";
import { Toaster } from "./ui/sonner";

const nav = [
  { href: "/", label: "Home" },
  { href: "/conference", label: "Conference" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
] as const;

function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <a href="/" className="group flex items-center gap-3">
      <motion.img
        src={assetUrl(logo)}
        alt="WCM Ghana"
        width={56}
        height={56}
        className={`h-10 w-auto object-contain ${variant === "dark" ? "brightness-0 invert" : ""}`}
        whileHover={{ rotate: -6, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
      <div className="hidden leading-tight sm:block">
        <div
          className={`font-display text-sm font-bold ${variant === "dark" ? "text-primary-foreground" : "text-navy"}`}
        >
          WCM Ghana
        </div>
        <div
          className={`text-[10px] uppercase ${variant === "dark" ? "text-gold" : "text-muted-foreground"}`}
        >
          World Conference of Mayors
        </div>
        </div>
    </a>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
      <a href={href}
      className="group relative rounded-md px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-navy"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Toaster position="top-right" richColors closeButton />
      <ScrollProgress />
      <div className="hidden bg-navy text-xs text-primary-foreground/85 md:block">
        <div className="container-page flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3 w-3 text-gold" /> ghanawcm@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-gold" /> +233 553 018 442
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-gold" /> Accra, Ghana
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container-page flex h-18 items-center justify-between py-3">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <NavLink key={n.href} href={n.href} label={n.label} />
            ))}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
                <a
                href="/contact"
                className="ml-3 inline-flex items-center rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-navy/20 transition-colors hover:bg-navy-light"
              >
                Get Involved
              </a>
            </motion.div>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-navy transition-transform active:scale-90 lg:hidden"
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
              className="overflow-hidden border-t border-border bg-background lg:hidden"
            >
              <div className="container-page flex flex-col py-3">
                {nav.map((n, i) => (
                  <motion.div
                    key={n.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                      <a href={n.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-border/50 py-3 text-sm font-medium text-foreground/80"
                    >
                      {n.label}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>

      <footer className="mt-24 bg-navy text-primary-foreground">
        <div className="container-page grid gap-10 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo variant="dark" />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Connecting mayors and civic leaders across Ghana and beyond to strengthen public
              service, collaboration, and local governance.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase text-gold">Explore</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="inline-block transition-all hover:translate-x-1 hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Alhaji Azeez Building, 1st
                Floor, Room #3, Salem Junction, Adjiringanor, Accra, Ghana
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" /> ghanawcm@gmail.com
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" /> +233 553 018 442
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="container-page flex flex-wrap justify-between gap-3 py-5 text-xs text-primary-foreground/60">
            <span>© {new Date().getFullYear()} World Conference of Mayors, Ghana. All rights reserved.</span>
            <span>WCM Ghana</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
