import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Users, Sparkles, Target, Award, Heart, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png.asset.json";
import cityscape from "@/assets/cityscape.png.asset.json";
import drivingForce from "@/assets/driving-force.png.asset.json";
import ghanaMap from "@/assets/ghana-map.png.asset.json";
import ministry from "@/assets/ministry-lg.png.asset.json";
import economy from "@/assets/24hour-economy.png.asset.json";
import migration from "@/assets/holistic-migration.png.asset.json";
import farmers from "@/assets/makane-farmers.png.asset.json";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WCM Ghana — World Conference of Mayors" },
      { name: "description", content: "World Conference of Mayors, Ghana. The rebirth of patriotism and volunteerism — a policy framework to achieve national transformation." },
      { property: "og:title", content: "WCM Ghana — World Conference of Mayors" },
      { property: "og:description", content: "Rally, unite and empower mayors globally for national transformation." },
    ],
  }),
  component: Home,
});

const partners = [
  { src: ministry.url, name: "Ministry of Local Government, Chieftaincy & Religious Affairs" },
  { src: economy.url, name: "24 Hour Economy" },
  { src: migration.url, name: "Holistic Migration Consult" },
  { src: farmers.url, name: "Makane Farmers Connect" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden text-primary-foreground">
        <motion.img
          src={heroBg.url}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy/40" />
        <div className="container-page relative py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase text-gold"
              >
                <Sparkles className="h-3.5 w-3.5" /> Ghana Chapter
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
                className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance"
              >
                World Conference of <span className="text-gold">Mayors</span>, Ghana
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.25 }}
                className="mt-6 text-lg text-primary-foreground/85 max-w-xl leading-relaxed"
              >
                The rebirth of patriotism and volunteerism in Ghana — a policy framework to rally,
                unite and empower mayors globally for national transformation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
                  <Link to="/about" className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-navy hover:bg-gold/90 shadow-lg shadow-gold/30 transition-colors">
                    Discover Our Mission
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors">
                    Partner With Us
                  </Link>
                </motion.div>
              </motion.div>
              <motion.dl
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
                className="mt-12 grid grid-cols-3 max-w-md gap-6 border-t border-primary-foreground/15 pt-6"
              >
                {[["1984", "Founded"], ["40+", "Nations"], ["500+", "Mayors"]].map(([n, l]) => (
                  <motion.div
                    key={l}
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                    }}
                  >
                    <dt className="font-display text-3xl font-bold text-gold">{n}</dt>
                    <dd className="mt-1 text-xs uppercase text-primary-foreground/70">{l}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            </div>
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease, delay: 0.3 }}
            >
              <motion.img
                src={cityscape.url}
                alt="Modern cityscape"
                className="w-full h-auto drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DRIVING FORCE */}
      <section className="container-page py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal className="relative">
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease }}
              src={drivingForce.url}
              alt="WCM Ghana leadership"
              className="rounded-lg shadow-elegant w-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-navy p-6 rounded-lg shadow-gold max-w-xs"
            >
              <div className="font-display text-xl font-bold">The Driving Force</div>
              <p className="mt-1 text-sm font-medium">Leading the global mayoral movement.</p>
            </motion.div>
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs uppercase text-gold font-semibold">Our Mission</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy text-balance">
                A policy framework to achieve national transformation
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                The World Conference of Mayors, Ghana stands at the intersection of leadership and
                service — championing local government excellence and rekindling civic pride across
                communities.
              </p>
            </Reveal>
            <Stagger className="mt-8 space-y-5">
              {[
                { icon: Target, title: "Strategic Policy", text: "Frameworks that translate vision into measurable national progress." },
                { icon: Users, title: "Mayor Network", text: "A global fraternity of city leaders sharing knowledge and resources." },
                { icon: Heart, title: "Volunteerism", text: "Reigniting civic responsibility and community service in every district." },
              ].map((f) => (
                <StaggerItem key={f.title} className="flex gap-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy/5 text-navy transition-all group-hover:bg-navy group-hover:text-gold group-hover:scale-110">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">{f.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{f.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-secondary/60 py-24 border-y border-border">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase text-gold font-semibold">Our Pillars</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">Four pillars of national rebirth</h2>
          </Reveal>
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe2, t: "Global Diplomacy", d: "Bridging cities across continents through mayoral exchange." },
              { icon: Award, t: "Recognition", d: "Honoring excellence in public service and civic leadership." },
              { icon: Users, t: "Capacity Building", d: "Training the next generation of municipal leaders." },
              { icon: Sparkles, t: "Innovation", d: "Smart-city policy and sustainable development frameworks." },
            ].map((p) => (
              <StaggerItem key={p.t}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="group relative h-full bg-card p-8 rounded-lg border border-border hover:border-gold/60 hover:shadow-elegant transition-all"
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

      {/* REGIONS / MAP */}
      <section className="container-page py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-xs uppercase text-gold font-semibold">Nationwide Reach</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">Serving every region of Ghana</h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              From Greater Accra to the Upper West, WCM Ghana works alongside mayors and assemblies
              across all sixteen regions — translating local insight into national policy and
              international partnerships.
            </p>
            <Stagger className="mt-8 grid grid-cols-2 gap-3 text-sm text-foreground/80" delay={0.05}>
              {["Greater Accra", "Ashanti", "Western", "Eastern", "Volta", "Northern", "Central", "Bono"].map((r) => (
                <StaggerItem key={r} as="li" className="flex items-center gap-2 list-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {r}
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
          <Reveal className="flex justify-center" delay={0.15}>
            <motion.img
              src={ghanaMap.url}
              alt="Map of Ghana regions"
              className="max-h-[520px] w-auto"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-secondary/40 py-20 border-y border-border">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase text-gold font-semibold">Partners & Affiliates</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy">Working together for transformation</h2>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((p) => (
              <StaggerItem key={p.name}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  className="flex flex-col items-center text-center bg-card rounded-lg border border-border p-6 h-full hover:border-gold/60 hover:shadow-elegant transition-colors"
                >
                  <img src={p.src} alt={p.name} className="h-24 w-auto object-contain" />
                  <p className="mt-4 text-xs font-medium text-muted-foreground">{p.name}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-navy p-12 md:p-20 text-primary-foreground">
            <motion.img
              src={cityscape.url}
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
                Whether you lead a city, serve a community, or believe in transformative governance —
                there's a place for you in WCM Ghana.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-navy hover:bg-gold/90 shadow-gold transition-colors">
                    Become a Member <ChevronRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
                  <Link to="/programs" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors">
                    Explore Programs
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
