"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { IconClose, IconMenu } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/odoo-services", label: "Odoo Partner" },
  { href: "/blog", label: "Blog" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/waco-logo.jpeg" alt="WACO logo" width={42} height={42} className="h-10 w-10" />
          <span className="leading-tight">
            <span className="block font-sans text-[15px] font-semibold tracking-tight text-ink sm:text-base">
              Waqas Afzal &amp; Co.
            </span>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-ink-muted sm:text-[11px]">
              Chartered Accountants
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-crimson ${
                  active ? "text-crimson" : "text-ink-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-crimson px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-crimson-strong"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
          >
            {open ? <IconClose className="h-4 w-4" /> : <IconMenu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-canvas px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active ? "bg-canvas-alt text-crimson" : "text-ink-muted hover:bg-canvas-alt"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
