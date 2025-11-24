"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Global retailers", value: 100 },
  { label: "Daily operators", value: 500 },
  { label: "Public reviews", value: 150 },
];

const gradients = [
  "from-violet-400 to-violet-600",
  "from-sky-400 to-blue-600",
  "from-amber-300 to-orange-500",
];

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  const countUp = (endValue) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (startCount) {
        let start = 0;
        const duration = 2000;
        const increment = endValue / (duration / 16.67);
        const animateCount = setInterval(() => {
          start += increment;
          if (start >= endValue) {
            clearInterval(animateCount);
            setCount(endValue);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16.67);
      }
    }, [startCount, endValue]);

    return count;
  };

  return (
    <div
      ref={ref}
      className="grid w-full gap-6 rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-lg transition dark:border-white/5 dark:bg-white/5 dark:text-white md:grid-cols-3"
    >
      {stats.map((stat, idx) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:border-slate-400 dark:border-white/5 dark:bg-white/5 dark:hover:border-white/20"
        >
          <span
            className={`inline-flex rounded-full bg-gradient-to-r ${gradients[idx]} px-4 py-1 text-sm font-semibold text-white`}
          >
            {stat.label}
          </span>
          <p className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            {countUp(stat.value)}+
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
            {idx === 0 && "Franchise-ready retailers scaling their POS."}
            {idx === 1 && "Operators logging in daily across every region."}
            {idx === 2 && "Partners rating Outlet Expense 4.9 stars."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
