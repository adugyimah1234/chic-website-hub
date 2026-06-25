import { PageHeader } from "./PageHeader";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Presentation, Users } from "lucide-react";
import headquarters from "@/assets/wcmgh_headequarters_building.small.png";
import wcmBanner from "@/assets/wmcgh banner.small.png";

const events = [
  {
    date: "Quarterly",
    title: "Municipal Leadership Roundtable",
    location: "Accra, Ghana",
    desc: "Focused working sessions for municipal leaders, partners, and technical experts.",
  },
  {
    date: "Annual",
    title: "WCM Ghana Cities and Partnerships Forum",
    location: "Hybrid convening",
    desc: "A flagship forum for leadership, city diplomacy, investment, and development partnerships.",
  },
  {
    date: "Program-based",
    title: "Training and Capacity Clinics",
    location: "Regional delivery",
    desc: "Practical training sessions aligned to leadership, technology, treasury, and trade priorities.",
  },
];

const recaps = [
  {
    icon: Presentation,
    title: "Policy Convenings",
    desc: "Reports from leadership dialogues and municipal policy sessions.",
  },
  {
    icon: Users,
    title: "Partner Sessions",
    desc: "Updates from institutional meetings and collaboration discussions.",
  },
  {
    icon: CalendarDays,
    title: "Event Recaps",
    desc: "Post-event summaries published through the News and Insights hub.",
  },
];

export function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Conferences, forums, and leadership convenings"
        subtitle="Events now sit in a dedicated destination, supporting WCM Ghana's wider company and institutional website."
      />

      <section className="bg-white py-20 text-navy">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="overflow-hidden rounded-lg border border-steel-blue/15 bg-slate-50 p-3 shadow-sm">
            <img
              src={headquarters}
              alt="WCM Ghana event venue context"
              className="h-96 w-full rounded-md object-cover"
            />
            <img
              src={wcmBanner}
              alt="WCM Ghana event banner"
              className="mt-3 h-44 w-full rounded-md object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
              Event Calendar
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-normal">
              Purposeful events that support programs, partnerships, and chapter updates.
            </h2>
            <div className="mt-10 space-y-4">
              {events.map((event) => (
                <motion.article
                  key={event.title}
                  whileHover={{ x: 4 }}
                  className="rounded-lg border border-steel-blue/15 bg-slate-50 p-6 transition-colors hover:border-gold"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
                        {event.date}
                      </div>
                      <h3 className="mt-2 text-xl font-extrabold">{event.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4 text-gold" />
                      {event.location}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{event.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-steel-blue/15 bg-navy py-20 text-white">
        <div className="container-page">
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
            Records and Recaps
          </span>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-normal">
            Event information flows into the blog so programs stay documented.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {recaps.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-7"
              >
                <item.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-6 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
