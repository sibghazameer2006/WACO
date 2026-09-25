import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { IconBriefcase, IconChart, IconGlobe, IconUsers } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Odoo Services",
  description:
    "As an Odoo implementation partner, Waqas Afzal & Co. helps businesses set up and run Odoo ERP end to end.",
};

const offerings = [
  {
    icon: IconBriefcase,
    title: "Implementation",
    description: "Scoped rollouts of Odoo's Accounting, Invoicing, and Inventory apps, done right the first time.",
  },
  {
    icon: IconChart,
    title: "Customization",
    description: "Configuring workflows, reports, and modules around how your business actually operates.",
  },
  {
    icon: IconGlobe,
    title: "Integration",
    description: "Connecting Odoo to your existing tools so financial data flows in one direction, not five.",
  },
  {
    icon: IconUsers,
    title: "Training & Support",
    description: "Getting your team confident on the platform, with ongoing support after go-live.",
  },
];

export default function OdooServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Odoo Partner"
        title="Odoo ERP, implemented by the people who use it for accounting"
        description="As an Odoo implementation partner, we help businesses set up and run the platform end to end — not just install it."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Why Odoo"
            title="One platform, most of what a growing business needs"
            align="center"
          />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Odoo brings accounting, invoicing, inventory, HR, and CRM together in a single,
            modular suite. It&apos;s open, affordable to scale, and flexible enough to fit
            businesses well beyond the out-of-the-box setup — which is exactly why we use it
            with our own accounting clients, and why we became an implementation partner.
          </p>
        </div>
      </section>

      <section className="bg-canvas-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What We Offer" title="Odoo services we provide" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-canvas text-crimson">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 text-center sm:px-8">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Considering Odoo for your business?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-ink-muted">
            We can walk you through whether it&apos;s the right fit, and what a rollout would
            look like for your team.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-crimson-strong"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
