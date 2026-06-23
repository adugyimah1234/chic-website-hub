import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { Award } from "lucide-react";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — WCM Ghana" },
      { name: "description", content: "Meet the leadership and honorees of the World Conference of Mayors, Ghana." },
    ],
  }),
  component: Leadership,
});

const leaders = [
  { name: "Mayor Johnny Ford", role: "Founder & CEO", since: "Since 1984", bio: "Visionary founder of the World Conference of Mayors and lifelong champion of municipal leadership and Pan-African collaboration." },
  { name: "Francis Opai Tetteh", role: "Country Director, Ghana", since: "Ghana Chapter", bio: "Leads the strategic direction and operations of WCM Ghana, anchoring the policy framework for national transformation." },
];

const honorees = [
  { name: "Dr. Peter Kwesi Terkper", title: "Citation in Honour", text: "For his uncommon self-sacrifice, generosity, trans-generational mindset, brilliant ideas, bravery and immeasurable contributions to the successful establishment and inauguration of the World Conference of Mayors in Ghana." },
  { name: "Prof. Wakeelah Martinez", title: "Citation in Honour", text: "For her uncommon wisdom, patriotic spirit, exceptional commitment, brilliant ideas, relentless guidance and supervision to ensure the successful establishment of the World Conference of Mayors in Ghana." },
];

function Leadership() {
  return (
    <>
      <PageHeader eyebrow="Leadership" title="The people behind the mission" subtitle="A coalition of visionaries, statesmen and scholars committed to elevating mayoral leadership worldwide." />

      <section className="container-page py-20">
        <h2 className="font-display text-3xl font-bold text-navy">Executive Leadership</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {leaders.map((l) => (
            <article key={l.name} className="group bg-card border border-border rounded-lg p-8 hover:border-gold/60 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy text-gold font-display text-2xl font-bold">
                  {l.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-navy">{l.name}</h3>
                  <p className="text-gold text-sm font-semibold uppercase tracking-wider mt-1">{l.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{l.since}</p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground leading-relaxed">{l.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20 border-y border-border">
        <div className="container-page">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Honors & Citations</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy">In recognition of exemplary service</h2>
            </div>
            <span className="text-sm text-muted-foreground">20th November, 2025</span>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {honorees.map((h) => (
              <article key={h.name} className="relative overflow-hidden bg-navy text-primary-foreground rounded-lg p-10 shadow-elegant hover:-translate-y-1 hover:shadow-gold transition-all duration-300">
                <Award className="absolute top-6 right-6 h-12 w-12 text-gold/30" />
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">{h.title}</p>
                <h3 className="mt-4 font-display text-2xl font-bold">{h.name}</h3>
                <div className="mt-4 h-px w-16 bg-gold" />
                <p className="mt-5 text-primary-foreground/80 leading-relaxed text-sm">{h.text}</p>
                <p className="mt-6 text-xs text-primary-foreground/60 italic">— Francis Opai Tetteh, Country Director</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
