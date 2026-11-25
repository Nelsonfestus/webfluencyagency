"use client";

import { useState, useEffect, useRef } from "react";
import { X, ChevronDown, ArrowUpRight, Loader2 } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { SERVICES, BOOKING_URL, SITE_METADATA } from "@/content/site-content";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [selectedService, setSelectedService] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus first input when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 300);

      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check (client-side — also validated server-side)
    const honeypot = data.get("website_url") as string;
    if (honeypot) {
      setFormState("success"); // Silently succeed to fool bots
      return;
    }

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      service: selectedService,
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || "Something went wrong. Please try again.");
      }

      setFormState("success");
    } catch (err: unknown) {
      setFormState("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[99991] bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Modal Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="fixed right-0 top-0 z-[99992] h-full w-full max-w-xl overflow-y-auto bg-[#131313] shadow-2xl border-l border-[rgba(255,255,255,0.1)] flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] px-7 py-6">
          <div>
            <div className="font-mono text-xs text-[#b6f419] uppercase tracking-widest mb-1">
              START A CONVERSATION
            </div>
            <h2
              id="contact-modal-title"
              className="font-display text-2xl font-bold tracking-tight text-[#fafafa]"
            >
              Tell Us About Your Project
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close contact form"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.15)] text-[#fafafa] hover:border-[#b6f419] hover:text-[#b6f419] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form / States */}
        <div className="flex-1 px-7 py-8">
          {formState === "success" ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#b6f419]/20 border border-[#b6f419]/40">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#fafafa] mb-3">
                Message received.
              </h3>
              <p className="text-sm text-[#8c8c8a] leading-relaxed max-w-sm mb-8">
                We&apos;ll review your brief and reply within one business day with a
                clear outline of how we can help.
              </p>
              <MagneticButton href={BOOKING_URL} variant="primary">
                Or book a call right now
              </MagneticButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Honeypot — hidden from humans, visible to bots */}
              <input
                type="text"
                name="website_url"
                tabIndex={-1}
                aria-hidden="true"
                className="absolute -left-[9999px] opacity-0 pointer-events-none"
                autoComplete="off"
              />

              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-xs text-[#8c8c8a] uppercase tracking-wider">
                  Full Name <span className="text-[#b6f419]">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#181818] px-4 py-3.5 font-sans text-sm text-[#fafafa] placeholder-[#555555] outline-none transition-all focus:border-[#b6f419] focus:ring-1 focus:ring-[#b6f419]/30"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-xs text-[#8c8c8a] uppercase tracking-wider">
                  Email Address <span className="text-[#b6f419]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@yourcompany.com"
                  className="w-full rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#181818] px-4 py-3.5 font-sans text-sm text-[#fafafa] placeholder-[#555555] outline-none transition-all focus:border-[#b6f419] focus:ring-1 focus:ring-[#b6f419]/30"
                />
              </div>

              {/* Service interested in — Chip Select */}
              <div className="space-y-3">
                <label className="font-mono text-xs text-[#8c8c8a] uppercase tracking-wider">
                  Service You&apos;re Interested In
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() =>
                        setSelectedService(s.id === selectedService ? "" : s.id)
                      }
                      className={`rounded-pill border px-4 py-2 font-mono text-[11px] transition-all ${
                        selectedService === s.id
                          ? "border-[#b6f419] bg-[#b6f419] text-black font-bold"
                          : "border-[rgba(255,255,255,0.1)] bg-[#181818] text-[#8c8c8a] hover:border-[#b6f419] hover:text-[#b6f419]"
                      }`}
                    >
                      {s.number} {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs text-[#8c8c8a] uppercase tracking-wider">
                  Project Brief / Details <span className="text-[#b6f419]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us the business problem you're trying to solve, your current situation, and what success looks like for you..."
                  className="w-full resize-none rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#181818] px-4 py-3.5 font-sans text-sm text-[#fafafa] placeholder-[#555555] outline-none transition-all focus:border-[#b6f419] focus:ring-1 focus:ring-[#b6f419]/30"
                />
              </div>

              {/* Error Message */}
              {formState === "error" && (
                <div className="rounded-xl border border-red-900/40 bg-red-950/30 px-4 py-3 font-mono text-xs text-red-400">
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "loading"}
                className="group relative w-full overflow-hidden rounded-pill bg-[#b6f419] py-4 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#cbff46] hover:shadow-[0_0_30px_rgba(182,244,25,0.4)] disabled:opacity-70"
              >
                {formState === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                )}
              </button>

              {/* Alternative CTA & Direct Email */}
              <div className="text-center pt-2 space-y-2">
                <p className="font-mono text-xs text-[#8c8c8a]">
                  Or email us directly at{" "}
                  <a
                    href={`mailto:${SITE_METADATA.contact.email}`}
                    className="text-[#fafafa] underline underline-offset-4 hover:text-[#b6f419] transition-colors"
                  >
                    {SITE_METADATA.contact.email}
                  </a>
                </p>
                <p className="font-mono text-xs text-[#8c8c8a]">
                  Prefer a live conversation?{" "}
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b6f419] hover:underline"
                  >
                    Book a call instead →
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
