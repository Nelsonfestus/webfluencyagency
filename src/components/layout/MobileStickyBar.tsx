"use client";

import { BOOKING_URL } from "@/content/site-content";
import { Phone } from "lucide-react";

export default function MobileStickyBar({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-[9980] flex items-center gap-3 border-t border-[rgba(255,255,255,0.1)] bg-[#131313]/95 backdrop-blur-md px-4 py-3 md:hidden safe-area-inset-bottom">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-pill bg-[#b6f419] py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-black"
      >
        <Phone className="h-3.5 w-3.5" />
        Book a Call
      </a>
      <button
        type="button"
        onClick={onOpenContact}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.15)] bg-[#181818] font-mono text-sm text-[#fafafa]"
        aria-label="Open contact form"
      >
        ✉
      </button>
    </div>
  );
}
