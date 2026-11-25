"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import { BOOKING_URL } from "@/content/site-content";

const REPEATED = Array(6).fill("Let's talk about your project");

export default function FinalCta({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section
      id="contact"
      className="relative border-b border-[rgba(255,255,255,0.08)] bg-[#131313] py-24 sm:py-36 overflow-hidden"
    >
      {/* Giant repeating marquee headline */}
      <div className="mb-16 overflow-hidden select-none py-2">
        <div className="flex w-max animate-marquee-infinite items-baseline gap-10">
          {REPEATED.map((text, i) => (
            <span
              key={i}
              className={`font-display font-bold tracking-tight leading-none whitespace-nowrap ${
                i % 2 === 0
                  ? "text-5xl sm:text-7xl md:text-8xl text-[rgba(255,255,255,0.08)]"
                  : "text-5xl sm:text-7xl md:text-8xl text-[rgba(255,255,255,0.08)]"
              }`}
            >
              {text}
              <span className="ml-10 text-[#b6f419]">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Center CTA block */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span className="font-mono text-xs text-[#b6f419] uppercase tracking-widest">
          (10) &bull; Start the Conversation
        </span>

        <h2 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fafafa] leading-[1.0]">
          Ready to build something that actually
          <span className="block mt-2 text-[#b6f419]">moves the needle?</span>
        </h2>

        <p className="mt-8 text-base sm:text-xl text-[#8c8c8a] max-w-xl mx-auto leading-relaxed">
          Book a 20-minute, no-pressure discovery call. We&apos;ll diagnose your biggest
          commercial bottleneck and outline exactly what it would take to fix it.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href={BOOKING_URL}
            variant="primary"
            className="text-sm py-5 px-10 shadow-[0_0_40px_rgba(182,244,25,0.3)]"
          >
            Book a Call
          </MagneticButton>

          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#8c8c8a] hover:text-[#b6f419] transition-colors py-5 px-6"
          >
            or send us a message →
          </button>
        </div>

        {/* Trust chips */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-[#8c8c8a]">
          <span className="flex items-center gap-2 rounded-pill border border-[rgba(255,255,255,0.08)] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419]" />
            No obligation whatsoever
          </span>
          <span className="flex items-center gap-2 rounded-pill border border-[rgba(255,255,255,0.08)] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419]" />
            20 minutes of your time
          </span>
          <span className="flex items-center gap-2 rounded-pill border border-[rgba(255,255,255,0.08)] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419]" />
            Direct access to senior strategist
          </span>
        </div>
      </div>

      {/* Repeating bottom marquee */}
      <div className="mt-16 overflow-hidden select-none py-2">
        <div className="flex w-max animate-marquee-reverse items-baseline gap-10">
          {REPEATED.map((text, i) => (
            <span
              key={i}
              className="font-display font-bold tracking-tight leading-none whitespace-nowrap text-5xl sm:text-7xl md:text-8xl text-[rgba(255,255,255,0.05)]"
            >
              {text}
              <span className="ml-10 text-[rgba(182,244,25,0.15)]">&bull;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
