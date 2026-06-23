import { createFileRoute } from "@tanstack/react-router";
import accra from "@/assets/headquarters.png.asset.json";
import drivingForce from "@/assets/driving-force.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WCM Ghana" },
      { name: "description", content: "Learn about the World Conference of Mayors, Ghana — our history, vision and the policy framework guiding national transformation." },
      { property: "og:title", content: "About WCM Ghana" },
      { property: "og:description", content: "History, vision and national transformation framework." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Building a legacy of patriotic leadership" subtitle="Since 1984, the World Conference of Mayors has united city leaders across continents in service of one mission — empowered, accountable, transformative local governance." />

      <section className="container-page py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-xl text-foreground font-medium">
              The World Conference of Mayors, Ghana Chapter, anchors a global conversation on
              municipal leadership in West Africa.
            </p>
            <p>
              Founded on the conviction that mayors are the closest representatives of the people,
              WCM exists to rally, unite and empower city leaders to deliver tangible change.
              In Ghana, we operationalize that mission through the WCM Policy Framework — a
              strategic blueprint for national transformation grounded in patriotism and volunteerism.
            </p>
            <p>
              Our work draws on the legacy of Ghana's founding ideals — freedom, justice and
              collective progress — and translates them into modern policy tools that any mayor,
              district executive or civic leader can apply.
            </p>
          </div>
          <aside className="lg:col-span-2 bg-navy text-primary-foreground p-8 rounded-lg shadow-elegant">
            <h3 className="font-display text-2xl font-bold text-gold">Core Objective</h3>
            <p className="mt-3 italic text-primary-foreground/85">"To rally, unite, and empower mayors globally."</p>
            <div className="mt-8 space-y-5 text-sm">
              {[
                ["Founded", "1984"],
                ["Founder & CEO", "Mayor Johnny Ford"],
                ["Country Director", "Francis Opai Tetteh"],
                ["Headquarters", "Accra, Ghana"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-primary-foreground/15 pb-3">
                  <span className="text-primary-foreground/60 uppercase tracking-wider text-xs">{k}</span>
                  <span className="font-semibold">{v}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 border-y border-border">
        <div className="container-page grid md:grid-cols-3 gap-8">
          {[
            { t: "Vision", d: "A Ghana — and a world — where every city is led with integrity, vision and an unwavering commitment to the people it serves." },
            { t: "Mission", d: "To equip mayors and local leaders with the frameworks, fellowship and resources needed to drive national transformation." },
            { t: "Values", d: "Patriotism. Volunteerism. Integrity. Excellence. Collaboration across borders, generations and political lines." },
          ].map((b) => (
            <div key={b.t} className="bg-card p-8 rounded-lg border border-border hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${["Vision","Mission","Values"].indexOf(b.t) * 120}ms`, animationFillMode: "both" }}>
              <h3 className="font-display text-2xl font-bold text-navy">{b.t}</h3>
              <div className="mt-3 h-1 w-12 bg-gold rounded-full" />
              <p className="mt-5 text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img src={accra.url} alt="WCM Ghana Headquarters" loading="lazy" className="rounded-lg shadow-elegant w-full" />
          <div>
            <span className="text-xs uppercase text-gold font-semibold">Headquarters</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy">Africa's gateway to mayoral diplomacy</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Ghana's enduring tradition of peace, democratic governance and Pan-African leadership
              makes it the natural home for WCM's continental work. From our Accra headquarters,
              we convene mayors and partners to shape the next chapter of African urban leadership.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 border-t border-border">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase text-gold font-semibold">Leadership</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy">The driving force</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A coalition of mayors, scholars and civic leaders united by a shared commitment to
              the rebirth of patriotism and volunteerism — and to the transformation of Ghana
              through visionary local governance.
            </p>
          </div>
          <img src={drivingForce.url} alt="WCM Ghana leadership" loading="lazy" className="rounded-lg shadow-elegant w-full" />
        </div>
      </section>
    </>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative bg-navy text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light opacity-95" />
      <div className="container-page relative py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="text-xs uppercase text-gold font-semibold">{eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance">{title}</h1>
          {subtitle && <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl leading-relaxed">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
