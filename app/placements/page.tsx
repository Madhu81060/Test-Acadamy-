import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Trophy,
  TrendingUp,
  Users,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { value: "98%", label: "Placement Rate", icon: Trophy },
  { value: "500+", label: "Students Placed", icon: Users },
  { value: "18K", label: "Average Salary", icon: TrendingUp },
  { value: "35K", label: "Highest Salary", icon: Briefcase },
];

const sectors = [
  "Manufacturing",
  "Construction",
  "Electrical",
  "Electronics",
  "Industrial",
  "Automation",
  "Maintenance",
  "Service Centers",
];

const placements = [
  {
    name: "Rahul Kumar",
    course: "Electrical Engineering (EEE)",
    role: "Electrical Technician",
    salary: "Rs. 18,000/month",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "Test Academy gave me the practical skills to become a professional electrical technician.",
  },
  {
    name: "Priya Devi",
    course: "Electronics Engineering (ECE)",
    role: "Electronics Technician",
    salary: "Rs. 16,000/month",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "The hands-on training on PCB design and circuit troubleshooting helped me get placed.",
  },
  {
    name: "Amit Singh",
    course: "Electrician Training",
    role: "Industrial Electrician",
    salary: "Rs. 15,000/month",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "From intermediate student to professional electrician, the journey was amazing.",
  },
  {
    name: "Sneha Kumari",
    course: "Electrical Technician (Advanced)",
    role: "Control Panel Operator",
    salary: "Rs. 22,000/month",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "The advanced PLC training helped me get a better position in an automation company.",
  },
];

const placementProcess = [
  {
    step: 1,
    title: "Resume Building",
    description: "Expert help to create professional resumes",
  },
  {
    step: 2,
    title: "Mock Interviews",
    description: "Practice with industry professionals",
  },
  {
    step: 3,
    title: "Skill Assessment",
    description: "Prepare for technical assessments",
  },
  {
    step: 4,
    title: "Job Drives",
    description: "Direct campus placement drives",
  },
];

export default function PlacementsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Placement Records
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">
              100% Placement Assistance
            </h1>
            <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
              We help ITI and Diploma students find rewarding careers in electrical
              and electronics industries with dedicated placement support.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-blue-100 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Placements */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Recent <span className="text-orange-500">Placements</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Where our students are building their careers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {placements.map((placement, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${placement.image})` }}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{placement.name}</h4>
                      <p className="text-blue-600 text-sm">{placement.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="h-4 w-4" />
                      {placement.course}
                    </div>
                    <div className="flex items-center gap-2 text-green-600 font-medium">
                      <TrendingUp className="h-4 w-4" />
                      {placement.salary}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">&ldquo;{placement.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Sectors */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Placement <span className="text-orange-500">Sectors</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Our students work across various industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center h-20 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all"
                >
                  <span className="text-sm font-bold text-gray-700 hover:text-blue-600">
                    {sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Our <span className="text-orange-500">Placement Process</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {placementProcess.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  {idx < placementProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Support */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Comprehensive Placement <span className="text-orange-500">Support</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Dedicated placement cell for ITI/Diploma students",
                    "Resume building workshops every month",
                    "Mock interviews with industry experts",
                    "Technical skill assessment preparation",
                    "Group discussion practice sessions",
                    "Direct campus drives with multiple companies",
                    "Local job referrals near your location",
                    "Self-employment guidance and support",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="h-40 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400')",
                  }}
                />
                <div
                  className="h-40 rounded-xl bg-cover bg-center mt-8"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400')",
                  }}
                />
                <div
                  className="h-40 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400')",
                  }}
                />
                <div
                  className="h-40 rounded-xl bg-cover bg-center mt-8"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400')",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Get Placed?"
          subtitle="Join Test Academy and let us help you build your career"
          primaryCTA={{ text: "Apply Now", href: "/apply" }}
          secondaryCTA={{ text: "View Courses", href: "/courses" }}
        />
      </main>
      <Footer />
    </>
  );
}
