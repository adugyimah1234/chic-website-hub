import { PageHeader } from "./PageHeader";
import { motion } from "framer-motion";
import { ArrowRight, BookOpenText, Newspaper, Radio, ScrollText } from "lucide-react";
import cityscape from "@/assets/cityscape.small.png";
import farmers from "@/assets/makane_farmers_connect.small.png";
import headquarters from "@/assets/wcmgh_headequarters_building.small.png";

const articles = [
  {
    title: "Positioning Ghanaian cities for global partnerships and local delivery",
    category: "Featured Insight",
    desc: "A strategic note on city diplomacy, local development, and the role of WCM Ghana as a partnership platform.",
    image: cityscape,
  },
  {
    title: "Program updates from municipal leadership and training priorities",
    category: "Program Update",
    desc: "Official updates on leadership training, capacity building, and implementation priorities.",
    image: headquarters,
  },
  {
    title: "Trade pathways for local producers and municipal economies",
    category: "Economic Development",
    desc: "Stories and briefings on trade, local enterprise, and value-chain partnerships.",
    image: farmers,
  },
];

const categories = [
  {
    icon: Newspaper,
    title: "Official Updates",
    desc: "Announcements from the chapter and secretariat.",
  },
  {
    icon: BookOpenText,
    title: "Program Information",
    desc: "Details on initiatives, training, and project activity.",
  },
  {
    icon: ScrollText,
    title: "Policy Notes",
    desc: "Leadership, treasury, trade, and governance briefs.",
  },
  {
    icon: Radio,
    title: "Event Recaps",
    desc: "Summaries from forums, roundtables, and partner sessions.",
  },
];

export function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Programmes, publications, and official chapter updates"
        subtitle="Program information, announcements, policy notes, partnership news, community stories, and event recaps live in one durable resource hub."
      />

      <section className="bg-white py-20 text-navy">
        <div className="container-page grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            whileHover={{ y: -4 }}
            className="overflow-hidden rounded-lg border border-steel-blue/15 bg-white shadow-sm"
          >
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="h-96 w-full object-cover"
            />
            <div className="p-8">
              <div className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
                {articles[0].category}
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight">{articles[0].title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{articles[0].desc}</p>
              <button className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-navy hover:text-gold">
                Read article <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.article>
          <div className="grid gap-6">
            {articles.slice(1).map((article) => (
              <motion.article
                key={article.title}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-lg border border-steel-blue/15 bg-slate-50 shadow-sm"
              >
                <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-gold">
                    {article.category}
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold leading-tight">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{article.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-steel-blue/15 bg-slate-50 py-20 text-navy">
        <div className="container-page">
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
            Publishing Categories
          </span>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-normal">
            A clear structure for every update the organization needs to publish.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {categories.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-steel-blue/15 bg-white p-6 shadow-sm"
              >
                <item.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-6 text-lg font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
