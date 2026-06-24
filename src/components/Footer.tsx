import { Mail, MapPin, Phone } from "lucide-react";
import { nav } from "./site-nav";
import { Logo } from "./Logo";

export function Footer({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <footer className="mt-24 border-t border-steel-blue/15 bg-background text-[#E2E8F0]">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-4">
            <Logo variant="dark" onNavigate={onNavigate} />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            Connecting mayors and civic leaders across Ghana and beyond to strengthen public
            service, collaboration, and local governance.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-gold">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            {nav.map((n, i) => (
              <li key={n.href} className="flex items-center gap-2">
                <a
                  href={n.href}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(n.href);
                  }}
                  className="inline-block transition-all hover:translate-x-1 hover:text-white"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-gold">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" /> 
              <span>Alhaji Azeez Building, 1st Floor, Room #3, Salem Junction, Adjiringanor, Accra, Ghana</span>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold/80" /> 
              <span>info.wcmghana@gmail.com</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold/80" /> 
              <span>+233 553 018 442</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-page flex flex-wrap justify-between gap-3 py-6 text-[10px] uppercase tracking-[0.08em] text-slate-500">
          <span>© {new Date().getFullYear()} WCM Ghana. All rights reserved.</span>
          <span>World Conference of Mayors</span>
        </div>
      </div>
    </footer>
  );
}

