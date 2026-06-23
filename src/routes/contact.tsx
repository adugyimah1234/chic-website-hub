import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — WCM Ghana" },
      { name: "description", content: "Get in touch with the World Conference of Mayors, Ghana — partnerships, membership and media enquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's build the next chapter together" subtitle="Reach out for partnerships, membership, media or general enquiries — our team responds within two business days." />

      <section className="container-page py-20">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, label: "Office", value: "Alhaji Azeez Building, 1st Floor, Room #3, Salem Junction, Adjiringanor, Accra, Ghana" },
              { icon: Mail, label: "Email", value: "info.wcmghana@gmail.com" },
              { icon: Phone, label: "Phone", value: "+233 553 018 442" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 p-6 bg-card border border-border rounded-lg hover:-translate-y-1 hover:shadow-elegant hover:border-gold/50 transition-all duration-300">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-gold">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.label}</p>
                  <p className="mt-1 text-navy font-medium leading-relaxed">{c.value}</p>
                </div>
              </div>
            ))}
            <div className="p-6 bg-navy text-primary-foreground rounded-lg">
              <h3 className="font-display text-lg font-bold text-gold">Office Hours</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">Monday – Friday · 9:00 AM – 5:00 PM GMT</p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 bg-card border border-border rounded-lg p-8 md:p-10 space-y-5"
          >
            <h2 className="font-display text-2xl font-bold text-navy">Send us a message</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" />
              <Field label="Email Address" name="email" type="email" />
            </div>
            <Field label="Organization" name="org" />
            <Field label="Subject" name="subject" />
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Message</label>
              <textarea required rows={5} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30" />
            </div>
            <button type="submit" className="group inline-flex items-center gap-2 rounded-md bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-navy-light hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg transition-all duration-200">
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" /> Send Message
            </button>
            {sent && <p className="text-sm text-green-700 font-medium">Thanks — we'll be in touch shortly.</p>}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-navy mb-2">{label}</label>
      <input id={name} name={name} type={type} required className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30" />
    </div>
  );
}
