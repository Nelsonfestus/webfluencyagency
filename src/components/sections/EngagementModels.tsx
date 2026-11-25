"use client";

import { ENGAGEMENT_MODELS, BOOKING_URL, SITE_METADATA } from "@/content/site-content";
import MagneticButton from "@/components/ui/MagneticButton";
import { Check } from "lucide-react";

export default function EngagementModels() {
  return (
    <section
      id="models"
      className="relative border-b border-[rgba(255,255,255,0.08)] bg-[#131313] py-24 sm:py-32 overflow-hidden"
    >
      {/* Top marquee band */}
      <div className="mb-20 overflow-hidden border-y border-[rgba(255,255,255,0.06)] bg-[#0a0a0a] py-4 select-none">
        <div className="flex w-max animate-marquee-reverse gap-8 font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[rgba(255,255,255,0.15)]">
          <span>Flexible Partnerships</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Fixed-Scope Projects</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Monthly Retainers</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>On-Demand Support</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Flexible Partnerships</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Fixed-Scope Projects</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Monthly Retainers</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>On-Demand Support</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-xs text-[#b6f419] uppercase tracking-widest">
            (05) &bull; How We Engage
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#fafafa] leading-tight">
            Choose the Model That Fits Your Stage.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#8c8c8a]">
            From single-deliverable builds to full commercial growth partnerships.
            No lock-ins — just clear structure and genuine alignment.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model) => (
            <div
              key={model.id}
              className={`group relative flex flex-col rounded-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-7 overflow-hidden ${
                model.featured
                  ? "border-[#b6f419] bg-[#b6f419]/5 hover:shadow-[0_20px_60px_rgba(182,244,25,0.12)]"
                  : "border-[rgba(255,255,255,0.1)] bg-[#181818] hover:border-[#b6f419]"
              }`}
            >
              {/* Neon accent border glow on hover */}
              {model.featured && (
                <div className="pointer-events-none absolute inset-0 rounded-card border border-[#b6f419] opacity-100" />
              )}

              {/* Featured Badge */}
              {model.featured && (
                <div className="mb-4 inline-flex self-start items-center gap-2 rounded-pill bg-[#b6f419] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-black">
                  <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
                  {model.label}
                </div>
              )}

              {!model.featured && (
                <div className="mb-4 inline-flex self-start items-center gap-2 rounded-pill border border-[rgba(255,255,255,0.1)] px-3 py-1 font-mono text-[11px] text-[#8c8c8a] uppercase tracking-wider">
                  {model.label}
                </div>
              )}

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#fafafa] mb-3 group-hover:text-[#b6f419] transition-colors">
                {model.title}
              </h3>

              <p className="text-sm text-[#8c8c8a] leading-relaxed mb-6 border-b border-[rgba(255,255,255,0.08)] pb-6">
                {model.description}
              </p>

              {/* Price Tag */}
              <div className="mb-6 font-mono text-xs text-[#b6f419] uppercase tracking-wider flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#b6f419]" />
                {model.priceTag}
              </div>

              {/* Features List */}
              <ul className="flex-1 space-y-3 mb-8">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#fafafa]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b6f419]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <MagneticButton
                href={BOOKING_URL}
                variant={model.featured ? "primary" : "secondary"}
                className="w-full justify-between text-xs py-3.5"
                magnetic={false}
              >
                {model.ctaText}
              </MagneticButton>
            </div>
          ))}
        </div>

        {/* Bottom trust note */}
        <p className="mt-10 text-center font-mono text-xs text-[#8c8c8a]">
          No lock-in contracts &bull; Transparent scoping &bull; Commercial results defined before work begins &bull;{" "}
          <a href={`mailto:${SITE_METADATA.contact.email}`} className="text-[#b6f419] hover:underline">
            Custom enterprise arrangements available
          </a>
        </p>
      </div>
    </section>
  );
}
