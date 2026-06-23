import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - WCM Ghana" },
      {
        name: "description",
        content:
          "Contact WCM Ghana for partnerships, membership, media, or general enquiries.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build the next chapter together"
        subtitle="Reach out for partnerships, membership, media, or general enquiries. We typically respond within two business days."
      />

      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {[
              {
                icon: MapPin,
                label: "Office",
                value:
                  "Alhaji Azeez Building, 1st Floor, Room #3, Salem Junction, Adjiringanor, Accra, Ghana",
              },
              { icon: Mail, label: "Email", value: "ghanawcm@gmail.com" },
              { icon: Phone, label: "Phone", value: "+233 553 018 442" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-gold">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-1 font-medium leading-relaxed text-navy">{c.value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-lg bg-navy p-6 text-primary-foreground">
              <h3 className="font-display text-lg font-bold text-gold">Office Hours</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Monday - Friday · 9:00 AM - 5:00 PM GMT
              </p>
            </div>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setError(null);
              setSent(false);

              const form = e.currentTarget;
              const formData = new FormData(form);
              const payload = Object.fromEntries(formData.entries());

              try {
                const response = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });

                const data = (await response.json().catch(() => null)) as {
                  ok?: boolean;
                  error?: string;
                } | null;

                if (!response.ok || !data?.ok) {
                  throw new Error(data?.error || "Failed to send message.");
                }

                form.reset();
                setSent(true);
                toast.success("Message sent", {
                  description: "We received your message and will reply soon.",
                });
              } catch (submitError) {
                setError(
                  submitError instanceof Error ? submitError.message : "Failed to send message.",
                );
                toast.error("Message not sent", {
                  description:
                    submitError instanceof Error
                      ? submitError.message
                      : "Please try again in a moment.",
                });
              } finally {
                setLoading(false);
              }
            }}
            className="space-y-5 rounded-lg border border-border bg-card p-8 md:p-10 lg:col-span-3"
          >
            <h2 className="font-display text-2xl font-bold text-navy">Send us a message</h2>
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
              className="group inline-flex items-center gap-2 rounded-md bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              {loading ? "Sending..." : "Send Message"}
            </button>
            {sent && (
              <p className="text-sm font-medium text-green-700">
                Thanks, we'll be in touch shortly.
              </p>
            )}
            {error && <p className="text-sm font-medium text-red-700">{error}</p>}
          </form>
        </div>
      </section>
    </>
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
