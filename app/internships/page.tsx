import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Briefcase,
  Building2,
  Clock,
  CheckCircle2,
} from "lucide-react";

const internships = [
  {
    id: 1,
    title: "Electrical Maintenance Intern",
    company: "Manufacturing Company",
    location: "Visakhapatnam",
    duration: "3 Months",
    type: "On-site",
    stipend: "Rs. 10,000/month",
    positions: 8,
    deadline: "Rolling",
    description:
      "Work with electrical maintenance teams in manufacturing units. Learn industrial motor maintenance, panel wiring, and troubleshooting.",
    requirements: [
      "ITI/Diploma in Electrical",
      "Basic motor knowledge",
      "Willingness to learn",
      "Physical fitness",
    ],
    benefits: ["Certificate", "Job Opportunity", "Mentor Support"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 2,
    title: "Electronics Technician Intern",
    company: "Electronics Manufacturing",
    location: "Vijayawada",
    duration: "4 Months",
    type: "On-site",
    stipend: "Rs. 12,000/month",
    positions: 6,
    deadline: "Monthly",
    description:
      "Assist in electronics assembly, testing, and and quality control. Learn PCB assembly and testing procedures.",
    requirements: [
      "ITI/Diploma in Electronics",
      "Soldering skills",
      "Component identification",
      "Attention to detail",
    ],
    benefits: ["Certificate", "Skill Development", "PPO Potential"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Industrial Electrician Trainee",
    company: "Industrial Plant",
    location: "Visakhapatnam",
    duration: "3 Months",
    type: "On-site",
    stipend: "Rs. 10,000/month",
    positions: 10,
    deadline: "Quarterly",
    description:
      "Hands-on training in industrial electrical systems, motor control centers, and preventive maintenance.",
    requirements: [
      "ITI Electrician",
      "Basic electrical knowledge",
      "Safety awareness",
      "Team player",
    ],
    benefits: ["Practical Experience", "Certificate", "Stipend"],
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    title: "Control Panel Wiring Intern",
    company: "Automation Company",
    location: "Vizianagaram",
    duration: "4 Months",
    type: "On-site",
    stipend: "Rs. 11,000/month",
    positions: 5,
    deadline: "Rolling",
    description:
      "Learn to design and wire industrial control panels. Work with PLCs, relays, and motor starters.",
    requirements: [
      "Diploma in Electrical",
      "Panel wiring basics",
      "Wire identification skills",
      "Safety conscious",
    ],
    benefits: ["Industry Certification", "Hands-on Training", "Job Referral"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Electrical Site Helper",
    company: "Construction Company",
    location: "Visakhapatnam",
    duration: "3 Months",
    type: "On-site",
    stipend: "Rs. 9,000/month",
    positions: 12,
    deadline: "Monthly",
    description:
      "Assist senior electricians at construction sites. Learn cable laying, wiring, and installation practices.",
    requirements: [
      "ITI Electrician",
      "Wiring basics",
      "Physical fitness",
      "Eager to learn",
    ],
    benefits: ["Site Experience", "Certificate", "References"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "Electronics Service Intern",
    company: "Service Center",
    location: "Kakinada",
    duration: "3 Months",
    type: "On-site",
    stipend: "Rs. 8,000/month",
    positions: 4,
    deadline: "Monthly",
    description:
      "Learn electronics repair and servicing. Work on consumer electronics, testing, and troubleshooting.",
    requirements: [
      "ITI/Diploma in Electronics",
      "Basic repair knowledge",
      "Customer handling",
      "Troubleshooting skills",
    ],
    benefits: ["Repair Skills", "Certificate", "Self-employment Skills"],
    color: "from-teal-500 to-cyan-500",
  },
];

const benefits = [
  {
    title: "Industry Experience",
    description: "Gain real-world experience with practical training",
  },
  {
    title: "Paid Opportunities",
    description: "All internships come with monthly stipends",
  },
  {
    title: "Job Opportunities",
    description: "High performers get job offers",
  },
  {
    title: "Mentorship",
    description: "Work under experienced professionals",
  },
  {
    title: "Certification",
    description: "Get industry-recognized certificates",
  },
  {
    title: "Networking",
    description: "Build professional networks for future opportunities",
  },
];

export default function InternshipsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Internship Programs
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">
              Gain Real Industry Experience
            </h1>
            <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
              Paid internship opportunities for ITI and Diploma students.
              Build your practical skills while earning.
            </p>
            <div className="mt-8 flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-orange-400" />
                <span>Multiple Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-orange-400" />
                <span>Paid Internships</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-orange-400" />
                <span>Job Opportunities</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-6 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                  <p className="text-gray-600 text-xs mt-1">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internships List */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Current <span className="text-orange-500">Openings</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Exclusive opportunities for ITI and Diploma students
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((intern) => (
                <div
                  key={intern.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Header */}
                  <div
                    className={`h-2 bg-gradient-to-r ${intern.color}`}
                  />

                  <div className="p-6">
                    {/* Company Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-600 font-medium text-sm">
                        {intern.company}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          intern.type === "Remote"
                            ? "bg-green-100 text-green-600"
                            : intern.type === "Hybrid"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {intern.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {intern.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {intern.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {intern.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {intern.positions} positions
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {intern.description}
                    </p>

                    {/* Stipend */}
                    <div className="flex items-center justify-between py-3 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500">Stipend</p>
                        <p className="font-bold text-green-600">{intern.stipend}</p>
                      </div>
                      <Link href="/apply">
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Apply
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                How It <span className="text-orange-500">Works</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Enroll in Course", desc: "Join any of our training programs" },
                { step: 2, title: "Complete Training", desc: "Finish your course modules" },
                { step: 3, title: "Apply for Internships", desc: "Access exclusive opportunities" },
                { step: 4, title: "Get Placed", desc: "Convert to full-time role" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Start Your Internship Journey?"
          subtitle="Enroll in any ITI/Diploma course and get access to exclusive internship opportunities"
          primaryCTA={{ text: "Enroll Now", href: "/apply" }}
          secondaryCTA={{ text: "View Courses", href: "/courses" }}
        />
      </main>
      <Footer />
    </>
  );
}
