/* eslint-disable prettier/prettier */
import { SiteLayout } from "@/components/SiteLayout";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { EventsPage } from "@/pages/EventsPage";
import { MembershipPage } from "@/pages/MembershipPage";
import { NewsPage } from "@/pages/NewsPage";
import { ProgramsPage } from "@/pages/ProgramsPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading } from "@/components/home/SectionHeading";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  BookOpenText,
  CalendarDays,
  ChevronRight,
  CircleDollarSign,
  Cpu,
  Eye,
  Globe2,
  GraduationCap,
  Handshake,
  Heart,
  Landmark,
  MapPin,
  MapPinned,
  Network,
  Target,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState, type JSX, type ReactNode } from "react";

import economy from "@/assets/24hour-economy.small.png";
import cityscape from "@/assets/cityscape.small.png";
import farmers from "@/assets/makane_farmers_connect.small.png";
import farmer from "@/assets/farmer.jpg";
import francisOpaiTetteh from "@/assets/HON. FRANCIS OPAI TETTEH.small.png";
import ghanaMap from "@/assets/ghanamap.small.png";
import heroBg from "@/assets/hero-bg.small.png";
import ishmaelDodoo from "@/assets/Hon. Dr. Ishmael Nii Amanor Dodoo.small.png";
import technology from "@/assets/technology.jpg";
import cdp from "@/assets/community_development.jpg";
import johnnyFord from "@/assets/HON. JOHNNY FORD, FOUNDER & CEO.small.png";
import migration from "@/assets/holistic-migration.small.png";
import ministry from "@/assets/ministry-lg.small.png";
import terkper from "@/assets/Dr. Peter Kwesi Terkper.small.png";
import wakeelahMartinez from "@/assets/Queen Mother Wakeelah Martinez.small.png";
import headquarters from "@/assets/wcmgh_headequarters_building.small.png";
import wcmBanner from "@/assets/wmcgh banner.small.png";

const ease = [0.22, 1, 0.36, 1] as const;

const milestones = [
  {
    value: "1957",
    label: "Inspiration",
    detail: "Year of Ghana's Independence",
  },
  {
    value: "1984",
    label: "Founded",
    detail: "WCM Established by Mayor Johnny Ford",
  },
  {
    value: "Ghana",
    label: "HQ Launched",
    detail: "African Headquarters",
  },
];

const pillars = [
  {
    title: "Leadership",
    desc: "Executive learning and peer exchange for city and district leaders.",
    icon: Landmark,
  },
  {
    title: "Trade",
    desc: "Market access, investment readiness, and city-to-city economic partnerships.",
    icon: TrendingUp,
  },
  {
    title: "Tourism",
    desc: "Destination development rooted in culture, heritage, and local enterprise.",
    icon: MapPinned,
  },
  {
    title: "Technology",
    desc: "Digital governance, smart city thinking, and service delivery modernization.",
    icon: Cpu,
  },
  {
    title: "Training",
    desc: "Capacity programs for municipal teams, youth, and community actors.",
    icon: GraduationCap,
  },
  {
    title: "Treasury",
    desc: "Resource stewardship, local revenue strategy, and transparent finance.",
    icon: CircleDollarSign,
  },
  {
    title: "Twin Cities",
    desc: "Cross-border city relationships that move from protocol to delivery.",
    icon: Network,
  },
];

const programs = [
  {
    title: "Municipal Leadership Academy",
    desc: "A practical development track for MMDCEs, assembly teams, and emerging civic leaders.",
    icon: GraduationCap,
  },
  {
    title: "City Diplomacy Desk",
    desc: "Structured support for sister-city relationships, diaspora engagement, and diplomatic exchange.",
    icon: Globe2,
  },
  {
    title: "Trade and Investment Facilitation",
    desc: "Connecting local producers, municipal assets, and development projects to credible partners.",
    icon: Banknote,
  },
];

const projects = [
  {
    title: "Shea Industry Partnerships",
    desc: "Building routes for local production, farmer welfare, and international trade opportunities.",
    image: farmer,
    tag: "Trade",
  },
  {
    title: "Smart City Initiatives",
    desc: "Digital tools for urban planning, citizen engagement, and stronger municipal delivery.",
    image: cityscape,
    tag: "Technology",
  },
  {
    title: "Community Development Programs",
    desc: "Civic projects focused on youth, livelihoods, volunteerism, and resilient communities.",
    image: cdp,
    tag: "Development",
  },
];

