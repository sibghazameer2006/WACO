import Image from "next/image";
import Link from "next/link";
import { IconLinkedIn, IconMail, IconMapPin, IconPhone } from "./Icons";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/odoo-services", label: "Odoo Partner" },
  { href: "/contact", label: "Contact" },
];

const resources = [
  { href: "/blog", label: "Blog" },
  { href: "/downloads", label: "Downloads" },
  { href: "/services", label: "Tax Advisory" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/waco-logo.jpeg" alt="WACO logo" width={40} height={40} className="h-9 w-9" />
            <span className="font-serif text-base font-semibold">Waqas Afzal &amp; Co.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Chartered accountants and tax advisors serving clients across the UK, USA,
            Canada, and the Middle East since 2022.
          </p>
          <a
            href="#"
            aria-label="LinkedIn"
            className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-crimson hover:text-crimson"
          >
            <IconLinkedIn className="h-4 w-4" />
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-crimson">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
            Resources
          </h3>
          <ul className="mt-4 space-y-2.5">
            {resources.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-crimson">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
              <span>Office no. 1, first floor, plaza no. 74, Gulshanabad, Adyala road, Rawalpindi Pakistan</span>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 shrink-0 text-crimson" />
              <span>+92 (51) 5573393</span>
            </li>
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 shrink-0 text-crimson" />
              <span>info@wacopk.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} Waqas Afzal &amp; Co. All rights reserved.</p>
          <p>Chartered Accountants · Established 2022</p>
        </div>
      </div>
    </footer>
  );
}
