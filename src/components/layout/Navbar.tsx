"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import MenuOverlay from "@/components/layout/MenuOverlay";
import { BOOKING_URL } from "@/content/site-content";

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scrolled past threshold
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <div
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
              isScrolled
                ? "bg-[#131313]/85 backdrop-blur-md border border-[rgba(255,255,255,0.1)] shadow-2xl shadow-black/50"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center font-display text-xl sm:text-2xl font-bold tracking-tight text-[#fafafa]"
            >
              <span>webfluency</span>
              <span className="text-[#b6f419] transition-transform duration-300 group-hover:scale-125">
                .
              </span>
            </Link>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-3">
              <Link
                href="/apis"
                className="inline-flex h-10 items-center rounded-full border border-[rgba(255,255,255,0.15)] bg-[#181818]/90 px-4 font-mono text-xs font-medium text-[#fafafa] transition-all hover:border-[#b6f419] hover:text-[#b6f419]"
              >
                APIs
              </Link>
              <MagneticButton
                href={BOOKING_URL}
                variant="primary"
                className="hidden md:inline-flex text-xs py-2.5 px-5"
              >
                Book a Call
              </MagneticButton>

              {/* Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="group flex h-10 items-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-[#181818]/90 px-4 text-xs font-mono font-medium text-[#fafafa] transition-all hover:border-[#b6f419] hover:text-[#b6f419]"
              >
                <span>MENU</span>
                <span className="flex flex-col gap-1">
                  <span className="h-[2px] w-3.5 bg-current transition-all group-hover:w-4" />
                  <span className="h-[2px] w-2 bg-[#b6f419] transition-all group-hover:w-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenContact={() => {
          setIsMenuOpen(false);
          onOpenContact?.();
        }}
      />
    </>
  );
}
