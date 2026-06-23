/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Heart,
  Globe2,
  Award,
  Sparkles,
  Target,
  Users,
  MapPinned,
  Trees,
  ShieldCheck,
  GraduationCap,
  Handshake,
  BookOpen,
  BadgeCheck,
  Flag,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.small.png";
import cityscape from "@/assets/cityscape.small.png";
import ministry from "@/assets/ministry-lg.small.png";
import economy from "@/assets/24hour-economy.small.png";
import migration from "@/assets/holistic-migration.small.png";
import farmers from "@/assets/makane-farmers.png.asset.json";
import johnnyFord from "@/assets/HON. JOHNNY FORD, FOUNDER & CEO.small.png";
import francisOpaiTetteh from "@/assets/HON. FRANCIS OPAI TETTEH.small.png";
import terkper from "@/assets/Dr. Peter Kwesi Terkper.small.png";
import wakeelahMartinez from "@/assets/Queen Mother Wakeelah Martinez.small.png";
import ghanaMap from "@/assets/ghanamap.small.png";

import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { assetUrl } from "@/lib/assetUrl";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WCM Ghana - World Conference of Mayors" },
      {
        name: "description",
        content:
          "World Conference of Mayors, Ghana. A civic leadership platform advancing public service, local governance, and national transformation.",
      },
      { property: "og:title", content: "WCM Ghana - World Conference of Mayors" },
      {
        property: "og:description",
        content: "Connect mayors globally in support of stronger communities and public service.",
      },
    ],
  }),
  component: Home,
});