const leaders = [
  {
    name: "Hon. Dr. Ishmael Nii Amanor Dodoo",
    role: "President, WCM Ghana",
    image: ishmaelDodoo,
    featured: true,
  },
  {
    name: "Hon. Johnny Ford",
    role: "Founder and CEO, World Conference of Mayors",
    image: johnnyFord,
  },
  {
    name: "Hon. Francis Opai Tetteh",
    role: "Country Director, WCM Ghana",
    image: francisOpaiTetteh,
  },
  {
    name: "Dr. Peter Kwesi Terkper",
    role: "Director, Finance and Accounting",
    image: terkper,
  },
  {
    name: "Queen Mother Wakeelah Martinez",
    role: "Traditional Leadership Partner",
    image: wakeelahMartinez,
  },
];

const partners = [
  { src: ministry, name: "Ministry of Local Government, Chieftaincy and Religious Affairs" },
  { src: economy, name: "24 Hour Economy" },
  { src: migration, name: "Holistic Migration Consult" },
  { src: farmers, name: "Makane Farmers Connect" },
];

const news = [
  {
    title: "How city diplomacy can unlock district-level development",
    category: "Insight",
    date: "Leadership Brief",
  },
  {
    title: "Building stronger municipal partnerships across Ghana's regions",
    category: "Programs",
    date: "Program Update",
  },
  {
    title: "Why training and treasury discipline matter for local impact",
    category: "Governance",
    date: "Policy Note",
  },
];

const events = [
  {
    date: "Annual",
    title: "WCM Ghana Cities and Partnerships Forum",
    location: "Hybrid convening",
    desc: "A flagship forum for leadership, city diplomacy, investment, and development partnerships.",
    featured: true,
  },
  {
    date: "Quarterly",
    title: "Municipal Leadership Roundtable",
    location: "Accra, Ghana",
    desc: "Focused working sessions for municipal leaders, partners, and technical experts.",
  },
  {
    date: "Program-based",
    title: "Training and Capacity Clinics",
    location: "Regional delivery",
    desc: "Practical training aligned to leadership, technology, treasury, and trade priorities.",
  },
];

