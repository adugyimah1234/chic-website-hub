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

const leaders = [
  { name: "Mayor Johnny Ford", role: "Founder and Chief Executive Officer", since: "WCM Founder Since 1984", bio: "Founder of the World Conference of Mayors and a long-standing advocate for municipal leadership and Pan-African collaboration.", image: johnnyFord },
  { name: "Francis Opai Tetteh", role: "Country Director, WCM Ghana", since: "Ghana Chapter", bio: "Leads the strategic direction, international coordination, and operations of WCM Ghana.", image: francisOpaiTetteh },
  { name: "Dr. Peter Kwesi Terkper", role: "Finance and Strategic convenor", since: "Makane Farmers Connect", bio: "Policy author and convener whose strategic support helped shape the chapter's economic development agenda.", image: terkper },
];

const honorees = [
  { name: "Prof. Wakeelah Martinez", title: "Citation in Honour", text: "For outstanding support, guidance, and commitment to the successful establishment of WCM Ghana.", image: wakeelahMartinez },
  { name: "Amb. Dr. E. Faye Williams", title: "International Partner", text: "For strengthening international collaboration and diaspora engagement.", image: fayeWilliams },
  { name: "Dr. Abdoulaye Mbengue", title: "Board Contribution", text: "For board-level leadership and support for the wider WCM mission.", image: mbengue },
  { name: "Hon. Jimmie Gardener", title: "WCM President", text: "For leadership and stewardship of the broader WCM mission.", image: jimmieGardener },
  { name: "Mayor Frank Jackson", title: "WCM Vice President", text: "For leadership in international affairs and continued support for the chapter.", image: frankJackson },
];

export function LeadershipPage() {
  return (
    <>
      <PageHeader eyebrow="Leadership" title="The people behind the mission" subtitle="A coalition of leaders, scholars, and partners committed to practical public service." />
      
      {/* Executive Leadership Grid */}
      <section className="container-page py-20 bg-white text-navy">
        <span className="font-mono text-xs uppercase tracking-widest text-gold">( Executives )</span>
        <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-navy md:text-4xl">Executive leadership</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {leaders.map((leader) => (
            <article key={leader.name} className="group overflow-hidden rounded-2xl border border-steel-blue/20 bg-slate-50 hover:border-gold transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant text-navy">
              <div className="relative h-72 w-full overflow-hidden">
                <img src={leader.image} alt={leader.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-6">
                <div className="font-mono text-[9px] uppercase tracking-widest text-gold">{leader.since}</div>
                <h3 className="mt-3 font-display text-xl font-bold uppercase text-navy group-hover:text-gold transition-colors">{leader.name}</h3>
                <p className="mt-1 font-mono text-[10px] text-slate-500">{leader.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 font-serif italic">"{leader.bio}"</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Honorees Grid */}
      <section className="border-t border-steel-blue/15 bg-[#091526] py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">( Citations )</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white md:text-4xl">Recognising the founding support</h2>
          </div>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {honorees.map((item) => (
              <article key={item.name} className="group overflow-hidden rounded-2xl border border-steel-blue/15 bg-card hover:border-gold/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant">
                <div className="relative h-64 w-full overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-gold">{item.title}</div>
                  <h3 className="mt-3 font-display text-xl font-bold uppercase text-white group-hover:text-gold transition-colors">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 font-serif italic">"{item.text}"</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

