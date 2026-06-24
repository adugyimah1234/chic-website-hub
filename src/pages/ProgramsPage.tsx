import { PageHeader } from "./PageHeader";
import {
  GraduationCap,
  Handshake,
  Megaphone,
  Globe2,
  BookOpen,
  Trophy,
  ShieldCheck,
  Trees,
  Heart,
  MapPinned,
  BadgeCheck,
  Flag,
} from "lucide-react";

const programs = [
  { icon: Megaphone, t: "Annual Mayors Summit", d: "A flagship convening of city leaders, policymakers, and partners focused on practical governance outcomes." },
  { icon: GraduationCap, t: "Leadership Academy", d: "Executive training for mayors, assembly members, and emerging municipal leaders across Ghana." },
  { icon: Handshake, t: "Sister-City Diplomacy", d: "Strategic partnerships connecting Ghanaian cities with peers across Africa, the Americas, and beyond." },
  { icon: Globe2, t: "Patriotism Campaign", d: "A civic education campaign that encourages national pride and community participation." },
  { icon: BookOpen, t: "Policy Lab", d: "Research and publications that turn frontline insight into practical policy direction." },
  { icon: Trophy, t: "Excellence Awards", d: "Annual citations recognising leaders whose service strengthens public life." },
];

const priorityPillars = [
  { icon: Flag, title: "Patriotism", desc: "National symbols, school flag rituals, and civic pride." },
  { icon: ShieldCheck, title: "Public Safety", desc: "Road safety, emergency coordination, and safer streets." },
  { icon: Trees, title: "Environment", desc: "Land restoration, tree planting, and climate resilience." },
  { icon: MapPinned, title: "Migration", desc: "A coordinated framework for diaspora and mobility governance." },
  { icon: Heart, title: "Food Security", desc: "Farmer livelihoods, rural infrastructure, and local production." },
  { icon: BadgeCheck, title: "Peacebuilding", desc: "Reconciliation, dialogue, and conflict prevention." },
];

export function ProgramsPage() {
  return (
    <>
      <PageHeader eyebrow="Programs" title="Initiatives shaping the chapter's public mission" subtitle="From flagship convenings to grassroots civic engagement, each programme supports leadership, service, and measurable impact." />
      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <article key={p.t} className="group rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-elegant">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-3xl font-bold text-navy/10">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-secondary/60 py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase text-gold">Priority Areas</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy">Core civic and policy priorities</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {priorityPillars.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-gold">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy py-20 text-primary-foreground">
        <div className="container-page grid gap-12 items-center lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Framework</span>
            <h2 className="mt-4 font-display text-4xl font-bold">The WCM policy framework</h2>
            <p className="mt-5 leading-relaxed text-primary-foreground/75">
              A practical blueprint guiding cities and districts through four phases: civic engagement, capacity building, implementation, and measurable impact.
            </p>
          </div>
          <ol className="space-y-4">
            {[
              ["01", "Civic Engagement", "Build public participation and community ownership."],
              ["02", "Capacity Building", "Equip leaders with modern governance tools."],
              ["03", "Policy Delivery", "Translate strategy into measurable local action."],
              ["04", "Broader Impact", "Scale effective models across districts and regions."],
            ].map(([n, t, d]) => (
              <li key={n} className="flex gap-5 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-5 transition-all duration-300 hover:-translate-x-1 hover:border-gold/40 hover:bg-primary-foreground/10">
                <span className="shrink-0 font-display text-2xl font-bold text-gold">{n}</span>
                <div>
                  <h4 className="font-display text-lg font-bold">{t}</h4>
                  <p className="mt-1 text-sm text-primary-foreground/70">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
