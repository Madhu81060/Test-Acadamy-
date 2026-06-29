"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  Users,
  BookOpen,
  Clock,
  Building2,
  FileBadge,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Free Demo Classes",
    description: "2 days of free demo classes to experience our teaching methodology before enrollment.",
    color: "text-orange-500",
    bg: "bg-orange-50",
    highlight: true,
  },
  {
    icon: Briefcase,
    title: "Hands-on Training",
    description: "Practical training with real equipment, tools, and industry-standard practices.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    highlight: true,
  },
  {
    icon: Building2,
    title: "Industrial Exposure",
    description: "Site visits and industrial training to understand real work environments.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Users,
    title: "Job Opportunities",
    description: "Direct placement drives with manufacturing and industrial companies.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Award,
    title: "Govt. Certified",
    description: "Government and industry recognized certifications for all courses.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: FileBadge,
    title: "Resume Building",
    description: "Professional resume creation and interview preparation.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: BookOpen,
    title: "Mock Interviews",
    description: "Regular practice sessions with industry professionals.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Clock,
    title: "100% Placement",
    description: "Dedicated placement cell with job assistance for all students.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

function AnimatedCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-xl p-6 border transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${
        feature.highlight
          ? "border-2 border-orange-300 shadow-md hover:shadow-xl hover:shadow-orange-500/20"
          : "border-gray-100 hover:border-blue-200"
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div
        className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
          feature.highlight ? "animate-pulse" : ""
        }`}
        style={{ animationDuration: feature.highlight ? "2s" : undefined }}
      >
        <feature.icon className={`h-7 w-7 ${feature.color}`} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {feature.title}
        {feature.highlight && (
          <span className="ml-2 text-xs bg-gradient-to-r from-orange-500 to-green-500 text-white px-2 py-0.5 rounded-full">
            POPULAR
          </span>
        )}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need to{" "}
            <span className="text-orange-500">Succeed</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive practical training with all the resources
            and support you need to launch a successful career.
          </p>
        </div>

        {/* Animated Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <AnimatedCard key={idx} feature={feature} index={idx} />
          ))}
        </div>

        {/* Additional Highlight Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500 via-green-600 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">FREE Demo Classes!</h3>
                <p className="text-green-100">Experience our training before you enroll - 2 days completely free</p>
              </div>
            </div>
            <a
              href="/contact?demo=true"
              className="bg-white text-green-600 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-all hover:scale-105 shadow-lg"
            >
              Book Your Free Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
