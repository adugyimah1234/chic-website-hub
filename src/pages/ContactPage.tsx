import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "./PageHeader";

const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL ?? "/api/contact";

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Partner with the African headquarters of WCM"
        subtitle="Reach out for partnerships, membership, media, or general enquiries. We typically respond within two business days."
      />

      <section className="container-page py-20 bg-white text-navy">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Details List */}
          <div className="space-y-5 lg:col-span-2">
            {[
              {
                icon: MapPin,
                label: "Office Location",
                value:
                  "Alhaji Azeez Building, 1st Floor, Room #3, Salem Junction, Adjiringanor, Accra, Ghana",
              },
              { icon: Mail, label: "Email Address", value: "info.wcmghana@gmail.com" },
              { icon: Phone, label: "Phone Contact", value: "+233 553 018 442" },
            ].map((c) => (
              <div
                key={c.label}
                className="group flex gap-4 rounded-2xl border border-steel-blue/20 bg-slate-50 p-6 hover:border-gold hover:shadow-elegant transition-colors"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-navy">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-steel-blue/20 bg-slate-50 p-6 text-navy">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-2">
                ( Office Hours )
              </h3>
              <p className="text-xs text-slate-600 font-mono">
                Monday - Friday · 9:00 AM - 5:00 PM GMT
              </p>
            </div>
          </div>

          {/* Contact Form */}
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
                const data = (await response.json().catch(() => null)) as {
                  ok?: boolean;
                  error?: string;
                } | null;
                if (!response.ok || !data?.ok)
                  throw new Error(data?.error || "Failed to send message.");
                form.reset();
                setSent(true);
                toast.success("Message sent", {
                  description: "We received your message and will reply soon.",
                });
              } catch (submitError) {
                const message =
                  submitError instanceof Error ? submitError.message : "Failed to send message.";
                setError(message);
                toast.error("Message not sent", { description: message });
              } finally {
                setLoading(false);
              }
            }}
            className="space-y-6 rounded-2xl border border-steel-blue/20 bg-white p-8 md:p-10 lg:col-span-3 shadow-elegant text-navy"
          >
            <h2 className="font-display text-2xl font-bold uppercase text-navy">
              Send us a message
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" name="name" />
              <Field label="Email Address" name="email" type="email" />
            </div>

            <Field label="Organization" name="org" />
            <Field label="Subject" name="subject" />

            <div className="sr-only" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label className="mb-2 block font-mono text-[9px] uppercase tracking-widest text-slate-500">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full rounded-xl border border-steel-blue/20 bg-slate-50 px-4 py-3 text-sm text-navy focus:border-gold/40 focus:ring-1 focus:ring-gold/30 focus:outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-navy transition-all hover:scale-[1.02] shadow-gold hover:shadow-xl cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              {loading ? "Sending..." : "Send Message"}
            </button>
            {sent && (
              <p className="text-xs font-mono text-green-600 font-semibold">
                Thanks, we'll be in touch shortly.
              </p>
            )}
            {error && <p className="text-xs font-mono text-red-600">{error}</p>}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[9px] uppercase tracking-widest text-slate-500"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded-xl border border-steel-blue/20 bg-slate-50 px-4 py-3 text-sm text-navy focus:border-gold/40 focus:ring-1 focus:ring-gold/30 focus:outline-none transition-all"
      />
    </div>
  );
}
