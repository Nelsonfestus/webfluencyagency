"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/content/site-content";

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      gsap.utils.toArray<HTMLElement>("[data-stat-card]").forEach((el, i) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-[rgba(255,255,255,0.08)] bg-[#0a0a0a] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-[#b6f419] uppercase tracking-widest">
            (07) &bull; Proof of Concept
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#fafafa]">
            Numbers Behind the Method.
          </h2>
          <p className="mt-4 text-sm text-[#8c8c8a] max-w-xl mx-auto">
            All stats marked{" "}
            <span className="text-[#b6f419] font-mono">[00]</span> are clearly
            labelled placeholders — replace them with your verified client data
            before publishing.
          </p>
        </div>

        {/* 4-column stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              data-stat-card
              className="group relative flex flex-col rounded-card border border-[rgba(255,255,255,0.1)] bg-[#181818] p-8 hover:border-[#b6f419] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Accent glow on hover */}
              <div className="absolute inset-0 rounded-card bg-[radial-gradient(circle_at_top_left,rgba(182,244,25,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-[#b6f419] mb-3">
                {stat.value}
              </div>
              <h3 className="font-display text-lg font-semibold text-[#fafafa] mb-2 leading-snug">
                {stat.label}
              </h3>
              <p className="font-mono text-xs text-[#8c8c8a] leading-relaxed mt-auto pt-3 border-t border-[rgba(255,255,255,0.08)]">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
