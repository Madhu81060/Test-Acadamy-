import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Briefcase, TrendingUp } from "lucide-react";

const sectors = [
  "Manufacturing", "Industrial", "Electrical",
  "Electronics", "Construction", "Automation",
  "Maintenance", "Service Centers",
];

const placementStats = [
  { value: "98%", label: "Placement Rate", icon: Trophy },
  { value: "18K", label: "Avg Salary", icon: TrendingUp },
  { value: "22K", label: "Highest Salary", icon: Briefcase },
  { value: "500+", label: "Students Placed", icon: Users },
];

export default function PlacementPartners() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Placement Record
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-orange-500">Placement Sectors</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We help ITI and Diploma students find jobs in manufacturing and
            industrial sectors across India.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-blue-600 rounded-xl p-6 text-center text-white"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-blue-100 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Sectors */}
        <div className="mb-12">
          <h3 className="text-center text-gray-500 font-medium mb-8">
            Students placed across multiple industries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-20 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <span className="text-lg font-bold text-gray-500 hover:text-blue-600 transition-colors">
                  {sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Want to see where our students are working?
          </p>
          <Link href="/placements" className="block w-full sm:inline-block sm:w-auto">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8">
              View Placement Records
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
