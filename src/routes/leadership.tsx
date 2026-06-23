import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import johnnyFord from "@/assets/HON. JOHNNY FORD, FOUNDER & CEO.png";
import francisOpaiTetteh from "@/assets/HON. FRANCIS OPAI TETTEH.png";
import terkper from "@/assets/Dr. Peter Kwesi Terkper.png";
import wakeelahMartinez from "@/assets/Queen Mother Wakeelah Martinez.png";
import mbengue from "@/assets/Dr. Abdoulaye Mbengue.png";
import fayeWilliams from "@/assets/Amb. Dr. E. Faye Williams.png";
import jimmieGardener from "@/assets/Hon. Jimmie Gardener.png";
import frankJackson from "@/assets/Mr. Mayor Frank Jackson.png";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership - WCM Ghana" },
      {
        name: "description",
        content: "Meet the leadership team and honorees of WCM Ghana.",
      },
    ],
  }),
  component: Leadership,
});

const leaders = [
  {
    name: "Mayor Johnny Ford",
    role: "Founder and Chief Executive Officer",
    since: "Since 1984",
    bio: "Founder of the World Conference of Mayors and a long-standing advocate for municipal leadership and Pan-African collaboration.",
    image: johnnyFord,
  },
  {
    name: "Francis Opai Tetteh",
    role: "Country Director, Ghana",
    since: "Ghana Chapter",
    bio: "Leads the strategic direction and operations of WCM Ghana.",
    image: francisOpaiTetteh,
  },
  {
    name: "Dr. Peter Kwesi Terkper",
    role: "Founder and President",
    since: "Makane Farmers Connect",
    bio: "Policy author and convener who helped shape the chapter's development agenda.",
    image: terkper,
  },
];

const honorees = [
  {
    name: "Prof. Wakeelah Martinez",
    title: "Citation in Honour",
    text: "For outstanding support, guidance, and commitment to the successful establishment of WCM Ghana.",
    image: wakeelahMartinez,
  },
  {
    name: "Amb. Dr. E. Faye Williams",
    title: "International Partner",
    text: "For strengthening international collaboration and diaspora engagement.",
    image: fayeWilliams,
  },
  {
    name: "Dr. Abdoulaye Mbengue",
    title: "Board Contribution",
    text: "For board-level leadership and support for the wider WCM mission.",
    image: mbengue,
  },
  {
    name: "Hon. Jimmie Gardener",
    title: "WCM President",
    text: "For leadership and stewardship of the broader WCM mission.",
    image: jimmieGardener,
  },
  {
    name: "Mayor Frank Jackson",
    title: "WCM Vice President",
    text: "For leadership in international affairs and continued support for the chapter.",
    image: frankJackson,
  },
];

function Leadership() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="The people behind the mission"
        subtitle="A coalition of leaders, scholars, and partners committed to practical public service."
      />

      <section className="container-page py-20">
        <h2 className="font-display text-3xl font-bold text-navy">Executive leadership</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <img src={leader.image} alt={leader.name} className="h-72 w-full object-cover" />
              <div className="p-6">
                <div className="text-xs font-semibold uppercase text-gold">{leader.since}</div>
                <h3 className="mt-3 font-display text-2xl font-bold text-navy">{leader.name}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{leader.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{leader.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase text-gold">Honorees</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy">
              Recognising the people who supported the chapter
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {honorees.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-elegant"
              >
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase text-gold">{item.title}</div>
                  <h3 className="mt-3 font-display text-2xl font-bold text-navy">{item.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
