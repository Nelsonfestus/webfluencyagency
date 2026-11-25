"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import { BOOKING_URL } from "@/content/site-content";

const TRAIL_IMAGES = [
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=640&auto=format&fit=crop",
];

interface TrailItem {
  id: number;
  x: number;
  y: number;
  image: string;
  rotation: number;
}

export default function Hero({ ready }: { ready?: boolean }) {
  const containerRef = useRef<HTMLElement>(null);
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const trailId = useRef(0);
  const imageIndex = useRef(0);

  // Mouse image trail (desktop only)
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // Ensure cursor is within hero bounds
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return;
      }

      const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);

      // Spawn every 75px of movement
      if (dist > 75) {
        lastPos.current = { x: e.clientX, y: e.clientY };

        const newTrail: TrailItem = {
          id: ++trailId.current,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          image: TRAIL_IMAGES[imageIndex.current % TRAIL_IMAGES.length],
          rotation: (Math.random() - 0.5) * 14,
        };
        imageIndex.current++;

        setTrail((prev) => [...prev.slice(-8), newTrail]);

        // Auto remove after animation
        setTimeout(() => {
          setTrail((prev) => prev.filter((item) => item.id !== newTrail.id));
        }, 950);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]"
    >
      {/* Subtle ambient background glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(182,244,25,0.07)_0%,transparent_70%)] blur-3xl" />

      {/* Floating Image Trail (Desktop cursor interaction) */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {trail.map((item) => (
          <div
            key={item.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.25)] shadow-2xl shadow-black/80 animate-trail-fade"
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
              transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
              width: "180px",
              height: "115px",
            }}
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="relative z-20 mx-auto max-w-6xl w-full text-center">
        {/* Eyebrow badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-[#181818]/80 px-4 py-1.5 font-mono text-xs text-[#8c8c8a]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419] animate-ping" />
          <span className="text-[#fafafa]">Strategic Web Development &amp; Search Visibility</span>
          <span className="text-[rgba(255,255,255,0.3)]">|</span>
          <span className="text-[#b6f419]">Commercial Growth</span>
        </div>

        {/* H1 Headline with line-by-line masked reveal */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-[#fafafa] leading-[1.02] sm:leading-[0.98]">
          <span className="block overflow-hidden">
            <span className="inline-block transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-0">
              We Fix Business Problems
            </span>
          </span>
          <span className="block overflow-hidden text-[#8c8c8a]">
            <span className="inline-block transition-transform duration-1000 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-0">
              With <span className="text-[#fafafa]">Websites</span>,{" "}
              <span className="text-[#b6f419]">SEO</span> &amp;{" "}
              <span className="text-[#fafafa]">AI</span>.
            </span>
          </span>
        </h1>

        {/* 2-line Subtext */}
        <p className="mx-auto mt-8 max-w-2xl font-sans text-base sm:text-lg md:text-xl text-[#8c8c8a] leading-relaxed">
          Most agencies build websites for design awards. We engineer lightning-fast digital platforms, high-intent search visibility, and AI video workflows that solve real commercial bottlenecks.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href={BOOKING_URL}
            variant="primary"
            className="text-xs sm:text-sm py-4 px-8"
          >
            Book a Call
          </MagneticButton>

          <MagneticButton
            href="#services"
            variant="secondary"
            className="text-xs sm:text-sm py-4 px-8"
          >
            See Our Services
          </MagneticButton>
        </div>

        {/* Bottom Hero Trust Pill */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#8c8c8a]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419]" />
            <span>Sub-Second 95+ Core Web Vitals</span>
          </div>
          <span className="hidden sm:inline text-[rgba(255,255,255,0.2)]">&bull;</span>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419]" />
            <span>Zero Junior Outsourcing</span>
          </div>
          <span className="hidden sm:inline text-[rgba(255,255,255,0.2)]">&bull;</span>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419]" />
            <span>Search-Ranked From Day One</span>
          </div>
        </div>
      </div>
    </section>
  );
}
