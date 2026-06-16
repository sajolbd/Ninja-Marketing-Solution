import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Hammer, HelpCircle, Layers, Sparkles, Wrench } from "lucide-react";
import Container from "components/shared/Container";
import { servicesData } from "data/services";
import { getServiceDetail, ServiceDetail } from "data/serviceDetails";
import FaqAccordion from "components/services/FaqAccordion";
import TypingTitle from "components/layout/TypingTitle";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static parameters for all 29 services for SSG
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.href.replace("/services/", ""),
  }));
}

// Dynamically generate metadata for each page for SEO best practices
export async function generateMetadata({ params }: PageProps) {
  try {
    const detail = getServiceDetail(params.slug);
    return {
      title: `${detail.title} | Premium Growth Services - Ninja Marketing Solution`,
      description: `${detail.tagline} ${detail.description.substring(0, 120)}...`,
    };
  } catch (error) {
    return {
      title: "Service Details - Ninja Marketing Solution",
      description: "Explore our premium marketing and engineering solutions.",
    };
  }
}

export default function ServiceDetailPage({ params }: PageProps) {
  let detail: ServiceDetail;
  try {
    detail = getServiceDetail(params.slug);
  } catch (e) {
    notFound();
  }

  // Find next service for the footer pagination
  const currentIndex = servicesData.findIndex((s) => s.id === detail.id);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];
  const nextServiceSlug = nextService.href.replace("/services/", "");

  const slugImageMap: Record<string, string> = {
    "seo": "/images/seo-service.png",
    "performance-marketing": "/images/performance-marketing.png",
    "web-development": "/images/web-development.png",
  };
  const serviceImage = slugImageMap[detail.slug];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white py-12 md:py-24">
      {/* Dynamic Glowing Accent Background Shapes */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#20A1C9]/5 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 top-[40%] h-[500px] w-[500px] rounded-full bg-[#20A1C9]/5 blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#20A1C9]/5 blur-[150px]" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          <Link href="/" className="transition-colors hover:text-[#20A1C9]">
            Home
          </Link>
          <ChevronRightIcon className="h-3 w-3 text-white/20" />
          <Link href="/services" className="transition-colors hover:text-[#20A1C9]">
            Services
          </Link>
          <ChevronRightIcon className="h-3 w-3 text-white/20" />
          <span className="text-[#20A1C9]">{detail.title}</span>
        </div>

        {/* ================= HERO SECTION ================= */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-16">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-bold tracking-[0.3em] text-[#20A1C9]">
                SERVICE {String(detail.id).padStart(2, "0")} / 29
              </span>
              <span className="h-px w-8 bg-white/20" />
            </div>

            <TypingTitle
              as="h1"
              className="text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
            >
              {detail.title}
            </TypingTitle>

            <p className="mt-4 text-lg font-semibold tracking-[0.05em] text-[#20A1C9] sm:text-xl uppercase">
              {detail.tagline}
            </p>

            <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
              {detail.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#20A1C9] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(32,161,201,0.4)]"
              >
                Free Strategy Audit
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.02] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                All Services
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 lg:col-span-5 w-full">
            {serviceImage && (
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl">
                <Image
                  src={serviceImage}
                  alt={detail.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 450px"
                  priority
                />
              </div>
            )}
            
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#20A1C9]/10 blur-2xl" />
              
              <h3 className="flex items-center gap-2 font-semibold uppercase tracking-[0.15em] text-[#20A1C9]">
                <Sparkles className="h-5 w-5 text-[#20A1C9]" />
                Ninja Execution
              </h3>
              
              <ul className="mt-6 space-y-5">
                {[
                  "Pod structure led by senior strategists",
                  "Weekly delivery sprints (no month-long delays)",
                  "Integrations across Meta, Google & HubSpot",
                  "Direct slack access to execution team",
                  "Real-time Looker Studio reporting dashboards"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#20A1C9]/20 text-[#20A1C9] mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ================= EDITORIAL INTRODUCTION ================= */}
        <section className="mt-20 border-t border-white/10 pt-16 md:mt-32">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#20A1C9]" />
                <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                  Definition & Core Concept
                </h4>
              </div>
              <p className="text-lg leading-9 text-white/60 font-medium font-josefin">
                {detail.introText}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#20A1C9]" />
                <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                  Why It Matters For Scale
                </h4>
              </div>
              <p className="text-lg leading-9 text-[#20A1C9]/85 font-medium">
                {detail.whyCritical}
              </p>
            </div>
          </div>
        </section>

        {/* ================= CORE PILLARS SECTION ================= */}
        <section className="mt-24 md:mt-36">
          <div className="mb-12 text-center md:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#20A1C9]">
              Strategic Framework
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
            >
              Core Pillars of Performance
            </TypingTitle>
            <div className="mx-auto mt-4 h-[2px] w-12 bg-[#20A1C9]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detail.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#20A1C9]/40 hover:bg-[#20A1C9]/5 md:p-8"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#20A1C9]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="text-sm font-bold tracking-[0.2em] text-[#20A1C9]/50 group-hover:text-[#20A1C9] transition-colors duration-300">
                  PILLAR / {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white uppercase group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 group-hover:text-white/70 transition-colors">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= THE DELIVERY PLAYBOOK ================= */}
        <section className="mt-24 md:mt-36">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#20A1C9]">
              Execution Model
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
            >
              The 5-Step Execution Playbook
            </TypingTitle>
            <div className="mx-auto mt-4 h-[2px] w-12 bg-[#20A1C9]" />
          </div>

          <div className="relative mx-auto max-w-4xl space-y-12">
            {/* Center Timeline Connector Bar (Hidden on Mobile) */}
            <div className="absolute left-[39px] top-6 bottom-6 hidden w-px bg-white/10 md:block" />

            {detail.process.map((step, idx) => (
              <div key={idx} className="relative flex flex-col gap-6 md:flex-row md:gap-12">
                {/* Step Circle Marker */}
                <div className="z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#20A1C9]/30 bg-black text-2xl font-bold text-[#20A1C9] shadow-[0_0_15px_rgba(32,161,201,0.1)] transition-transform duration-300 hover:scale-105">
                  {step.step}
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 shadow-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02] md:p-8 flex-1">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#20A1C9]">
                    Step {step.step}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= THE ENTERPRISE STACK ================= */}
        <section className="mt-24 md:mt-36">
          <div className="mb-12 text-center md:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#20A1C9]">
              Technology & Analytics
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
            >
              The Enterprise Toolchain
            </TypingTitle>
            <div className="mx-auto mt-4 h-[2px] w-12 bg-[#20A1C9]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {detail.tools.map((tool, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-xl border border-white/5 bg-white/[0.01] p-5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03]"
              >
                <div>
                  <h4 className="font-bold text-white text-base group-hover:text-[#20A1C9] transition-colors duration-300">
                    {tool.name}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/50 group-hover:text-white/60 transition-colors">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/20 group-hover:text-[#20A1C9]/50">
                    Stack /{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRICING PACKAGES ================= */}
        <section className="mt-24 md:mt-36">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#20A1C9]">
              Pricing & Scope
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
            >
              Transparent Retainer Options
            </TypingTitle>
            <div className="mx-auto mt-4 h-[2px] w-12 bg-[#20A1C9]" />
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {detail.pricing.map((tier, idx) => {
              const isGrowth = tier.planName.toLowerCase().includes("growth");
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-500 md:p-8 ${
                    isGrowth
                      ? "border-[#20A1C9] bg-[#20A1C9]/5 shadow-[0_0_35px_rgba(32,161,201,0.15)] md:scale-105 z-10"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  {isGrowth && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#20A1C9] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                      Recommended
                    </span>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                      {tier.planName}
                    </h3>
                    <p className="mt-4 text-2xl font-bold text-[#20A1C9] md:text-3xl">
                      {tier.price}
                    </p>
                    <ul className="mt-6 space-y-3.5 border-t border-white/10 pt-6">
                      {tier.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2 text-xs text-white/70">
                          <Check className="h-4 w-4 shrink-0 text-[#20A1C9] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-8 w-full rounded-xl py-3 text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      isGrowth
                        ? "bg-[#20A1C9] text-black hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(32,161,201,0.3)]"
                        : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    Select Plan
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= INTERACTIVE FAQs ================= */}
        <section className="mt-24 md:mt-36">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#20A1C9]">
              FAQ
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
            >
              Frequently Asked Questions
            </TypingTitle>
            <div className="mx-auto mt-4 h-[2px] w-12 bg-[#20A1C9]" />
          </div>

          <FaqAccordion faqs={detail.faqs} />
        </section>

        {/* ================= BOTTOM NAVIGATION & CTA ================= */}
        <section className="mt-24 border-t border-white/10 pt-16 md:mt-36">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Ready for next level?
              </span>
              <TypingTitle
                as="h2"
                className="mt-1 text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
              >
                Let's Build Your Growth Engine.
              </TypingTitle>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#20A1C9] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-[1.03]"
            >
              Get Free Growth Strategy
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Service detail page pagination */}
          <div className="mt-20 border-t border-white/10 pt-8 flex items-center justify-between">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-[#20A1C9]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              All Services
            </Link>
            
            <Link
              href={`/services/${nextServiceSlug}`}
              className="group inline-flex items-center gap-2 text-right transition-colors"
            >
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                  Next Service
                </span>
                <span className="text-sm font-bold uppercase text-white group-hover:text-[#20A1C9] transition-colors duration-300">
                  {nextService.title}
                </span>
              </div>
              <ArrowRight className="h-4 w-4 text-[#20A1C9] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}

// Inline svg icon for layout breadcrumbs
function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
