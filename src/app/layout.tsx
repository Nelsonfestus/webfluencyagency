import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { SITE_METADATA, FAQS } from "@/content/site-content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.url),
  title: {
    default: `${SITE_METADATA.name} — Websites, SEO & AI for Business Growth`,
    template: `%s | ${SITE_METADATA.name}`,
  },
  description: SITE_METADATA.description,
  keywords: [
    "web design agency",
    "website development",
    "SEO agency",
    "local SEO",
    "AI video production",
    "ecommerce development",
    "Next.js agency",
    "Google Business Profile optimization",
    "link building",
    "conversion optimisation",
  ],
  authors: [{ name: SITE_METADATA.name }],
  creator: SITE_METADATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_METADATA.url,
    siteName: SITE_METADATA.name,
    title: `${SITE_METADATA.name} — Websites, SEO & AI`,
    description: SITE_METADATA.description,
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_METADATA.name} — We Fix Business Problems With Websites, SEO & AI`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_METADATA.name} — Websites, SEO & AI`,
    description: SITE_METADATA.description,
    images: [SITE_METADATA.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_METADATA.url,
  },
};

// JSON-LD schemas
function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: SITE_METADATA.name,
    url: SITE_METADATA.url,
    description: SITE_METADATA.description,
    email: SITE_METADATA.contact.email,
    telephone: SITE_METADATA.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressCountry: "US",
    },
    serviceType: [
      "Website Design",
      "Website Development",
      "E-commerce Development",
      "SEO",
      "Local SEO",
      "Google Business Profile Optimization",
      "Link Building",
      "AI Video Production",
    ],
    sameAs: SITE_METADATA.socials.map((s) => s.url),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <head>
        <OrganizationSchema />
        <FaqSchema />
      </head>
      <body>{children}</body>
    </html>
  );
}
