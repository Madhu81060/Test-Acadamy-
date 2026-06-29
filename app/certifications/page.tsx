import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/shared/CTASection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileBadge,
  Globe,
  Shield,
  Star,
} from "lucide-react";

const certifications = [
  {
    name: "NSDC Certification",
    description: "National Skill Development Corporation recognized certification",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300",
    courses: ["All courses"],
    value: "Government recognized, valid across India",
  },
  {
    name: "ISO 9001:2015",
    description: "Quality Management System certification",
    image: "https://images.pexels.com/photos/4569594/pexels-photo-4569594.jpeg?auto=compress&cs=tinysrgb&w=300",
    courses: ["Institute certification"],
    value: "Assures quality training standards",
  },
  {
    name: "Skill India",
    description: "Associated with Skill India Mission",
    image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=300",
    courses: ["All courses"],
    value: "National skill initiative recognition",
  },
  {
    name: "AutoDesk Certified",
    description: "Authorized training partner for AutoDesk products",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300",
    courses: ["Construction Engineering"],
    value: "Industry-recognized CAD certification",
  },
  {
    name: "AWS Training Partner",
    description: "Authorized Amazon Web Services training partner",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=300",
    courses: ["DevOps & Cloud Computing"],
    value: "AWS certification pathway",
  },
  {
    name: "Microsoft Learn",
    description: "Microsoft technologies training partner",
    image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=300",
    courses: ["IT & Software Development"],
    value: "Azure and Microsoft certifications",
  },
];

const courseCertificates = [
  {
    course: "Construction Engineering",
    certificates: [
      "NSDC Certificate",
      "AutoDesk AutoCAD",
      "Revit Architecture",
      "STAAD Pro",
      "Project Management",
    ],
  },
  {
    course: "IT & Software Development",
    certificates: [
      "NSDC Certificate",
      "Full Stack Developer",
      "React.js Developer",
      "Python Developer",
      "Database Management",
    ],
  },
  {
    course: "DevOps & Cloud Computing",
    certificates: [
      "NSDC Certificate",
      "AWS Cloud Practitioner",
      "Docker Certified",
      "Kubernetes Admin",
      "CI/CD Specialist",
    ],
  },
  {
    course: "Electrical Engineering",
    certificates: [
      "NSDC Certificate",
      "PLC Programming",
      "SCADA Systems",
      "Industrial Automation",
      "Electrical Design",
    ],
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Globally Recognized",
    description: "Our certificates are accepted by companies worldwide",
  },
  {
    icon: BadgeCheck,
    title: "Industry Validated",
    description: "Curriculum designed with industry experts",
  },
  {
    icon: Shield,
    title: "Government Approved",
    description: "NSDC and Skill India recognized",
  },
  {
    icon: FileBadge,
    title: "Digital Credentials",
    description: "Shareable digital badges for LinkedIn",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Certifications
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">
              Industry-Recognized Certifications
            </h1>
            <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
              Get government and industry-recognized certifications that boost your
              resume and validate your skills to employers.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institute Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Our <span className="text-orange-500">Accreditations</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Recognized by leading certification bodies
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 text-xs">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course-wise Certificates */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Certificates You&apos;ll <span className="text-orange-500">Earn</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Course completion certificates and skill certifications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseCertificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-bold text-gray-900 mb-4">{cert.course}</h3>
                  <div className="space-y-2">
                    {cert.certificates.map((certificate, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{certificate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate Sample */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Sample <span className="text-orange-500">Certificate</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Every student receives a professional certificate upon course completion
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-4 border-blue-200 shadow-xl">
              <div className="border-4 border-blue-600 p-8">
                <div className="text-center border-b-2 border-blue-200 pb-6 mb-6">
                  <div className="flex justify-center items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">TA</span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-xl text-blue-600">Test Academy</p>
                      <p className="text-xs text-gray-500">Building Careers Since 2014</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                    Certificate of Completion
                  </h3>
                  <p className="text-gray-500 text-sm">
                    This is to certify that
                  </p>
                </div>

                <div className="text-center py-6">
                  <p className="text-3xl font-bold text-blue-900 mb-4">[Student Name]</p>
                  <p className="text-gray-600">
                    has successfully completed the
                  </p>
                  <p className="text-xl font-semibold text-blue-600 mt-2">
                    [Course Name]
                  </p>
                  <p className="text-gray-500 text-sm mt-4">
                    Certificate ID: TA-2024-XXXXX | Date: [Date]
                  </p>
                </div>

                <div className="flex justify-between items-end border-t-2 border-blue-200 pt-6 mt-6">
                  <div className="text-left">
                    <div className="w-32 border-t border-gray-400 pt-1">
                      <p className="text-xs text-gray-500">Director</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Award className="h-12 w-12 text-blue-600" />
                    <div className="text-right text-xs text-gray-500">
                      <p>NSDC Partner</p>
                      <p>Skill India</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-32 border-t border-gray-400 pt-1">
                      <p className="text-xs text-gray-500">Placement Head</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Get Certified Today"
          subtitle="Enroll now and earn industry-recognized certifications"
          primaryCTA={{ text: "Apply Now", href: "/apply" }}
          secondaryCTA={{ text: "View Courses", href: "/courses" }}
        />
      </main>
      <Footer />
    </>
  );
}
