"use client";

import { TECH_STACK } from "@/content/site-content";

// Minimal inline SVG icons for each tool
const TOOL_ICONS: Record<string, string> = {
  "Next.js": "N",
  React: "⚛",
  TypeScript: "TS",
  "Tailwind CSS": "🌊",
  GSAP: "G",
  Lenis: "L",
  Supabase: "⚡",
  "Shopify Plus": "S",
  "Google Analytics 4": "GA",
  "Google Search Console": "⌕",
  "Google Business Profile": "📍",
  "Ahrefs & Semrush": "A",
  Midjourney: "MJ",
  "Runway Gen-3": "R",
  ElevenLabs: "11",
};

function ToolChip({ name, category }: { name: string; category: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-pill border border-[rgba(255,255,255,0.1)] bg-[#181818] px-5 py-3 transition-all duration-300 hover:border-[#b6f419] hover:bg-[#1f1f1f] group">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] font-mono text-xs font-bold text-[#b6f419] group-hover:bg-[#b6f419] group-hover:text-black transition-colors">
        {TOOL_ICONS[name] || name.charAt(0)}
      </div>
      <div>
        <div className="font-display text-sm font-semibold text-[#fafafa] leading-none mb-0.5">
          {name}
        </div>
        <div className="font-mono text-[10px] text-[#8c8c8a]">{category}</div>
      </div>
    </div>
  );
}

export default function TechMarquee() {
  const doubled = [...TECH_STACK, ...TECH_STACK];

  return (
    <section
      className="relative border-b border-[rgba(255,255,255,0.08)] bg-[#131313] py-20"
      aria-labelledby="tech-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="font-mono text-xs text-[#b6f419] uppercase tracking-widest">
            (08) &bull; Technical Stack
          </span>
          <h2
            id="tech-heading"
            className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#fafafa]"
          >
            The Right Technology
            <br />
            <span className="text-[#8c8c8a]">for Every Problem.</span>
          </h2>
          <p className="mt-4 text-sm text-[#8c8c8a] max-w-lg mx-auto">
            We pick tools based on commercial outcomes, not personal trends or
            agency markups. Everything below has earned its place.
          </p>
        </div>
      </div>

      {/* Row 1 — left scroll */}
      <div className="marquee-mask group overflow-hidden select-none mb-4">
        <div className="flex w-max animate-marquee-infinite items-center gap-4 group-hover:[animation-play-state:paused]">
          {doubled.map((tool, i) => (
            <ToolChip key={`row1-${i}`} name={tool.name} category={tool.category} />
          ))}
        </div>
      </div>

      {/* Row 2 — right scroll (reverse) */}
      <div className="marquee-mask group overflow-hidden select-none">
        <div className="flex w-max animate-marquee-reverse items-center gap-4 group-hover:[animation-play-state:paused]">
          {[...doubled].reverse().map((tool, i) => (
            <ToolChip key={`row2-${i}`} name={tool.name} category={tool.category} />
          ))}
        </div>
      </div>
    </section>
  );
}
