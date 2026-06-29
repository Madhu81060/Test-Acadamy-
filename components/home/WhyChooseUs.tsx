import { CheckCircle2, Shield, Clock, Award, BookOpen, Users } from "lucide-react";

const benefits = [
  {
    title: "Industry Expert Trainers",
    description: "Learn from experienced ITI and Diploma professionals who understand industry requirements.",
  },
  {
    title: "Hands-on Practice",
    description: "Work with real electrical equipment, tools, and industrial setups.",
  },
  {
    title: "Flexible Batch Timings",
    description: "Morning, evening, and weekend batches available for working students.",
  },
  {
    title: "Career Guidance",
    description: "Dedicated counselors help you choose the right path based on your qualification.",
  },
  {
    title: "Interview Preparation",
    description: "Regular mock interviews and skill assessment sessions.",
  },
  {
    title: "Lifetime Support",
    description: "Access to placement assistance even after course completion.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Our Difference
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Why Test Academy is the{" "}
              <span className="text-orange-500">Right Choice</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              With over a decade of experience in ITI and Diploma training, we&apos;ve
              helped thousands of students build successful careers in electrical
              and electronics industries.
            </p>

            <div className="mt-8 space-y-6">
              {benefits.slice(0, 4).map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                <img
                  src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Electrical training"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg">
                <Shield className="h-8 w-8 mb-3" />
                <h4 className="font-bold text-lg">Government Certified</h4>
                <p className="text-blue-100 text-sm mt-1">
                  NSDC and Skill India recognized certifications
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
                <Clock className="h-8 w-8 mb-3" />
                <h4 className="font-bold text-lg">3-6 Months</h4>
                <p className="text-orange-100 text-sm mt-1">
                  Flexible course durations
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                <img
                  src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Practical training"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {benefits.slice(4).map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
