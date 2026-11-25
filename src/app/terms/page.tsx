// Terms of service placeholder — replace with your legal content
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_METADATA } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Webfluency Agency terms of service.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main className="bg-[#131313] text-[#fafafa] min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="font-mono text-xs text-[#8c8c8a] hover:text-[#b6f419] transition-colors mb-12 inline-block">
          ← Back to Webfluency
        </Link>

        <h1 className="font-display text-4xl font-bold tracking-tight text-[#fafafa] mb-8">
          Terms of Service
        </h1>

        <div className="text-[#8c8c8a] space-y-6 text-sm leading-relaxed">
          <p className="text-[#b6f419] font-mono text-xs">
            [PLACEHOLDER — Replace this page with your legal terms of service before launch]
          </p>
          <p>
            By using the services of {SITE_METADATA.name}, you agree to these terms.
          </p>
          <p>
            For enquiries contact{" "}
            <a href={`mailto:${SITE_METADATA.contact.email}`} className="text-[#b6f419] hover:underline">
              {SITE_METADATA.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