const partners = [
  { src: ministry, name: "Ministry of Local Government, Chieftaincy & Religious Affairs" },
  { src: economy, name: "24 Hour Economy" },
  { src: migration, name: "Holistic Migration Consult" },
  { src: assetUrl(farmers), name: "Makane Farmers Connect" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const initiatives = [
  {
    title: "Patriotism",
    desc: "Civic pride, national symbols and volunteer participation as a governance asset.",
    icon: Flag,
  },
  {
    title: "Public Safety",
    desc: "Safer cities through coordinated local leadership, emergency response and planning.",
    icon: ShieldCheck,
  },
  {
    title: "Environment",
    desc: "Climate-aware municipal action, tree planting and resilient urban systems.",
    icon: Trees,
  },
  {
    title: "Migration",
    desc: "Inclusive frameworks for people on the move and diaspora engagement.",
    icon: MapPinned,
  },
  {
    title: "Food Security",
    desc: "Sustainable local food systems, markets and support for farmers.",
    icon: Heart,
  },
  {
    title: "Vocational Training",
    desc: "Skills, employability and entrepreneurship pipelines for youth.",
    icon: GraduationCap,
  },
  {
    title: "AfCFTA",
    desc: "City-to-city trade facilitation aligned to continental integration.",
    icon: Handshake,
  },
  {
    title: "Peace Summit",
    desc: "Dialogue, reconciliation and peacebuilding through local diplomacy.",
    icon: BadgeCheck,
  },
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

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <motion.img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-navy/65 via-navy/95 to-navy/10" />
        <div className="container-page relative py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 items-center lg:grid-cols-[1fr]">
            <div>
              <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                World Conference of Mayors, Ghana
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
                className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance"
              >
                The rebirth of <span className="text-gold">patriotism</span> and{" "}
                <span className="text-gold">volunteerism</span>, Ghana
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.25 }}
                className="mt-6 text-lg text-primary-foreground/85 max-w-xl leading-relaxed"
              >
                A policy-driven platform to rally, unite and empower mayors globally for national
                transformation, civic responsibility and continental partnership.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-2"
              >
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-1 rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-navy hover:bg-gold/90 transition-colors"
                  >
                    Explore the Programme
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
                  >
                    Partner With Us
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.dl
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
                className="mt-12 grid grid-cols-3 max-w-md gap-6 border-t border-primary-foreground/15 pt-6"
              >
                {[
                  ["1957", "Nkrumah foreword inspiration"],
                  ["1984", "WCM founded"],
                  ["2023", "Ghana chapter incorporated"],
                ].map(([n, l]) => (
                  <motion.div
                    key={l}
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                    }}
                  >
                    <dt className="font-display text-3xl font-bold text-gold">{n}</dt>
                    <dd className="mt-1 text-[0.74rem] uppercase font-bold text-primary-foreground/75">{l}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            </div>

          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
              Foreword
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy">
              Judged by the welfare of our people
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              "We shall measure our progress by the improvement in the health of our people; by
              the number of children in school, and electricity in our towns and villages and by
              the happiness which our people take in being able to manage their own affairs."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Broadcast to the nation on 24 December 1957 by Osagyefo Dr. Kwame Nkrumah.
            </p>

            <div className="mt-10 space-y-5">
              <p className="text-base text-muted-foreground leading-relaxed">
                The Ghana chapter aligns the World Conference of Mayors with local priorities,
                practical service, and the development needs of communities across Ghana.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                The goal is to connect Africa and the diaspora through ideas, expertise, investment,
                technology, and shared purpose.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="rounded-2xl bg-navy p-8 md:p-10 text-primary-foreground shadow-elegant overflow-hidden">
              <div className="relative">
                <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                  Dr. Peter Kwesi Terkper (PhD)
                </span>
                <h3 className="mt-4 font-display text-3xl font-bold text-primary-foreground">
                  Founder & President
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  Makane Farmers Connect, Oyarifa, Accra, Ghana
                </p>
                <div className="mt-8 h-px w-full bg-primary-foreground/20" />
                <p className="mt-6 text-sm text-primary-foreground/85 leading-relaxed">
                  "May this work strengthen our sense of duty to Ghana and to Africans across the
                  diaspora."
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                {
                  label: "7 T's",
                  value: "Trust, Trade, Tourism, Technology, Treasury, Training, Twin-City partnerships",
                },
                {
                  label: "Theme",
                  value: "A civic leadership platform for public service and local governance",
                },
              ].map((x) => (
                <div key={x.label} className="rounded-xl border border-border bg-background p-4">
                  <div className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                    {x.label}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 border-y border-border">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
              Policy Framework
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
              The missing details, now structured for the web
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This section presents the chapter's public agenda in a sharper, more accessible web
              format.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                t: "Civic Mobilization",
                d: "Reawaken patriotism and volunteer participation.",
              },
              {
                icon: Users,
                t: "Capacity Building",
                d: "Equip leaders with governance tools and training.",
              },
              {
                icon: BookOpen,
                t: "Policy Execution",
                d: "Turn vision into practical city and district programs.",
              },
              {
                icon: Award,
                t: "National Impact",
                d: "Scale proven models across districts and borders.",
              },
            ].map((p) => (
              <StaggerItem key={p.t}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="group relative h-full bg-card p-8 rounded-lg hover:border-gold/60 hover:shadow-elegant transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-navy">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-page py-24">
        <Reveal className="max-w-3xl">
          <span className="text-xs uppercase text-gold font-semibold">7 T's Framework</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
            The core operating logic behind the Ghana chapter
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
              This remains one of the chapter's clearest identity markers and deserves consistent
              visibility across the site.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ts.map((item, index) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full rounded-2xl bg-card p-6 shadow-sm transition-all hover:shadow-elegant hover:border-gold/50"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-navy">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-gold">
                    {item.title}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-navy text-primary-foreground py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
            <Reveal>
              <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                Inaugural Conference
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-balance">
                A structured event with clear policy outcomes
              </h2>
              <p className="mt-5 text-primary-foreground/75 leading-relaxed max-w-xl">
                The conference programme is presented as a dedicated section so visitors can read
                the event structure at a glance.
              </p>
            </Reveal>

            <div className="grid gap-4">
              {conferenceAgenda.map((item, i) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="flex gap-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-5 md:p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold text-navy font-bold">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-primary-foreground/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
              Programme
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
              From inauguration to measurable impact
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              These are the chapter's recurring priorities, organised here as a clear set of
              initiatives rather than scattered notes.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {conferenceAgenda.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-background p-5">
                <div className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                  {item.title}
                </div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((p) => (
            <StaggerItem key={p.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="group relative h-full bg-card p-8 rounded-lg hover:border-gold/60 hover:shadow-elegant transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
              Nationwide Reach
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
              Serving every region of Ghana
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              WCM Ghana works alongside mayors and assemblies across all sixteen regions,
              translating local insight into national policy and international partnerships.
            </p>
            <Stagger className="mt-8 grid grid-cols-2 gap-3 text-sm text-foreground/80" delay={0.05}>
              {[
                "Greater Accra",
                "Ashanti",
                "Western",
                "Eastern",
                "Volta",
                "Northern",
                "Central",
                "Bono",
              ].map((r) => (
                <StaggerItem key={r} as="li" className="flex items-center gap-2 list-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {r}
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="relative overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-elegant"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.5),transparent)]" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                    Ghana Map
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Visual coverage across the nationwide network
                  </p>
                </div>
                  <span className="rounded-full bg-navy px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary-foreground">
                  16 Regions
                </span>
              </div>
              <img
                src={ghanaMap}
                alt="Map of Ghana"
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>
          </motion.div>

        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <Reveal>
            <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
              Leadership Network
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
              The people behind the chapter
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              These are the key leaders associated with the chapter. Each card pairs the portrait
              with a concise role description for a cleaner presentation.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {leadershipNetwork.map((item) => (
              <figure
                key={item.name}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <img src={item.image} alt={item.name} className="h-56 w-full object-cover" />
                <figcaption className="p-4">
                  <div className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                    Leadership
                  </div>
                  <div className="mt-2 font-display text-lg font-bold text-navy">{item.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
              Partners & Affiliates
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy">
              Working together for transformation
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((p) => (
              <StaggerItem key={p.name}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  className="flex flex-col items-center text-center rounded-lg p-6 h-full hover:border-gold/60 hover:shadow-elegant transition-colors"
                >
                  <img src={p.src} alt={p.name} className="h-24 w-auto object-contain" />
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-page py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-navy p-12 md:p-20 text-primary-foreground">
            <motion.img
              src={cityscape}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-20"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
                Join the global mayoral movement
              </h2>
              <p className="mt-5 text-lg text-primary-foreground/85 leading-relaxed">
                Whether you lead a city, serve a community, or believe in transformative
                governance, there is a place for you in WCM Ghana.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-navy hover:bg-gold/90 shadow-gold transition-colors"
                  >
                    Become a Member <ChevronRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
                  <a
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

