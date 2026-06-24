import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Handshake,
  Heart,
  MapPinned,
  ShieldCheck,
  Target,
  Trees,
  Users,
  Flag,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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
import { SiteLayout } from "@/components/SiteLayout";
import { assetUrl } from "@/lib/assetUrl";

const partners = [
  { src: ministry, name: "Ministry of Local Government, Chieftaincy & Religious Affairs" },
  { src: economy, name: "24 Hour Economy" },
  { src: migration, name: "Holistic Migration Consult" },
  { src: assetUrl(farmers), name: "Makane Farmers Connect" },
];

const initiatives = [
  { title: "Patriotism", desc: "Civic pride, national symbols and volunteer participation.", icon: Flag },
  { title: "Public Safety", desc: "Safer cities through local leadership and planning.", icon: ShieldCheck },
  { title: "Environment", desc: "Climate-aware municipal action and tree planting.", icon: Trees },
  { title: "Migration", desc: "Inclusive frameworks for diaspora engagement.", icon: MapPinned },
  { title: "Food Security", desc: "Sustainable local food systems and support for farmers.", icon: Heart },
  { title: "Vocational Training", desc: "Skills and entrepreneurship pipelines for youth.", icon: GraduationCap },
  { title: "AfCFTA", desc: "City-to-city trade facilitation and integration.", icon: Handshake },
  { title: "Peace Summit", desc: "Dialogue and reconciliation through local diplomacy.", icon: BadgeCheck },
];

const leadershipNetwork = [
  { name: "Hon. Johnny Ford", role: "Founder & CEO, World Conference of Mayors, USA", image: johnnyFord },
  { name: "Hon. Francis Opai Tetteh", role: "Country Director, World Conference of Mayors, Ghana", image: francisOpaiTetteh },
  { name: "Dr. Peter Kwesi Terkper", role: "Director, Finance & Accounting, WCM Ghana", image: terkper },
  { name: "Prof. Wakeelah Martinez", role: "CEO, Ghana Sankofa Empowerment Outreach, USA", image: wakeelahMartinez },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function App() {
  return (
    <SiteLayout>
      <main id="home">
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
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
              A policy-driven platform to rally, unite and empower mayors globally for national
              transformation, civic responsibility and continental partnership.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href="#programs"
                className="inline-flex items-center gap-1 rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-navy hover:bg-gold/90 transition-colors"
              >
                Explore the Programme
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Partner With Us
                <ChevronRight className="h-4 w-4" />
              </a>
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
            </Reveal>
            <div className="rounded-2xl bg-navy p-8 md:p-10 text-primary-foreground shadow-elegant">
              <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                Founder & President
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold">Dr. Peter Kwesi Terkper (PhD)</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">
                Makane Farmers Connect, Oyarifa, Accra, Ghana
              </p>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-secondary/40 py-24 border-y border-border">
          <div className="container-page">
            <Reveal className="max-w-2xl">
              <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                Policy Framework
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
                The missing details, now structured for the web
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {initiatives.slice(0, 4).map((p) => (
                <StaggerItem key={p.title}>
                  <div className="group relative h-full bg-card p-8 rounded-lg hover:border-gold/60 hover:shadow-elegant transition-all">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy text-gold">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-navy">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="leadership" className="container-page py-24">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <Reveal>
              <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                Leadership Network
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
                The people behind the chapter
              </h2>
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
                  <div className="flex flex-col items-center text-center rounded-lg p-6 h-full">
                    <img src={p.src} alt={p.name} className="h-24 w-auto object-contain" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="contact" className="container-page py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <span className="text-[0.74rem] uppercase tracking-[0.18em] text-gold font-extrabold">
                Contact
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy">
                Reach out to the WCM Ghana team
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Use the form to send a message. Set `VITE_CONTACT_API_URL` if your API lives
                somewhere else.
              </p>
            </Reveal>
            <ContactForm />
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL ?? "/api/contact";

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSent(false);

        const form = e.currentTarget;
        const payload = Object.fromEntries(new FormData(form).entries());

        try {
          const response = await fetch(contactApiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
          if (!response.ok || !data?.ok) throw new Error(data?.error || "Failed to send message.");
          form.reset();
          setSent(true);
          toast.success("Message sent");
        } catch (err) {
          const message = err instanceof Error ? err.message : "Failed to send message.";
          setError(message);
          toast.error("Message not sent", { description: message });
        } finally {
          setLoading(false);
        }
      }}
      className="space-y-5 rounded-lg border border-border bg-card p-8 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" name="name" />
        <Field label="Email Address" name="email" type="email" />
      </div>
      <Field label="Organization" name="org" />
      <Field label="Subject" name="subject" />
      <div>
        <label className="mb-2 block text-sm font-semibold text-navy">Message</label>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-md bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-navy-light disabled:opacity-60"
      >
        Send Message
      </button>
      {sent && <p className="text-sm font-medium text-green-700">Thanks, we'll be in touch shortly.</p>}
      {error && <p className="text-sm font-medium text-red-700">{error}</p>}
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30"
      />
    </div>
  );
}
