import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { IconCheck } from "../Icons";

const points = [
  {
    title: "Cross-Border Expertise",
    description: "Hands-on experience across UK, US, Canadian, and Middle East tax regimes.",
  },
  {
    title: "Certified Professionals",
    description: "A team of chartered accountants, advocates, and advisors under one roof.",
  },
  {
    title: "Client-Centric Approach",
    description: "Direct access to your advisor — no hand-offs, no waiting in a queue.",
  },
  {
    title: "Timely & Transparent",
    description: "Clear timelines and clear fees, with no surprises when the invoice arrives.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-canvas-alt py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-2xl lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
            alt="Two professionals shaking hands"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for businesses that operate across borders"
            description="We work the way our clients do — across time zones and jurisdictions — so nothing falls through the cracks."
          />

          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="font-medium text-ink">{point.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
