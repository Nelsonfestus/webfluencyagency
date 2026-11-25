"use client";

import { useState } from "react";
import { WHY_US_CARDS } from "@/content/site-content";
import { Check, ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";

export default function WhyWebfluency() {
  const [problemToggle, setProblemToggle] = useState<"before" | "after">("after");

  return (
    <section
      id="why-us"
      className="relative border-b border-[rgba(255,255,255,0.08)] bg-[#131313] py-24 sm:py-32 overflow-hidden"
    >
      {/* Repeating Marquee Header Band */}
      <div className="mb-16 overflow-hidden border-y border-[rgba(255,255,255,0.06)] bg-[#0d0d0d] py-4 select-none">
        <div className="flex w-max animate-marquee-infinite gap-8 font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[rgba(255,255,255,0.2)]">
          <span>Why Webfluency?</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Zero Fluff Delivery</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Commercial Clarity</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Ranked From Day One</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Why Webfluency?</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Zero Fluff Delivery</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Commercial Clarity</span>
          <span className="text-[#b6f419]">&bull;</span>
          <span>Ranked From Day One</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-xs text-[#b6f419] uppercase tracking-widest">
            (02) &bull; Our Competitive Edge
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#fafafa] leading-tight">
            Built to Eliminate the Friction of Traditional Web Agencies.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8c8c8a]">
            Most client-agency relationships break down due to missed deadlines, technical bloat, and vanity metrics. Here is how we engineer guaranteed commercial results.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Problem-First Approach */}
          <div className="group relative flex flex-col justify-between rounded-card border border-[rgba(255,255,255,0.1)] bg-[#181818] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b6f419] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            {/* Mini-Scene: Problem Toggle */}
            <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#111111] p-4">
              <div className="flex items-center justify-between font-mono text-[11px] text-[#8c8c8a] mb-3">
                <span>APPROACH COMPARISON</span>
                <span className="h-2 w-2 rounded-full bg-[#b6f419] animate-pulse" />
              </div>

              <div className="flex rounded-lg bg-[#1f1f1f] p-1 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setProblemToggle("before")}
                  className={`flex-1 rounded py-1.5 transition-colors ${
                    problemToggle === "before"
                      ? "bg-red-950/60 text-red-400 font-bold"
                      : "text-[#8c8c8a] hover:text-white"
                  }`}
                >
                  Other Agencies
                </button>
                <button
                  type="button"
                  onClick={() => setProblemToggle("after")}
                  className={`flex-1 rounded py-1.5 transition-colors ${
                    problemToggle === "after"
                      ? "bg-[#b6f419] text-black font-bold"
                      : "text-[#8c8c8a] hover:text-white"
                  }`}
                >
                  Webfluency
                </button>
              </div>

              <div className="mt-3 min-h-[46px] rounded bg-[#161616] p-2.5 font-mono text-[11px]">
                {problemToggle === "before" ? (
                  <p className="text-red-300/80">
                    &bull; Start with templates &bull; Sell buzzwords &bull; 40-page decks with zero pipeline
                  </p>
                ) : (
                  <p className="text-[#cbff46]">
                    &bull; Diagnose commercial bottleneck &bull; High-intent keywords &bull; Direct pipeline lift
                  </p>
                )}
              </div>
            </div>

            <div>
              <span className="font-mono text-xs text-[#8c8c8a]">01 / Clarity</span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors">
                Problem-First Approach
              </h3>
              <p className="mt-3 text-sm text-[#8c8c8a] leading-relaxed">
                We don&apos;t build features for the sake of trends. We isolate the specific bottleneck choking your business pipeline and build precisely what clears it.
              </p>
            </div>
          </div>

          {/* Card 2: Clear Process, Zero Surprises */}
          <div className="group relative flex flex-col justify-between rounded-card border border-[rgba(255,255,255,0.1)] bg-[#181818] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b6f419] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            {/* Mini-Scene: Milestone Progress Rail */}
            <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#111111] p-4 font-mono text-xs">
              <div className="flex items-center justify-between text-[#8c8c8a] mb-2 text-[11px]">
                <span>SPRINT CADENCE</span>
                <span className="text-[#b6f419] font-bold">100% ON TRACK</span>
              </div>
              {/* Rail Pills */}
              <div className="grid grid-cols-5 gap-1.5 py-2 text-center text-[10px]">
                <div className="rounded bg-[#b6f419]/20 text-[#cbff46] py-1 border border-[#b6f419]/40">
                  Kickoff
                </div>
                <div className="rounded bg-[#b6f419]/20 text-[#cbff46] py-1 border border-[#b6f419]/40">
                  Design
                </div>
                <div className="rounded bg-[#b6f419] text-black font-bold py-1 shadow-[0_0_8px_#b6f419]">
                  Build
                </div>
                <div className="rounded bg-[#222222] text-[#8c8c8a] py-1">QA</div>
                <div className="rounded bg-[#222222] text-[#8c8c8a] py-1">Launch</div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-[#8c8c8a]">
                <span>Active Sprint: Production Code</span>
                <span className="text-white">Day 14 / 28</span>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs text-[#8c8c8a]">02 / Reliability</span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors">
                Clear Process, Zero Surprises
              </h3>
              <p className="mt-3 text-sm text-[#8c8c8a] leading-relaxed">
                Every milestone has explicit deliverables and fixed timelines. You always know exactly what is being constructed, who is coding it, and when it deploys.
              </p>
            </div>
          </div>

          {/* Card 3: Built to Rank from Day One */}
          <div className="group relative flex flex-col justify-between rounded-card border border-[rgba(255,255,255,0.1)] bg-[#181818] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b6f419] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            {/* Mini-Scene: SERP Preview */}
            <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#111111] p-4">
              <div className="flex items-center justify-between font-mono text-[11px] text-[#8c8c8a] mb-2">
                <span>SERP RANKING SIMULATION</span>
                <span className="rounded bg-[#b6f419]/20 px-1.5 py-0.5 text-[#cbff46] font-bold">
                  POS #1
                </span>
              </div>
              <div className="rounded border border-[rgba(255,255,255,0.1)] bg-[#191919] p-3 text-xs">
                <div className="flex items-center gap-1.5 text-[11px] text-[#8c8c8a]">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  <span>https://yourbrand.com &rsaquo; services</span>
                </div>
                <div className="mt-1 font-semibold text-[#8ab4f8] hover:underline">
                  Commercial Solution &bull; Enterprise Partner
                </div>
                <div className="mt-1 text-[11px] text-[#a0a09e] line-clamp-1">
                  Structured JSON-LD schema &bull; Sub-second speed &bull; High buyer intent.
                </div>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs text-[#8c8c8a]">03 / Authority</span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors">
                Built to Rank from Day One
              </h3>
              <p className="mt-3 text-sm text-[#8c8c8a] leading-relaxed">
                SEO is not an afterthought applied post-launch. Semantic architecture, high-intent topic clustering, and rich schemas are engineered into the codebase.
              </p>
            </div>
          </div>

          {/* Card 4: Quality in Every Detail */}
          <div className="group relative flex flex-col justify-between rounded-card border border-[rgba(255,255,255,0.1)] bg-[#181818] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b6f419] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            {/* Mini-Scene: Core Web Vitals Benchmark */}
            <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#111111] p-4">
              <div className="flex items-center justify-between font-mono text-[11px] text-[#8c8c8a] mb-2">
                <span>CORE WEB VITALS BENCHMARK</span>
                <span className="text-[#b6f419] font-bold">99/100</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
                <div className="rounded bg-[#1a1a1a] p-2 border border-[rgba(255,255,255,0.05)]">
                  <span className="text-[#8c8c8a] block">LCP</span>
                  <span className="text-[#b6f419] font-bold text-xs">0.52s</span>
                </div>
                <div className="rounded bg-[#1a1a1a] p-2 border border-[rgba(255,255,255,0.05)]">
                  <span className="text-[#8c8c8a] block">CLS</span>
                  <span className="text-[#b6f419] font-bold text-xs">0.00</span>
                </div>
                <div className="rounded bg-[#1a1a1a] p-2 border border-[rgba(255,255,255,0.05)]">
                  <span className="text-[#8c8c8a] block">FID</span>
                  <span className="text-[#b6f419] font-bold text-xs">2ms</span>
                </div>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs text-[#8c8c8a]">04 / Precision</span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors">
                Quality in Every Detail
              </h3>
              <p className="mt-3 text-sm text-[#8c8c8a] leading-relaxed">
                Every button hover, micro-transition, typography scale, and responsive edge case is tested until the user experience feels instantaneous.
              </p>
            </div>
          </div>

          {/* Card 5: One Point of Contact */}
          <div className="group relative flex flex-col justify-between rounded-card border border-[rgba(255,255,255,0.1)] bg-[#181818] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b6f419] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            {/* Mini-Scene: Direct Slack / WhatsApp Channel */}
            <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#111111] p-4 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-[#8c8c8a] mb-2">
                <span>COMMUNICATION CHANNEL</span>
                <span className="flex items-center gap-1.5 text-[#b6f419]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419] animate-ping" />
                  ONLINE
                </span>
              </div>
              <div className="rounded bg-[#1c1c1c] p-2.5 border border-[rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-[#b6f419] text-black font-bold flex items-center justify-center text-[10px]">
                    W
                  </div>
                  <div>
                    <span className="font-bold text-white text-[11px]">Lead Strategist &amp; Engineer</span>
                    <span className="block text-[10px] text-[#8c8c8a]">Avg response: 14 mins</span>
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-[#fafafa] bg-[#222222] rounded p-1.5">
                  &ldquo;Staging build deployed. All 8 high-intent pages ready for review.&rdquo;
                </p>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs text-[#8c8c8a]">05 / Direct Access</span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors">
                One Point of Contact
              </h3>
              <p className="mt-3 text-sm text-[#8c8c8a] leading-relaxed">
                No junior account managers playing telephone. You communicate directly with the senior engineer and strategist owning your project.
              </p>
            </div>
          </div>

          {/* Card 6: Results You Can Measure */}
          <div className="group relative flex flex-col justify-between rounded-card border border-[rgba(255,255,255,0.1)] bg-[#181818] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b6f419] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            {/* Mini-Scene: Growth Trajectory SVG */}
            <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#111111] p-4">
              <div className="flex items-center justify-between font-mono text-[11px] text-[#8c8c8a] mb-2">
                <span>QUALIFIED PIPELINE TRAJECTORY</span>
                <span className="text-[#b6f419] font-bold">+284%</span>
              </div>
              <div className="relative h-20 w-full overflow-hidden rounded bg-[#161616]">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 240 70"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 60 Q 50 55, 90 40 T 170 20 T 240 8"
                    stroke="#b6f419"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 60 Q 50 55, 90 40 T 170 20 T 240 8 L 240 70 L 0 70 Z"
                    fill="url(#gradient-lime)"
                    opacity="0.18"
                  />
                  <defs>
                    <linearGradient id="gradient-lime" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#b6f419" />
                      <stop offset="100%" stopColor="#131313" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs text-[#8c8c8a]">06 / Commercial Return</span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors">
                Results You Can Measure
              </h3>
              <p className="mt-3 text-sm text-[#8c8c8a] leading-relaxed">
                We define commercial success metrics on day one and build transparent tracking so you monitor pipeline return, not empty vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
