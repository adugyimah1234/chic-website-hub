import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { assetUrl } from "@/lib/assetUrl";
import wcmBackground from "@/assets/hero-bg.small.png";
import wcmHeadquarters from "@/assets/wcmgh_headequarters_building.small.png";
import panelMC from "@/assets/Dr. Owusuaa Eshia.small.png";
import panelNiine from "@/assets/Hon. Francis Akumatey Addo.small.png";
import panelGloria from "@/assets/Mr. Michael Kpakpo Allotey.small.png";
import panelStrategic from "@/assets/Hon. Abraham Dwuma Odoom.small.png";
import mahama from "@/assets/H. E. JOHN DRAMANI MAHAMA.small.png";
import naana from "@/assets/H.E. NAANA JANE OPOKU-AGYEMANG. PHD, FGA.small.png";
import terkper from "@/assets/Dr. Peter Kwesi Terkper.small.png";
import mbengue from "@/assets/Dr. Abdoulaye Mbengue.small.png";
import fayeWilliams from "@/assets/Amb. Dr. E. Faye Williams.small.png";
import jimmieGardener from "@/assets/Hon. Jimmie Gardener.small.png";
import frankJackson from "@/assets/Mr. Mayor Frank Jackson.small.png";
import johnnyFord from "@/assets/HON. JOHNNY FORD, FOUNDER & CEO.small.png";
import francisOpaiTetteh from "@/assets/HON. FRANCIS OPAI TETTEH.small.png";
import wakeelahMartinez from "@/assets/Queen Mother Wakeelah Martinez.small.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - WCM Ghana" },
      {
        name: "description",
        content:
          "A curated visual archive of WCM Ghana leadership portraits, programme imagery, and institutional assets.",
      },
    ],
  }),
  component: Gallery,
});

type GalleryItem = {
  src: string;
  title: string;
  caption: string;
};

const leadership: GalleryItem[] = [
  {
    src: johnnyFord,
    title: "Hon. Johnny Ford",
    caption: "Founder and Chief Executive Officer, World Conference of Mayors, USA.",
  },
  {
    src: francisOpaiTetteh,
    title: "Hon. Francis Opai Tetteh",
    caption: "Country Director, World Conference of Mayors, Ghana.",
  },
  {
    src: terkper,
    title: "Dr. Peter Kwesi Terkper",
    caption: "Director of Finance and Accounting, WCM Ghana.",
  },
  {
    src: wakeelahMartinez,
    title: "Prof. Wakeelah Martinez",
    caption: "CEO, Ghana Sankofa Empowerment Outreach, USA.",
  },
  {
    src: mbengue,
    title: "Dr. Abdoulaye Mbengue",
    caption: "Director General, World Conference of Mayors, USA.",
  },
  {
    src: fayeWilliams,
    title: "Amb. Dr. E. Faye Williams",
    caption: "Member of the WCM Board, USA.",
  },
  {
    src: jimmieGardener,
    title: "Hon. Jimmie Gardener",
    caption: "President, World Conference of Mayors, USA.",
  },
  {
    src: frankJackson,
    title: "Mr. Mayor Frank Jackson",
    caption: "Vice President for International Affairs, USA.",
  },
  {
    src: mahama,
    title: "H. E. John Dramani Mahama",
    caption: "President of the Republic of Ghana.",
  },
  {
    src: naana,
    title: "H. E. Naana Jane Opoku-Agyemang",
    caption: "Vice President of the Republic of Ghana.",
  },
];

const programme: GalleryItem[] = [
  {
    src: panelMC,
    title: "Conference moderator",
    caption: "A formal portrait from the conference programme.",
  },
  {
    src: panelNiine,
    title: "Panel moderator",
    caption: "A second moderation portrait from the event record.",
  },
  {
    src: panelGloria,
    title: "Programme lead",
    caption: "A leadership portrait used in the conference visuals.",
  },
  {
    src: panelStrategic,
    title: "Strategic dialogue",
    caption: "A participant portrait associated with the event's policy discussion.",
  },
];

const institutional: GalleryItem[] = [
  {
    src: wcmBackground,
    title: "WCM Ghana background",
    caption: "The background treatment used to frame the chapter's visual identity.",
  },
  {
    src: wcmHeadquarters,
    title: "Proposed headquarters",
    caption: "The headquarters concept presented in the chapter materials.",
  },
];

function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A curated visual archive of WCM Ghana"
        subtitle="Portraits, programme imagery, and institutional visuals are arranged into a cleaner editorial format."
      />

      <section className="container-page py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Leadership
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy md:text-4xl">
              Executive portraits
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The leadership section presents the principal figures associated with the chapter in
              a consistent, formal style.
            </p>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            Each portrait is paired with a concise professional caption to keep the presentation
            clean and easy to scan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {leadership.map((item) => (
            <figure
              key={item.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <img src={item.src} alt={item.title} className="h-72 w-full object-cover" />
              <figcaption className="p-5">
                <h3 className="font-display text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Programme
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy md:text-4xl">
              Conference and moderation imagery
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              These images capture the event's moderation team and the formal atmosphere of the
              inaugural gathering.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {programme.map((item) => (
              <figure
                key={item.title}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <img src={item.src} alt={item.title} className="h-64 w-full object-cover" />
                <figcaption className="p-5">
                  <h3 className="font-display text-xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
