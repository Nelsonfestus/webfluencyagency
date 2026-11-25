/**
 * Webfluency Agency - Master Site Content & Configuration
 * Single source of truth for all copy, links, metrics, and services.
 */

// Global Booking Link - update here to change across all buttons
export const BOOKING_URL = "https://calendly.com/your-agency/discovery";

export const SITE_METADATA = {
  name: "Webfluency Agency",
  tagline: "We Fix Business Problems With Websites, SEO & AI.",
  description: "Webfluency Agency helps growth-driven businesses acquire qualified pipeline and build defensible market share through high-converting websites, rigorous SEO, and practical AI automation.",
  url: "https://webfluency.agency",
  ogImage: "/images/og-image.jpg",
  contact: {
    email: "hello@webfluency.agency", // Placeholder: replace with your business email
    phone: "+1 (555) 019-2834",      // Placeholder: replace with your business phone
    address: "New York & Remote Worldwide",
  },
  socials: [
    { label: "Twitter / X", url: "https://twitter.com/yourhandle" },
    { label: "LinkedIn", url: "https://linkedin.com/company/youragency" },
    { label: "GitHub", url: "https://github.com/yourhandle" },
  ],
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: string[];
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "website-design",
    number: "01",
    title: "Website Design",
    slug: "website-design",
    problem: "Most websites look polished but fail to convert visitors into qualified sales conversations.",
    solution: "We build user journeys rooted in real buyer behavior, structured typography, and clear visual hierarchies that direct attention to what drives revenue.",
    outcome: "A brand asset that builds immediate credibility and converts qualified traffic at measurable rates.",
    tags: [
      "User Experience (UX)",
      "Conversion UI",
      "Design Systems",
      "Interactive Prototyping",
      "Information Architecture",
      "Mobile-First Layouts",
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "website-development",
    number: "02",
    title: "Website Development",
    slug: "website-development",
    problem: "Bloated themes and slow load times kill search rankings and frustrate prospective customers.",
    solution: "We handcraft modern Jamstack and headless applications using Next.js and Tailwind CSS with sub-second load times and zero technical debt.",
    outcome: "Near-perfect 95+ Core Web Vitals, enterprise security, and seamless developer handoff.",
    tags: [
      "Next.js & React",
      "Headless CMS Integration",
      "Tailwind CSS",
      "API Engineering",
      "Core Web Vitals 95+",
      "TypeScript Architecture",
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ecommerce-websites",
    number: "03",
    title: "E-commerce Websites",
    slug: "ecommerce-websites",
    problem: "Complicated checkout flows and sluggish mobile catalogs drive cart abandonment through the roof.",
    solution: "We architect high-performing Shopify and custom headless commerce stores designed for rapid checkout, high average order value, and effortless inventory sync.",
    outcome: "Frictionless checkout experiences that lower cart drop-off and maximize customer lifetime value.",
    tags: [
      "Shopify & Shopify Plus",
      "Custom Checkout Optimization",
      "Headless Commerce",
      "Payment Gateway Integration",
      "Catalog Architecture",
      "Subscription Flows",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "seo",
    number: "04",
    title: "SEO (Search Engine Optimization)",
    slug: "seo",
    problem: "Paid ads get more expensive every month, and generic blog posts fail to generate qualified pipeline.",
    solution: "We execute bottom-of-funnel search strategies: technical crawl fixes, high-intent topic clustering, and authoritative content that search engines reward.",
    outcome: "Compounding organic traffic from decision-makers actively searching to buy your solution.",
    tags: [
      "Technical Site Audits",
      "Crawl Budget Optimization",
      "Commercial Keyword Strategy",
      "Content Siloing",
      "Entity & Schema Markup",
      "SERP Dominance",
    ],
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "local-seo",
    number: "05",
    title: "Local SEO",
    slug: "local-seo",
    problem: "Customers right in your city are searching for your service and finding your competitors instead.",
    solution: "We build localized landing pages, manage hyper-local citations, and calibrate geo-relevance signals across all target service territories.",
    outcome: "Consistent inbound phone calls and quotation requests from high-value regional prospects.",
    tags: [
      "Citation Building & Audit",
      "Map Pack Ranking",
      "Review Generation Strategy",
      "Local Landing Pages",
      "NAP Consistency",
      "Geo-Targeted Content",
    ],
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gbp-optimization",
    number: "06",
    title: "Google Business Profile Optimization",
    slug: "google-business-profile",
    problem: "An unoptimized or neglected Google Business Profile leaves the 3-Pack top spot wide open for rivals.",
    solution: "We verify, optimize, and actively maintain your GBP: category hierarchies, high-res photos, weekly geo-tagged updates, and review velocity management.",
    outcome: "Prominent placement in the local 3-Pack driving direct clicks, direction requests, and inquiries.",
    tags: [
      "Google 3-Pack Optimization",
      "Category & Attribute Tuning",
      "Geo-Tagged Media Feeds",
      "Review Velocity Framework",
      "Spam Fighting & Reinstatement",
      "Local Map Visibility",
    ],
    image: "https://images.unsplash.com/photo-1534972195531-a756b1126f24?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "backlinking",
    number: "07",
    title: "Backlinking / Link Building",
    slug: "backlinking-link-building",
    problem: "Without real domain authority, even the best content sits stranded on page four of Google search.",
    solution: "We run editorial outreach and digital PR campaigns to acquire contextual, do-follow links from vetted industry publications—no spam networks or private blog farms.",
    outcome: "Sustainable domain rating growth that lifts rankings across your entire keyword universe.",
    tags: [
      "Digital PR & Outreach",
      "Contextual Editorial Links",
      "Unlinked Brand Mentions",
      "Skyscraper Campaigns",
      "Broken Link Reclamation",
      "Competitor Link Intersect",
    ],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ai-video",
    number: "08",
    title: "AI Video Production",
    slug: "ai-video-production",
    problem: "Traditional video production takes months, costs tens of thousands, and cannot scale across multiple ad variations.",
    solution: "We script, generate, and edit studio-grade product demos, localized explainer videos, and social video creative using cutting-edge generative AI pipelines.",
    outcome: "Hyper-engaging video assets delivered in days at a fraction of standard production overhead.",
    tags: [
      "AI Avatars & Voice Synthesis",
      "Automated Product Walkthroughs",
      "Multi-Language Localization",
      "High-Converting Ad Creatives",
      "Generative B-Roll & Motion",
      "Rapid Creative Iteration",
    ],
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop",
  },
];

export const WHY_US_CARDS = [
  {
    id: "problem-first",
    badge: "01 / Clarity",
    title: "Problem-First Approach",
    description: "We don't build features for the sake of trends. We identify the bottleneck holding your business back and build precisely what clears it.",
    sceneType: "problem-toggle",
  },
  {
    id: "clear-process",
    badge: "02 / Reliability",
    title: "Clear Process, Zero Surprises",
    description: "Every phase has explicit deliverables and fixed timelines. You always know what is being built, who is building it, and when it goes live.",
    sceneType: "process-rail",
  },
  {
    id: "built-to-rank",
    badge: "03 / Authority",
    title: "Built to Rank from Day One",
    description: "SEO isn't a coat of paint applied after launch. Information architecture, semantic HTML, and schema are baked into the foundation.",
    sceneType: "serp-preview",
  },
  {
    id: "quality-detail",
    badge: "04 / Precision",
    title: "Quality in Every Detail",
    description: "Every button hover, micro-transition, typography scale, and database query is refined until the experience feels effortless and immediate.",
    sceneType: "speed-score",
  },
  {
    id: "one-contact",
    badge: "05 / Communication",
    title: "One Dedicated Point of Contact",
    description: "No junior account managers acting as games of telephone. You talk directly with the lead engineer and strategist owning your project.",
    sceneType: "direct-channel",
  },
  {
    id: "measurable-results",
    badge: "06 / Impact",
    title: "Results You Can Measure",
    description: "We define concrete commercial metrics on day one and install transparent dashboards so you track real business return, not vanity metrics.",
    sceneType: "metrics-chart",
  },
];

export const PROCESS_STEPS = [
  {
    number: "(01)",
    name: "Discovery & Alignment",
    tagline: "We diagnose before we prescribe.",
    description: "We interrogate your business model, customer acquisition bottlenecks, historical analytics, and competitor landscape to isolate the highest-leverage growth opportunities.",
    deliverables: ["Commercial Audit", "Customer Journey Map", "Technical Scope & KPI Blueprint"],
  },
  {
    number: "(02)",
    name: "Strategy & Architecture",
    tagline: "Every line has a clear commercial purpose.",
    description: "We design the site structure, search taxonomy, and conversion pathways. We ensure every page maps to a commercial buyer persona and bottom-of-funnel keyword.",
    deliverables: ["Information Architecture", "Keyword Matrix", "Wireframes & Content Hierarchy"],
  },
  {
    number: "(03)",
    name: "Design & Prototyping",
    tagline: "High-contrast editorial aesthetics meets conversion engineering.",
    description: "We design custom, responsive layouts with bespoke motion design, brand typography, and intuitive components that make visitors stop and engage.",
    deliverables: ["Interactive High-Fi Prototypes", "Component Design System", "Motion & Interaction Rules"],
  },
  {
    number: "(04)",
    name: "High-Performance Development",
    tagline: "Modern Next.js architecture with zero bloat.",
    description: "We build with Next.js, TypeScript, and clean semantic Tailwind CSS. We optimize for 95+ Core Web Vitals, bulletproof accessibility, and headless content management.",
    deliverables: ["Production App Codebase", "Headless CMS Setup", "API & Third-Party Integrations"],
  },
  {
    number: "(05)",
    name: "Quality Assurance & SEO Audit",
    tagline: "Zero broken links. Zero layout shift. Zero crawl errors.",
    description: "We run comprehensive cross-browser audits, mobile viewport stress tests, schema validation, canonical checks, and end-to-end form verification.",
    deliverables: ["Cross-Device QA Sign-off", "Technical SEO Verification", "Security & Speed Benchmark"],
  },
  {
    number: "(06)",
    name: "Launch & Growth Cadence",
    tagline: "Launch day is the start of compounding momentum.",
    description: "We execute a seamless DNS zero-downtime switch, verify Google Search Console indexing, monitor real-time conversions, and set up continuous iteration.",
    deliverables: ["Zero-Downtime Deployment", "Search Console Crawl Verification", "Ongoing Growth Roadmap"],
  },
];

export const ENGAGEMENT_MODELS = [
  {
    id: "project",
    label: "Fixed-Scope Delivery",
    title: "One-Off Project",
    priceTag: "Custom Fixed Quote",
    description: "Best for comprehensive redesigns, new product launches, or complete technical migrations with clear specifications and defined milestones.",
    features: [
      "Fixed scope, fixed timeline, fixed cost",
      "End-to-end UX, design, code, and launch",
      "Full technical SEO architecture included",
      "Post-launch warranty & 30-day dedicated hyper-care",
      "Complete code ownership and CMS training",
    ],
    ctaText: "Book a Project Call",
    featured: false,
  },
  {
    id: "retainer",
    label: "Most Popular",
    title: "Monthly Growth Retainer",
    priceTag: "Predictable Monthly Flat Rate",
    description: "Continuous partnership combining technical web development, aggressive ongoing SEO, and monthly AI video creation to compound pipeline.",
    features: [
      "Dedicated senior team allocating focused sprint cycles",
      "Continuous bottom-of-funnel SEO & link outreach",
      "Conversion rate optimization (CRO) & split testing",
      "Monthly AI video creation for ads and socials",
      "Direct Slack/Teams channel with sub-hour response",
      "Transparent bi-weekly sprint reviews and ROI dashboards",
    ],
    ctaText: "Book Retainer Discovery",
    featured: true,
  },
  {
    id: "on-demand",
    label: "Flexible Engineering",
    title: "On-Demand Support",
    priceTag: "Flexible Monthly Block",
    description: "Reserved senior engineering and technical support hours to keep your digital assets secure, fast, and constantly evolving without hiring full-time.",
    features: [
      "Guaranteed priority SLAs for urgent fixes and releases",
      "Continuous Core Web Vitals and speed monitoring",
      "Third-party API updates and security patches",
      "Ad-hoc landing page builds and feature requests",
      "Rollover hour flexibility within quarterly billing",
    ],
    ctaText: "Inquire About Support",
    featured: false,
  },
];

export const CASE_STUDIES = [
  {
    id: "apex-industrial",
    title: "Apex Logistics Platform",
    category: "Full Stack Web & Technical SEO",
    result: "+[00]% Qualified Regional Quotations in [00] Days",
    placeholderNotice: "Case study placeholder — ready to replace with your live client work",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "Local SEO", "Custom Quote Calculator"],
  },
  {
    id: "strata-commerce",
    title: "Strata Modern Living",
    category: "Headless E-commerce & Performance",
    result: "0.58s Page Load & [00]% Lower Mobile Checkout Drop",
    placeholderNotice: "Case study placeholder — ready to replace with your live client work",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    tags: ["Shopify Plus", "Sub-Second Speed", "Conversion UI"],
  },
  {
    id: "nexus-legal",
    title: "Nexus Practice Group",
    category: "Local SEO & Google Business Profile",
    result: "#1 Rank for [00]+ High-Value Metro Keywords",
    placeholderNotice: "Case study placeholder — ready to replace with your live client work",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    tags: ["Local 3-Pack", "Citation Cleanup", "Review Framework"],
  },
  {
    id: "vanguard-ai",
    title: "Vanguard Tech Demos",
    category: "AI Video Production & Ad Creative",
    result: "[00] Studio-Grade Video Assets Delivered in 5 Days",
    placeholderNotice: "Case study placeholder — ready to replace with your live client work",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    tags: ["AI Avatars", "B-Roll Motion", "Paid Ad Assets"],
  },
];

export const FEATURED_CASE_STUDY = {
  client: "Enterprise Partner Case Study [Placeholder]",
  headline: "Re-engineering a Stagnant Web Platform into a Top Organic Pipeline Driver",
  metrics: [
    { label: "Core Web Vitals", value: "99/100" },
    { label: "Organic Search Growth", value: "+[00]%" },
    { label: "Inbound Pipeline Lift", value: "[00]x" },
    { label: "Average Page Speed", value: "0.62s" },
  ],
  quote: "Webfluency rebuilt our digital presence from the ground up. Instead of endless agency meetings and theoretical decks, they shipped a lightning-fast site that immediately started booking sales calls. They are true commercial partners.",
  quoteAuthor: "[Client Name / Co-Founder Placeholder]",
  quoteRole: "Chief Executive Officer, [Company Name Placeholder]",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
};

export const STATS = [
  {
    id: "stat-1",
    value: "[00]+",
    label: "Websites & Applications Shipped",
    subtext: "Crafted with Next.js, TypeScript, and clean code standards.",
  },
  {
    id: "stat-2",
    value: "[00]%",
    label: "Average Page Speed Improvement",
    subtext: "Eliminating bloat so Google and real customers stay engaged.",
  },
  {
    id: "stat-3",
    value: "[00]x",
    label: "Organic Pipeline Acceleration",
    subtext: "Targeting intent-rich search queries that directly generate sales.",
  },
  {
    id: "stat-4",
    value: "100%",
    label: "In-House Senior Execution",
    subtext: "No outsourced junior teams or hidden handoffs.",
  },
];

export const FAQS = [
  {
    question: "How does your pricing work?",
    answer: "We believe in total commercial transparency. For new websites and targeted rebuilds, we offer fixed-scope quotes so you never deal with surprise change orders. For ongoing growth (combining SEO, conversion rate optimization, and AI video), we work on predictable monthly retainers. Book a call and we'll evaluate your scope in 20 minutes.",
  },
  {
    question: "What realistic timelines can we expect for a new website?",
    answer: "A focused high-converting landing page or targeted 5-to-8 page commercial site typically takes 3 to 5 weeks from kickoff to production launch. Larger enterprise portals or custom headless commerce platforms generally take 6 to 10 weeks. Because our process is milestone-driven, you'll review interactive prototypes early.",
  },
  {
    question: "How long does it take to see real results from SEO?",
    answer: "Technical crawl and site speed fixes deliver measurable indexation improvements in 2 to 4 weeks. High-intent local keywords and commercial queries generally show significant ranking momentum within 60 to 90 days as authority compounds. We focus exclusively on bottom-of-funnel keywords that convert into pipeline, not vanity volume.",
  },
  {
    question: "What is your local SEO and Google Business Profile strategy?",
    answer: "We focus on real geographic proximity signals: deep citation consistency (NAP audits), local schema markup, high-value service area landing pages, and proactive review generation workflows. We also audit and resolve competitor keyword-stuffing spam that may be pushing you down in the local 3-Pack.",
  },
  {
    question: "Which e-commerce platforms do you support?",
    answer: "We specialize in Shopify, Shopify Plus, and modern headless commerce architectures utilizing Next.js with Shopify Storefront API or Supabase. We do not build slow, bloated WooCommerce templates because they fail modern Core Web Vitals benchmarks.",
  },
  {
    question: "How does your AI video production process work?",
    answer: "We extract your key value propositions into concise, commercially structured scripts. Then, using modern generative video, motion synthesis, and studio-grade voice models, we produce high-resolution product explainers and ad variations. You receive ready-to-run assets in days instead of shooting on location for weeks.",
  },
  {
    question: "What is your revision and feedback policy?",
    answer: "Every project phase (wireframing, UI design, staging code) includes dedicated revision rounds. We share live staging links and Figma prototypes where you leave comments directly on components. Nothing moves to production code until you give explicit sign-off.",
  },
  {
    question: "What ongoing support do you provide after launch?",
    answer: "Every website launch includes 30 days of dedicated post-launch hyper-care with zero hourly fees for adjustments. After launch, clients can enroll in our Monthly Growth Retainer or On-Demand Support for ongoing SEO, security patches, continuous CRO experiments, and new feature rollouts.",
  },
];

export const TECH_STACK = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "GSAP", category: "Motion" },
  { name: "Lenis", category: "Smooth Scroll" },
  { name: "Supabase", category: "Database" },
  { name: "Shopify Plus", category: "Commerce" },
  { name: "Google Analytics 4", category: "Analytics" },
  { name: "Google Search Console", category: "SEO" },
  { name: "Google Business Profile", category: "Local SEO" },
  { name: "Ahrefs & Semrush", category: "Search Intelligence" },
  { name: "Midjourney", category: "Generative AI" },
  { name: "Runway Gen-3", category: "AI Video" },
  { name: "ElevenLabs", category: "Voice AI" },
];

export const PARTNER_PLACEHOLDERS = [
  { name: "Vanguard Tech", category: "Enterprise B2B" },
  { name: "Strata Design", category: "Modern Architecture" },
  { name: "Apex Logistics", category: "Global Supply" },
  { name: "Kore Health", category: "Biotech & Wellness" },
  { name: "Alloy Financial", category: "Fintech Platform" },
  { name: "Lumina Labs", category: "AI Infrastructure" },
  { name: "Terra Capital", category: "Growth Equity" },
  { name: "Beacon Retail", category: "Direct-to-Consumer" },
];
