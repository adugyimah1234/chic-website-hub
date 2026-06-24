import { PageHeader } from "./PageHeader";
import { motion } from "framer-motion";
import johnnyFord from "@/assets/HON. JOHNNY FORD, FOUNDER & CEO.small.png";
import francisOpaiTetteh from "@/assets/HON. FRANCIS OPAI TETTEH.small.png";
import terkper from "@/assets/Dr. Peter Kwesi Terkper.small.png";
import wakeelahMartinez from "@/assets/Queen Mother Wakeelah Martinez.small.png";
import mbengue from "@/assets/Dr. Abdoulaye Mbengue.small.png";
import fayeWilliams from "@/assets/Amb. Dr. E. Faye Williams.small.png";
import jimmieGardener from "@/assets/Hon. Jimmie Gardener.small.png";
import frankJackson from "@/assets/Mr. Mayor Frank Jackson.small.png";
import mahama from "@/assets/H. E. JOHN DRAMANI MAHAMA.small.png";
import naana from "@/assets/H.E. NAANA JANE OPOKU-AGYEMANG. PHD, FGA.small.png";
import panelMC from "@/assets/Dr. Owusuaa Eshia.small.png";
import panelNiine from "@/assets/Hon. Francis Akumatey Addo.small.png";
import panelGloria from "@/assets/Mr. Michael Kpakpo Allotey.small.png";
import panelStrategic from "@/assets/Hon. Abraham Dwuma Odoom.small.png";

const leadership = [
  { src: johnnyFord, title: "Hon. Johnny Ford", caption: "Founder and Chief Executive Officer, World Conference of Mayors, USA." },
  { src: francisOpaiTetteh, title: "Hon. Francis Opai Tetteh", caption: "Country Director, World Conference of Mayors, Ghana." },
  { src: terkper, title: "Dr. Peter Kwesi Terkper", caption: "Director of Finance and Accounting, WCM Ghana." },
  { src: wakeelahMartinez, title: "Prof. Wakeelah Martinez", caption: "CEO, Ghana Sankofa Empowerment Outreach, USA." },
  { src: mbengue, title: "Dr. Abdoulaye Mbengue", caption: "Director General, World Conference of Mayors, USA." },
  { src: fayeWilliams, title: "Amb. Dr. E. Faye Williams", caption: "Member of the WCM Board, USA." },
  { src: jimmieGardener, title: "Hon. Jimmie Gardener", caption: "President, World Conference of Mayors, USA." },
  { src: frankJackson, title: "Mr. Mayor Frank Jackson", caption: "Vice President for International Affairs, USA." },
  { src: mahama, title: "H. E. John Dramani Mahama", caption: "Former President of the Republic of Ghana." },
  { src: naana, title: "H. E. Naana Jane Opoku-Agyemang", caption: "Distinguished Academic & Political Leader, Ghana." },
];

const programme = [
  { src: panelMC, title: "Conference moderator", caption: "A formal portrait from the conference programme." },
  { src: panelNiine, title: "Panel moderator", caption: "A second moderation portrait from the event record." },
  { src: panelGloria, title: "Programme lead", caption: "A leadership portrait used in the conference visuals." },
  { src: panelStrategic, title: "Strategic dialogue", caption: "A participant portrait associated with the event's policy discussion." },
];

export function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="A curated visual archive of WCM Ghana" subtitle="Portraits, programme imagery, and institutional visuals are arranged into an elegant, high-contrast grid layout." />
      
      {/* Executive Portraits */}
      <section className="container-page py-20 bg-white text-navy">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">( Roster )</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-navy md:text-4xl">Executive & Board Members</h2>
          </div>
        </div>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {leadership.map((item) => (
            <figure key={item.title} className="group overflow-hidden rounded-2xl border border-steel-blue/20 bg-slate-50 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-elegant text-navy">
              <div className="relative h-80 w-full overflow-hidden">
                <img src={item.src} alt={item.title} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <figcaption className="p-5">
                <h3 className="font-display text-lg font-bold uppercase text-navy group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 font-serif italic">"{item.caption}"</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Conference Moderators */}
      <section className="border-t border-steel-blue/15 bg-[#091526] py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">( Dialogue Leads )</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white md:text-4xl">Conference moderators</h2>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {programme.map((item) => (
              <figure key={item.title} className="group overflow-hidden rounded-2xl border border-steel-blue/15 bg-card shadow-sm hover:border-gold/20 transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden">
                  <img src={item.src} alt={item.title} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <figcaption className="p-5">
                  <h3 className="font-display text-base font-bold uppercase text-white group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

