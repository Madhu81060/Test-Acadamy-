"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Award, Users, Briefcase, CheckCircle2, Calendar, Wrench, Zap } from "lucide-react";

const highlights = [
  "10+ Years of Excellence",
  "100% Placement Assistance",
  "Industry Expert Trainers",
  "Government Certified",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/95" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-ping" />
              <span className="text-orange-300 text-sm font-medium">
                Admissions Open for ITI & Diploma Students
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Career with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Practical Skills
              </span>{" "}
              Training
            </h1>

            <p className="text-blue-100 text-lg md:text-xl max-w-xl">
              Industry-focused training for ITI and Diploma students in Electrical
              and Electronics. Get hands-on experience and 100% placement assistance.
            </p>

            {/* Animated Feature Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="group flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-5 py-3 hover:scale-105 transition-all cursor-pointer animate-pulse" style={{ animationDuration: "3s" }}>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-green-300 text-xs font-medium uppercase tracking-wider">Limited Time Offer</p>
                  <p className="text-white font-bold">2 Days FREE Demo Classes</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-5 py-3 hover:scale-105 transition-all cursor-pointer animate-pulse" style={{ animationDuration: "3s", animationDelay: "1s" }}>
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50">
                  <Wrench className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-yellow-300 text-xs font-medium uppercase tracking-wider">Learn By Doing</p>
                  <p className="text-white font-bold">100% Hands-on Training</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 group hover:translate-x-1 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-blue-100 text-sm group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - More Prominent */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary CTA - Book Free Demo */}
              <Link href="/contact?demo=true" className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-7 text-lg font-bold shadow-2xl transition-all w-full sm:w-auto border-2 border-white/20"
                >
                  <Calendar className="mr-2 h-6 w-6" />
                  Book FREE Demo Now
                </Button>
              </Link>

              {/* Secondary CTA - Apply Now */}
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto border-2 border-white/20"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Video Button */}
            <div className="pt-2">
              <Button
                size="lg"
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <Play className="h-5 w-5" />
                </div>
                Watch Student Stories
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/20">
                <Users className="h-10 w-10 text-orange-400 mb-4" />
                <h3 className="text-4xl font-bold text-white">2000+</h3>
                <p className="text-blue-200 mt-2">Students Trained</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:border-orange-400/50 mt-8">
                <Briefcase className="h-10 w-10 text-orange-400 mb-4" />
                <h3 className="text-4xl font-bold text-white">98%</h3>
                <p className="text-blue-200 mt-2">Placement Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:border-orange-400/50">
                <Award className="h-10 w-10 text-orange-400 mb-4" />
                <h3 className="text-4xl font-bold text-white">100+</h3>
                <p className="text-blue-200 mt-2">Hiring Partners</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 mt-8 shadow-xl shadow-green-500/30">
                <Calendar className="h-10 w-10 text-white mb-3" />
                <h3 className="text-2xl font-bold text-white">2 Days FREE</h3>
                <p className="text-green-100 mt-1 font-medium">Demo Classes</p>
                <p className="text-green-200 text-xs mt-2">Book Now - Limited Seats!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
