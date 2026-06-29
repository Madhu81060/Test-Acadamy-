"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Zap,
  Cpu,
  Wrench,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

const courses = [
  {
    id: "electrical-engineering",
    icon: Zap,
    title: "Electrical Engineering (EEE)",
    tagline: "Power the world with your skills",
    description:
      "Comprehensive training in electrical systems, power distribution, motor control, and industrial wiring. Designed for ITI and Diploma students to become skilled electrical technicians.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-50",
    duration: "6 Months",
    modules: 24,
    eligibility: "ITI / Diploma in Electrical Engineering",
    fee: "Rs. 35,000",
    highlights: [
      "Electrical Wiring (Domestic & Industrial)",
      "Motor Control & Starter Panels",
      "Transformer Installation",
      "Switchgear & Protection Systems",
      "Electrical Safety Standards",
      "Blue Print Reading",
      "Testing & Commissioning",
      "Electrical CAD",
    ],
    career: [
      "Electrical Technician",
      "Wireman",
      "Control Panel Operator",
      "Maintenance Electrician",
      "Electrical Supervisor",
    ],
    salary: "Rs. 2.5 - 6 LPA",
  },
  {
    id: "electronics-engineering",
    icon: Cpu,
    title: "Electronics Engineering (ECE)",
    tagline: "Master electronic systems and circuits",
    description:
      "Hands-on training in electronics, PCB design, circuit troubleshooting, and embedded systems. Perfect for ITI and Diploma students to build careers in electronics manufacturing.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    duration: "6 Months",
    modules: 26,
    eligibility: "ITI / Diploma in Electronics Engineering",
    fee: "Rs. 38,000",
    highlights: [
      "Basic Electronics & Components",
      "PCB Design & Soldering",
      "Microcontrollers (8051, Arduino)",
      "Embedded Systems Basics",
      "Electronic Circuit Troubleshooting",
      "Consumer Electronics Repair",
      "Sensors & Actuators",
      "Testing Equipment Usage",
    ],
    career: [
      "Electronics Technician",
      "PCB Designer",
      "R&D Assistant",
      "Quality Tester",
      "Service Engineer",
    ],
    salary: "Rs. 2.5 - 5.5 LPA",
  },
  {
    id: "electrician",
    icon: Wrench,
    title: "Electrician Training",
    tagline: "Become a certified electrician",
    description:
      "Practical training for intermediate students to become professional electricians. covers domestic wiring, industrial electrical systems, and safety protocols with hands-on practice.",
    image: "https://images.pexels.com/photos/5691605/pexels-photo-5691605.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-green-500 to-teal-500",
    bg: "bg-green-50",
    duration: "3 Months",
    modules: 16,
    eligibility: "10th / 12th Pass (Intermediate)",
    fee: "Rs. 18,000",
    highlights: [
      "Basic Electrical Concepts",
      "House Wiring Techniques",
      "Conduit & Cable Tray Work",
      "Switch & Socket Installation",
      "Earthing & Grounding",
      "Electrical Safety",
      "Appliance Repair Basics",
      "Multimeter & Tester Usage",
    ],
    career: [
      "Domestic Electrician",
      "Wireman",
      "Electrical Helper",
      "Maintenance Staff",
      "Self-employed Electrician",
    ],
    salary: "Rs. 1.8 - 4 LPA",
  },
  {
    id: "iti-electrician-wireman",
    icon: Wrench,
    title: "ITI Electrician & Wireman (Specialized)",
    tagline: "100% Practical Program for ITI Students",
    description:
      "Specialized vocational training for ITI Electrician and Wireman graduates. Master industrial panel wiring, motor starter connections (DOL, Star-Delta), substation maintenance, and standard industrial safety.",
    image: "https://images.pexels.com/photos/8437016/pexels-photo-8437016.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    duration: "3 Months",
    modules: 18,
    eligibility: "ITI Pass in Electrician / Wireman / Electrical",
    fee: "Rs. 22,000",
    highlights: [
      "Industrial Panel Assembly",
      "DOL & Star-Delta Starters",
      "Armored Cable Jointing",
      "Conduit & Cable Tray Work",
      "Earth Resistance Testing",
      "Industrial Safety & LOTO",
      "Single & Three Phase Connections",
      "Electrical Fault Diagnostics",
    ],
    career: [
      "Industrial Wireman",
      "Panel Board Technician",
      "Substation Operator",
      "Electrical Maintenance Technician",
    ],
    salary: "Rs. 2.2 - 5.0 LPA",
  },
  {
    id: "intermediate-electrical-training",
    icon: Zap,
    title: "ITI & Intermediate Students Electrical Training",
    tagline: "100% Practical Training & Job Placement",
    description:
      "A customized practical program for ITI, 10th, and 12th pass students. Master domestic/industrial wiring, motors, and control panels with comprehensive troubleshooting skills in fully-equipped labs.",
    image: "https://images.pexels.com/photos/8961405/pexels-photo-8961405.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    duration: "3 Months",
    modules: 18,
    eligibility: "ITI / 10th Pass / 12th Pass (Intermediate)",
    fee: "Rs. 20,000",
    highlights: [
      "Basic Electrical",
      "House Wiring",
      "Industrial Wiring",
      "Motors",
      "Control Panels",
      "Electrical Safety",
      "Testing Instruments",
      "Fault Finding",
      "Practical Lab Training",
      "100% Practical Training",
      "2 Days Free Demo",
      "Internship & Certificate",
      "Placement Assistance"
    ],
    career: [
      "Domestic Electrician",
      "Industrial Wireman",
      "Control Panel Operator",
      "Maintenance Staff",
      "Self-employed Contractor",
    ],
    salary: "Rs. 2.0 - 4.8 LPA",
  },
  {
    id: "electrical-technician",
    icon: Lightbulb,
    title: "Electrical Technician (Advanced)",
    tagline: "Advanced skills for better opportunities",
    description:
      "Advanced training for ITI electricians to upgrade their skills. covers industrial automation, PLC basics, and motor control systems for better job opportunities.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    duration: "4 Months",
    modules: 20,
    eligibility: "ITI Electrician / 2 Years Experience",
    fee: "Rs. 25,000",
    highlights: [
      "Industrial Motor Control",
      "PLC Programming Basics",
      "VFD & Soft Starter",
      "Control Panel Design",
      "Industrial Wiring Standards",
      "Preventive Maintenance",
      "Troubleshooting Techniques",
      "Documentation & Reports",
    ],
    career: [
      "Industrial Electrician",
      "Control Panel Technician",
      "Automation Assistant",
      "Maintenance Supervisor",
      "Electrical Foreman",
    ],
    salary: "Rs. 3 - 7 LPA",
  },
];

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Our Programs
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">
              Industry-Focused Training Courses
            </h1>
            <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
              Practical training programs designed for ITI and Diploma students.
              Learn hands-on skills and get job-ready with government certified courses.
            </p>
            <div className="mt-8 flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-orange-400" />
                <span>ITI & Diploma Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-orange-400" />
                <span>Government Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-orange-400" />
                <span>100% Placement</span>
              </div>
            </div>
          </div>
        </section>

        {/* Courses List */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                id={course.id}
                className={`py-12 ${
                  index !== courses.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left - Image */}
                  <div
                    className={`relative rounded-2xl overflow-hidden shadow-xl ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${course.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="relative p-8 pt-32 text-white">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <course.icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
                      <p className="text-white/80">{course.tagline}</p>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                        {course.duration}
                      </span>
                      <span className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
                        {course.modules} Modules
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className={`${course.bg} rounded-lg p-4`}>
                        <p className="text-xs text-gray-500 mb-1">Eligibility</p>
                        <p className="font-medium text-gray-900 text-sm">
                          {course.eligibility}
                        </p>
                      </div>
                      <div className={`${course.bg} rounded-lg p-4`}>
                        <p className="text-xs text-gray-500 mb-1">Course Fee</p>
                        <p className="font-medium text-gray-900 text-sm">
                          {course.fee}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Course Highlights
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.highlights.slice(0, 6).map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Career Paths */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Career Opportunities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {course.career.map((role, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Salary & CTA */}
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-4">
                      <div>
                        <p className="text-xs text-gray-500">Expected Salary</p>
                        <p className="font-bold text-blue-600">{course.salary}</p>
                      </div>
                      <div className="flex gap-3">
                        <Link href="/apply">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            Enroll Now
                          </Button>
                        </Link>
                        <Link href="/contact?demo=true">
                          <Button variant="outline" className="border-blue-600 text-blue-600">
                            Free Demo
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Quick <span className="text-orange-500">Comparison</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-4 px-6 text-left">Course</th>
                    <th className="py-4 px-6 text-center">Duration</th>
                    <th className="py-4 px-6 text-center">Fee</th>
                    <th className="py-4 px-6 text-center">Eligibility</th>
                    <th className="py-4 px-6 text-center">Avg Package</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, idx) => (
                    <tr
                      key={course.id}
                      className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-4 px-6 font-medium text-gray-900">
                        {course.title}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-600">
                        {course.duration}
                      </td>
                      <td className="py-4 px-6 text-center font-medium text-blue-600">
                        {course.fee}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-600 text-sm">
                        {course.eligibility}
                      </td>
                      <td className="py-4 px-6 text-center text-orange-600 font-medium">
                        {course.salary}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CTASection
          title="Still Confused Which Course to Choose?"
          subtitle="Talk to our career counselors for free guidance"
          primaryCTA={{ text: "Book Free Consultation", href: "/contact" }}
          secondaryCTA={{ text: "Apply Now", href: "/apply" }}
        />
      </main>
      <Footer />
    </>
  );
}
