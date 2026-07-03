"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Companies",
  },
  {
    value: 100,
    suffix: "+",
    label: "Professionals",
  },
  {
    value: 5,
    suffix: "+",
    label: "Industries",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Vision",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="text-4xl font-bold text-[#D4AF37]">
            <CountUp end={stat.value} duration={2.5} />
            {stat.suffix}
          </div>

          <p className="mt-2 text-sm uppercase tracking-widest text-neutral-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}