const aboutFacts = [
  { label: "Global founded", value: "1984" },
  { label: "Ghana incorporation", value: "March 2023" },
  { label: "Founder & CEO", value: "Mayor Johnny Ford" },
  { label: "Headquarters", value: "Accra, Ghana" },
];

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (href: string) => {
    if (href === path) return;
    window.history.pushState({}, "", href);
    setPath(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let page: JSX.Element = <HomePage onNavigate={navigate} />;
  if (path === "/about") page = <AboutPage />;
  else if (path === "/programs") page = <ProgramsPage />;
  else if (path === "/projects") page = <ProjectsPage />;
  else if (path === "/events" || path === "/conference") page = <EventsPage />;
  else if (path === "/news") page = <NewsPage />;
  else if (path === "/membership") page = <MembershipPage />;
  else if (path === "/contact") page = <ContactPage />;

  return (
    <SiteLayout pathname={path} onNavigate={navigate}>
      {page}
    </SiteLayout>
  );
}

function HomePage({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <>
      <section className="relative isolate min-h-[calc(100vh-4.75rem)] overflow-hidden text-white">
        <motion.img
          src={heroBg}
          alt="Independence Arch, Accra — symbol of Ghanaian civic pride"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,43,76,0.94)_32%,rgba(26,43,76,0.78)_62%,rgba(26,43,76,0.28)_100%)]" />
        {/* <div className="hero-wcm-pattern absolute inset-20" /> */}

        <div className="container-page relative flex min-h-[calc(100vh-1.75rem)] items-center py-10 md:py-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="eyebrow-gold"
            >
              The Rebirth of Patriotism Volunteerism
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.08 }}
              className="mt-8 max-w-6xl text-balance font-display text-[4.75rem] font-extrabold leading-[1.04] tracking-normal md:text-6xl lg:text-[4.5rem]"
            >
              World <span className="text-gold">Conference</span> of{" "}
              <span className="text-gold">Mayors</span> Ghana
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.18 }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-100/90 md:text-lg"
            >
              Rallying, uniting and empowering mayors globally. As the African headquarters of the
              World Conference of Mayors, we are committed to national transformation through the 7 Ts
              Ts framework.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.28 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <InternalLink
                href="/programs"
                onNavigate={onNavigate}
                className="btn-primary shadow-lg"
              >
                Explore Programmes <ArrowRight className="h-4 w-4" />
              </InternalLink>
              <InternalLink href="/contact" onNavigate={onNavigate} className="btn-ghost-light">
                Partner With Us
              </InternalLink>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f8f9fb] py-0 text-navy">
        <div className="container-page border-t-4 border-gold pt-4 pb-6">
          <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-slate-200">
          {milestones.map((item) => (
            <div key={item.label} className="px-2 text-center md:px-8 md:text-left">
              <div className="font-display text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
                {item.value}
              </div>
              <div className=" text-[11px] font-extrabold uppercase tracking-[0.16em] text-gold">
                {item.label}
              </div>
              <p className=" text-sm text-slate-500">{item.detail}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-navy">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -left-3 top-0 z-10 h-32 w-1 bg-gold" aria-hidden="true" />
                {/* <div className="overflow-hidden rounded-sm shadow-xl">
                  <img
                    src={headquarters}
                    alt="WCM Ghana headquarters in Accra"
                    className="h-80 w-full object-cover"
                  />
                </div> */}
                <div className="mt-16 grid grid-cols-1 gap-4">
                  <img
                    src={ishmaelDodoo}
                    alt="WCM Ghana President"
                    className="h-full w-full rounded-sm object-cover object-top "
                  />
                  <span></span>
                  {leaders
              .filter((l) => l.featured)
              .map((item) => (
                <figure
                  key={item.name}
                  className="overflow-hidden rounded-sm border border-gold/40 bg-white/4 lg:col-span-4"
                >
                  <figcaption className="border-t-2 border-gold bg-navy-light p-4">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                      President
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.role}</p>
                  </figcaption>
                </figure>
              ))}
                  {/* <img
                    src={ghanaMap}
                    alt="Map of Ghana"
                    className="h-44 w-full rounded-sm border border-slate-200 bg-slate-50 object-contain p-4 shadow-sm"
                  /> */}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-7">
              <span className="eyebrow-gold">About WCM Ghana</span>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy md:text-5xl">
                The African Headquarters for Mayors.
              </h2>
              <blockquote className="mt-8 border-l-10 border-gold pl-5 text-lg font-medium leading-relaxed text-accent-foreground">
                The World Conference of Mayors, Ghana Chapter brings municipal leadership, civic
                service, and international collaboration into one focused platform.
              </blockquote>
              <p className="mt-6 text-base leading-6 text-muted-foreground">
                Incorporated in Ghana in March 2023, WCM Ghana convenes metropolitan, municipal,
                and district leaders alongside traditional authorities and civic partners to advance
                patriotism, volunteerism, and practical delivery through the Seven Ts framework.
              </p>
              <p className="mt-4 text-base leading-6 text-muted-foreground">
                From Accra, the chapter links local governance with global city diplomacy — equipping
                leaders with partnerships, knowledge, and investment pathways for stronger
                communities across all sixteen regions.
              </p>

              <aside className="mt-8 rounded-sm bg-navy p-6 text-white shadow-lg">
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                  Chapter at a glance
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {aboutFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="border-t border-white/10 pt-3 sm:border-t-0 sm:pt-0"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        {fact.label}
                      </div>
                      <div className="mt-1 font-display text-sm font-bold text-white">
                        {fact.value}
                      </div>
                    </div>
                  ))}
                </div>
              </aside>

              {/* <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "Mission",
                    text: "Equip mayors with partnerships, knowledge, and investment pathways.",
                    icon: Target,
                  },
                  {
                    label: "Vision",
                    text: "Globally connected Ghanaian cities delivering public value with integrity.",
                    icon: Eye,
                  },
                  {
                    label: "Values",
                    text: "Patriotism, service, excellence, and collaboration across borders.",
                    icon: Heart,
                  },
                ].map((item) => (
                  <article
                    key={item.label}
                    className="section-card border-t-2 border-t-gold p-5 shadow-sm"
                  >
                    <item.icon className="h-5 w-5 text-gold" />
                    <h3 className="mt-4 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
                  </article>
                ))}
              </div> */}

              <InternalLink href="/about" onNavigate={onNavigate} className="btn-ghost-navy mt-8">
                Discover more <ChevronRight className="h-4 w-4" />
              </InternalLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* <section className="section-padding border-y border-steel-blue/15 bg-navy text-white">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="eyebrow-gold">Policy Framework</span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
              The Seven Ts framework for stronger cities and districts.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              Leadership, trade, tourism, technology, training, treasury, and twin cities — the
              chapter&apos;s operating model for national transformation.
            </p>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
            {pillars.map((item, index) => (
              <StaggerItem key={item.title}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className="group h-full rounded-sm border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-gold/60 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold text-navy">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10">
            <InternalLink
              href="/programs"
              onNavigate={onNavigate}
              className="btn-ghost-light border-white/25"
            >
              Explore the framework <ArrowRight className="h-4 w-4" />
            </InternalLink>
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-slate-50 text-navy">
        <div className="container-page">
          <SectionHeading
            eyebrow=""
            title="Programmes"
            action={
              <InternalLink href="/programs" onNavigate={onNavigate} className="link-arrow">
                View all programmes <ArrowRight className="h-4 w-4" />
              </InternalLink>
            }
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {programs.map((item, index) => (
              <StaggerItem key={item.title}>
                <article className="section-card group h-full p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <item.icon className="h-8 w-8 text-gold transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.desc}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding bg-white text-navy">
        <div className="container-page">
          <SectionHeading
            eyebrow="Partners"
            title="Flagship Initiatives Across Board."
            action={
              <InternalLink href="/projects" onNavigate={onNavigate} className="link-arrow">
                View all initiatives <ArrowRight className="h-4 w-4" />
              </InternalLink>
            }
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/20 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-sm bg-gold px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.12em] text-navy">
                    {item.tag}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-5 text-muted-foreground">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-slate-200 bg-[#f8f9fb] text-navy">
        <div className="container-page">
          <SectionHeading
            eyebrow="Events"
            title="Events Across Ghana."
            description="From flagship partnership forums to regional training clinics, events anchor the chapter's convening power and public accountability."
            action={
              <InternalLink href="/events" onNavigate={onNavigate} className="link-arrow">
                View all events <ArrowRight className="h-4 w-4" />
              </InternalLink>
            }
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.article
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-sm shadow-lg"
            >
              <img
                src={wcmBanner}
                alt="WCM Ghana Cities and Partnerships Forum"
                className="h-fit w-full object-none transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/55 to-navy/20" />
              <div className="hero-wcm-pattern absolute inset-0 opacity-30" />
              <div className="relative flex min-h-[360px] flex-col justify-end p-8 text-white md:p-10">
                <span className="eyebrow-gold">Flagship Forum</span>
                <h3 className="mt-4 max-w-lg font-display text-3xl font-extrabold leading-tight">
                  WCM Ghana Cities and Partnerships Forum
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">
                  A flagship convening for leadership, city diplomacy, investment, and development
                  partnerships — delivered in person and online.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.12em] text-gold">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" /> Annual
                  </span>
                  <span className="inline-flex items-center gap-2 text-slate-300">
                    <MapPin className="h-4 w-4 text-gold" /> Hybrid convening
                  </span>
                </div>
              </div>
            </motion.article>

            <div className="space-y-4">
              {events
                .filter((e) => !e.featured)
                .map((item) => (
                  <motion.article
                    key={item.title}
                    whileHover={{ x: 4 }}
                    className="section-card flex gap-5 p-6 shadow-sm transition-colors hover:border-gold"
                  >
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-sm bg-navy text-white">
                      <CalendarDays className="h-5 w-5 text-gold" />
                      <span className="mt-1 font-display text-[9px] font-bold uppercase tracking-wider">
                        {item.date}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" />
                        {item.location}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.article>
                ))}
              <InternalLink href="/events" onNavigate={onNavigate} className="btn-ghost-navy w-full">
                Register interest <ArrowRight className="h-4 w-4" />
              </InternalLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-page">
          <SectionHeading
            dark
            eyebrow="Leadership"
            title="Executive Leadership & Municipal and International Reach."
            description="WCM Ghana's leadership team connects local governance with the global mayoral movement — from founding vision to day-to-day chapter delivery."
            action={
              <InternalLink
                href="/about"
                onNavigate={onNavigate}
                className="btn-ghost-light border-white/25 shrink-0"
              >
                Meet the team <ChevronRight className="h-4 w-4" />
              </InternalLink>
            }
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {leaders
              .filter((l) => l.featured)
              .map((item) => (
                <figure
                  key={item.name}
                  className="overflow-hidden rounded-sm border border-gold/40 bg-white/4 lg:col-span-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[min(620px,100vh)] w-full object-cover object-top"
                  />
                  <figcaption className="border-t-4 border-gold bg-navy-light p-6">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                      President
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.role}</p>
                  </figcaption>
                </figure>
              ))}

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {leaders
                .filter((l) => !l.featured)
                .map((item) => (
                  <motion.figure
                    key={item.name}
                    whileHover={{ y: -4 }}
                    className="overflow-hidden rounded-sm border border-white/10 bg-white/4 transition-colors hover:border-gold/50"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover object-top  transition-all duration-500 hover:grayscale-100 hover:scale-105"
                    />
                    <figcaption className="p-5">
                      <h3 className="font-display text-base font-bold text-white">{item.name}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-400">{item.role}</p>
                    </figcaption>
                  </motion.figure>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-navy">
        <div className="container-page">
          <SectionHeading
            eyebrow="Resources"
            title="Official Publications."
            description="Program briefs, partnership news, community stories, and event recaps curated for leaders and partners."
            action={
              <InternalLink href="/news" onNavigate={onNavigate} className="link-arrow">
                Browse resources <ArrowRight className="h-4 w-4" />
              </InternalLink>
            }
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="section-card overflow-hidden shadow-sm">
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src={cityscape}
                  alt="Ghana city skyline"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                    <BookOpenText className="h-4 w-4" />
                    Featured insight
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="max-w-2xl font-display text-2xl font-bold leading-tight md:text-3xl">
                  Positioning Ghanaian cities for global partnerships and local delivery.
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                  Editorial updates, program briefs, project reports, partnership news, and event
                  recaps all live in one durable publication system for the chapter.
                </p>
                <InternalLink href="/news" onNavigate={onNavigate} className="link-arrow mt-6">
                  Read the featured article <ArrowRight className="h-4 w-4" />
                </InternalLink>
              </div>
            </article>

            <div className="space-y-4">
              {news.map((item, index) => (
                <motion.article
                  key={item.title}
                  whileHover={{ x: 4 }}
                  className="section-card p-5 shadow-sm transition-colors hover:border-gold"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-display text-[10px] font-bold uppercase tracking-[0.12em] text-gold">
                      {item.category}
                    </div>
                    <span className="font-display text-[10px] font-bold text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">
                    {item.date}
                  </p>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug text-navy">
                    {item.title}
                  </h3>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-slate-200 bg-[#f8f9fb] text-navy">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Partners"
            title="A Partner Ecosystem Across the Country"
            description="Institutional collaborators strengthening municipal leadership, trade pathways, and community development."
            centered
          />
          <Stagger className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {partners.map((p) => (
              <StaggerItem key={p.name}>
                <div className=" flex min-h-32 items-center justify-center p-6 transition-all hover:-translate-y-1 hover:border-gold ">
                  <img
                    src={p.src}
                    alt={p.name}
                    className="max-h-40 w-auto object-contain transition-all hover:grayscale"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-page section-padding">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm bg-navy px-7 py-14 text-white md:px-14 md:py-20">
            <img
              src={cityscape}
              alt="Accra skyline"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="hero-wcm-pattern absolute inset-0 opacity-40" />
            <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/92 to-navy/40" />
            <div className="relative max-w-2xl">
              <span className="eyebrow-gold">Membership</span>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
                Join a network of leaders shaping the future of cities.
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-300">
                Become part of WCM Ghana&apos;s leadership, programme, and partnership platform for
                stronger local communities across Ghana and beyond.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <InternalLink href="/membership" onNavigate={onNavigate} className="btn-gold">
                  Become a Member <ArrowRight className="h-4 w-4" />
                </InternalLink>
                <InternalLink
                  href="/contact"
                  onNavigate={onNavigate}
                  className="btn-ghost-light border-white/25"
                >
                  Contact Secretariat
                </InternalLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function InternalLink({
  href,
  onNavigate,
  className,
  children,
}: {
  href: string;
  onNavigate: (href: string) => void;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(href);
      }}
      className={className}
    >
      {children}
    </a>
  );
}
