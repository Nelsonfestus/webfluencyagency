"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const PRELOADER_IMAGES = [
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534972195531-a756b1126f24?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
];

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isWiped, setIsWiped] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      setIsWiped(true);
      onComplete?.();
      return;
    }

    let current = 0;
    const intervalTime = 22; // ~2.2 seconds total
    const timer = setInterval(() => {
      // Non-linear acceleration
      const delta = Math.floor(Math.random() * 3) + 1;
      current += delta;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(timer);

        // Brief hold at 100% then upward curtain wipe
        setTimeout(() => {
          setIsDone(true);
          // Wait for CSS upward transition
          setTimeout(() => {
            setIsWiped(true);
            onComplete?.();
          }, 850);
        }, 180);
      } else {
        setProgress(current);
        // Switch background mockup rapidly
        setActiveImageIdx((prev) => (prev + 1) % PRELOADER_IMAGES.length);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (isWiped) return null;

  return (
    <div
      className={`fixed inset-0 z-[99998] flex flex-col items-center justify-between bg-[#000000] p-6 text-[#fafafa] transition-transform duration-[850ms] ${
        isDone ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
      }}
      aria-hidden={isDone}
    >
      {/* Background rapid image flash */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        {PRELOADER_IMAGES.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-75 ${
              i === activeImageIdx ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover grayscale contrast-125"
            />
          </div>
        ))}
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_85%)]" />
      </div>

      {/* Top Brand Bar */}
      <div className="relative z-10 flex w-full max-w-7xl items-center justify-between font-mono text-xs tracking-wider text-[#8c8c8a]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#b6f419] animate-pulse" />
          <span>INITIALIZING WORKSPACE</span>
        </div>
        <div>[01/08] SERVICES LOADED</div>
      </div>

      {/* Center Animated Message */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          <span>webfluency </span>
          <span className="text-[#b6f419] tabular-nums font-mono">
            {progress}%
          </span>
          <span> friction.</span>
        </div>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-[#8c8c8a]">
          High-performance websites &bull; SEO &bull; Practical AI
        </p>
      </div>

      {/* Bottom Progress Bar */}
      <div className="relative z-10 w-full max-w-7xl">
        <div className="mb-2 flex items-center justify-between font-mono text-xs text-[#8c8c8a]">
          <span>CALIBRATING ASSETS</span>
          <span className="tabular-nums font-bold text-[#fafafa]">{progress} / 100</span>
        </div>
        <div className="h-[2px] w-full bg-[rgba(255,255,255,0.12)]">
          <div
            className="h-full bg-[#b6f419] transition-all duration-75 ease-out shadow-[0_0_12px_#b6f419]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
