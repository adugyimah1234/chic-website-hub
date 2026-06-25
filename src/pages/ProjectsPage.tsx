import { PageHeader } from "./PageHeader";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Handshake, Sprout, Users } from "lucide-react";
import cityscape from "@/assets/cityscape.small.png";
import farmers from "@/assets/makane_farmers_connect.small.png";
import headquarters from "@/assets/wcmgh_headequarters_building.small.png";
import migration from "@/assets/holistic-migration.small.png";

const projects = [
  {
    title: "Shea Industry Partnerships",
    category: "Trade and livelihoods",
    desc: "Connecting producer communities, municipal leadership, and international partners around value addition, market access, and farmer welfare.",
    image: farmers,
    icon: Sprout,
  },
  {
    title: "Smart City Initiatives",
    category: "Technology",
    desc: "Supporting digital governance, citizen engagement tools, and practical modernization pathways for local service delivery.",
    image: cityscape,
    icon: Cpu,
  },
  {
    title: "Community Development Programs",
    category: "Local impact",
    desc: "Coordinating civic service, youth development, and community resilience programs with assemblies and partner institutions.",
    image: headquarters,
    icon: Users,
  },
  {
    title: "International Collaborations",
    category: "Partnerships",
    desc: "Creating structured city-to-city and diaspora relationships that move beyond protocol into measurable community outcomes.",
    image: migration,
    icon: Handshake,
  },
];

const stages = [
  ["01", "Identify", "Map municipal priorities, local assets, and partner-readiness."],
  ["02", "Structure", "Design the partnership model, governance approach, and delivery plan."],
  [
    "03",
    "Mobilize",
    "Bring together city leaders, institutions, private sector actors, and funders.",
  ],
  ["04", "Report", "Track outcomes through public updates, case studies, and project briefs."],
];

export function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Government, development, and enterprise collaborators"
        subtitle="WCM Ghana convenes a partner ecosystem across public institutions, civic organisations, and private enterprise for stronger cities and communities."
      />

      <section className="bg-white py-20 text-navy">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-lg border border-steel-blue/15 bg-white shadow-sm transition-colors hover:border-gold"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-navy">
                  <project.icon className="h-4 w-4 text-gold" />
                  {project.category}
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-5">
                  <h2 className="text-2xl font-extrabold leading-tight">{project.title}</h2>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-gold" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-steel-blue/15 bg-navy py-20 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
              Delivery Model
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-normal">
              From partnership interest to visible local outcomes.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Projects are framed as institutional programs with clear partners, responsibilities,
              updates, and measurable community value.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {stages.map(([number, title, desc]) => (
              <div key={number} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <div className="text-2xl font-extrabold text-gold">{number}</div>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
