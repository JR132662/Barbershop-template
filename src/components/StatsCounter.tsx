"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export function StatsCounter({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <StatItem key={i} stat={stat} triggered={triggered} />
      ))}
    </div>
  );
}

function StatItem({ stat, triggered }: { stat: Stat; triggered: boolean }) {
  const count = useCountUp(stat.value, 1500, triggered);

  return (
    <div className="text-center">
      <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
        {count.toLocaleString()}
        {stat.suffix && <span className="text-vice-pink">{stat.suffix}</span>}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-400">
        {stat.label}
      </p>
    </div>
  );
}
