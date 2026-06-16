"use client";

import { ShoppingBag, Landmark, Home, Stethoscope, GraduationCap, Cpu } from "lucide-react";
import Link from "next/link";
import TypingTitle from "components/layout/TypingTitle";

const industries = [
  {
    id: "01",
    name: "E-Commerce & Retail",
    desc: "Customer acquisition scaling, conversion rate optimization, lifecycle email flows, and mobile checkout integration.",
    icon: ShoppingBag,
    href: "/industries/ecommerce"
  },
  {
    id: "02",
    name: "Fintech & Banking",
    desc: "User acquisition funnels, digital trust building, and compliant acquisition setups for apps, wallets, and loan portals.",
    icon: Landmark,
    href: "/industries/fintech"
  },
  {
    id: "03",
    name: "Real Estate Developers",
    desc: "Lead generation frameworks capturing high-net-worth property buyers via location-targeted SEO and project landing pages.",
    icon: Home,
    href: "/industries/real-estate"
  },
  {
    id: "04",
    name: "Healthcare & Clinics",
    desc: "Patient acquisition pipelines, local 'near me' search optimization, trust optimization, and appointment booking automation.",
    icon: Stethoscope,
    href: "/industries/healthcare"
  },
  {
    id: "05",
    name: "Education & Edtech",
    desc: "Student acquisition campaigns, parent-focused trust nurturing, course launch funnels, and organic search optimization.",
    icon: GraduationCap,
    href: "/industries/education"
  },
  {
    id: "06",
    name: "B2B SaaS & Services",
    desc: "Software trial pipeline development, high-intent Google Search campaigns, and LinkedIn B2B decision-maker marketing.",
    icon: Cpu,
    href: "/industries/saas"
  }
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-24">
      {/* Background glow overlay */}
      <div className="pointer-events-none absolute -left-40 top-[20%] h-96 w-96 rounded-full bg-[#20A1C9]/5 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1620px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-xs font-bold tracking-[0.28em] text-[#20A1C9]">
              04
            </span>
            <span className="h-px w-10 bg-[#20A1C9]" />
            <span className="text-xs font-bold uppercase tracking-[0.32em] text-white/45">
              Industries
            </span>
          </div>
          <TypingTitle
            as="h2"
            className="text-3xl font-medium uppercase leading-[1.08] tracking-[0.055em] text-white sm:text-5xl sm:tracking-[0.06em] lg:text-5xl lg:tracking-[0.05em]"
          >
            Specialist playbooks <br />
            <span className="text-[#20A1C9]">for every vertical we serve</span>
          </TypingTitle>
          <p className="mt-6 text-base text-white/60 leading-8">
            Different industries require different unit economics. We avoid templated strategies and build custom playbooks engineered around your specific buying cycle.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.01] p-6 transition-all duration-300 hover:border-[#20A1C9]/40 hover:bg-[#20A1C9]/5 md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[#20A1C9] transition-colors duration-300 group-hover:bg-[#20A1C9] group-hover:text-black">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-bold text-white/20 group-hover:text-[#20A1C9]/50 transition-colors">
                      PDK / {ind.id}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold uppercase tracking-wide text-white transition-colors">
                    {ind.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={ind.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#20A1C9] hover:underline"
                  >
                    View Playbook &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
