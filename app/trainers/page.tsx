import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/shared/CTASection";
import {
  Award,
  Users,
  BookOpen,
  Building2,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const trainers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Lead Trainer - Electrical",
    specialization: "Industrial Electrical Systems",
    experience: "15+ years",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    education: "Diploma in Electrical Engineering",
    companies: ["Manufacturing Plant", "Industrial Facility", "Electrical Contractor"],
    students: "600+",
    rating: 4.9,
    bio: "Experienced in industrial motor control, panel wiring, and maintenance. Has trained hundreds of ITI students for industrial jobs.",
    courses: ["Electrical Engineering (EEE)", "Electrician Training"],
  },
  {
    id: 2,
    name: "Anita Devi",
    role: "Lead Trainer - Electronics",
    specialization: "Electronics & PCB Design",
    experience: "12+ years",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    education: "Diploma in Electronics Engineering",
    companies: ["Electronics Manufacturing", "Service Center", "R&D Lab"],
    students: "400+",
    rating: 4.8,
    bio: "Expert in PCB design, soldering, and electronics troubleshooting. Specializes in training diploma students for electronics manufacturing jobs.",
    courses: ["Electronics Engineering (ECE)"],
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Senior Trainer - Electrical",
    specialization: "Control Panels & Motor Control",
    experience: "18+ years",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
    education: "ITI Electrician + Advanced Certifications",
    companies: ["Automation Industry", "Control Panel Manufacturer"],
    students: "500+",
    rating: 4.9,
    bio: "Started as an ITI electrician, now a senior trainer. Specializes in control panel wiring, VFDs, and motor starters. Real industry experience.",
    courses: ["Electrical Technician (Advanced)", "Control Panels"],
  },
  {
    id: 4,
    name: "Sneha Kumari",
    role: "Senior Trainer - Electrical",
    specialization: "Domestic & Industrial Wiring",
    experience: "10+ years",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    education: "ITI Electrician",
    companies: ["Construction Sites", "Residential Projects", "Industrial Plants"],
    students: "350+",
    rating: 4.7,
    bio: "Expert in house wiring, industrial electrical systems, and safety protocols. Trained many intermediate students to become professional electricians.",
    courses: ["Electrician Training", "Wiring Systems"],
  },
  {
    id: 5,
    name: "Arjun Patel",
    role: "Senior Trainer - Electronics",
    specialization: "Consumer Electronics Repair",
    experience: "14+ years",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    education: "ITI Electronics + Diploma",
    companies: ["Service Centers", "Electronics Retailers"],
    students: "300+",
    rating: 4.8,
    bio: "Expert in consumer electronics repair, TV, and appliance servicing. Teaches students self-employment skills for electronics repair.",
    courses: ["Electronics Engineering (ECE)", "Repair Training"],
  },
  {
    id: 6,
    name: "Meera Joshi",
    role: "Trainer - Industrial Electrical",
    specialization: "Industrial Maintenance",
    experience: "10+ years",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    education: "Diploma in Electrical Engineering",
    companies: ["Manufacturing Units", "Industrial Plants"],
    students: "250+",
    rating: 4.7,
    bio: "Experienced in preventive maintenance, troubleshooting, and industrial safety. Helps students prepare for industrial jobs.",
    courses: ["Electrical Engineering (EEE)", "Maintenance Training"],
  },
];

export default function TrainersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">
              Learn from Industry Experts
            </h1>
            <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
              Our trainers are experienced ITI and Diploma professionals
              who bring real-world industry experience to the classroom.
            </p>
            <div className="mt-8 flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-orange-400" />
                <span>10+ Years Avg Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-orange-400" />
                <span>Industry Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-orange-400" />
                <span>2000+ Students Trained</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">6+</div>
                <p className="text-gray-600 mt-1">Expert Trainers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">12+</div>
                <p className="text-gray-600 mt-1">Avg. Experience (Years)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">2000+</div>
                <p className="text-gray-600 mt-1">Students Trained</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">4.8+</div>
                <p className="text-gray-600 mt-1">Average Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainers.map((trainer) => (
                <div
                  key={trainer.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${trainer.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{trainer.name}</h3>
                      <p className="text-blue-300 text-sm">{trainer.specialization}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {trainer.experience}
                    </div>
                  </div>

                  <div className="p-4">
                    {/* Rating */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-900">{trainer.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Users className="h-4 w-4" />
                        {trainer.students}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{trainer.bio}</p>

                    {/* Courses */}
                    <div className="flex flex-wrap gap-1">
                      {trainer.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Trainers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Why Learn from <span className="text-orange-500">Our Trainers</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Industry Experience
                </h4>
                <p className="text-gray-600 text-sm">
                  All trainers have worked in industries and bring real-world
                  insights to the classroom.
                </p>
              </div>
              <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Practical Teaching
                </h4>
                <p className="text-gray-600 text-sm">
                  Focus on hands-on projects and real scenarios you&apos;ll face
                  in the industry.
                </p>
              </div>
              <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Mentorship
                </h4>
                <p className="text-gray-600 text-sm">
                  Beyond classes, trainers provide career guidance and share
                  industry connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Learn from the Best"
          subtitle="Start your training with experienced industry professionals"
          primaryCTA={{ text: "Enroll Now", href: "/apply" }}
          secondaryCTA={{ text: "View Courses", href: "/courses" }}
        />
      </main>
      <Footer />
    </>
  );
}
