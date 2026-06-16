"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, HelpCircle, Layers, Sparkles } from "lucide-react";
import Container from "components/shared/Container";
import { servicesData } from "data/services";
import TypingTitle from "components/layout/TypingTitle";

type Category = "all" | "paid-media" | "social-content" | "web-conversion";

const getServiceCategory = (id: number): Category => {
  // Paid Media Services
  if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24].includes(id)) {
    return "paid-media";
  }
  // Social & Content Services
  if ([11, 14, 15, 16, 17, 18, 21, 23, 26].includes(id)) {
    return "social-content";
  }
  // Web & Conversion Services
  return "web-conversion";
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredServices = servicesData.filter((service) => {
    if (activeTab === "all") return true;
    return getServiceCategory(service.id) === activeTab;
  });

  const tabs = [
    { id: "all", label: "All Services" },
    { id: "paid-media", label: "Paid Media" },
    { id: "social-content", label: "Social & Content" },
    { id: "web-conversion", label: "Web & Conversion" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white py-12 md:py-24">
      {/* Background Cyber Glow Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#20A1C9]/5 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#20A1C9]/5 blur-[150px]" />

      <Container className="relative z-10">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          <Link href="/" className="transition-colors hover:text-[#20A1C9]">
            Home
          </Link>
          <ChevronRightIcon className="h-3 w-3 text-white/20" />
          <span className="text-[#20A1C9]">Services</span>
        </div>

        {/* Hero Header */}
        <div className="mb-16 max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-bold tracking-[0.3em] text-[#20A1C9]">
              02 / SERVICES
            </span>
            <span className="h-px w-8 bg-white/20" />
          </div>

          <TypingTitle
            as="h1"
            className="text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
          >
            Our Digital Marketing & <br />
            <span className="text-[#20A1C9]">Growth Solutions</span>
          </TypingTitle>

          <p className="mt-8 text-base leading-8 text-white/70 sm:text-lg">
            Pick a single channel or combine multiple into an integrated growth program. Every engagement is led by a senior strategist with weekly delivery from our dedicated pods in <span className="text-white font-semibold underline decoration-[#20A1C9]">Regina, Saskatchewan, Canada</span>.
          </p>
        </div>

        {/* Interactive Categories Navigation Tabs */}
        <div className="mb-12 flex flex-wrap gap-2 border-b border-white/10 pb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as Category)}
                className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                  isActive
                    ? "bg-[#20A1C9] text-black"
                    : "border border-white/10 bg-white/[0.02] text-white/60 hover:border-white/25 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative flex flex-col justify-between min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#20A1C9] hover:bg-[#20A1C9]/5 md:p-8"
            >
              {/* Card top-glow line on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#20A1C9] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#20A1C9]/0 blur-2xl transition-all duration-500 group-hover:bg-[#20A1C9]/10" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#20A1C9]/60 group-hover:text-[#20A1C9] transition-colors duration-300">
                    SERVICE {String(service.id).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:text-[#20A1C9] group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#20A1C9] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#20A1C9]/85">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {service.description.length > 150
                      ? `${service.description.substring(0, 147)}...`
                      : service.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#20A1C9] opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                Explore Service
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* ================= DELIVERY FRAMEWORK SECTION ================= */}
        <section className="mt-28 border-t border-white/10 pt-20">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#20A1C9]">
              Our Operating Model
            </span>
            <TypingTitle
              as="h2"
              className="mt-3 text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
            >
              Five Pillars of Every Retainer
            </TypingTitle>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Discovery", desc: "Detailed channel audits, stakeholder interviews, and competitive landscape maps." },
              { title: "Strategy", desc: "Custom growth thesis defining channel mix, target metrics, and unit economics." },
              { title: "Roadmap", desc: "90-day execution roadmap structured by business impact and operational priorities." },
              { title: "Execution", desc: "An in-house specialized pod ships updates, campaigns, content, and code weekly." },
              { title: "Reporting", desc: "Monthly performance reporting tied to pipeline growth and direct revenue." }
            ].map((pillar, idx) => (
              <div key={idx} className="relative rounded-xl border border-white/5 bg-white/[0.01] p-6 transition-all duration-300 hover:border-white/10">
                <span className="text-xs font-bold text-[#20A1C9]/40 tracking-widest block mb-4">
                  STAGE / 0{idx + 1}
                </span>
                <h3 className="font-bold text-white text-lg uppercase mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/50">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="mt-28 rounded-2xl border border-[#20A1C9]/20 bg-gradient-to-r from-black via-[#20A1C9]/5 to-black p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-[#20A1C9]/10 blur-2xl" />
          <div className="absolute -right-12 -bottom-12 h-36 w-36 rounded-full bg-[#20A1C9]/10 blur-2xl" />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#20A1C9]">
            Let's Collaborate
          </span>
          <TypingTitle
            as="h2"
            className="mt-4 text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em] max-w-2xl mx-auto"
          >
            Ready to design your digital growth playbook?
          </TypingTitle>
          <p className="mt-4 text-white/60 text-sm md:text-base max-w-xl mx-auto">
            Get in touch with our strategy team in Regina, Saskatchewan, Canada, and get a free custom channel proposal.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#20A1C9] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-[1.03]"
            >
              Request Free Proposal
              <ChevronRightIcon className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}

// Custom inline SVG icons
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

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
