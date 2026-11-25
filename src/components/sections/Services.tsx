"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, BOOKING_URL, ServiceItem } from "@/content/site-content";
import MagneticButton from "@/components/ui/MagneticButton";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  prefersReducedMotion: boolean | null;
}

function ServiceCard({
  service,
  index,
  total,
  progress,
  prefersReducedMotion,
}: ServiceCardProps) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const step = 1 / total;
  const start = index * step;
  const targetScale = 1 - (total - 1 - index) * 0.035;

  // Framer-style scroll-linked transforms as the next card laps over this one
  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const brightness = useTransform(
    progress,
    [start, Math.min(1, start + step)],
    [1, index === total - 1 ? 1 : 0.62]
  );
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  return (
    <div
      className="sticky flex items-center justify-center py-4 sm:py-6"
      style={{
        top: `calc(76px + ${index * 12}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : {
                scale,
                filter,
                transformOrigin: "top center",
              }
        }
        whileHover={prefersReducedMotion ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
        className="group relative w-full rounded-card border border-[rgba(255,255,255,0.12)] bg-[#161616] p-6 sm:p-10 shadow-[0_-24px_60px_rgba(0,0,0,0.75)] transition-colors duration-300 hover:border-[#b6f419]/60 will-change-transform"
      >
        {/* Cursor-reactive spotlight glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-card transition-opacity duration-300"
          style={{
            opacity: spotlight.active ? 1 : 0,
            background: `radial-gradient(560px circle at ${spotlight.x}% ${spotlight.y}%, rgba(182, 244, 25, 0.09), transparent 55%)`,
          }}
        />

        {/* Card Top Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] pb-5 mb-7">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-mono text-sm sm:text-base font-bold text-[#b6f419]">
              {service.number}
            </span>
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#fafafa] transition-transform duration-300 group-hover:translate-x-1">
              {service.title}
            </h3>
          </div>

          <span className="rounded-pill border border-[rgba(255,255,255,0.1)] bg-[#111111] px-4 py-1.5 font-mono text-xs text-[#8c8c8a] group-hover:border-[#b6f419]/40 group-hover:text-[#fafafa] transition-colors">
            {service.number} / 0{total}
          </span>
        </div>

        {/* Card Main Grid: Details Left + Image Preview Right */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Left: Problem / Solution / Outcome + Tags + CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#111111] p-5 sm:p-6 transition-colors duration-300 group-hover:border-[rgba(255,255,255,0.15)]">
              <div>
                <div className="font-mono text-[11px] text-red-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span>Problem</span>
                </div>
                <p className="text-sm text-[#fafafa] leading-relaxed">
                  {service.problem}
                </p>
              </div>

              <div>
                <div className="font-mono text-[11px] text-[#b6f419] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419]" />
                  <span>Solution</span>
                </div>
                <p className="text-sm text-[#8c8c8a] leading-relaxed">
                  {service.solution}
                </p>
              </div>

              <div>
                <div className="font-mono text-[11px] text-[#cbff46] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#cbff46]" />
                  <span>Outcome</span>
                </div>
                <p className="text-sm text-[#fafafa] font-medium leading-relaxed">
                  {service.outcome}
                </p>
              </div>
            </div>

            {/* Deliverable Tags with spring hover */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-[#8c8c8a] mr-1">
                Deliverables:
              </span>
              {service.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[#1c1c1c] px-3.5 py-1.5 font-mono text-[11px] text-[#fafafa] hover:border-[#b6f419] hover:text-[#b6f419] transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <MagneticButton
                href={BOOKING_URL}
                variant="primary"
                className="text-xs py-3.5 px-7"
              >
                Book a Call for {service.title}
              </MagneticButton>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#fafafa] hover:text-[#b6f419] transition-colors py-2 px-3"
              >
                <span>Deep Dive Documentation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right: Dedicated Hover-Animated Visual Frame */}
          <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[280px] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#111111]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale-[45%] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-[#fafafa]">
              <span className="rounded-pill bg-black/60 backdrop-blur-sm px-3 py-1 border border-[rgba(255,255,255,0.12)]">
                {service.number} // CAPABILITY
              </span>
              <span className="text-[#b6f419] opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                EXPLORE &rarr;
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring-damped scroll progress for Framer-like fluid motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      id="services"
      className="relative border-b border-[rgba(255,255,255,0.08)] bg-[#131313] py-24 sm:py-32"
      style={{ overflowX: "clip" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(255,255,255,0.1)] pb-12 mb-12">
          <div>
            <span className="font-mono text-xs text-[#b6f419] uppercase tracking-widest">
              (03) &bull; Core Capabilities
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#fafafa]">
              Services Engineered for Revenue.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm sm:text-base text-[#8c8c8a]">
            Every service solves a defined commercial bottleneck. Scroll to step
            through each capability in full, one at a time.
          </p>
        </div>

        {/* Framer Motion Sticky Stacking Deck */}
        <div ref={containerRef} className="relative flex flex-col gap-16 sm:gap-24 pb-16">
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={idx}
              total={SERVICES.length}
              progress={smoothProgress}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
