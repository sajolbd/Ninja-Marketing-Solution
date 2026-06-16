"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import TypingTitle from "components/layout/TypingTitle";

type CaseStudy = {
  id: string;
  category: string;
  metric: string;
  metricLabel: string;
  client: string;
  description: string;
  href: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    category: "E-Commerce / Paid Acquisition",
    metric: "3.4X ROAS",
    metricLabel: "Meta & Google Ads Engine",
    client: "Shurobhi Coconut Oil",
    description: "Built a paid acquisition engine across Google Search, Shopping, and Meta Ads, scaling daily order volumes and turning a heritage product into a high-growth e-commerce performer.",
    href: "/case-studies/shurobhi"
  },
  {
    id: "02",
    category: "B2B / Industrial Marketing",
    metric: "95x Sales",
    metricLabel: "Monthly Growth Inbound Leads",
    client: "PON-CAT Machinery",
    description: "Partnered with Pon Equipment, the official Cat® dealer, to transform heavy equipment sales through search campaigns, establishing a high-velocity sales engine.",
    href: "/case-studies/pon-cat"
  },
  {
    id: "03",
    category: "Automotive / E-commerce Platforms",
    metric: "2,521 Cars",
    metricLabel: "Sold Online Through Platform",
    client: "Biil.no Norway",
    description: "Engineered a modern car sales portal integrating Norwegian Public Roads Administration, BankID, and automated notifications for frictionless digital transactions.",
    href: "/case-studies/biil-no"
  },
  {
    id: "04",
    category: "Financial Services / Lead Gen",
    metric: "৳5.6 Cr",
    metricLabel: "ROAS Generated from Ads",
    client: "Prime Bank Investment",
    description: "Engineered a targeted lead acquisition funnel spanning Google and Meta ads, driving thousands of qualified investment account signups from local and NRB investors.",
    href: "/case-studies/prime-bank"
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-24">
      {/* Background radial spotlights */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#20A1C9]/5 blur-[120px]" />
      
      <div className="mx-auto w-full max-w-[1620px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="text-xs font-bold tracking-[0.28em] text-[#20A1C9]">
                03
              </span>
              <span className="h-px w-10 bg-[#20A1C9]" />
              <span className="text-xs font-bold uppercase tracking-[0.32em] text-white/45">
                Case Studies
              </span>
            </div>
            <TypingTitle
              as="h2"
              className="max-w-4xl text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
            >
              From local challengers <br />
              <span className="text-[#20A1C9]">to category leaders</span>
            </TypingTitle>
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#20A1C9] hover:gap-3 transition-all duration-300"
          >
            All Case Studies
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#20A1C9] hover:bg-[#20A1C9]/5 md:p-8"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#20A1C9] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white/40">
                  <span>{study.category}</span>
                  <span className="text-[#20A1C9]">CASE / {study.id}</span>
                </div>

                <div className="mt-8 flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-[#20A1C9] md:text-5xl">
                    {study.metric}
                  </span>
                  <span className="text-sm font-semibold tracking-wider text-white/60">
                    {study.metricLabel}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#20A1C9] transition-colors duration-300">
                  {study.client}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {study.description}
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <Link
                  href={study.href}
                  className="inline-flex items-center justify-center rounded-full bg-white/5 p-3 text-white/60 hover:bg-[#20A1C9] hover:text-black transition-all duration-300"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
