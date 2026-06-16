"use client";

import { Award, ShieldCheck, CheckCircle2, TrendingUp, Star, Users } from "lucide-react";

export default function PartnerLogos() {
  const trustBadges = [
    { label: "Google Certified Partner", icon: Award },
    { label: "Meta Business Partner", icon: ShieldCheck },
    { label: "HubSpot Solutions Partner", icon: CheckCircle2 },
    { label: "TikTok Agency Partner", icon: TrendingUp },
    { label: "GoodFirms 4.9/5 Rated", icon: Star },
    { label: "E-CAB Corporate Member", icon: Users },
  ];

  return (
    <section className="border-y border-white/5 bg-black py-8">
      <div className="mx-auto w-full max-w-[1620px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Certified Partners & Trust Badges
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-white/50 transition-colors duration-300 hover:text-[#20A1C9]"
                >
                  <Icon className="h-5 w-5 text-[#20A1C9]/85 stroke-[2]" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
