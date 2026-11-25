import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Mail } from "lucide-react";
import { APIS_CATALOG, SITE_METADATA, BOOKING_URL } from "@/content/site-content";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Website & Software APIs",
  description:
    "Ready-to-integrate Website & Software APIs by Webfluency Agency. Order directly via email at Webfluencyagency4220@gmail.com.",
  alternates: {
    canonical: `${SITE_METADATA.url}/apis`,
  },
};

export default function ApisPage() {
  const email = SITE_METADATA.contact.email;

  return (
    <main className="bg-[#131313] text-[#fafafa] min-h-screen">
      {/* Top Bar */}
      <div className="border-b border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] px-4 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8c8c8a] hover:text-[#b6f419] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Webfluency
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="hidden sm:inline-flex items-center gap-2 font-mono text-xs text-[#8c8c8a] hover:text-[#b6f419] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-[#b6f419]" />
              {email}
            </a>
            <MagneticButton
              href={BOOKING_URL}
              variant="primary"
              className="text-xs py-2.5 px-5"
            >
              Book a Call
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-[rgba(255,255,255,0.08)] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[360px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(182,244,25,0.07)_0%,transparent_70%)] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-pill border border-[rgba(255,255,255,0.12)] bg-[#181818] px-4 py-1.5 font-mono text-xs text-[#b6f419]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419] animate-pulse" />
            <span>WEBSITE &amp; SOFTWARE APIS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#fafafa] leading-[1.02] max-w-4xl">
            Productized APIs Built for{" "}
            <span className="text-[#b6f419]">Speed &amp; Scale.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#8c8c8a] leading-relaxed">
            Five ready-to-build Website &amp; Software APIs engineered cleanly by
            our solo lead or full developer team. Select the API you need and
            purchase directly via email.
          </p>

          {/* Email Purchase Banner */}
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#b6f419]/30 bg-[#b6f419]/5 p-5 sm:p-6 max-w-3xl">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#b6f419] mb-1">
                Direct Email Ordering
              </div>
              <p className="text-sm text-[#fafafa]">
                Send your selected API and project details directly to{" "}
                <a
                  href={`mailto:${email}?subject=API%20Purchase%20Inquiry`}
                  className="font-mono font-bold text-[#b6f419] underline underline-offset-4 hover:text-[#cbff46]"
                >
                  {email}
                </a>
              </p>
            </div>
            <a
              href={`mailto:${email}?subject=API%20Purchase%20Inquiry`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-pill bg-[#b6f419] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black hover:bg-[#cbff46] transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              Email to Order
            </a>
          </div>
        </div>
      </section>

      {/* 5 APIs Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APIS_CATALOG.map((api) => {
            const mailSubject = encodeURIComponent(`Buy API: ${api.title} (${api.price})`);
            const mailBody = encodeURIComponent(
              `Hi Webfluency Team,\n\nI would like to purchase the ${api.title} (${api.price}).\n\nProject / Integration details:\n`
            );
            const buyHref = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;

            return (
              <div
                key={api.id}
                className="group flex flex-col justify-between rounded-card border border-[rgba(255,255,255,0.1)] bg-[#181818] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b6f419] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="font-mono text-xs font-bold text-[#b6f419]">
                      API // {api.number}
                    </span>
                    <span className="rounded-pill border border-[rgba(255,255,255,0.1)] bg-[#121212] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#8c8c8a]">
                      {api.category}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <h2 className="font-display text-2xl font-bold tracking-tight text-[#fafafa] group-hover:text-[#b6f419] transition-colors mb-2">
                    {api.title}
                  </h2>

                  <div className="flex items-baseline gap-3 mb-4 pb-4 border-b border-[rgba(255,255,255,0.08)]">
                    <span className="font-display text-3xl font-bold text-[#b6f419]">
                      {api.price}
                    </span>
                    <span className="font-mono text-[11px] text-[#8c8c8a]">
                      Starting &bull; {api.deliveryTime}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#8c8c8a] leading-relaxed mb-6">
                    {api.description}
                  </p>

                  {/* Specs */}
                  <ul className="space-y-2.5 mb-8">
                    {api.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-2.5 text-xs font-mono text-[#fafafa]"
                      >
                        <Check className="h-4 w-4 shrink-0 text-[#b6f419]" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buy via Email CTA */}
                <a
                  href={buyHref}
                  className="group/btn flex w-full items-center justify-between rounded-pill bg-[#b6f419] px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#cbff46] hover:shadow-[0_0_24px_rgba(182,244,25,0.35)]"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5" />
                    Buy via Email
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            );
          })}

          {/* Custom API Card */}
          <div className="flex flex-col justify-between rounded-card border border-dashed border-[rgba(255,255,255,0.2)] bg-[#141414] p-7">
            <div>
              <span className="font-mono text-xs text-[#8c8c8a] uppercase tracking-widest">
                Custom Architecture
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#fafafa] mb-3">
                Need a Custom API or Multi-System Integration?
              </h2>
              <p className="text-sm text-[#8c8c8a] leading-relaxed mb-6">
                Whether you need a single developer to ship an integration fast
                or our full developer team to architect a custom backend, email
                us your requirements.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${email}?subject=Custom%20API%20Development%20Inquiry`}
                className="flex w-full items-center justify-between rounded-pill border border-[rgba(255,255,255,0.2)] bg-[#181818] px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[#fafafa] transition-colors hover:border-[#b6f419] hover:text-[#b6f419]"
              >
                <span>Email {email}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
