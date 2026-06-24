import { SiteLayout } from "@/components/SiteLayout";
import { AboutPage } from "@/pages/AboutPage";
import { ConferencePage } from "@/pages/ConferencePage";
import { ContactPage } from "@/pages/ContactPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { LeadershipPage } from "@/pages/LeadershipPage";
import { ProgramsPage } from "@/pages/ProgramsPage";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, BadgeCheck, BookOpen, ChevronRight, GraduationCap, Handshake, Heart, MapPinned, ShieldCheck, Target, Trees, Users, Flag } from "lucide-react";

import heroBg from "@/assets/hero-bg.small.png";
import cityscape from "@/assets/cityscape.small.png";
import ministry from "@/assets/ministry-lg.small.png";
import economy from "@/assets/24hour-economy.small.png";
import migration from "@/assets/holistic-migration.small.png";
import farmers from "@/assets/makane_farmers_connect.small.png";
import johnnyFord from "@/assets/HON. JOHNNY FORD, FOUNDER & CEO.small.png";
import francisOpaiTetteh from "@/assets/HON. FRANCIS OPAI TETTEH.small.png";
import terkper from "@/assets/Dr. Peter Kwesi Terkper.small.png";
import wakeelahMartinez from "@/assets/Queen Mother Wakeelah Martinez.small.png";
import mahama from "@/assets/H. E. JOHN DRAMANI MAHAMA.small.png";
import naana from "@/assets/H.E. NAANA JANE OPOKU-AGYEMANG. PHD, FGA.small.png";
import ghanaMap from "@/assets/ghanamap.small.png";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { useEffect, useState, type JSX } from "react";

const partners = [
  { src: ministry, name: "Ministry of Local Government, Chieftaincy & Religious Affairs" },
  { src: economy, name: "24 Hour Economy" },
  { src: migration, name: "Holistic Migration Consult" },
  { src: farmers, name: "Makane Farmers Connect" },
];
const ease = [0.22, 1, 0.36, 1] as const;
const initiatives = [
  { title: "Patriotism", desc: "Civic pride, national symbols and volunteer participation as a governance asset.", icon: Flag },
  { title: "Public Safety", desc: "Safer cities through coordinated local leadership, emergency response and planning.", icon: ShieldCheck },
  { title: "Environment", desc: "Climate-aware municipal action, tree planting and resilient urban systems.", icon: Trees },
  { title: "Migration", desc: "Inclusive frameworks for people on the move and diaspora engagement.", icon: MapPinned },
  { title: "Food Security", desc: "Sustainable local food systems, markets and support for farmers.", icon: Heart },
  { title: "Vocational Training", desc: "Skills, employability and entrepreneurship pipelines for youth.", icon: GraduationCap },
  { title: "AfCFTA", desc: "City-to-city trade facilitation aligned to continental integration.", icon: Handshake },
  { title: "Peace Summit", desc: "Dialogue, reconciliation and peacebuilding through local diplomacy.", icon: BadgeCheck },
];

const ts = [
  { title: "Trust", desc: "Transparency and public confidence in local leadership." },
  { title: "Trade", desc: "Market access and local economic growth." },
  { title: "Tourism", desc: "Cultural identity and destination development." },
  { title: "Technology", desc: "Digital tools for governance and service delivery." },
  { title: "Treasury", desc: "Resource stewardship and fiscal discipline." },
  { title: "Training", desc: "Capacity building for leaders and young people." },
  { title: "Twin-City", desc: "Partnerships that connect municipalities across borders." },
];

const conferenceAgenda = [
  {
    title: "Opening Ceremony",
    desc: "Arrival of guests, music performance, opening prayer and introduction of dignitaries.",
  },
  {
    title: "Policy Panels",
    desc: "A focused conversation on WCM priorities and the Ghana chapter's strategic direction.",
  },
  {
    title: "MMDCE Sharing",
    desc: "Municipal and district chief executives exchange practical governance experiences.",
  },
  {
    title: "Dinner & Citations",
    desc: "Networking, presentation of citations and closing reflections.",
  },
];

