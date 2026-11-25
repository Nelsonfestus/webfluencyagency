"use client";

import Image from "next/image";
import { CASE_STUDIES, FEATURED_CASE_STUDY, BOOKING_URL } from "@/content/site-content";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Quote } from "lucide-react";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative border-b border-[rgba(255,255,255,0.08)] bg-[#131313] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(255,255,255,0.1)] pb-12">
          <div>
            <span className="font-mono text-xs text-[#b6f419] uppercase tracking-widest">
              (06) &bull; Case Studies
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#fafafa] leading-tight">
              Selected Work.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm text-[#8c8c8a] leading-relaxed mb-4">
              Placeholder projects shown below — ready to be replaced with your real case studies and results.
            </p>
            <span className="inline-block rounded-pill border border-[rgba(255,255,255,0.1)] px-4 py-1.5 font-mono text-[11px] text-[#8c8c8a]">
              [REPLACE WITH YOUR REAL WORK]
            </span>
          </div>
        </div>

        {/* 2x2 Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              data-cursor="view"
              className="group relative overflow-hidden rounded-card border border-[rgba(255,255,255,0.1)] bg-[#181818] cursor-none transition-all duration-500 hover:border-[#b6f419]/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <Image
                  src={study.image}
                  alt={`${study.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />

                {/* Placeholder notice pill */}
                <div className="absolute top-4 left-4 rounded-pill bg-[#000]/70 px-3 py-1 font-mono text-[10px] text-[#8c8c8a] border border-[rgba(255,255,255,0.1)]">
                  PLACEHOLDER
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 right-4 rounded-pill bg-[#b6f419]/90 px-3 py-1 font-mono text-[11px] font-bold text-black">
                  {study.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors mb-2">
                      {study.title}
                    </h3>
                    <p className="font-mono text-xs text-[#b6f419] mb-4">{study.result}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#8c8c8a] group-hover:text-[#b6f419] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-pill border border-[rgba(255,255,255,0.1)] bg-[#121212] px-3 py-1 font-mono text-[11px] text-[#8c8c8a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study — Full Width */}
        <div className="mt-20 rounded-card border border-[rgba(255,255,255,0.1)] bg-[#0d0d0d] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Text Content */}
            <div className="flex flex-col justify-between p-8 sm:p-12">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-pill border border-[#b6f419]/30 bg-[#b6f419]/10 px-4 py-1.5 font-mono text-[11px] text-[#b6f419]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419] animate-pulse" />
                  FEATURED CASE STUDY [PLACEHOLDER]
                </div>

                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#fafafa] leading-tight mb-6">
                  {FEATURED_CASE_STUDY.headline}
                </h2>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {FEATURED_CASE_STUDY.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#181818] p-4"
                    >
                      <div className="font-display text-2xl sm:text-3xl font-bold text-[#b6f419]">
                        {m.value}
                      </div>
                      <div className="font-mono text-[11px] text-[#8c8c8a] mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              <blockquote className="border-l-2 border-[#b6f419] pl-6 mt-6">
                <Quote className="h-5 w-5 text-[#b6f419] mb-3" />
                <p className="text-sm sm:text-base text-[#fafafa] italic leading-relaxed mb-4">
                  &ldquo;{FEATURED_CASE_STUDY.quote}&rdquo;
                </p>
                <footer className="font-mono text-xs text-[#8c8c8a]">
                  <span className="text-[#fafafa] font-semibold">{FEATURED_CASE_STUDY.quoteAuthor}</span>
                  <br />
                  {FEATURED_CASE_STUDY.quoteRole}
                </footer>
              </blockquote>
            </div>

            {/* Image */}
            <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden">
              <Image
                src={FEATURED_CASE_STUDY.image}
                alt="Featured case study preview"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale-[40%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <MagneticButton href={BOOKING_URL} variant="primary" className="text-sm py-4 px-10">
            Discuss Your Project Brief
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
