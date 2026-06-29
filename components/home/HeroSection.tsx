"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Award,
  Users,
  Briefcase,
  CheckCircle2,
  Calendar,
  Wrench,
  Zap,
  Sliders,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const slides = [
  {
    id: "practical-training",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920",
    badge: "Limited Seats Available",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    title: "100% Practical ITI & Diploma Electrical Training",
    description: "No boring classroom theory. Learn by doing in our advanced labs with motor control, transformer installation, panel boards, and modern switchgears.",
    bullets: [
      "2 Days FREE Demo Classes",
      "Hands-on Lab Exercises Daily",
      "Expert Vocational Trainers",
      "Industry Grade Instruments",
    ],
    primaryCTA: { text: "Book FREE Demo", href: "/contact?demo=true" },
    secondaryCTA: { text: "Our Courses", href: "/courses" },
    // Pictorial workflow representation for Slide 1
    flowSteps: [
      { step: "1", title: "Theory Basics", desc: "Interactive concepts", icon: Zap },
      { step: "2", title: "Smart Labs", desc: "100% Practical work", icon: Wrench },
      { step: "3", title: "Site Visits", desc: "Real plants & grids", icon: Briefcase },
      { step: "4", title: "Placement", desc: "Job confirmation", icon: Award },
    ]
  },
  {
    id: "placement-process",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920",
    badge: "98% Placement Rate",
    badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
    title: "Our 4-Step Career Placement Process",
    description: "We don't just teach you; we guide you step-by-step from training directly into a guaranteed high-paying technical job.",
    bullets: [
      "Resume Builder Workshop",
      "Mock Interviews Daily",
      "Direct Hiring Partners",
      "100% Job Assistance",
    ],
    primaryCTA: { text: "Apply For Admission", href: "/apply" },
    secondaryCTA: { text: "Success Stories", href: "/success-stories" },
    // Chevron/Flow diagram representation for Slide 2
    flowSteps: [
      { step: "01", title: "Enroll & Learn", desc: "Select program", icon: Play },
      { step: "02", title: "Lab Exercises", desc: "Build & configure", icon: Sliders },
      { step: "03", title: "Prep & Mock", desc: "Interview ready", icon: Users },
      { step: "04", title: "Land Job", desc: "Get placed fast", icon: Award },
    ]
  },
  {
    id: "iti-vocational",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920",
    badge: "Vocational Excellence",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    title: "Specialized Courses for ITI & Diploma Students",
    description: "Boost your certificate values. Transition from apprentice to advanced electrician with PLC, industrial control panels, and automation wiring.",
    bullets: [
      "AC/DC Motor Connections",
      "Industrial Wiring Layouts",
      "Control Panel Wiring",
      "PLC & Automation Basics",
    ],
    primaryCTA: { text: "Explore ITI Courses", href: "/courses#iti-electrician-wireman" },
    secondaryCTA: { text: "Get Counseling", href: "/contact" },
    // Diagram representing courses categories
    flowSteps: [
      { step: "EEE", title: "Electrical", desc: "Wiring & Power", icon: Zap },
      { step: "ECE", title: "Electronics", desc: "Circuits & PCBs", icon: Sliders },
      { step: "ITI", title: "Electrician", desc: "Motors & Panels", icon: Wrench },
      { step: "PLC", title: "Technician", desc: "Automation & VFDs", icon: TrendingUp },
    ]
  },
  {
    id: "internships",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920",
    badge: "Internships Included",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    title: "Live Project Internships & Industry Certifications",
    description: "Gain industry work experience with integrated internships on active projects, and earn government-recognized certifications.",
    bullets: [
      "Real-world Projects",
      "Government Certificates",
      "100+ Hiring Partners",
      "Life-time Career Support",
    ],
    primaryCTA: { text: "Register for Internship", href: "/apply?type=internship" },
    secondaryCTA: { text: "View Placements", href: "/placements" },
    // Flow process diagram
    flowSteps: [
      { step: "A", title: "Join Demo", desc: "2-days free trial", icon: Calendar },
      { step: "B", title: "Get Trained", desc: "Hands-on projects", icon: Sliders },
      { step: "C", title: "Internship", desc: "Work on live sites", icon: Briefcase },
      { step: "D", title: "Graduate", desc: "Start Earning", icon: Award },
    ]
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const current = slides[currentSlide];

  return (
    <section className="relative min-h-[95vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-955">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-25 scale-105"
          style={{ backgroundImage: `url(${current.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/90 to-slate-950/95" />
      </div>

      {/* Floating design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content Card */}
          <div className="lg:col-span-7 text-white space-y-6 md:space-y-8 transition-opacity duration-500 ease-in-out font-sans">
            
            {/* Animated Badge */}
            <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition-all duration-300 ${current.badgeColor}`}>
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
              <span>{current.badge}</span>
            </div>

            {/* Slide Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
              {current.title.split(" ").map((word, i) => {
                const highlightWords = ["100%", "Practical", "4-Step", "Specialized", "Internships", "Placement", "Career", "Free", "Demo", "Job"];
                const cleanWord = word.replace(/[.,]/g, "");
                const isHighlight = highlightWords.some(hw => cleanWord.toLowerCase().includes(hw.toLowerCase()));
                return (
                  <span key={i} className={isHighlight ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 pr-1 md:pr-2 inline-block" : "pr-1 md:pr-2 inline-block"}>
                    {word}
                  </span>
                );
              })}
            </h1>

            {/* Slide Description */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
              {current.description}
            </p>

            {/* Highlights bullets grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {current.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 group hover:translate-x-1 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm md:text-base">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href={current.primaryCTA.href} className="w-full sm:w-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300" />
                <Button
                  size="lg"
                  className="relative w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-8 text-base rounded-xl shadow-lg border border-white/10"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {current.primaryCTA.text}
                </Button>
              </Link>
              <Link href={current.secondaryCTA.href} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white/10 font-bold py-6 px-8 text-base rounded-xl"
                >
                  {current.secondaryCTA.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Pictorial/Flow Diagram representation */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 w-full max-w-md shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-orange-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-blue-500/10 rounded-full blur-xl" />
              
              <h3 className="text-white font-bold text-lg mb-6 border-b border-white/10 pb-3 flex items-center justify-between">
                <span>Training workflow / process</span>
                <span className="text-xs text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 rounded-full font-medium">Step-by-Step Flow</span>
              </h3>

              {/* Vertical Process Steps Flow */}
              <div className="space-y-6 relative">
                {/* Visual Line connector */}
                <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-500 via-blue-500 to-green-500 opacity-30" />

                {current.flowSteps.map((stepItem, idx) => {
                  const StepIcon = stepItem.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start relative group/item hover:translate-x-1.5 transition-transform duration-300">
                      
                      {/* Step Bubble icon */}
                      <div className="w-11 h-11 rounded-full bg-slate-950 border border-white/10 text-orange-400 font-bold text-sm flex items-center justify-center relative z-10 group-hover/item:border-orange-500/40 group-hover/item:text-white transition-all shadow-lg flex-shrink-0">
                        <StepIcon className="w-5 h-5 text-orange-400 group-hover/item:scale-110 transition-transform" />
                      </div>

                      {/* Step content */}
                      <div className="flex-1 min-w-0 bg-white/5 border border-white/5 group-hover/item:border-white/10 p-3.5 rounded-2xl transition-colors">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-slate-100 font-bold text-sm group-hover/item:text-orange-400 transition-colors truncate">
                            {stepItem.title}
                          </h4>
                          <span className="text-[10px] text-slate-500 font-extrabold uppercase bg-white/5 px-2 py-0.5 rounded border border-white/5">
                            Step {stepItem.step}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                          {stepItem.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

        {/* Carousel controls */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-8 bg-orange-500" : "w-2.5 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
