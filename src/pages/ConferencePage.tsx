import { CalendarDays, Users, Presentation, Award } from "lucide-react";
import { PageHeader } from "./PageHeader";
import { motion } from "framer-motion";
import moderatorKenneth from "@/assets/Hon. Kenneth Kabu Kanor.small.png";
import moderatorFrancis from "@/assets/Hon. Francis Akumatey Addo.small.png";
import moderatorAllotey from "@/assets/Mr. Michael Kpakpo Allotey.small.png";
import moderatorOdoom from "@/assets/Hon. Abraham Dwuma Odoom.small.png";
import headquarters from "@/assets/wcmgh_headequarters_building.small.png";
import wcmBanner from "@/assets/wmcgh banner.small.png";

const agenda = [
  { icon: CalendarDays, title: "Opening Session", desc: "Formal welcome, traditional music performance, opening prayers, and introduction of international and local dignitaries." },
  { icon: Presentation, title: "Policy Presentations", desc: "Structured discussions and presentations outlining the WCM mandate, 7 T's framework, and the Ghana chapter's vision." },
  { icon: Users, title: "Leadership Dialogue", desc: "A moderated panel exchange between district chief executives, traditional authorities, and global partners." },
  { icon: Award, title: "Recognition & Dinner", desc: "Awarding citations of honor to key individuals supporting the establishment of WCM Ghana, followed by networking." },
];

const moderators = [
  { src: moderatorKenneth, label: "Hon. Kenneth Kabu Kanor" },
  { src: moderatorFrancis, label: "Hon. Francis Akumatey Addo" },
  { src: moderatorAllotey, label: "Mr. Michael Kpakpo Allotey" },
  { src: moderatorOdoom, label: "Hon. Abraham Dwuma Odoom" },
];

export function ConferencePage() {
  return (
    <>
      <PageHeader eyebrow="Conference" title="The inaugural WCM Ghana conference" subtitle="A formal record of the chapter's founding event, including the programme outline, key participants, and institutional imagery." />
      
      {/* Event Overview */}
      <section className="container-page py-20 bg-white text-navy">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">( Event Summary )</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-navy md:text-5xl">A clear and dignified policy convening</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 font-serif italic">This retrospective records the inaugural policy conference held to formally launch WCM in Ghana.</p>
            
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                ["Session", "Founding conference record"],
                ["Topic", "Policy, leadership, and partnership"],
                ["Venue Location", "Accra, Ghana"],
                ["Operating Theme", "Patriotism and volunteerism"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-steel-blue/20 bg-slate-50 p-5 shadow-sm">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-slate-500">{label}</div>
                  <div className="mt-2 text-base font-semibold text-navy">{value}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl border border-steel-blue/20 bg-white p-3 shadow-elegant">
            <img src={headquarters} alt="WCM Ghana headquarters" className="h-96 w-full rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* Programme Steps */}
      <section className="border-y border-steel-blue/15 bg-[#091526] py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">( Event Schedule )</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white md:text-4xl">Conference programme highlights</h2>
          </div>
          
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {agenda.map((item, index) => (
              <motion.article 
                key={item.title} 
                whileHover={{ y: -3 }}
                className="group rounded-2xl border border-steel-blue/15 bg-card p-6 hover:border-gold/30 hover:shadow-elegant transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Step 0{index + 1}</div>
                    <h3 className="mt-1 font-display text-xl font-bold uppercase text-white group-hover:text-gold transition-colors">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Moderators List */}
      <section className="container-page py-20 bg-white text-navy">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">( Moderators )</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-navy md:text-4xl">Key participants and moderators</h2>
          </div>
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-steel-blue/20 bg-slate-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-600">
            Official Conference Roster
          </div>
        </div>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {moderators.map((item) => (
            <figure key={item.label} className="group overflow-hidden rounded-2xl border border-steel-blue/20 bg-slate-50 hover:border-gold transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant">
              <img src={item.src} alt={item.label} className="h-72 w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <figcaption className="space-y-1 p-5 text-center">
                <div className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Moderator</div>
                <h3 className="font-display text-lg font-bold text-navy group-hover:text-gold transition-colors">{item.label}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Venue Context */}
      <section className="border-t border-steel-blue/15 bg-[#091526] py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gold">( Context )</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white md:text-4xl">A conference identity rooted in place</h2>
              <p className="mt-5 text-sm text-slate-300 font-serif italic leading-relaxed">
                The WCM Ghana headquarters and event banner graphics provide structural context to the chapter's official launch.
              </p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-steel-blue/15 bg-card md:row-span-2 p-1">
                <img src={headquarters} alt="WCM Ghana headquarters" className="h-full min-h-[300px] w-full rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-steel-blue/15 bg-card p-1">
                <img src={wcmBanner} alt="WCM Ghana banner" className="h-44 w-full rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="rounded-2xl border border-steel-blue/15 bg-card p-6 text-white shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-2 text-gold">
                  <Award className="h-5 w-5" />
                  <span className="font-mono text-[9px] uppercase tracking-widest">Outcomes</span>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-400">
                  The event successfully established the local executive council and ratified WCM Ghana's developmental roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

