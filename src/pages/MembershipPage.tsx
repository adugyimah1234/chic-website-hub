import { PageHeader } from "./PageHeader";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Building2, Globe2, Handshake, Users } from "lucide-react";
import cityscape from "@/assets/cityscape.small.png";

const memberTypes = [
  {
    title: "Municipal Leaders",
    desc: "Mayors, MMDCEs, assembly leaders, and public administrators seeking partnership, training, and peer exchange.",
    icon: Building2,
  },
  {
    title: "Institutional Partners",
    desc: "Government agencies, NGOs, foundations, businesses, and development partners aligned with local impact.",
    icon: Handshake,
  },
  {
    title: "Diaspora and Global Allies",
    desc: "International collaborators connecting knowledge, investment, and civic relationships to Ghanaian cities.",
    icon: Globe2,
  },
];

const benefits = [
  "Access to WCM Ghana programs and leadership briefings",
  "Participation in municipal forums and partner roundtables",
  "Opportunities for city-to-city and institutional collaboration",
  "Visibility through news updates, project reports, and program recaps",
];

export function MembershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title="Join a network of leaders shaping the future of cities"
        subtitle="Membership connects leaders, institutions, and partners to WCM Ghana's programs, projects, events, and global collaboration platform."
      />

      <section className="bg-white py-20 text-navy">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
              Who Can Join
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-normal">
              Membership is designed for people and institutions ready to move local development
              forward.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              WCM Ghana creates a structured environment for leadership development, partnership
              formation, program participation, and community-focused impact.
            </p>
          </div>
          <div className="grid gap-5">
            {memberTypes.map((type) => (
              <motion.article
                key={type.title}
                whileHover={{ x: 4 }}
                className="rounded-lg border border-steel-blue/15 bg-slate-50 p-6 transition-colors hover:border-gold"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy text-gold">
                    <type.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold">{type.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{type.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-steel-blue/15 bg-navy py-20 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={cityscape}
              alt="Ghana urban development"
              className="h-[32rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy/70 to-transparent" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
              Member Value
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-normal">
              A platform for access, credibility, learning, and collaboration.
            </h2>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-6 text-slate-300">{benefit}</p>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-navy"
            >
              Contact Secretariat <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-navy">
        <div className="container-page rounded-lg border border-steel-blue/15 bg-slate-50 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
                <Users className="h-4 w-4" />
                Membership Enquiry
              </div>
              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight">
                Start with a conversation about your role, institution, or partnership interest.
              </h2>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-white"
            >
              Apply or Enquire <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
