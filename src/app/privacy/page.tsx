// Minimal privacy policy page — replace with your legal content
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_METADATA } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Webfluency Agency privacy policy.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#131313] text-[#fafafa] min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="font-mono text-xs text-[#8c8c8a] hover:text-[#b6f419] transition-colors mb-12 inline-block">
          ← Back to Webfluency
        </Link>

        <h1 className="font-display text-4xl font-bold tracking-tight text-[#fafafa] mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-invert max-w-none text-[#8c8c8a] space-y-6 text-sm leading-relaxed">
          <p className="text-[#b6f419] font-mono text-xs">
            [PLACEHOLDER — Replace this page with your legal privacy policy before launch]
          </p>
          <p>
            This website is operated by {SITE_METADATA.name}. We are committed to
            protecting your personal information and your right to privacy.
          </p>
          <p>
            For questions about this privacy policy, contact us at{" "}
            <a href={`mailto:${SITE_METADATA.contact.email}`} className="text-[#b6f419] hover:underline">
              {SITE_METADATA.contact.email}
            </a>
            .
          </p>
          <p className="text-[#555] text-xs">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </main>
  );
}
