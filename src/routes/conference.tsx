import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { CalendarDays, Users, Presentation, Award, MapPinned, Sparkles } from "lucide-react";
import moderatorKenneth from "@/assets/Hon. Kenneth Kabu Kanor.small.png";
import moderatorFrancis from "@/assets/Hon. Francis Akumatey Addo.small.png";
import moderatorAllotey from "@/assets/Mr. Michael Kpakpo Allotey.small.png";
import moderatorOdoom from "@/assets/Hon. Abraham Dwuma Odoom.small.png";
import headquarters from "@/assets/wcmgh_headequarters_building.small.png";
import wcmBanner from "@/assets/wmcgh banner.small.png";

export const Route = createFileRoute("/conference")({
  head: () => ({
    meta: [
      { title: "Conference - WCM Ghana" },
      {
        name: "description",
        content:
          "A professional overview of the inaugural WCM Ghana conference, its programme, leadership and venue.",
      },
    ],
  }),
  component: Conference,
});

const agenda = [
  {
    icon: CalendarDays,
    title: "Opening Session",
    desc: "Formal welcome, opening remarks, and introduction of the principal dignitaries and partners.",
  },
  {
    icon: Presentation,
    title: "Policy Presentations",
    desc: "Structured presentations on the WCM framework, priorities, and the Ghana chapter's mandate.",
  },
  {
    icon: Users,
    title: "Leadership Dialogue",
    desc: "A moderated exchange on governance, local development, and collaboration across institutions.",
  },
  {
    icon: Award,
    title: "Recognition",
    desc: "Citations and acknowledgements for individuals whose support advanced the chapter's formation.",
  },
];

const moderators = [
  { src: moderatorKenneth, label: "Hon. Kenneth Kabu Kanor" },
  { src: moderatorFrancis, label: "Hon. Francis Akumatey Addo" },
  { src: moderatorAllotey, label: "Mr. Michael Kpakpo Allotey" },
  { src: moderatorOdoom, label: "Hon. Abraham Dwuma Odoom" },
];

function Conference() {
  return (
    <>
      <PageHeader
        eyebrow="Conference"
        title="The inaugural WCM Ghana conference"
        subtitle="A formal record of the chapter's founding event, including the programme outline, key participants, and institutional imagery."
      />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Event summary
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy md:text-5xl">
              A clear and dignified presentation of the founding conference
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              This page presents the inaugural conference in a formal, editorial style. The
              structure is designed to read like a polished event overview, with concise language,
              stronger hierarchy, and a more professional visual rhythm.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                ["Date", "Founding conference record"],
                ["Focus", "Policy, leadership, and partnership"],
                ["Venue", "Accra, Ghana"],
                ["Theme", "Patriotism and volunteerism"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-5 ">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </div>
                  <div className="mt-2 text-base font-semibold text-navy">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={headquarters}
                alt="WCM Ghana headquarters"
                className="h-125 w-full object-cover md:h-95"
              />
            </div>
            {/* <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
              <img
                src={wcmBanner}
                alt="WCM Ghana banner"
                className="h-[220px] w-full object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Programme
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy md:text-4xl">
              Conference programme highlights
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              The agenda below summarises the principal moments of the event in a concise,
              professional format.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {agenda.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Step {index + 1}
                    </div>
                    <h3 className="mt-1 font-display text-2xl font-bold text-navy">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Leadership
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy md:text-4xl">
              Key participants and moderators
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Portraits from the event are presented here as a formal leadership gallery, using
              consistent framing and labels for a cleaner presentation.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground ">
            <Sparkles className="h-4 w-4 text-gold" />
            Visual record from the conference
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {moderators.map((item) => (
            <figure
              key={item.label}
              className="overflow-hidden rounded-2xl border border-border bg-card "
            >
              <img src={item.src} alt={item.label} className="h-72 w-full object-cover" />
              <figcaption className="space-y-1 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Moderator
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{item.label}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/20 py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Venue
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-navy md:text-4xl">
                A conference identity rooted in place
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                The headquarters and banner imagery provide the institutional context for the
                chapter. Together, they frame the conference as a formal initiative with a
                consistent visual identity.
              </p>

              <div className="mt-8 rounded-2xl border border-border bg-card p-6 ">
                <div className="flex items-center gap-3">
                  <MapPinned className="h-5 w-5 text-gold" />
                  <h3 className="font-display text-xl font-bold text-navy">Accra, Ghana</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  The conference emphasizes Ghana's role as the chapter's operational base and a
                  strategic center for local government collaboration.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-border bg-card  md:row-span-2">
                <img
                  src={headquarters}
                  alt="WCM Ghana headquarters"
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-border bg-card ">
                <img src={wcmBanner} alt="WCM Ghana banner" className="h-56 w-full object-cover" />
              </div>
              <div className="rounded-3xl border border-border bg-navy p-6 text-primary-foreground ">
                <div className="flex items-center gap-3 text-gold">
                  <Award className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.24em]">Outcome</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-primary-foreground/85">
                  The conference established the chapter's public identity, clarified its mandate,
                  and set the tone for subsequent engagements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
