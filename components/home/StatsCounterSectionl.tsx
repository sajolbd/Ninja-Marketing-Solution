"use client";

import Container from "components/shared/Container";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    eyebrow: "Network",
    value: 200,
    suffix: "+",
    label: "Published Articles",
  },
  {
    eyebrow: "Team",
    value: 65,
    suffix: "+",
    label: "In-House Specialists",
  },
  {
    eyebrow: "Ecosystem",
    value: 4,
    suffix: "+",
    label: "Platform Partnerships",
  },
  {
    eyebrow: "Insights",
    value: 70,
    suffix: "+",
    label: "Published Articles",
  },
];

function useCounter(target: number, start: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frameId: number;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [target, start, duration]);

  return count;
}

function StatCard({
  index,
  eyebrow,
  value,
  suffix,
  label,
}: {
  index: number;
  eyebrow: string;
  value: number;
  suffix: string;
  label: string;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCounter(value, isVisible);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative min-h-[230px] overflow-hidden border border-white/10 border-t-white/20 bg-white/[0.03] p-6 transition-all duration-500 hover:border-t-[#20A1C9] hover:bg-[#20A1C9]/10 sm:p-8 lg:min-h-[280px] lg:p-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#20A1C9] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#20A1C9]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#20A1C9]/25" />

      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#20A1C9]">
        {String(index + 1).padStart(2, "0")} // {eyebrow}
      </p>

      <div className="mt-10 flex items-start">
        <span className="text-[clamp(4rem,9vw,7.5rem)] font-light leading-none tracking-[-0.08em] text-white">
          {count}
        </span>
        <span className="ml-2 text-[clamp(3rem,6vw,5rem)] font-light leading-none text-[#20A1C9]">
          {suffix}
        </span>
      </div>

      <p className="mt-5 max-w-[220px] text-lg font-medium leading-7 text-white/70 sm:text-xl">
        {label}
      </p>
    </div>
  );
}

export default function StatsCounterSection() {
  return (
    <section className="relative overflow-hidden bg-black py-8 text-white md:py-16">
      <Container>
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.eyebrow}
                index={index}
                eyebrow={stat.eyebrow}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
