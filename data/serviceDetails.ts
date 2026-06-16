import { servicesData } from "./services";

export type ServiceDetail = {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  introText: string;
  whyCritical: string;
  pillars: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  tools: {
    name: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  pricing: {
    planName: string;
    price: string;
    features: string[];
  }[];
};

export const serviceDetailsData: Record<string, Partial<ServiceDetail>> = {
  "seo": {
    introText: "Search Engine Optimization (SEO) is the practice of improving your website's organic visibility across search engines like Google, Bing, and AI search platforms. In 2026, SEO has transformed from basic keyword optimization into an integrated discipline of technical speed, brand authority, high-quality user experience, and generative search visibility. It drives compounding, high-intent traffic that keeps converting long after the initial investment.",
    whyCritical: "Google handles over 95% of search queries in Bangladesh. When prospects search for your products or services, they trust organic results far more than paid ads. Appearing on the first page ensures you capture buyers at the exact moment they are ready to make a decision, lowering your long-term Customer Acquisition Cost (CAC) by up to 80% compared to paid-only campaigns.",
    pillars: [
      { title: "Technical SEO Excellence", description: "Optimization of Core Web Vitals, speed, indexing, structured schema, and clean crawl architecture." },
      { title: "On-Page Optimization", description: "Refining headers, title tags, internal links, and content depth to rank for semantic search intent." },
      { title: "EEAT Content Strategy", description: "Creating content that demonstrates Experience, Expertise, Authoritativeness, and Trustworthiness." },
      { title: "High-Authority Link Building", description: "White-hat link acquisition through digital PR, guest outreach, and partnerships." },
      { title: "Local SEO Dominance", description: "Optimizing Google Business Profiles to capture high-converting local 'near me' searches." },
      { title: "AI Search Optimization (AEO)", description: "Ensuring your brand is cited as a trusted source in ChatGPT, Gemini, and AI Overviews." }
    ],
    process: [
      { step: "01", title: "Technical Audit & Discovery", description: "We run deep crawlers using Screaming Frog and Sitebulb to identify indexation issues, duplicate pages, and site speed bottlenecks." },
      { step: "02", title: "Keyword Research & Topic Clustering", description: "Mapping search terms based on user intent and grouping them into topical hubs to build search authority." },
      { step: "03", title: "On-Page & Technical Remediation", description: "Fixing page speed, implementing schema markups, and restructuring headings and metadata across core service pages." },
      { step: "04", title: "Content Engine Deployment", description: "Writing long-form, highly informative guides and landing pages targeting high-volume and long-tail keywords." },
      { step: "05", title: "Link Acquisition & Reporting", description: "Reaching out to high-authority domains for contextually relevant links, and tracking ranking performance weekly." }
    ],
    tools: [
      { name: "Ahrefs", description: "Competitor analysis, keyword index, and backlink audit." },
      { name: "Semrush", description: "Rank tracking and advertising research." },
      { name: "Screaming Frog", description: "Advanced technical site auditing and crawling." },
      { name: "Surfer SEO", description: "Semantic content optimization and scoring." },
      { name: "Google Search Console", description: "Official indexing status and search performance tracking." }
    ],
    faqs: [
      { question: "How long does it take to see results from SEO?", answer: "Typically, technical fixes and on-page optimization show initial ranking boosts within 45 to 60 days. However, substantial organic traffic growth and page-one rankings for competitive keywords usually require 4 to 6 months of consistent effort." },
      { question: "What is white-hat SEO?", answer: "White-hat SEO refers to optimization practices that align with Google's webmaster guidelines. This means creating valuable content and building real organic backlinks, avoiding tricks like keyword stuffing or buying cheap link packages that get websites banned." },
      { question: "Do you guarantee #1 rankings on Google?", answer: "No ethical SEO agency can guarantee specific rankings because search engine algorithms change constantly and are outside of direct control. We guarantee to execute best-practice strategies that historically double or triple organic traffic and leads." }
    ],
    pricing: [
      { planName: "Starter SEO", price: "৳35,000 / month", features: ["15 Target Keywords", "Technical Audit & Fixes", "4 High-Quality Blog Posts", "Google Business Profile Setup", "Monthly Reporting"] },
      { planName: "Growth SEO", price: "৳75,000 / month", features: ["40 Target Keywords", "Competitor Backlink Analysis", "8 SEO Blog Posts/Month", "Local & Schema SEO Optimization", "AI Search Citation Prep", "Bi-weekly Strategy Call"] },
      { planName: "Enterprise SEO", price: "৳1,50,000 / month", features: ["Unlimited Keywords", "Digital PR Link Building", "16+ Content Pieces/Month", "International SEO Setup", "Dedicated Analyst & Team Support", "Weekly Live Dashboards"] }
    ]
  },
  "performance-marketing": {
    introText: "Performance Marketing is a results-driven advertising approach where campaigns are optimized for conversions—leads, sales, signups, or downloads. By running integrated multi-channel paid acquisition across Meta, Google, TikTok, and LinkedIn, we construct a cohesive sales funnel that maximizes return on ad spend (ROAS) and eliminates marketing waste.",
    whyCritical: "Unlike traditional brand awareness campaigns, performance marketing is completely accountable. Every single taka spent is tracked directly to a click, a lead, or a sale. This transparent visibility allows businesses to scale high-performing campaigns rapidly and pause underperforming creatives, ensuring efficient growth budgets.",
    pillars: [
      { title: "Laser-Targeted Audiences", description: "Building custom, lookalike, and pixel-tracked remarketing pools to reach high-value prospects." },
      { title: "Creative A/B Testing", description: "Constantly testing headlines, hooks, visual formats, and CTAs to discover winning ad combinations." },
      { title: "Full-Funnel Attribution", description: "Mapping user journeys from first ad impression to final sale to understand true channel value." },
      { title: "Real-Time Optimization", description: "Hourly and daily budget shifting to ensure ad spend goes only to active, high-ROI placements." }
    ],
    process: [
      { step: "01", title: "Funnel Analysis", description: "We inspect your conversion pages, landing pages, and tracking pixels to ensure seamless measurement." },
      { step: "02", title: "Targeting & Audience Map", description: "Defining detailed demographic, interest, and behavioral targets across search and social channels." },
      { step: "03", title: "Ad Creative & Copy Production", description: "Our design team creates scroll-stopping graphic ads and native short-form video hooks." },
      { step: "04", title: "Campaign Launch & Alpha Testing", description: "Deploying campaigns in a controlled testing phase with low budgets to validate audience response." },
      { step: "05", title: "Scaling & ROI Optimization", description: "Funneling budget into top creatives and expanding audiences via lookalikes to grow sales volumes." }
    ],
    tools: [
      { name: "Meta Ads Manager", description: "Advanced Facebook and Instagram campaign optimization." },
      { name: "Google Ads", description: "Intent-based Search, Shopping, and YouTube campaigns." },
      { name: "Google Analytics 4", description: "Cross-channel conversion attribution and path analysis." },
      { name: "Hotjar", description: "Heatmapping to analyze how ad traffic interacts with landing pages." }
    ],
    faqs: [
      { question: "What budget do I need to start performance marketing?", answer: "We recommend starting with an ad budget of at least $500/month (approx. ৳60,000) for testing, plus our agency retainer. This allows us to gather enough conversion data to optimize campaigns effectively." },
      { question: "How is performance marketing reported?", answer: "We build live Looker Studio dashboards tracking cost per lead, cost per purchase, conversion rate, and overall return on ad spend (ROAS) in real time." }
    ],
    pricing: [
      { planName: "Growth Plan", price: "৳50,000 / month", features: ["Meta & Google Platform Setup", "Audience Research", "Up to 5 Creative Variations", "Conversion Tracking Setup", "Weekly Optimization Reports"] },
      { planName: "Enterprise Plan", price: "৳1,20,000 / month", features: ["Meta, Google & TikTok Campaigns", "Full-Funnel Video & Static Creative Production", "CRM Integration & Lead Nurturing Setup", "Dedicated Performance Manager", "24/7 Slack Communication"] }
    ]
  },
  "web-development": {
    introText: "Your website is the foundation of your digital brand. We build fast, responsive, and conversion-optimized websites that do not just display information, but turn visitors into loyal clients. Our engineering processes prioritize mobile-first speed, modern visual animations, airtight security, and seamless CMS manageability.",
    whyCritical: "A slow website kills revenue. Studies show that a 1-second delay in page load time reduces conversions by up to 20%. We write clean code, optimize static assets, and implement advanced caching to ensure your pages load in under 2 seconds, providing a premium experience that ranks well on search engines.",
    pillars: [
      { title: "Mobile-First Architecture", description: "Perfect responsive layouts across all screen resolutions, from small smartphones to massive desktops." },
      { title: "SEO-Ready Technical Build", description: "Structured schema markup, clean HTML semantics, and optimized core performance metrics from day one." },
      { title: "Conversion-Focused UX/UI", description: "Clear navigation paths, prominent call-to-actions, and interactive sections that guide users to convert." },
      { title: "Custom CMS Integrations", description: "Easy-to-use content management platforms allowing your team to update text and media without developer support." }
    ],
    process: [
      { step: "01", title: "UX Wireframing & Design UI", description: "Creating clickable, interactive visual designs in Figma that align with your modern brand aesthetics." },
      { step: "02", title: "Frontend Engineering", description: "Writing clean, componentized React or Next.js code styled with high-performance CSS." },
      { step: "03", title: "Backend & System Integration", description: "Integrating APIs, databases, CRM webhooks, and local payment systems (bKash, Nagad, cards)." },
      { step: "04", title: "Testing & Performance Tune-Up", description: "Running audits on PageSpeed, testing form submissions, checking cross-browser compatibility." },
      { step: "05", title: "Deployment & Training", description: "Launching to production on secure servers and training your internal team to manage site content." }
    ],
    tools: [
      { name: "Next.js / React", description: "Highly interactive, performant web development frameworks." },
      { name: "Figma", description: "Collaborative UI/UX wireframing and design layouts." },
      { name: "Tailwind CSS", description: "High-speed, modular CSS utility frameworks." },
      { name: "Vercel / AWS", description: "Global CDN hosting setups for near-instantaneous page speeds." }
    ],
    faqs: [
      { question: "Do you build custom ecommerce stores?", answer: "Yes, we build fully customized ecommerce sites on Next.js or Shopify, integrated with local shipping providers, SMS notification gateways, and popular payment solutions." },
      { question: "Will I be able to update content myself?", answer: "Absolutely. We build all our sites on top of easy-to-use Content Management Systems (CMS) like Sanity, WordPress, or Shopify, providing video walkthroughs on how to manage them." }
    ],
    pricing: [
      { planName: "Landing Page", price: "৳30,000", features: ["Single Page Custom Layout", "Next.js Performance", "Form / WhatsApp Integration", "1 Year Domain/Hosting Setup", "Lighthouse Score 90+ Guaranteed"] },
      { planName: "Corporate Website", price: "৳90,000", features: ["Up to 8 Custom Pages", "Headless CMS Integration", "Blog / Portfolio Modules", "Full SEO & Schema Architecture", "Mobile First Design"] },
      { planName: "Custom E-commerce", price: "৳1,80,000", features: ["Complete Online Store", "Local Payment & Shipping Integrations", "Inventory & Order Dashboard", "Speed & Security Enhancements", "3 Months Ongoing Support"] }
    ]
  }
};

// Generates fallback data for the remaining of the 29 services to guarantee zero dead-ends.
export function getServiceDetail(slug: string): ServiceDetail {
  const service = servicesData.find(
    (s) => s.href.replace("/services/", "") === slug
  );

  if (!service) {
    throw new Error(`Service not found for slug: ${slug}`);
  }

  const customData = serviceDetailsData[slug] || {};

  return {
    id: service.id,
    slug: slug,
    title: service.title,
    tagline: service.tagline,
    description: service.description,
    introText: customData.introText || `${service.title} is a specialized service designed to help your brand scale, engage target audiences, and convert prospects. By aligning with our expert strategists, your business accesses deep platform knowledge, modern tools, and execution strategies designed around measurable business outcomes.`,
    whyCritical: customData.whyCritical || `In today's fast-moving digital environment, scaling requires specialized workflows. Investing in professional ${service.title} allows your team to skip experimental guesswork, minimize marketing waste, and immediately deploy proven strategies optimized for your industry vertical.`,
    pillars: customData.pillars || [
      { title: "Data-Driven Strategy", description: "Every campaign, design, or piece of code is backed by user research and market statistics." },
      { title: "In-House Specialists", description: "No outsourcing. Your projects are managed by dedicated specialists working under one roof." },
      { title: "Performance Reports", description: "Monthly executive summaries showing transparent progress and tracking revenue metrics." },
      { title: "Continuous Optimization", description: "A/B testing, diagnostic adjustments, and constant iteration to improve overall outcomes." }
    ],
    process: customData.process || [
      { step: "01", title: "Discovery & Audit", description: "We start by auditing your existing channels, discussing your target goals, and analyzing competitors." },
      { step: "02", title: "Strategy Setup", description: "Creating a detailed execution blueprint specifying budgets, timelines, design ideas, or code specs." },
      { step: "03", title: "Asset Creation", description: "Designing creatives, writing copy, or writing custom code assets tailored to the target channel." },
      { step: "04", title: "Campaign Launch", description: "Deploying your strategy under close supervision to verify functionality and record baseline data." },
      { step: "05", title: "Optimization & Growth", description: "Tweaking assets, updating code parameters, or scaling budgets based on real performance analytics." }
    ],
    tools: customData.tools || [
      { name: "Google Analytics 4", description: "Comprehensive site traffic and event tracking." },
      { name: "Figma", description: "High-fidelity UI and collaborative layout design." },
      { name: "Slack & Asana", description: "Real-time communication and task tracking workflows." }
    ],
    faqs: customData.faqs || [
      { question: `How do we measure success with ${service.title}?`, answer: "We establish clear KPIs (Key Performance Indicators) such as leads generated, organic ranking growth, or conversion rate during our initial strategy phase, providing monthly reports showing exact progress." },
      { question: "Do you sign Non-Disclosure Agreements (NDA)?", answer: "Yes, we respect your brand's confidentiality and are happy to sign standard NDAs before sharing accounts, strategies, or proprietary information." }
    ],
    pricing: customData.pricing || [
      { planName: "Growth Retainer", price: "৳45,000 / month", features: ["Core Strategy Plan", "In-house Graphic Design & Copy", "Monthly Optimization Cycles", "Looker Studio Dashboard Reporting", "Dedicated Account Manager"] },
      { planName: "Enterprise Custom", price: "Contact for Quote", features: ["Full-Scale Multi-Platform Execution", "Advanced Integrations & Custom Automations", "Dedicated Project Pod (Strategist, Creative, Analyst)", "Priority Support SLA", "Weekly Strategy Alignments"] }
    ]
  };
}
