import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Briefcase, ArrowRight } from "lucide-react";

const internships = [
  {
    title: "Electrical Maintenance Trainee",
    company: "Manufacturing Company",
    location: "Visakhapatnam",
    duration: "3 Months",
    type: "On-site",
    stipend: "Rs. 10,000/month",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Electronics Technician Trainee",
    company: "Electronics Company",
    location: "Vijayawada",
    duration: "4 Months",
    type: "On-site",
    stipend: "Rs. 12,000/month",
    image: "https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Industrial Electrician Intern",
    company: "Industrial Plant",
    location: "Visakhapatnam",
    duration: "3 Months",
    type: "On-site",
    stipend: "Rs. 10,000/month",
    image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Control Panel Wiring Intern",
    company: "Automation Company",
    location: "Vizianagaram",
    duration: "4 Months",
    type: "On-site",
    stipend: "Rs. 11,000/month",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function InternshipsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Internship Opportunities
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Paid <span className="text-orange-500">Internship Programs</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Gain practical experience with paid internships in manufacturing
            and industrial companies. Exclusive access for our students.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {internships.map((intern, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-32 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${intern.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 right-3 bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
                  {intern.type}
                </span>
              </div>
              <div className="p-4">
                <p className="text-blue-600 font-medium text-sm">{intern.company}</p>
                <h4 className="font-semibold text-gray-900 mt-1 line-clamp-1">
                  {intern.title}
                </h4>
                <div className="mt-3 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{intern.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{intern.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5" />
                    <span className="text-green-600 font-medium">{intern.stipend}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/internships">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8"
            >
              View All Internships
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
