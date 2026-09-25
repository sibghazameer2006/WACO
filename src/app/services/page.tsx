import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { serviceIcon, IconArrowRight, IconCheck } from "@/components/Icons";
import { coreServices, regions, taxAdvisorySubServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tax advisory, FBR compliance, offshore accounting, and cross-border services across the UK, USA, Canada, and the Middle East.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Tax advisory and compliance, wherever your business operates"
        description="A single point of contact for accounting and compliance across four regions — built around one core discipline: tax advisory."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
        sans
      />

      {/* Regions */}
      <section className="relative overflow-hidden bg-charcoal py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Where We Work"
            title="Regional presence, local knowledge"
            description="Our advisory work spans four regions, each with its own compliance calendar and regulatory nuance."
            align="center"
            sans
          />
          <div className="mx-auto mt-12 grid max-w-5xl divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {regions.map((region) => (
              <div key={region.name} className="py-6 first:pt-0 sm:px-6 sm:py-0 first:sm:pl-0 last:sm:pr-0">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-white">
                  {region.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Advisory — main service */}
      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Core Discipline"
            title="Offshore Accounting Solutions"
            description="Everything else we offer sits around this. From registration to ongoing filings, we plan ahead rather than react to deadlines."
            sans
          />

          <div className="mt-12 divide-y divide-line">
            {taxAdvisorySubServices.map((service) => {
              const Icon = serviceIcon[service.icon];
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-28 grid gap-6 py-10 first:pt-0 last:pb-0 sm:grid-cols-12 sm:gap-10"
                >
                  <div className="sm:col-span-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-crimson">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-4 font-sans text-lg font-semibold tracking-tight text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                  </div>

                  <div className="sm:col-span-8">
                    <p className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                      {service.details}
                    </p>
                    <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {service.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-[13.5px] leading-snug text-ink"
                        >
                          <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-crimson px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-crimson-strong"
                    >
                      Avail This Service
                      <IconArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supporting services
      <section className="bg-canvas-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Also Available" title="Beyond tax advisory" />

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {coreServices.map((service) => {
              const Icon = serviceIcon[service.icon];
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-line bg-surface p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-canvas text-crimson">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="border-t border-line bg-canvas py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 text-center sm:px-8">
          <h2 className="font-sans text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Not sure which service you need?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-ink-muted">
            Tell us about your business and we&apos;ll point you to the right starting
            point — no obligation.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-crimson-strong"
          >
            Talk to an Advisor
          </Link>
        </div>
      </section>
    </>
  );
}
