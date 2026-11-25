"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/content/site-content";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Animate the SVG circle progress on scroll
      if (progressRef.current) {
        const circumference = 2 * Math.PI * 170;
        progressRef.current.style.strokeDasharray = `${circumference}`;
        progressRef.current.style.strokeDashoffset = `${circumference}`;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.4,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.strokeDashoffset = `${
                circumference * (1 - self.progress)
              }`;
            }
          },
        });
      }

      // Step reveals on scroll
      gsap.utils.toArray<HTMLElement>("[data-process-step]").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none none",
          },
          delay: i * 0.08,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative border-b border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] py-24 sm:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-[#b6f419] uppercase tracking-widest">
              (04) &bull; How We Work
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#fafafa] leading-tight">
              Built for Seamless,
              <br />
              <span className="text-[#8c8c8a]">Predictable Delivery.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#8c8c8a]">
            Six structured phases with clear ownership, transparent timelines, and
            explicit sign-off at every milestone. No black boxes, no surprises.
          </p>
        </div>

        {/* Two column layout: Steps + SVG Progress Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Process Steps */}
          <div className="lg:col-span-7 space-y-0 divide-y divide-[rgba(255,255,255,0.08)]">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                data-process-step
                className="group py-8 hover:bg-[#181818]/30 transition-colors duration-300 px-4 rounded-xl"
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-xs text-[#b6f419] shrink-0 pt-1 w-8">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors">
                        {step.name}
                      </h3>
                      <span className="font-mono text-xs text-[#8c8c8a] italic">
                        {step.tagline}
                      </span>
                    </div>
                    <p className="text-sm text-[#8c8c8a] leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((d) => (
                        <span
                          key={d}
                          className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[#181818] px-3 py-1 font-mono text-[11px] text-[#cbff46]"
                        >
                          ✓ {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Animated SVG Circle + Sticky Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start sticky top-32">
            {/* Circular SVG Progress Indicator */}
            <div className="relative flex items-center justify-center">
              <svg
                width="380"
                height="380"
                viewBox="0 0 380 380"
                fill="none"
                className="rotate-[-90deg]"
                aria-hidden="true"
              >
                {/* Background dashed track */}
                <circle
                  cx="190"
                  cy="190"
                  r="170"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="1"
                  strokeDasharray="10 10"
                />
                {/* Animated progress arc */}
                <circle
                  ref={progressRef}
                  cx="190"
                  cy="190"
                  r="170"
                  stroke="#b6f419"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              {/* Center content inside circle */}
              <div className="absolute flex flex-col items-center text-center px-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#8c8c8a] mb-2">
                  OUR PROCESS
                </span>
                <span className="font-display text-5xl font-bold text-[#b6f419] mb-1">
                  6
                </span>
                <span className="font-display text-xl font-semibold text-[#fafafa]">
                  Structured
                </span>
                <span className="font-display text-xl text-[#8c8c8a]">
                  Phases
                </span>
                <div className="mt-4 text-xs font-mono text-[#8c8c8a] space-y-1">
                  {PROCESS_STEPS.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-left">
                      <span className="text-[#b6f419]">{s.number}</span>
                      <span className="text-[#8c8c8a]">{s.name.split(" &")[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Below circle: average timeline */}
            <div className="mt-6 w-full rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#181818] p-5">
              <div className="font-mono text-xs text-[#8c8c8a] mb-3 uppercase tracking-wider">
                Typical Project Timeline
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-[#121212] p-3 border border-[rgba(255,255,255,0.06)]">
                  <div className="font-display text-2xl font-bold text-[#fafafa]">3–5</div>
                  <div className="font-mono text-[10px] text-[#8c8c8a]">Weeks / Landing</div>
                </div>
                <div className="rounded-xl bg-[#121212] p-3 border border-[rgba(255,255,255,0.06)]">
                  <div className="font-display text-2xl font-bold text-[#b6f419]">5–8</div>
                  <div className="font-mono text-[10px] text-[#8c8c8a]">Weeks / Full Site</div>
                </div>
                <div className="rounded-xl bg-[#121212] p-3 border border-[rgba(255,255,255,0.06)]">
                  <div className="font-display text-2xl font-bold text-[#fafafa]">8–12</div>
                  <div className="font-mono text-[10px] text-[#8c8c8a]">Weeks / Enterprise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
