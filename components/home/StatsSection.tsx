"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Briefcase, Award, Building2 } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    label: "Students Trained",
    color: "text-blue-600",
  },
  {
    icon: Briefcase,
    value: 98,
    suffix: "%",
    label: "Placement Rate",
    color: "text-orange-500",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    color: "text-green-600",
  },
  {
    icon: Building2,
    value: 100,
    suffix: "+",
    label: "Hiring Partners",
    color: "text-purple-600",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                <stat.icon className={`h-8 w-8 text-white`} />
              </div>
              <div className="text-4xl md:text-5xl text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-blue-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
