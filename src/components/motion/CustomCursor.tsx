"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view" | "drag">("default");
  const [isPointer, setIsPointer] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewTarget = target.closest("[data-cursor='view']");
      const buttonTarget = target.closest("button, a, input, select, textarea, [data-cursor='pointer']");

      if (viewTarget) {
        setCursorType("view");
        setIsPointer(true);
      } else if (buttonTarget) {
        setCursorType("hover");
        setIsPointer(true);
      } else {
        setCursorType("default");
        setIsPointer(false);
      }
    };

    const loop = () => {
      // Lerp ring towards dot
      const ease = 0.18;
      ringPos.current.x += (pos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-300">
      {/* Center dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-all duration-150 ${
          cursorType === "view"
            ? "opacity-0"
            : cursorType === "hover"
            ? "h-2 w-2 bg-[#b6f419]"
            : "h-2 w-2 bg-[#fafafa]"
        }`}
      />

      {/* Ring / Bubble follower */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-200 ${
          cursorType === "view"
            ? "h-20 w-20 bg-[#b6f419] font-mono text-[11px] font-bold tracking-widest text-[#000000] shadow-[0_0_30px_rgba(182,244,25,0.4)]"
            : cursorType === "hover"
            ? "h-11 w-11 border border-[#b6f419] bg-[rgba(182,244,25,0.08)]"
            : "h-8 w-8 border border-[rgba(255,255,255,0.35)] bg-transparent"
        }`}
      >
        {cursorType === "view" && <span className="uppercase">VIEW</span>}
      </div>
    </div>
  );
}
