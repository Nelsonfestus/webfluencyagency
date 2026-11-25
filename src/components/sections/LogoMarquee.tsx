"use client";

import { PARTNER_PLACEHOLDERS } from "@/content/site-content";

export default function LogoMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const list = [...PARTNER_PLACEHOLDERS, ...PARTNER_PLACEHOLDERS];

  return (
    <section
      className="relative border-b border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] py-10 overflow-hidden"
      aria-label="Partner and client proof"
    >
      <div className="mx-auto max-w-7xl px-4 mb-6 flex items-center justify-between font-mono text-xs text-[#8c8c8a]">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419]" />
          <span>TRUSTED BY GROWTH COMPANIES &bull; PLACEHOLDER CLIENT LOGOS</span>
        </span>
        <span className="hidden md:inline text-[11px] uppercase tracking-wider text-[rgba(255,255,255,0.4)]">
          [SWAP WITH YOUR CLIENT MARKS]
        </span>
      </div>

      {/* Marquee with edge fade gradient mask */}
      <div className="marquee-mask group flex overflow-hidden select-none">
        <div className="flex shrink-0 animate-marquee-infinite items-center gap-8 group-hover:[animation-play-state:paused]">
          {list.map((item, idx) => (
            <div
              key={`partner-${idx}`}
              className="flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.1)] bg-[#181818]/60 px-6 py-3 transition-all duration-300 hover:border-[#b6f419] hover:bg-[#1f1f1f]"
            >
              {/* Minimal SVG emblem */}
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-[#b6f419] font-mono text-xs font-bold">
                {item.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-semibold tracking-tight text-[#fafafa]">
                  {item.name}
                </span>
                <span className="font-mono text-[10px] text-[#8c8c8a]">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
