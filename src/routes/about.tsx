import { createFileRoute } from "@tanstack/react-router";
import accra from "@/assets/headquarters.png.asset.json";
import drivingForce from "@/assets/driving-force.small.png";
import { assetUrl } from "@/lib/assetUrl";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - WCM Ghana" },
      {
        name: "description",
        content:
          "Learn about the World Conference of Mayors, Ghana, its history, mission, and leadership framework.",
      },
      { property: "og:title", content: "About WCM Ghana" },
      {
        property: "og:description",
        content: "History, mission and leadership framework.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Building a legacy of civic leadership"
        subtitle="Since 1984, the World Conference of Mayors has connected city leaders across continents around accountable local governance and practical service."
        sideImage={{ alt: "WCM Ghana header image placeholder" }}
      />

      <section className="container-page py-20">
        <div className="grid gap-12 items-start lg:grid-cols-5">
          <div className="space-y-6 leading-relaxed text-foreground/80 lg:col-span-3">
            <p className="text-xl font-medium text-foreground">
              The World Conference of Mayors, Ghana Chapter brings municipal leadership, civic
              service, and international collaboration into one focused platform.
            </p>
            <p>
              The organisation was established on the belief that mayors are among the public
              officials closest to the communities they serve. In Ghana, that principle is turned
              into a practical agenda that links leadership, volunteerism, and delivery.
            </p>
            <p>
              The chapter was incorporated in Ghana in March 2023 to convene metropolitan,
              municipal, and district leaders alongside traditional authorities and civic partners.
            </p>
          </div>
          <aside className="rounded-lg bg-navy p-8 text-primary-foreground shadow-elegant lg:col-span-2">
            <h3 className="font-display text-2xl font-bold text-gold">Core Objective</h3>
            <p className="mt-3 italic text-primary-foreground/85">
              "To connect mayors globally in service of stronger communities."
            </p>
            <div className="mt-8 space-y-5 text-sm">
              {[
                ["Founded", "1984"],
                ["Founder & CEO", "Mayor Johnny Ford"],
                ["Country Director", "Francis Opai Tetteh"],
                ["Headquarters", "Accra, Ghana"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between border-b border-primary-foreground/15 pb-3"
                >
                  <span className="text-xs uppercase tracking-wider text-primary-foreground/60">
                    {k}
                  </span>
                  <span className="font-semibold">{v}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/60 py-20">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Vision",
              d: "A Ghana and a wider world where city leadership is guided by integrity, competence, and public accountability.",
            },
            {
              t: "Mission",
              d: "To equip mayors and local leaders with the ideas, partnerships, and support needed to deliver measurable public impact.",
            },
            {
              t: "Values",
              d: "Patriotism. Service. Integrity. Excellence. Collaboration across borders and across generations.",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="animate-fade-in rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-elegant"
              style={{
                animationDelay: `${["Vision", "Mission", "Values"].indexOf(b.t) * 120}ms`,
                animationFillMode: "both",
              }}
            >
              <h3 className="font-display text-2xl font-bold text-navy">{b.t}</h3>
              <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
              <p className="mt-5 leading-relaxed text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <img
            src={assetUrl(accra)}
            alt="WCM Ghana Headquarters"
            loading="lazy"
            className="w-full rounded-lg shadow-elegant"
          />
          <div>
            <span className="text-xs font-semibold uppercase text-gold">Headquarters</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy">
              Africa's gateway to mayoral diplomacy
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Ghana's reputation for peace, democratic stability, and regional leadership makes it
              a fitting base for the chapter's work. From Accra, WCM Ghana convenes mayors and
              partners to advance the next chapter of urban leadership.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-20">
        <div className="container-page grid gap-12 items-center lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase text-gold">Leadership</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy">The driving force</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A coalition of mayors, scholars, and civic leaders united by a shared commitment to
              service, practical leadership, and measurable transformation.
            </p>
          </div>
          <img
            src={drivingForce}
            alt="WCM Ghana leadership"
            loading="lazy"
            className="w-full rounded-lg shadow-elegant"
          />
        </div>
      </section>
    </>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  sideImage,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  sideImage?: { alt: string };
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light opacity-95" />
      <div className="container-page relative py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase text-gold">{eyebrow}</span>
          <h1 className="mt-4 text-balance font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
