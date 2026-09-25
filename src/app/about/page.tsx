import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { IconBriefcase, IconGlobe, IconShield, IconUsers } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2022, Waqas Afzal & Co. is a chartered accountancy firm built for cross-border businesses.",
};

// Placeholder figures — replace with the firm's real numbers as they're confirmed.
const stats = [
  { label: "Founded", value: "2022" },
  { label: "Regions Served", value: "4" },
  { label: "Team Members", value: "4+" },
  { label: "Combined Experience", value: "15+ yrs" },
];

const values = [
  {
    icon: IconShield,
    title: "Integrity",
    description: "Straight answers and honest advice, even when it's not what a client hoped to hear.",
  },
  {
    icon: IconUsers,
    title: "Client-Centricity",
    description: "Every engagement is shaped around the client's business, not a one-size template.",
  },
  {
    icon: IconGlobe,
    title: "Cross-Border Fluency",
    description: "We think in multiple tax jurisdictions at once, because our clients operate in them.",
  },
  {
    icon: IconBriefcase,
    title: "Accountability",
    description: "Deadlines are commitments. We plan around them instead of scrambling to meet them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built to make cross-border compliance simple"
        description="A chartered accountancy firm founded on the idea that global ambitions shouldn't come with local compliance headaches."
        image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1800&q=80"
      />

      {/* Story */}
      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="From a single advisory desk to a cross-border practice"
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              <p>
                Waqas Afzal &amp; Co. was established in 2022 with a simple premise: businesses
                expanding beyond their home market needed an accountancy partner who understood
                more than one set of rules. What started as tax advisory for a handful of clients
                has grown into a practice spanning the UK, USA, Canada, and the Middle East.
              </p>
              <p>
                Today, the firm brings together chartered accountants, legal advisors, and
                offshore specialists under one roof — so clients get compliance, structuring,
                and advisory support without juggling multiple vendors across time zones.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=80"
              alt="Team working together in a modern office"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-14 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-semibold sm:text-4xl">{stat.value}</p>
              <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-canvas-alt py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-8">
            <h3 className="font-serif text-xl font-semibold text-ink">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              To give growing businesses a single, dependable advisory partner for tax and
              compliance — regardless of how many borders their operations cross.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-8">
            <h3 className="font-serif text-xl font-semibold text-ink">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              To be the first call for founders and finance teams navigating tax across the
              UK, USA, Canada, and the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What Guides Us" title="Our core values" align="center" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-canvas-alt text-crimson">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas-alt py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 text-center sm:px-8">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Want to know more about how we work?
          </h2>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-crimson-strong"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
