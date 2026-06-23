import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { GraduationCap, Handshake, Megaphone, Globe2, BookOpen, Trophy } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — WCM Ghana" },
      { name: "description", content: "Explore the programs, summits and initiatives that drive the WCM Ghana mission for national transformation." },
    ],
  }),
  component: Programs,
});

const programs = [
  { icon: Megaphone, t: "Annual Mayors Summit", d: "A flagship convening of city leaders, policymakers and partners exchanging models for transformative governance." },
  { icon: GraduationCap, t: "Leadership Academy", d: "Executive training tracks for mayors, assembly members and aspiring municipal leaders across Ghana." },
  { icon: Handshake, t: "Sister-City Diplomacy", d: "Strategic partnerships connecting Ghanaian cities with peers across Africa, the Americas and beyond." },
  { icon: Globe2, t: "Patriotism Campaign", d: "A nationwide civic education drive reigniting national pride and grassroots volunteerism." },
  { icon: BookOpen, t: "Policy Lab", d: "Research and publications converting frontline insight into actionable policy frameworks." },
  { icon: Trophy, t: "Excellence Awards", d: "Annual citations honoring leaders whose service moves the needle on national transformation." },
];

function Programs() {
  return (
    <>
      <PageHeader eyebrow="Programs" title="Initiatives shaping the next era of governance" subtitle="From flagship summits to grassroots civic education — every WCM Ghana program advances our policy framework for national transformation." />

      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <article key={p.t} className="group bg-card border border-border rounded-lg p-8 hover:border-gold/60 hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 70}ms`, animationFillMode: "both" }}>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-3xl font-bold text-navy/10">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-primary-foreground py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Framework</span>
            <h2 className="mt-4 font-display text-4xl font-bold">The WCM Policy Framework</h2>
            <p className="mt-5 text-primary-foreground/75 leading-relaxed">
              A structured blueprint guiding cities and districts through four phases of
              transformation — civic mobilization, capacity building, policy execution and
              measurable national impact.
            </p>
          </div>
          <ol className="space-y-4">
            {[
              ["01", "Civic Mobilization", "Reawaken patriotism and volunteer participation."],
              ["02", "Capacity Building", "Equip leaders with modern governance tools."],
              ["03", "Policy Execution", "Translate vision into measurable city programs."],
              ["04", "National Impact", "Scale proven models across districts and borders."],
            ].map(([n, t, d]) => (
              <li key={n} className="flex gap-5 p-5 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg hover:bg-primary-foreground/10 hover:border-gold/40 hover:translate-x-1 transition-all duration-300">
                <span className="font-display text-2xl font-bold text-gold shrink-0">{n}</span>
                <div>
                  <h4 className="font-display text-lg font-bold">{t}</h4>
                  <p className="text-sm text-primary-foreground/70 mt-1">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
