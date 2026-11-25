"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { BOOKING_URL, SITE_METADATA } from "@/content/site-content";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "/#top", number: "01" },
  { label: "Services", href: "/#services", number: "02" },
  { label: "Why Webfluency", href: "/#why-us", number: "03" },
  { label: "Process", href: "/#process", number: "04" },
  { label: "Models & Pricing", href: "/#models", number: "05" },
  { label: "Website & Software APIs", href: "/apis", number: "06" },
];

export default function MenuOverlay({ isOpen, onClose, onOpenContact }: MenuOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99990] flex flex-col justify-between bg-[#0a0a0a]/95 backdrop-blur-2xl px-6 py-8 md:px-16 md:py-12 text-[#fafafa] transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-6">
        <Link
          href="/"
          onClick={onClose}
          className="font-display text-2xl font-bold tracking-tight text-[#fafafa]"
        >
          webfluency<span className="text-[#b6f419]">.</span>
        </Link>

        <div className="flex items-center gap-4">
          <MagneticButton
            href={BOOKING_URL}
            variant="primary"
            className="hidden sm:inline-flex"
          >
            Book a Call
          </MagneticButton>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(255,255,255,0.15)] bg-[#181818] text-[#fafafa] transition-colors hover:border-[#b6f419] hover:text-[#b6f419]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Navigation Links */}
      <div className="my-auto grid grid-cols-1 md:grid-cols-12 gap-8 py-8">
        <nav className="md:col-span-8 flex flex-col space-y-2">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] py-2 md:py-3 transition-colors hover:border-[#b6f419]"
              style={{
                animation: `fadeInUp 0.4s cubic-bezier(0.19, 1, 0.22, 1) ${idx * 0.05}s backwards`,
              }}
            >
              <div className="flex items-baseline gap-4 md:gap-6">
                <span className="font-mono text-xs text-[#8c8c8a] group-hover:text-[#b6f419] transition-colors">
                  {link.number}
                </span>
                <span className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors group-hover:translate-x-2 duration-300">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#8c8c8a] opacity-0 group-hover:opacity-100 group-hover:text-[#b6f419] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}

          {/* Contact trigger in nav */}
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="group flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] py-2 md:py-3 text-left transition-colors hover:border-[#b6f419]"
            style={{
              animation: `fadeInUp 0.4s cubic-bezier(0.19, 1, 0.22, 1) 0.4s backwards`,
            }}
          >
            <div className="flex items-baseline gap-4 md:gap-6">
              <span className="font-mono text-xs text-[#8c8c8a] group-hover:text-[#b6f419] transition-colors">
                07
              </span>
              <span className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors group-hover:translate-x-2 duration-300">
                Send Message / Inquire
              </span>
            </div>
            <ArrowUpRight className="h-5 w-5 text-[#8c8c8a] opacity-0 group-hover:opacity-100 group-hover:text-[#b6f419] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </nav>

        {/* Agency Info Sidebar */}
        <div className="md:col-span-4 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.08)] pt-6 md:pt-0 md:pl-10 font-mono text-xs">
          <div className="space-y-6">
            <div>
              <p className="text-[#8c8c8a] uppercase tracking-wider mb-2">Our Stance</p>
              <p className="text-sm font-sans text-[#fafafa] leading-relaxed">
                We fix business problems with websites, SEO and practical AI. Built for commercial clarity and zero fluff.
              </p>
            </div>

            <div>
              <p className="text-[#8c8c8a] uppercase tracking-wider mb-2">Direct Inquiry</p>
              <a
                href={`mailto:${SITE_METADATA.contact.email}`}
                className="text-sm text-[#fafafa] hover:text-[#b6f419] transition-colors"
              >
                {SITE_METADATA.contact.email}
              </a>
              <p className="mt-1 text-sm text-[#8c8c8a]">{SITE_METADATA.contact.phone}</p>
            </div>
          </div>

          <div className="pt-6">
            <MagneticButton
              href={BOOKING_URL}
              variant="primary"
              className="w-full justify-between"
            >
              Book Discovery Call
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[rgba(255,255,255,0.08)] pt-6 font-mono text-xs text-[#8c8c8a]">
        <div>&copy; {new Date().getFullYear()} Webfluency Agency. All rights reserved.</div>
        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          {SITE_METADATA.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b6f419] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
