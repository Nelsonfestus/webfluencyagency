import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SITE_METADATA } from "@/content/site-content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "All Services",
  description:
    "Webfluency Agency offers website design, development, SEO, local SEO, GBP optimization, link building, e-commerce and AI video production — all engineered for measurable commercial return.",
  alternates: { canonical: `${SITE_METADATA.url}/services` },
};

export default function ServicesIndexPage() {
  return (
    <main className="bg-[#131313] text-[#fafafa] min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#8c8c8a] hover:text-[#b6f419] mb-12 transition-colors"
        >
          ← Back to Home
        </Link>

        <span className="font-mono text-xs text-[#b6f419] uppercase tracking-widest">
          All Capabilities
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#fafafa] mb-4">
          Services
        </h1>
        <p className="text-sm sm:text-lg text-[#8c8c8a] max-w-2xl mb-16">
          Every service solves a defined commercial problem and maps to a
          measurable business outcome. Click any service to see the full
          breakdown.
        </p>

        <div className="divide-y divide-[rgba(255,255,255,0.1)]">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={`/services/${s.slug}`}
              className="group flex items-center justify-between gap-6 py-7 hover:bg-[#181818]/40 px-4 rounded-xl transition-colors"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-sm text-[#b6f419]">{s.number}</span>
                <div>
                  <h2 className="font-display text-xl sm:text-3xl font-bold tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors">
                    {s.title}
                  </h2>
                  <p className="mt-1 text-sm text-[#8c8c8a] max-w-xl line-clamp-1">
                    {s.problem}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-[#8c8c8a] group-hover:text-[#b6f419] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
