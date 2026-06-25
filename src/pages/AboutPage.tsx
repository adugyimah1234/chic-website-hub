import accra from "@/assets/wcmgh_headequarters_building.small.png";
import ishmaelDodoo from "@/assets/Hon. Dr. Ishmael Nii Amanor Dodoo.small.png";
import { PageHeader } from "./PageHeader";
import { motion } from "framer-motion";

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="The rebirth of patriotism and volunteerism in Ghana"
        subtitle="Since 1984, the World Conference of Mayors has rallied, united, and empowered mayors globally — with Ghana serving as the African headquarters."
      />

      {/* Editorial introduction */}
      <section className="container-page py-20 bg-white text-navy">
        <div className="grid gap-12 items-start lg:grid-cols-5">
          <div className="space-y-6 leading-relaxed text-slate-600 lg:col-span-3">
            <p className="text-xl font-medium text-navy font-sans italic">
              "The World Conference of Mayors, Ghana Chapter brings municipal leadership, civic
              service, and international collaboration into one focused platform."
            </p>
            <p className="text-sm">
              The organisation is established on the belief that mayors are among the public
              officials closest to the communities they serve. In Ghana, that principle is turned
              into a practical agenda that links leadership, volunteerism, and delivery.
            </p>
            <p className="text-sm">
              The chapter was incorporated in Ghana in March 2023 to convene metropolitan,
              municipal, and district leaders alongside traditional authorities and civic partners,
              creating sustainable growth networks.
            </p>
          </div>

          <aside className="rounded-2xl border border-steel-blue/20 bg-navy p-8 text-white shadow-elegant lg:col-span-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-slate-400 uppercase tracking-widest">
              MISSION
            </div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-1">
              Core Objective
            </h3>
            <p className="mt-4 font-serif text-lg italic text-slate-300">
              "To connect mayors globally in service of stronger, more resilient local communities."
            </p>
            <div className="mt-8 space-y-4 text-xs font-mono">
              {[
                ["Founded", "1984"],
                ["Founder & CEO", "Mayor Johnny Ford"],
                ["Country Director", "Francis Opai Tetteh"],
                ["Headquarters", "Accra, Ghana"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-white/10 pb-2.5">
                  <span className="text-slate-400 uppercase tracking-wider">{k}</span>
                  <span className="font-semibold text-slate-200">{v}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="border-y border-steel-blue/15 bg-slate-50 py-20 text-navy">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Vision",
              d: "A Ghana and a wider world where city leadership is guided by integrity, competence, and public accountability.",
              tag: "01",
            },
            {
              t: "Mission",
              d: "To equip mayors and local leaders with the ideas, partnerships, and support needed to deliver measurable public impact.",
              tag: "02",
            },
            {
              t: "Values",
              d: "Patriotism. Service. Integrity. Excellence. Collaboration across borders and across generations.",
              tag: "03",
            },
          ].map((b) => (
            <motion.div
              key={b.t}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-steel-blue/20 bg-white p-8 hover:border-gold hover:shadow-elegant transition-colors text-navy"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold uppercase text-navy group-hover:text-gold transition-colors">
                  {b.t}
                </h3>
                <span className="font-mono text-xs text-slate-400">({b.tag})</span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Headquarters section */}
      <section className="container-page py-20 bg-background">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-steel-blue/20 bg-card p-3 shadow-elegant">
            <img
              src={accra}
              alt="WCM Ghana Headquarters"
              loading="lazy"
              className="w-full rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              ( Headquarters )
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white md:text-4xl">
              Africa&apos;s gateway to <br />
              <span className="bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">
                mayoral diplomacy
              </span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-300 font-sans italic">
              Ghana&apos;s reputation for peace, democratic stability, and regional leadership makes
              it a fitting base for the chapter&apos;s work.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              From Accra, WCM Ghana convenes mayors and partners to exchange policy expertise,
              support capacity training, and build global trade pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Driving Force Section */}
      <section className="border-t border-steel-blue/15 bg-slate-50 py-20 text-navy">
        <div className="container-page grid gap-12 items-center lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              ( Executive Power )
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-navy md:text-4xl">
              The driving force
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-700 font-sans italic">
              A coalition of mayors, scholars, and civic leaders united by a shared commitment to
              service, practical leadership, and measurable transformation.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Connecting municipal leadership with continental trade opportunities (AfCFTA) and
              diaspora development partnerships.
            </p>
            <div className="mt-8 rounded-2xl border border-steel-blue/20 bg-white p-5 shadow-sm">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold">
                President, WCM Ghana
              </div>
              <div className="mt-2 text-lg font-bold text-navy">
                Hon. Dr. Ishmael Nii Amanor Dodoo
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                Head of Innovative Finance, Partnership and Markets, 24-Hour Economy and Accelerated
                Development Secretariat, Office of the President, Accra-Ghana.
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-steel-blue/20 bg-white p-3 shadow-elegant">
            <img
              src={ishmaelDodoo}
              alt="Hon. Dr. Ishmael Nii Amanor Dodoo"
              loading="lazy"
              className="w-full rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>
    </>
  );
}
