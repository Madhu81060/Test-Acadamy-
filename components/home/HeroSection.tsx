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
  Monitor,
  ShieldCheck,
  FileText,
  Building2,
  Sparkles,
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
    primaryCTA: { text: "Book FREE Demo Now", href: "/contact?demo=true" },
    secondaryCTA: { text: "Our Courses", href: "/courses" },
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
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  const changeSlide = useCallback((newIdx: number) => {
    if (fadeState === "out") return;
    setFadeState("out");
    setTimeout(() => {
      setCurrentSlide(newIdx);
      setFadeState("in");
    }, 300);
  }, [fadeState]);

  const handleNext = useCallback(() => {
    changeSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, changeSlide]);

  const handlePrev = useCallback(() => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, changeSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const current = slides[currentSlide];

  return (
    <section className="relative min-h-[95vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-30 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transitionProperty: "opacity, transform"
            }}
          />
        ))}
        {/* Deep blue gradient overlays for a super-premium professional feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/95 to-sky-950/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-950/40 to-sky-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Floating design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className={`lg:col-span-7 text-white space-y-6 md:space-y-8 font-sans transition-all duration-300 ${
            fadeState === "in" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            
            {/* Animated Badge */}
            <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition-all duration-300 ${current.badgeColor}`}>
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-ping" />
              <span>{current.badge}</span>
            </div>

            {/* Slide Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
              {current.title.split(" ").map((word, i) => {
                const highlightWords = ["100%", "Practical", "4-Step", "Specialized", "Internships", "Placement", "Career", "Free", "Demo", "Job"];
                const cleanWord = word.replace(/[.,]/g, "");
                const isHighlight = highlightWords.some(hw => cleanWord.toLowerCase().includes(hw.toLowerCase()));
                return (
                  <span key={i} className={isHighlight ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 pr-1 md:pr-2 inline-block" : "pr-1 md:pr-2 inline-block"}>
                    {word}
                  </span>
                );
              })}
            </h1>

            {/* Slide Description */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              {current.description}
            </p>

            {/* Highlights bullets grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {current.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 group hover:translate-x-1 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-sky-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm md:text-base">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href={current.primaryCTA.href} className="w-full sm:w-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300" />
                <Button
                  size="lg"
                  className="relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold py-6 px-8 text-base rounded-xl shadow-lg border border-white/10"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {current.primaryCTA.text}
                </Button>
              </Link>
              <Link href={current.secondaryCTA.href} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-sky-400 font-bold py-6 px-8 text-base rounded-xl transition-colors"
                >
                  {current.secondaryCTA.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Unique Pictorial/Flow Diagram per Slide */}
          <div className={`lg:col-span-5 w-full flex justify-center transition-all duration-300 ${
            fadeState === "in" ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          }`}>
            
            {/* Visual Slide 1: Lab Workstation Diagram */}
            {currentSlide === 0 && (
              <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 w-full max-w-md shadow-2xl relative overflow-hidden group animate-scale-in">
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-sky-500/10 rounded-full blur-xl animate-pulse" />
                
                <h3 className="text-white font-bold text-lg mb-4 border-b border-white/10 pb-3 flex items-center justify-between">
                  <span>Smart Lab Workstation</span>
                  <span className="text-[10px] text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded font-extrabold uppercase">Smart Lab</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-sky-500/30 transition-colors">
                    <Wrench className="w-6 h-6 text-sky-400 mb-2" />
                    <h4 className="text-white text-sm font-bold">Motor Controls</h4>
                    <p className="text-slate-400 text-xs mt-1">DOL & Star-Delta starter testing panels.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-sky-500/30 transition-colors">
                    <ShieldCheck className="w-6 h-6 text-green-400 mb-2" />
                    <h4 className="text-white text-sm font-bold">Safety Desk</h4>
                    <p className="text-slate-400 text-xs mt-1">LOTO safety protocols and earthing kits.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-sky-500/30 transition-colors">
                    <Sliders className="w-6 h-6 text-blue-400 mb-2" />
                    <h4 className="text-white text-sm font-bold">Test Bench</h4>
                    <p className="text-slate-400 text-xs mt-1">Multimeters, clamp meters & megger units.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-sky-500/30 transition-colors">
                    <Monitor className="w-6 h-6 text-purple-400 mb-2" />
                    <h4 className="text-white text-sm font-bold">Automation</h4>
                    <p className="text-slate-400 text-xs mt-1">PLC programming and VFD control desks.</p>
                  </div>
                </div>

                <div className="mt-5 p-3.5 bg-sky-500/10 border border-sky-500/20 rounded-xl text-center">
                  <p className="text-xs text-sky-300 font-bold">★ 100% Practical Labs - Perform Wiring On Live Kits</p>
                </div>
              </div>
            )}

            {/* Visual Slide 2: Horizontal connected Chevron Flow */}
            {currentSlide === 1 && (
              <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 w-full max-w-md shadow-2xl relative overflow-hidden group animate-scale-in">
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-teal-500/10 rounded-full blur-xl" />
                
                <h3 className="text-white font-bold text-lg mb-6 border-b border-white/10 pb-3 flex items-center justify-between">
                  <span>Student Placement Path</span>
                  <span className="text-[10px] text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded font-extrabold uppercase">Flow Diagram</span>
                </h3>

                <div className="space-y-4">
                  {[
                    { num: "01", title: "Enroll & Lab Practice", desc: "Choose EEE / ECE or ITI modules & practice daily in smart labs." },
                    { num: "02", title: "Site & Industrial Visits", desc: "Gain physical site work exposure in plants and switchgear stations." },
                    { num: "03", title: "Mock Interview & Resume", desc: "Build resumes & undergo intensive verbal mock drills with experts." },
                    { num: "04", title: "Drive & Job Offer", desc: "Attend placement drives and secure certified, verified career job offers." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-center bg-white/5 border border-white/5 rounded-2xl p-3 hover:bg-white/10 hover:border-teal-500/20 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 font-extrabold flex items-center justify-center flex-shrink-0 text-sm border border-teal-500/30">
                        {step.num}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white text-sm font-bold">{step.title}</h4>
                        <p className="text-slate-400 text-xs truncate mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Visual Slide 3: ITI Course Specialization & Salary Grid */}
            {currentSlide === 2 && (
              <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 w-full max-w-md shadow-2xl relative overflow-hidden group animate-scale-in">
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-500/10 rounded-full blur-xl" />
                
                <h3 className="text-white font-bold text-lg mb-5 border-b border-white/10 pb-3 flex items-center justify-between">
                  <span>Course Paths & Packages</span>
                  <span className="text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded font-extrabold uppercase">Specializations</span>
                </h3>

                <div className="space-y-3.5">
                  {[
                    { title: "Electrical Engineering (EEE)", role: "Maintenance Technician", salary: "Rs. 2.5 - 6.0 LPA" },
                    { title: "Electronics Engineering (ECE)", role: "PCB / Service Engineer", salary: "Rs. 2.5 - 5.5 LPA" },
                    { title: "ITI Electrician & Wireman", role: "Substation Panel Operator", salary: "Rs. 2.2 - 5.0 LPA" },
                    { title: "Electrical Tech (Advanced PLC)", role: "Automation Assistant", salary: "Rs. 3.0 - 7.0 LPA" }
                  ].map((specialty, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl p-3.5 transition-colors">
                      <div>
                        <h4 className="text-white text-sm font-bold">{specialty.title}</h4>
                        <p className="text-slate-400 text-xs mt-0.5">Role: {specialty.role}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full">
                          {specialty.salary}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Visual Slide 4: Internship Mock Certificate */}
            {currentSlide === 3 && (
              <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 w-full max-w-md shadow-2xl relative overflow-hidden group animate-scale-in">
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-purple-500/10 rounded-full blur-xl" />
                
                <h3 className="text-white font-bold text-lg mb-4 border-b border-white/10 pb-3 flex items-center justify-between">
                  <span>Credential Visualizer</span>
                  <span className="text-[10px] text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded font-extrabold uppercase">Certificate</span>
                </h3>

                {/* Simulated Certificate Graphic */}
                <div className="border-2 border-double border-yellow-500/40 p-4 rounded-xl bg-slate-950 text-center relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-16 h-16 bg-yellow-500/10 rounded-full border border-yellow-500/20 flex items-center justify-center rotate-12">
                    <Award className="w-8 h-8 text-yellow-500" />
                  </div>
                  
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">Certificate of Completion</span>
                  <h4 className="text-yellow-500 font-serif text-lg font-bold">Test Academy Training</h4>
                  <p className="text-slate-300 text-[10px] mt-2 font-light italic leading-normal">
                    This certifies that the candidate has successfully completed 100% practical lab training in Advanced Electrical Systems & Panel Wiring.
                  </p>
                  
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/5 text-[9px]">
                    <div className="text-left">
                      <p className="text-slate-400">Authorized Signatory</p>
                      <p className="text-white font-bold font-serif mt-0.5">Test Academy Board</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400">Govt Reg No</p>
                      <p className="text-green-400 font-bold mt-0.5">TA-2026-ELECT-99</p>
                    </div>
                  </div>
                </div>

                {/* Placement Logos list */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-[11px] text-slate-400 font-bold text-center uppercase tracking-wider mb-2">Our Top Placement Partners</p>
                  <div className="flex justify-center gap-3 text-[10px] font-bold text-slate-300">
                    <span className="bg-white/5 border border-white/5 px-2.5 py-1 rounded">L&T Partner</span>
                    <span className="bg-white/5 border border-white/5 px-2.5 py-1 rounded">Siemens System</span>
                    <span className="bg-white/5 border border-white/5 px-2.5 py-1 rounded">ABB Controls</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Carousel indicators & controls */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (currentSlide === idx) return;
                  changeSlide(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-8 bg-sky-400" : "w-2.5 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-slate-900/60 hover:bg-slate-900 text-white hover:text-sky-400 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-slate-900/60 hover:bg-slate-900 text-white hover:text-sky-400 transition-colors"
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
