import { PageHeader } from "./PageHeader";
import { motion } from "framer-motion";
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
      
      {/* Initiatives Grid */}
      <section className="container-page py-20 bg-white text-navy">
        <span className="font-mono text-xs uppercase tracking-widest text-gold">( Flagship Initiatives )</span>
        <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-navy md:text-4xl">Core Programmes</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.article 
              key={p.t} 
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-steel-blue/20 bg-slate-50 p-8 hover:border-gold hover:shadow-elegant transition-colors text-navy"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy group-hover:bg-gold group-hover:text-white transition-colors">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-2xl font-bold text-slate-400 group-hover:text-gold/40 transition-colors">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase text-navy group-hover:text-gold transition-colors">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-655 text-slate-600">{p.d}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Priority Pillars */}
      <section className="border-y border-steel-blue/15 bg-[#091526] py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">( Focus Pillars )</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white md:text-4xl">Core civic and policy priorities</h2>
          </div>
          
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {priorityPillars.map((item) => (
              <div key={item.title} className="group rounded-2xl border border-steel-blue/15 bg-card p-6 hover:border-gold/30 hover:shadow-elegant transition-colors">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold uppercase text-white group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Framework Stepper */}
      <section className="bg-white py-20 text-navy">
        <div className="container-page grid gap-12 items-center lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">( Implementation )</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-navy md:text-4xl">The WCM policy framework</h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-655 text-slate-600 font-serif italic">
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
              <motion.li 
                key={n} 
                whileHover={{ x: 4 }}
                className="flex gap-5 rounded-2xl border border-steel-blue/20 bg-slate-50 p-5 hover:border-gold hover:shadow-elegant transition-all cursor-default text-navy"
              >
                <span className="shrink-0 font-mono text-2xl font-bold text-gold">{n}</span>
                <div>
                  <h4 className="font-display text-base font-bold uppercase text-navy">{t}</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{d}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

