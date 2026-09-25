import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { serviceIcon, IconArrowRight } from "../Icons";
import { taxAdvisorySubServices } from "@/data/services";

// Offshore services are our main offering — lead the preview with them,
// then fill the remaining slots with the rest in their usual order.
const featuredSlugs = ["offshore-bookkeeping", "offshore-audit-support"];
const preview = [
  ...taxAdvisorySubServices.filter((service) => featuredSlugs.includes(service.slug)),
  ...taxAdvisorySubServices.filter((service) => !featuredSlugs.includes(service.slug)),
].slice(0, 4);

export default function ServicesOverview() {
  return (
    <section className="bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Offshore Accounting Solutions"
          description="From offshore bookkeeping and audit support to FBR compliance, our services are built to keep cross-border businesses compliant and audit-ready."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((service) => {
            const Icon = serviceIcon[service.icon];
            return (
              <Link
                key={service.title}
                href={`/services#${service.slug}`}
                className="group rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-crimson hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-canvas-alt text-crimson">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-crimson opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <IconArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-crimson hover:text-crimson-strong"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
