import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Cpu, Wrench, Lightbulb } from "lucide-react";

const courses = [
  {
    id: "electrical-engineering",
    icon: Zap,
    title: "Electrical Engineering (EEE)",
    description:
      "Comprehensive training in electrical systems, power distribution, motor control, and industrial wiring for ITI and Diploma students.",
    duration: "6 Months",
    modules: 24,
    color: "from-yellow-500 to-orange-500",
    highlights: [
      "Electrical Wiring",
      "Motor Control",
      "Transformer Installation",
      "Switchgear Systems",
    ],
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "electronics-engineering",
    icon: Cpu,
    title: "Electronics Engineering (ECE)",
    description:
      "Hands-on training in electronics, PCB design, circuit troubleshooting, and embedded systems for ITI and Diploma students.",
    duration: "6 Months",
    modules: 26,
    color: "from-blue-500 to-indigo-500",
    highlights: [
      "PCB Design",
      "Microcontrollers",
      "Embedded Systems",
      "Circuit Troubleshooting",
    ],
    image: "https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "electrician",
    icon: Wrench,
    title: "Electrician Training",
    description:
      "Practical training for intermediate students to become professional electricians with hands-on wiring and repair skills.",
    duration: "3 Months",
    modules: 16,
    color: "from-green-500 to-teal-500",
    highlights: [
      "House Wiring",
      "Conduit Work",
      "Earthing Systems",
      "Appliance Repair",
    ],
    image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "electrical-technician",
    icon: Lightbulb,
    title: "Electrical Technician (Advanced)",
    description:
      "Advanced training for ITI electricians covering industrial automation and motor control systems.",
    duration: "4 Months",
    modules: 20,
    color: "from-purple-500 to-pink-500",
    highlights: [
      "Industrial Motor Control",
      "PLC Basics",
      "VFD & Soft Starter",
      "Control Panels",
    ],
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function CoursesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Industry-Focused{" "}
            <span className="text-orange-500">Courses</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Practical training programs for ITI and Diploma students. Learn hands-on skills
            with government certified courses and get job-ready from day one.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${course.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg`}
                  >
                    <course.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <span>{course.duration}</span>
                    <span>|</span>
                    <span>{course.modules} Modules</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {course.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link href={`/courses#${course.id}`}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/courses">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
