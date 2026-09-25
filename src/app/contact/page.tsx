import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { IconMail, IconMapPin, IconPhone } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Waqas Afzal & Co. for tax advisory and compliance support.",
};

// Placeholder contact details — update with the firm's real address, phone,
// and email before this goes live.
const contactDetails = [
  { icon: IconMapPin, label: "Office", value: "Office no. 1, first floor, plaza no. 74, Gulshanabad, Adyala road, Rawalpindi Pakistan" },
  { icon: IconPhone, label: "Phone", value: "+92 (51) 5573393" },
  { icon: IconMail, label: "Email", value: "info@wacopk.com" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your business"
        description="Send us a message and a member of our team will get back to you within one business day."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              Whether it&apos;s a quick question or a full engagement, we&apos;re happy to have
              a conversation first.
            </p>

            <ul className="mt-8 space-y-6">
              {contactDetails.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-canvas-alt text-crimson">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-ink-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-canvas-alt p-6 sm:p-8">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
