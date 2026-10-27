// components/sections/footer.tsx  (SERVER component — no "use client")
import * as React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import NewsletterForm from "./NewsletterForm";


const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "My Profile", href: "/profile" },
];

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const contact = [
  { label: "786 901 1622", href: "tel:7869011622" },
  { label: "info@wandarland.com", href: "mailto:info@wandarland.com" },
];

const socials = [
  { label: "X", href: "https://x.com", icon: FaXTwitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-lg font-normal uppercase text-white">
      {children}
    </h3>
  );
}

const linkClass = "text-base text-neutral-300 transition-colors hover:text-white";

// Time-dependent value lives in a cached server component, so it is
// computed once and reused instead of being read during every prerender.
async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[1280px] px-6 pt-20 lg:px-20">
        {/* Brand */}
        <div>
          <p className="font-logo text-6xl font-bold leading-none tracking-tight md:text-[80px]">
            Wanderlust
          </p>
          <p className="mt-3 text-base text-neutral-300 md:text-lg">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Columns */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.57fr_1fr_1fr_1fr] lg:gap-0">
          {/* Newsletter */}
          <div>
            <ColumnTitle>Newsletter</ColumnTitle>
            <p className="mt-2 text-sm text-neutral-300">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <NewsletterForm />
          </div>

          {/* Quick links */}
          <div>
            <ColumnTitle>Quick Links</ColumnTitle>
            <ul className="mt-5 space-y-4">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <ColumnTitle>Support</ColumnTitle>
            <ul className="mt-5 space-y-4">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColumnTitle>Contact Us</ColumnTitle>
            <ul className="mt-5 space-y-4">
              {contact.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className={linkClass}>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 py-8 sm:flex-row">
          <p className="text-sm text-neutral-300">
            &copy; <CurrentYear /> Wanderlust. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white transition-opacity hover:opacity-70"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}