const leadershipNetwork = [
  {
    name: "Hon. Johnny Ford",
    role: "Founder & CEO, World Conference of Mayors, USA",
    image: johnnyFord,
  },
  {
    name: "Hon. Francis Opai Tetteh",
    role: "Country Director, World Conference of Mayors, Ghana",
    image: francisOpaiTetteh,
  },
  {
    name: "Dr. Peter Kwesi Terkper",
    role: "Director, Finance & Accounting, WCM Ghana",
    image: terkper,
  },
  {
    name: "Prof. Wakeelah Martinez",
    role: "CEO, Ghana Sankofa Empowerment Outreach, USA",
    image: wakeelahMartinez,
  },
];
const heroStats = [
  { value: "1957", label: "Inspiration" },
  { value: "1984", label: "Founded" },
  { value: "Ghana HQ", label: "Launched" },
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
  else if (path === "/conference") page = <ConferencePage />;
  else if (path === "/gallery") page = <GalleryPage />;
  else if (path === "/leadership") page = <LeadershipPage />;
  else if (path === "/programs") page = <ProgramsPage />;
  else if (path === "/contact") page = <ContactPage />;
  return (
    <SiteLayout pathname={path} onNavigate={navigate}>
      {page}
    </SiteLayout>
  );
}

function HomePage({ onNavigate }: { onNavigate: (href: string) => void }) {
  const [activeT, setActiveT] = useState(0);

  const tsDetails = [
    { title: "Trust", desc: "Building public trust through accountability, open communication, and transparent governance in our local assemblies.", tag: "Transparency" },
    { title: "Trade", desc: "Facilitating city-to-city trade networks and connecting local Ghanaian producers with global market opportunities.", tag: "Economic Growth" },
    { title: "Tourism", desc: "Promoting Ghana's rich cultural heritage, historical sites, and eco-tourism to drive sustainable municipal revenue.", tag: "Culture & Heritage" },
    { title: "Technology", desc: "Deploying modern digital tools to streamline revenue collection, citizen engagement, and public service delivery.", tag: "Digitalization" },
    { title: "Treasury", desc: "Enforcing fiscal discipline, optimizing local revenue generation, and ensuring responsible resource stewardship.", tag: "Financial Health" },
    { title: "Training", desc: "Equipping assembly leaders, youth, and administrators with cutting-edge public administration skills.", tag: "Capacity Building" },
    { title: "Twin-City", desc: "Establishing cross-border municipal partnerships to exchange technical expertise, culture, and investment.", tag: "Global Ties" }
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <motion.img
          src={heroBg}
          alt="WCM Ghana hero background"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,29,55,0.22)_0%,rgba(10,29,55,0.34)_42%,rgba(10,29,55,0.78)_100%)]" />

        <div className="container-page relative py-12 md:py-24 lg:py-20">
          <div className="mx-auto max-w-5xl text-center">
            {/* <span className="inline-flex items-center rounded-full border border-primary-foreground/12 bg-navy/55 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
              World Conference of Mayors • Ghana Chapter
            </span> */}

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.08 }}
              className="mx-auto mt-6 max-w-4xl text-balance font-display text-[2.15rem] font-extrabold uppercase leading-[0.96] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-[4.5rem]"
            >
              The Rebirth of <span className="text-gold">Patriotism</span>
              <br />
              and <span className="text-gold">Volunteerism</span> in Ghana
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.18 }}
              className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-primary-foreground/90 sm:text-lg"
            >
              World Conference of Mayors Ghana - rallying, uniting, and empowering mayors globally.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.24 }}
              className="mx-auto mt-4 max-w-xl text-sm leading-7 text-primary-foreground/80"
            >
              Coordinating transatlantic municipal cooperation, leadership training, and local
              development programs. Guided by the core mission: To Rally, Unite, and Empower
              Mayors Globally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.32 }}
              className="mt-9 grid gap-3 sm:flex sm:flex-wrap sm:justify-center"
            >
              <a
                href="/programs"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/programs");
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-navy transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Explore Programme <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/contact");
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-navy/20 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-navy sm:w-auto"
              >
                Partner With Us <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>

            <div className="mt-10 grid overflow-hidden rounded-2xl border border-primary-foreground/10 bg-navy/72 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.75)] sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-5 py-4 text-center ${index < heroStats.length - 1 ? "border-b border-primary-foreground/10 sm:border-b-0 sm:border-r" : ""}`}
                >
                  <div className="text-2xl font-bold text-gold">{stat.value}</div>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-primary-foreground/72">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL ABOUT US SECTION */}
      <section className="border-t border-steel-blue/15 py-24 bg-white text-navy">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-gold">
                ( 01 ) Who We Are
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-navy md:text-5xl leading-none">
                Building a legacy of <br />
                <span className="bg-linear-to-r from-gold to-amber-600 bg-clip-text text-transparent">
                  civic leadership
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-700 font-serif italic">
                The World Conference of Mayors, Ghana Chapter brings municipal leadership, civic
                service, and international collaboration into one focused platform.
              </p>
              <div className="mt-8 space-y-6 text-sm text-slate-600 leading-relaxed font-sans">
                <p>
                  Established on the belief that mayors and district executives are the public
                  officials closest to the communities they serve. In Ghana, that principle
                  translates into a practical policy agenda that links national development to
                  grassroots volunteerism.
                </p>
                <p>
                  The chapter was incorporated in March 2023 to convene metropolitan, municipal,
                  and district leaders alongside traditional authorities and civic partners,
                  driving municipal cooperation across borders.
                </p>
              </div>
            </Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <img
                src={johnnyFord}
                alt="HON. JOHNNY FORD, FOUNDER & CEO"
                className="h-full w-full object-cover"
              />
              <div className="border-t border-border bg-white px-5 py-4 text-center">
                <div className="text-[0.68rem] uppercase tracking-[0.22em] text-navy/70 font-extrabold">
                  World Conference of Mayors Inc.
                </div>
                <div className="mt-2 text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                  Hon. Johnny Ford
                </div>
                <div className="mt-1 text-sm font-semibold text-navy">
                  Founder &amp; CEO, World Conference of Mayors, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC 7 T'S SHOWCASE (PONDER STYLE) */}
      <section className="border-t border-steel-blue/15 py-24 bg-[#091526]">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              ( 02 ) Core Philosophy
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-white md:text-5xl leading-none">
              The <span className="bg-linear-to-r from-gold to-amber-500 bg-clip-text text-transparent">7 T's Framework</span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Hover over each principle to explore the core operating logic that guides WCM Ghana's policy agenda and municipal cooperation.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left list */}
            <div className="flex flex-col gap-2">
              {tsDetails.map((item, idx) => (
                <button
                  key={item.title}
                  onMouseEnter={() => setActiveT(idx)}
                  onClick={() => setActiveT(idx)}
                  className={`group flex items-center justify-between border-b border-steel-blue/10 py-4 text-left transition-all cursor-pointer ${
                    activeT === idx ? "text-gold pl-2" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-slate-500 group-hover:text-gold transition-colors">
                      ({String(idx + 1).padStart(2, "0")})
                    </span>
                    <span className="font-display text-xl font-bold md:text-2xl transition-transform duration-300 group-hover:translate-x-1">
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight className={`h-5 w-5 opacity-0 transition-all ${activeT === idx ? "opacity-100 text-gold" : "group-hover:opacity-50 text-slate-400"}`} />
                </button>
              ))}
            </div>

            {/* Right Display Panel */}
            <div className="sticky top-28">
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-gold/10 to-steel-blue/10 blur-xl opacity-60" />
              <div className="relative min-h-[340px] rounded-2xl border border-steel-blue/20 bg-card p-8 shadow-elegant overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-slate-400 uppercase tracking-widest">
                  {tsDetails[activeT].tag}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeT}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.22 }}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-gold">
                        0{activeT + 1} // {tsDetails[activeT].title}
                      </span>
                      <h3 className="mt-8 font-display text-3xl font-extrabold text-white uppercase">
                        {tsDetails[activeT].title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-slate-300 font-serif italic">
                        "{tsDetails[activeT].desc}"
                      </p>
                    </div>
                    <div className="mt-12 pt-6 border-t border-steel-blue/10 flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 font-mono">WCM GHANA AGENDA</span>
                      <span className="text-[10px] text-gold font-medium flex items-center gap-1">
                        Pillar Record
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY PILLARS SECTION */}
      <section className="border-t border-steel-blue/15 py-24 bg-slate-50 text-navy">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              ( 03 ) Priority Framework
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-navy md:text-5xl leading-none">
              Framework for <br />
              <span className="bg-linear-to-r from-gold to-amber-600 bg-clip-text text-transparent">National Transformation</span>
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm">
              Our public policy is centered on eight key transformation areas to foster national development, safety, and economic security.
            </p>
          </Reveal>

          <Stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Flag, title: "Patriotism", desc: "Reawakening national pride, civic duty, and volunteerism as pillars of progress.", tag: "01" },
              { icon: ShieldCheck, title: "Public Safety", desc: "Enhancing community security, road safety, and coordinated emergency operations.", tag: "02" },
              { icon: Trees, title: "Environment", desc: "Climate resilience, municipal land restoration, and urban tree-planting initiatives.", tag: "03" },
              { icon: MapPinned, title: "Migration", desc: "Structured diaspora cooperation and progressive migration governance policies.", tag: "04" },
              { icon: Heart, title: "Food Security", desc: "Strengthening smallholder farmer welfare, local production, and market systems.", tag: "05" },
              { icon: GraduationCap, title: "Vocational Training", desc: "Skills development and job pipelines empowering Ghanaian youth to succeed.", tag: "06" },
              { icon: Handshake, title: "AfCFTA Trade", desc: "Linking local district production with international and regional trade blocks.", tag: "07" },
              { icon: BadgeCheck, title: "Peace Summit", desc: "Fostering institutional dialogue, reconciliation, and nationwide stability.", tag: "08" },
            ].map((p) => (
              <StaggerItem key={p.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative flex h-full flex-col justify-between rounded-xl border border-steel-blue/20 bg-white p-6 hover:border-gold transition-all shadow-sm hover:shadow-elegant text-navy"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-gold group-hover:text-white transition-colors">
                        <p.icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-400">#{p.tag}</span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-bold uppercase text-navy group-hover:text-gold transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* INAUGURAL CONFERENCE STEPPER (PONDER STYLE) */}
      <section className="border-t border-steel-blue/15 py-24 bg-[#091526]">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <div className="sticky top-28">
                <span className="font-mono text-xs uppercase tracking-widest text-gold">
                  ( 04 ) Event Highlights
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-white md:text-5xl leading-none">
                  Inaugural <br />
                  <span className="bg-linear-to-r from-gold to-amber-500 bg-clip-text text-transparent">Conference</span>
                </h2>
                <p className="mt-6 text-sm text-slate-400 leading-relaxed">
                  A structured retrospective of the founding event that inaugurated WCM in Ghana, outlining the conference agenda and core outputs.
                </p>
                <div className="mt-8">
                  <a
                    href="/conference"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("/conference");
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-steel-blue/30 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-navy hover:border-white cursor-pointer"
                  >
                    View Full Details <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Stepper list */}
            <div className="space-y-6">
              {[
                { title: "Opening Ceremony", desc: "Arrival of guests, traditional drum call, opening prayers, and welcoming addresses by local mayors and international dignitaries.", step: "01" },
                { title: "Policy Panel Discussions", desc: "Frontline conversations centering on localizing WCM priorities, developing regional sister-city relationships, and diaspora resource mobilization.", step: "02" },
                { title: "MMDCE Sharing Session", desc: "District and municipal executives exchanging ideas, practical strategies, and sharing local success stories in governance.", step: "03" },
                { title: "Keynote Addresses & Citation Dinner", desc: "Speeches from traditional and national leaders, presenting citations to key collaborators, and closing networking dinner.", step: "04" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="group relative flex gap-6 rounded-2xl border border-steel-blue/15 bg-card p-6 hover:border-gold/30 transition-all hover:shadow-elegant"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 font-mono text-sm font-bold text-gold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase text-white group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="border-t border-steel-blue/15 py-24 bg-white text-navy">
        <div className="container-page">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              ( 05 ) Governance
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-navy md:text-5xl leading-none">
              Executive <span className="bg-linear-to-r from-gold to-amber-600 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm leading-relaxed max-w-2xl">
              Meet the executive leaders, authors, and international coordinators steering the vision and operations of WCM Ghana.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipNetwork.map((item) => (
              <figure
                key={item.name}
                className="group relative overflow-hidden rounded-2xl border border-steel-blue/20 bg-slate-50 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant text-navy"
              >
                <div className="relative mx-auto mt-8 h-40 w-40 overflow-hidden rounded-full border-4 border-gold/20 bg-white shadow-lg">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <figcaption className="px-6 pb-8 pt-6 text-center">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-slate-400">WCM Officer</div>
                  <div className="mt-2 font-display text-lg font-bold text-navy group-hover:text-gold transition-colors">{item.name}</div>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONAL MAP SECTION */}
      <section className="border-t border-steel-blue/15 py-24 bg-[#091526]">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-gold">
                ( 06 ) Spatial Reach
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-white md:text-5xl leading-none">
                Serving every <br />
                <span className="bg-linear-to-r from-gold to-amber-500 bg-clip-text text-transparent">region of Ghana</span>
              </h2>
              <p className="mt-6 text-base text-slate-300 font-serif italic">
                WCM Ghana operations extend alongside traditional governance councils and municipal assemblies across all sixteen administrative regions.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["Greater Accra", "Ashanti", "Western", "Eastern", "Volta", "Northern", "Central", "Bono"].map((reg) => (
                  <div key={reg} className="flex items-center gap-2 text-sm text-slate-400 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {reg}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Ghana Map Display */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gold/5 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-steel-blue/20 bg-card p-6 shadow-elegant">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">Regional Coverage</h3>
                    <p className="text-[10px] text-slate-500">16 Administrative Regions</p>
                  </div>
                  <span className="rounded-full border border-gold/30 bg-gold/5 px-2.5 py-0.5 font-mono text-[9px] text-gold uppercase tracking-wider">
                    National Map
                  </span>
                </div>
                <img src={ghanaMap} alt="Ghana Map WCM coverage" className="h-auto w-full max-h-[360px] rounded-xl object-contain opacity-85 hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="border-t border-steel-blue/15 py-24 bg-slate-50 text-navy">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              ( 07 ) Affiliates
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl leading-none">
              Transformational <span className="bg-linear-to-r from-gold to-amber-600 bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="mt-2 text-slate-500 text-xs font-mono">Working together across sectors</p>
          </div>

          <Stagger className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((p) => (
              <StaggerItem key={p.name}>
                <div className="group flex h-36 flex-col items-center justify-center rounded-xl border border-steel-blue/20 bg-white p-4 transition-all duration-300 hover:border-gold hover:shadow-elegant hover:-translate-y-1">
                  <img src={p.src} alt={p.name} className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="container-page py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-steel-blue/20 bg-navy p-12 md:p-20 text-white">
            <img src={cityscape} alt="Accra skyline" className="absolute inset-0 h-full w-full object-cover opacity-10 grayscale pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/95 to-transparent" />
            
            <div className="relative max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-gold block mb-2">
                Join WCM Ghana
              </span>
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight md:text-5xl leading-none">
                Empower your <br />
                <span className="bg-linear-to-r from-gold to-amber-500 bg-clip-text text-transparent">local community</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-300">
                Partner with municipal leaders, build sister-city ties, and cooperate across borders to scale local public impact.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/contact");
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-navy transition-transform hover:scale-[1.02] shadow-gold hover:shadow-xl cursor-pointer"
                >
                  Become a Member <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/about");
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-steel-blue/30 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-navy hover:border-white cursor-pointer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
