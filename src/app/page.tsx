"use client";

import { useState } from "react";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CustomCursor from "@/components/motion/CustomCursor";
import Preloader from "@/components/motion/Preloader";
import Navbar from "@/components/layout/Navbar";
import ContactModal from "@/components/layout/ContactModal";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";

import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import WhyWebfluency from "@/components/sections/WhyWebfluency";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import EngagementModels from "@/components/sections/EngagementModels";
import Stats from "@/components/sections/Stats";
import TechMarquee from "@/components/sections/TechMarquee";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function HomePage() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <SmoothScroll>
      <CustomCursor />

      {/* Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Skip to main content (accessibility) */}
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:rounded-pill focus:bg-[#b6f419] focus:px-6 focus:py-3 focus:font-mono focus:text-xs focus:font-bold focus:text-black focus:uppercase"
      >
        Skip to main content
      </a>

      <Navbar onOpenContact={() => setContactOpen(true)} />

      <main id="main-content">
        <Hero ready={preloaderDone} />
        <LogoMarquee />
        <WhyWebfluency />
        <Services />
        <Process />
        <EngagementModels />
        <Stats />
        <TechMarquee />
        <Faq />
        <FinalCta onOpenContact={() => setContactOpen(true)} />
      </main>

      <Footer />

      {/* Mobile sticky booking bar */}
      <MobileStickyBar onOpenContact={() => setContactOpen(true)} />

      {/* Contact slide-over modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </SmoothScroll>
  );
}
