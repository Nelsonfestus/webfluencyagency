"use client";

import Link from "next/link";
import { SITE_METADATA, SERVICES, BOOKING_URL } from "@/content/site-content";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.08)] bg-[#0a0a0a] text-[#fafafa]">
      {/* Upper Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-baseline">
              <span className="font-display text-3xl font-bold tracking-tight">webfluency</span>
              <span className="font-display text-3xl font-bold text-[#b6f419]">.</span>
            </Link>
            <p className="text-sm text-[#8c8c8a] leading-relaxed max-w-xs">
              We fix business problems with websites, search visibility and practical AI.
              Built for commercial outcomes. Zero fluff.
            </p>
            <div className="pt-2 space-y-2 font-mono text-xs">
              <div>
                <span className="text-[#8c8c8a]">Email: </span>
                <a
                  href={`mailto:${SITE_METADATA.contact.email}`}
                  className="text-[#fafafa] hover:text-[#b6f419] transition-colors"
                >
                  {SITE_METADATA.contact.email}
                </a>
              </div>
              <div>
                <span className="text-[#8c8c8a]">Phone: </span>
                <a
                  href={`tel:${SITE_METADATA.contact.phone}`}
                  className="text-[#fafafa] hover:text-[#b6f419] transition-colors"
                >
                  {SITE_METADATA.contact.phone}
                </a>
                <span className="ml-2 text-[#555] text-[11px]">[PLACEHOLDER]</span>
              </div>
              <div>
                <span className="text-[#8c8c8a]">Base: </span>
                <span className="text-[#fafafa]">{SITE_METADATA.contact.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {SITE_METADATA.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] font-mono text-[11px] text-[#8c8c8a] hover:border-[#b6f419] hover:text-[#b6f419] transition-colors"
                >
                  {s.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4">
            <div className="font-mono text-xs text-[#8c8c8a] uppercase tracking-widest mb-5">
              Core Services
            </div>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center justify-between text-sm text-[#fafafa] hover:text-[#b6f419] transition-colors border-b border-transparent hover:border-[rgba(182,244,25,0.3)] pb-1"
                  >
                    <span>
                      <span className="font-mono text-[11px] text-[#8c8c8a] mr-3 group-hover:text-[#b6f419]">
                        {s.number}
                      </span>
                      {s.title}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav + CTA Column */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div>
              <div className="font-mono text-xs text-[#8c8c8a] uppercase tracking-widest mb-5">
                Quick Navigation
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "Why Us", href: "/#why-us" },
                  { label: "Services", href: "/#services" },
                  { label: "Selected Work", href: "/#work" },
                  { label: "Process", href: "/#process" },
                  { label: "FAQ", href: "/#faq" },
                  { label: "Models", href: "/#models" },
                  { label: "Contact", href: "/#contact" },
                  { label: "Website & Software APIs", href: "/apis" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#8c8c8a] hover:text-[#b6f419] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer CTA Box */}
            <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#181818] p-6">
              <div className="font-display text-lg font-bold text-[#fafafa] mb-2">
                Ready to start?
              </div>
              <p className="font-mono text-xs text-[#8c8c8a] leading-relaxed mb-5">
                One 20-minute call. No decks. Just a straight diagnosis of your biggest digital bottleneck.
              </p>
              <MagneticButton
                href={BOOKING_URL}
                variant="primary"
                className="w-full justify-center text-xs"
                magnetic={false}
              >
                Book a Free Call
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Footer Bar */}
      <div className="border-t border-[rgba(255,255,255,0.06)] bg-[#060606]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#555]">
          <div>
            &copy; {year} Webfluency Agency. All rights reserved.
            <span className="mx-2 text-[#333]">|</span>
            Registered as{" "}
            <span className="text-[#444]">[LEGAL ENTITY NAME — PLACEHOLDER]</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#8c8c8a] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#8c8c8a] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
