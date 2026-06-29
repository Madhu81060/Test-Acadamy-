"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Home,
  Factory,
  Cpu,
  Sliders,
  ShieldCheck,
  Gauge,
  Activity,
  Award,
  Wrench,
  Calendar,
  Briefcase,
  Target,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const topics = [
  {
    id: "basic-electrical",
    title: "Basic Electrical",
    description: "Fundamental concepts of current, voltage, resistance, and AC/DC circuits.",
    icon: Zap,
    color: "from-amber-500 to-yellow-400",
    iconColor: "text-amber-500",
  },
  {
    id: "house-wiring",
    title: "House Wiring",
    description: "Domestic installation, switchboard wiring, lighting circuits, and conduit layout.",
    icon: Home,
    color: "from-blue-500 to-sky-400",
    iconColor: "text-blue-500",
  },
  {
    id: "industrial-wiring",
    title: "Industrial Wiring",
    description: "Cable tray installation, armored cabling, heavy machinery power setup, and conduit bending.",
    icon: Factory,
    color: "from-emerald-500 to-teal-400",
    iconColor: "text-emerald-500",
  },
  {
    id: "motors",
    title: "Motors",
    description: "AC/DC motors, connection methods, testing, troubleshooting, and rewinding fundamentals.",
    icon: Cpu,
    color: "from-purple-500 to-indigo-400",
    iconColor: "text-purple-500",
  },
  {
    id: "control-panels",
    title: "Control Panels",
    description: "Starter panels (DOL, Star-Delta), relay wiring, contactor assembly, and circuit layout reading.",
    icon: Sliders,
    color: "from-rose-500 to-orange-400",
    iconColor: "text-rose-500",
  },
  {
    id: "electrical-safety",
    title: "Electrical Safety",
    description: "Standard safety protocols, PPE usage, lock-out/tag-out (LOTO), and earthing systems.",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-400",
    iconColor: "text-green-500",
  },
  {
    id: "testing-instruments",
    title: "Testing Instruments",
    description: "Hands-on usage of multimeters, clamp meters, megger testers, and earth testers.",
    icon: Gauge,
    color: "from-cyan-500 to-sky-400",
    iconColor: "text-cyan-500",
  },
  {
    id: "fault-finding",
    title: "Fault Finding",
    description: "Identifying open circuits, short circuits, earth faults, and troubleshooting panels.",
    icon: Activity,
    color: "from-red-500 to-rose-400",
    iconColor: "text-red-500",
  },
  {
    id: "practical-lab",
    title: "Practical Lab Training",
    description: "100% hands-on training in state-of-the-art labs under expert guidance.",
    icon: Wrench,
    color: "from-orange-500 to-amber-400",
    iconColor: "text-orange-500",
  },
];

const highlights = [
  {
    title: "100% Practical Training",
    description: "Learn by doing with real-world equipment and live systems in our advanced labs.",
    icon: Sparkles,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "2 Days Free Demo",
    description: "Attend free demo sessions to experience our high-quality coaching before enrolling.",
    icon: Calendar,
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  {
    title: "Internship Included",
    description: "Gain industry work experience with integrated internships on active projects.",
    icon: Briefcase,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Government Certificate",
    description: "Receive government and industry recognized certificates to boost your career.",
    icon: Award,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    title: "Placement Assistance",
    description: "100% support for job placement with active tie-ups in leading electrical firms.",
    icon: Target,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  },
];

export default function IntermediateTraining() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="intermediate-training"
      className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Grid Line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/25 mb-4 uppercase tracking-wider">
            Specialized Program
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            ITI & Intermediate Students <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">Electrical Training</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-400">
            A comprehensive, job-oriented program tailored specifically for ITI, 10th, and 12th pass students to build strong practical foundations and transition straight into certified electrical careers.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-200">Program Benefits & Assurances</h3>
            <div className="h-0.5 w-16 bg-orange-500 mx-auto mt-2 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/5 transition-all duration-500 hover:bg-white/10 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1.5 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual feature details / interactive tab */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-tr from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-white/5 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Electrical Training?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                The electrical industry is growing rapidly. From smart homes to modern industrial infrastructure, certified electricians are highly valued and constantly in demand. This program bypasses theoretical overhead and focuses entirely on what actually gets you hired.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-orange-500/30 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0 mt-0.5">
                    <Sparkles className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">100% Lab Practical</h4>
                    <p className="text-xs text-slate-400 mt-0.5">No boring theory sheets. You will perform wiring and configuration in our fully-equipped electrical lab space.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-orange-500/30 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
                    <Award className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">Authorized Certifications</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Earn a career-launching professional certificate on completion, backed by local placement assistance partners.</p>
                  </div>
                </div>
              </div>

              {/* Bottom statistics panel */}
              <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-extrabold text-orange-400">95%</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Placement Success</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">2 Days</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Free Trial Classes</p>
                </div>
              </div>
            </div>

            {/* Quick action button container */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Link href="/apply" className="block w-full sm:flex-1">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-6 rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02]">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact?demo=true" className="block w-full sm:flex-1">
                <Button variant="outline" className="w-full border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold py-6 rounded-xl transition-all hover:scale-[1.02]">
                  Book Free Demo Class
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Nine core modules Grid */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="text-center lg:text-left mb-6">
              <h3 className="text-xl font-bold text-slate-200">Core Training Curriculum</h3>
              <p className="text-slate-400 text-xs mt-1">9 Key components engineered to make you job-ready</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="group bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-white/10 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${topic.color}/10 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform duration-300`}>
                    <topic.icon className={`h-5 w-5 ${topic.iconColor}`} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-orange-400 transition-colors">
                    {topic.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
