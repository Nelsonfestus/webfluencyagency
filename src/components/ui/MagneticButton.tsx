"use client";

import React, { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  showArrow?: boolean;
  magnetic?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  showArrow = true,
  magnetic = true,
  type = "button",
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.28;
    const distanceY = (e.clientY - centerY) * 0.28;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 select-none overflow-hidden";

  const variants = {
    primary:
      "bg-[#b6f419] text-[#000000] hover:bg-[#cbff46] hover:shadow-[0_0_24px_rgba(182,244,25,0.4)] px-6 py-3.5",
    secondary:
      "bg-[#181818] text-[#fafafa] border border-[rgba(255,255,255,0.15)] hover:border-[#b6f419] hover:text-[#b6f419] px-6 py-3.5",
    outline:
      "bg-transparent text-[#fafafa] border border-[rgba(255,255,255,0.25)] hover:border-[#fafafa] hover:bg-white hover:text-black px-6 py-3.5",
    ghost:
      "bg-transparent text-[#fafafa] hover:text-[#b6f419] px-4 py-2",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300">
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
      {/* Background ripple highlight */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full rounded-full bg-white/10 transition-transform duration-500 ease-out group-hover:translate-x-0" />
    </>
  );

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 ? "transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)" : "none",
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(baseStyles, variants[variant], className)}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
}
