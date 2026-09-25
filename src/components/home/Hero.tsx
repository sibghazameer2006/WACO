import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "../Icons";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-charcoal text-white">
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
        alt="City skyline of glass office towers"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-24 text-center sm:px-8">
        <span className="animate-fade-up rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
          Chartered Accountants · Est. 2022
        </span>

        <h1
          className="animate-fade-up mt-7 w-full font-sans  text-4xl font-semibold leading-tight text-balance sm:text-6xl"
          style={{ animationDelay: "0.1s" }}
        >
          Waqas Afzal &amp; Co.
        </h1>

        <p
          className="animate-fade-up mt-6 w-full max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          A cross-border chartered accountancy and tax advisory firm helping businesses
          across the UK, USA, Canada, and the Middle East stay compliant, well-structured,
          and ready to grow — backed by a team that pairs local expertise with
          international standards.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-crimson-strong"
          >
            Our Services
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/60"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
