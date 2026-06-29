import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Award,
  Users,
  Target,
  Heart,
  CheckCircle2,
  Calendar,
  Building2,
  GraduationCap,
} from "lucide-react";

const milestones = [
  { year: "2014", title: "Founded", description: "Started with 50 ITI students and 2 courses" },
  { year: "2016", title: "First 500 Placements", description: "Achieved 95% placement rate milestone" },
  { year: "2018", title: "Government Recognition", description: "Received NSDC certification" },
  { year: "2020", title: "2000+ Students", description: "Trained students across Andhra Pradesh" },
  { year: "2022", title: "100+ Hiring Partners", description: "Expanded manufacturing partnerships" },
  { year: "2024", title: "Industry Leader", description: "Leading ITI/Diploma training institute" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every aspect of training and student development.",
  },
  {
    icon: Users,
    title: "Student First",
    description: "Every decision we make is centered around our students' success and growth.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We maintain transparency and ethical practices in all our operations.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We continuously update our curriculum to match evolving industry needs.",
  },
];

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & Director",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "ITI Electrician with 15+ years in industrial electrical systems.",
  },
  {
    name: "Anita Devi",
    role: "Head - Electrical Training",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Diploma in Electrical Engineering, 12 years industry experience.",
  },
  {
    name: "Vikram Singh",
    role: "Head - Placements",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "10+ years connecting trained technicians with employers.",
  },
  {
    name: "Sneha Kumari",
    role: "Head - Operations",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Ensures quality training and smooth student experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="mt-2 text-4xl md:text-5xl font-bold">
                Building Careers Since 2014
              </h1>
              <p className="mt-6 text-blue-100 text-lg leading-relaxed">
                Test Academy is a leading training institute for ITI and Diploma
                students, providing practical skills training in electrical and
                electronics engineering with 100% placement assistance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Calendar className="h-5 w-5 text-orange-400" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-orange-400" />
                  <span>2000+ Students Trained</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Building2 className="h-5 w-5 text-orange-400" />
                  <span>100+ Hiring Partners</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower ITI and Diploma students with practical skills in
                  electrical and electronics engineering, providing hands-on training
                  and job placement support for careers in manufacturing and industries.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become India&apos;s most trusted training institute known for
                  quality education, practical learning, and exceptional
                  placement support, contributing to the nation&apos;s skilled
                  workforce development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Milestones That <span className="text-orange-500">Define Us</span>
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block" />

              <div className="space-y-8">
                {milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-8 ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${idx % 2 === 0 ? "text-right" : "text-left"} hidden md:block`} />

                    {/* Timeline Dot */}
                    <div className="relative z-10 w-16 h-16 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border-2 border-blue-600">
                      <span className="text-blue-600 font-bold text-sm">{milestone.year}</span>
                    </div>

                    <div className="flex-1">
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-gray-900">{milestone.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                What Drives Us
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Our Core <span className="text-orange-500">Values</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Meet Our <span className="text-orange-500">Leadership</span>
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900">{member.name}</h4>
                    <p className="text-blue-600 text-sm">{member.role}</p>
                    <p className="text-gray-600 text-xs mt-2">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Accreditations
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Recognized <span className="text-orange-500">Certifications</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "NSDC Partner",
                "ISO 9001:2015",
                "Skill India Partner",
                "AICTE Approved",
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center bg-gray-50 rounded-xl py-8"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3" />
                  <span className="font-semibold text-gray-900">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Join Our Growing Family"
          subtitle="Start your journey towards a successful career with Test Academy"
          primaryCTA={{ text: "Apply Now", href: "/apply" }}
          secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
