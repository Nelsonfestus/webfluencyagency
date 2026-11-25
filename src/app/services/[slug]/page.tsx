import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SERVICES, SITE_METADATA, BOOKING_URL } from "@/content/site-content";
import MagneticButton from "@/components/ui/MagneticButton";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: `${service.problem} ${service.outcome}`,
    alternates: {
      canonical: `${SITE_METADATA.url}/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | ${SITE_METADATA.name}`,
      description: `${service.problem} ${service.outcome}`,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  // JSON-LD for this specific service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: `${service.problem} ${service.solution}`,
    provider: {
      "@type": "Organization",
      name: SITE_METADATA.name,
      url: SITE_METADATA.url,
    },
    url: `${SITE_METADATA.url}/services/${service.slug}`,
    serviceType: service.title,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="bg-[#131313] text-[#fafafa] min-h-screen">
        {/* Back nav */}
        <div className="border-b border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] px-4 py-4">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#8c8c8a] hover:text-[#b6f419] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Webfluency
            </Link>
            <MagneticButton href={BOOKING_URL} variant="primary" className="text-xs py-2.5 px-5">
              Book a Call
            </MagneticButton>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 border-b border-[rgba(255,255,255,0.08)]">
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b6f419]/30 to-transparent" />
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs text-[#b6f419] uppercase tracking-widest">
                {service.number}
              </span>
              <span className="font-mono text-xs text-[#8c8c8a] uppercase tracking-widest">
                Core Capability
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fafafa] leading-[1.0] mb-8">
              {service.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 p-6 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#181818]">
              <div>
                <div className="font-mono text-[11px] text-red-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  The Business Problem
                </div>
                <p className="text-sm text-[#fafafa] leading-relaxed">{service.problem}</p>
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#b6f419] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b6f419]" />
                  How We Solve It
                </div>
                <p className="text-sm text-[#8c8c8a] leading-relaxed">{service.solution}</p>
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#cbff46] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#cbff46]" />
                  Commercial Outcome
                </div>
                <p className="text-sm text-[#fafafa] font-medium leading-relaxed">{service.outcome}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <div className="relative h-72 sm:h-96 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-2xl overflow-hidden mt-8 mb-16 border border-[rgba(255,255,255,0.1)]">
          <Image
            src={service.image}
            alt={`${service.title} — Webfluency Agency`}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-pill border border-[rgba(255,255,255,0.2)] bg-black/60 px-4 py-1.5 font-mono text-[11px] text-[#fafafa] backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-24">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#fafafa] mb-10">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {service.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#181818] px-5 py-4"
              >
                <Check className="h-5 w-5 shrink-0 text-[#b6f419]" />
                <span className="text-sm font-medium text-[#fafafa]">{tag}</span>
              </div>
            ))}
          </div>

          {/* Explore other services */}
          <div className="mb-12">
            <h3 className="font-display text-2xl font-bold text-[#fafafa] mb-6">Other Services</h3>
            <div className="flex flex-wrap gap-3">
              {SERVICES.filter((s) => s.id !== service.id).map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-pill border border-[rgba(255,255,255,0.1)] bg-[#181818] px-4 py-2 font-mono text-xs text-[#8c8c8a] hover:border-[#b6f419] hover:text-[#b6f419] transition-colors"
                >
                  {s.number} {s.title}
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[#b6f419]/30 bg-[#b6f419]/5 p-8 sm:p-12 text-center">
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#fafafa] mb-4">
              Ready to get started with {service.title}?
            </h2>
            <p className="text-sm sm:text-base text-[#8c8c8a] mb-8 max-w-lg mx-auto">
              Book a 20-minute discovery call. We&apos;ll outline exactly how this service applies to your specific situation with zero commitment required.
            </p>
            <MagneticButton href={BOOKING_URL} variant="primary" className="text-sm py-4 px-10">
              Book a Free Discovery Call
            </MagneticButton>
          </div>
        </section>
      </main>
    </>
  );
}
