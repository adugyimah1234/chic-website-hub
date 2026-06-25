import { PageHeader } from "./PageHeader";
import { motion } from "framer-motion";
import {
  Banknote,
  BookOpen,
  Cpu,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  MapPinned,
  Network,
  ShieldCheck,
} from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Municipal Leadership Academy",
    desc: "Executive learning for mayors, MMDCEs, assembly teams, and emerging civic leaders across Ghana.",
  },
  {
    icon: Handshake,
    title: "City Diplomacy Desk",
    desc: "Support for sister-city partnerships, diplomatic exchange, diaspora engagement, and international collaboration.",
  },
  {
    icon: Banknote,
    title: "Trade and Investment Facilitation",
    desc: "Connecting municipal opportunities, local producers, and development projects to credible investment pathways.",
  },
  {
    icon: Cpu,
    title: "Smart Governance Program",
    desc: "Practical digital tools and advisory support for citizen engagement, service delivery, and local administration.",
  },
  {
    icon: BookOpen,
    title: "Policy and Insights Lab",
    desc: "Research, publications, and program briefs that turn frontline municipal experience into usable guidance.",
  },
  {
    icon: Globe2,
    title: "Community and Youth Initiatives",
    desc: "Programs that strengthen civic participation, skills, volunteerism, and inclusive local development.",
  },
];

const pillars = [
  {
    icon: Landmark,
    title: "Leadership",
    desc: "Stronger decision-making and accountable public service.",
  },
  {
    icon: Banknote,
    title: "Trade",
    desc: "Local economies connected to national and global opportunity.",
  },
  {
    icon: MapPinned,
    title: "Tourism",
    desc: "Culture, heritage, and destination development for communities.",
  },
  {
    icon: Cpu,
    title: "Technology",
    desc: "Digital modernization for city and district administration.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Capacity building for leaders, staff, youth, and partners.",
  },
  {
    icon: Network,
    title: "Twin Cities",
    desc: "Cross-border municipal relationships with practical outcomes.",
  },
];

const steps = [
  ["01", "Diagnose", "Understand the city, district, or institutional priority."],
  ["02", "Design", "Shape the training, partnership, or program intervention."],
  ["03", "Deliver", "Coordinate leaders, partners, and implementation teams."],
  ["04", "Publish", "Share progress through reports, news updates, and program recaps."],
];

export function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Policy Framework"
        title="The 7 Ts framework for national transformation"
        subtitle="Leadership, trade, tourism, technology, training, treasury, and twin cities — the operating model behind WCM Ghana's programmes and civic impact."
      />

      <section className="bg-white py-20 text-navy">
        <div className="container-page">
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
            Flagship Programs
          </span>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-normal">
            A practical portfolio for cities, districts, institutions, and partners.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <motion.article
                key={program.title}
                whileHover={{ y: -4 }}
                className="group rounded-lg border border-steel-blue/15 bg-slate-50 p-7 text-navy transition-colors hover:border-gold hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold">
                    <program.icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-extrabold text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-extrabold leading-tight">{program.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{program.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-steel-blue/15 bg-navy py-20 text-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
              Core Pillars
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-normal">
              The program model follows WCM Ghana's seven-pillar framework.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-gold/50"
              >
                <item.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 text-lg font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-navy">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
              Implementation
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-normal">
              A repeatable framework for program delivery.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Every program should create clear value: trained leaders, better partnerships,
              stronger institutions, documented outcomes, and visible community benefit.
            </p>
          </div>

          <ol className="space-y-4">
            {steps.map(([number, title, desc]) => (
              <motion.li
                key={number}
                whileHover={{ x: 4 }}
                className="flex gap-5 rounded-lg border border-steel-blue/15 bg-slate-50 p-5 transition-colors hover:border-gold"
              >
                <span className="shrink-0 text-2xl font-extrabold text-gold">{number}</span>
                <div>
                  <h3 className="text-base font-extrabold text-navy">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-steel-blue/15 bg-slate-50 py-16 text-navy">
        <div className="container-page flex flex-col gap-4 rounded-lg border border-steel-blue/15 bg-white p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
              <ShieldCheck className="h-4 w-4" />
              Program Updates
            </div>
            <h2 className="mt-4 max-w-2xl text-2xl font-extrabold leading-tight">
              Program announcements, updates, and reports should be published through the News hub.
            </h2>
          </div>
          <a
            href="/news"
            className="inline-flex items-center justify-center rounded-md bg-navy px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-white"
          >
            View News Hub
          </a>
        </div>
      </section>
    </>
  );
}
