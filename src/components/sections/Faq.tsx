"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS, BOOKING_URL } from "@/content/site-content";
import MagneticButton from "@/components/ui/MagneticButton";

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className={`border-b border-[rgba(0,0,0,0.1)] transition-colors duration-200 ${
        isOpen ? "bg-white" : "hover:bg-[#f5f5f2]"
      }`}
    >
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-6 py-7 px-6 sm:px-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#131313] focus-visible:ring-offset-2 rounded"
      >
        <span className="font-display text-base sm:text-xl font-semibold text-[#131313] leading-snug flex-1 pr-4">
          {question}
        </span>
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
            isOpen
              ? "border-[#131313] bg-[#131313] text-white rotate-45"
              : "border-[rgba(0,0,0,0.2)] text-[#131313] hover:border-[#131313]"
          }`}
        >
          <Plus className="h-4 w-4" />
        </div>
      </button>

      {/* Smooth height transition panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        aria-hidden={!isOpen}
        className={`overflow-hidden transition-all ease-[cubic-bezier(0.4,0,0.2,1)] duration-350 ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionDuration: "350ms" }}
      >
        <div className="pb-7 px-6 sm:px-8">
          <p className="text-sm sm:text-base text-[#666663] leading-relaxed max-w-3xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative border-b border-[rgba(0,0,0,0.1)] bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-[#131313] uppercase tracking-widest">
              (09) &bull; Common Questions
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#131313] leading-tight">
              Questions?
              <br />
              <span className="text-[#8c8c8a]">We&apos;ve got answers.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm text-[#666663] mb-6">
              Can&apos;t find what you need? Book a no-commitment 20-minute call
              and we&apos;ll give you a straight answer to your specific situation.
            </p>
            <MagneticButton
              href={BOOKING_URL}
              variant="outline"
              className="border-[#131313] text-[#131313] hover:bg-[#131313] hover:text-white hover:border-[#131313]"
            >
              Book a Discovery Call
            </MagneticButton>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="rounded-card border border-[rgba(0,0,0,0.1)] overflow-hidden bg-white shadow-sm">
          {FAQS.map((faq, idx) => (
            <FaqItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              index={idx}
            />
          ))}
        </div>

        {/* JSON-LD FAQ Schema — rendered server-side in layout */}
      </div>
    </section>
  );
}
