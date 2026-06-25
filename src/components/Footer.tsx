import { Mail, MapPin, Phone } from "lucide-react";
import { nav } from "./site-nav";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <footer className="mt-0 border-t border-white/10 bg-navy text-slate-200">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-5">
            <Logo variant="dark" onNavigate={onNavigate} />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            The official Ghana Chapter platform for municipal leadership, city diplomacy, economic
            development, innovation, and global partnerships.
          </p>
          <SocialLinks className="mt-6" variant="dark" />
        </div>
        <div>
          <h4 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
            Website
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            {nav.map((n) => (
              <li key={n.href}>
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
          <h4 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
              <span>
                Alhaji Azeez Building, 1st Floor, Room #3, Salem Junction, Adjiringanor, Accra,
                Ghana
              </span>
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
      <div className="border-t border-white/10">
        <div className="container-page flex flex-wrap justify-between gap-3 py-6 font-display text-[10px] uppercase tracking-[0.12em] text-slate-500">
          <span>&copy; {new Date().getFullYear()} WCM Ghana. All rights reserved.</span>
          <span>World Conference of Mayors Ghana Chapter</span>
        </div>
      </div>
    </footer>
  );
}
