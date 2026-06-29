import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/shared/CTASection";
import { Star, Briefcase, MapPin, Quote } from "lucide-react";

const successStories = [
  {
    id: 1,
    name: "Rahul Kumar",
    role: "Electrical Technician",
    company: "Manufacturing Company",
    course: "Electrical Engineering (EEE)",
    year: "2022",
    salary: "Rs. 18,000/month",
    location: "Visakhapatnam",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    story: "I completed my ITI in Electrician but couldn't find good jobs. Test Academy's EEE course taught me industrial motor control, panel wiring, and safety standards. Within a month of completing the course, I got placed in a manufacturing company as an Electrical Technician. The practical training made all the difference.",
    highlights: ["ITI Graduate", "Placed in 30 days", "Industrial Training"],
  },
  {
    id: 2,
    name: "Priya Devi",
    role: "Electronics Technician",
    company: "Electronics Service Center",
    course: "Electronics Engineering (ECE)",
    year: "2023",
    salary: "Rs. 16,000/month",
    location: "Vijayawada",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    story: "After 12th standard, I was looking for a skill-based course. The ECE course at Test Academy was perfect. I learned PCB design, soldering, and troubleshooting. Now I work at an electronics service center and also earn extra income from home repairs.",
    highlights: ["Intermediate Graduate", "Self-employment skills", "PCB expertise"],
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Industrial Electrician",
    company: "Industrial Plant",
    course: "Electrician Training",
    year: "2023",
    salary: "Rs. 15,000/month",
    location: "Visakhapatnam",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    story: "I just had basic 10th pass qualification. The 3-month Electrician Training course changed my life. I learned house wiring, industrial basics, and safety protocols. Now I work as an industrial electrician and support my family with a good income.",
    highlights: ["10th Pass", "3 months training", "Job ready"],
  },
  {
    id: 4,
    name: "Sneha Kumari",
    role: "Control Panel Operator",
    company: "Automation Company",
    course: "Electrical Technician (Advanced)",
    year: "2022",
    salary: "Rs. 22,000/month",
    location: "Vizianagaram",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    story: "I was already working as an electrician but wanted to grow. The advanced course taught me PLC basics, control panels, and motor starters. I got promoted to Control Panel Operator with a 50% salary increase!",
    highlights: ["Career growth", "Promotion", "Advanced skills"],
  },
  {
    id: 5,
    name: "Vikram Yadav",
    role: "Maintenance Electrician",
    company: "Residential Complex",
    course: "Electrician Training",
    year: "2021",
    salary: "Rs. 14,000/month",
    location: "Visakhapatnam",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    story: "From a helper to a maintenance electrician - the journey has been amazing. The practical training on wiring, earthing, and safety made me confident. I now maintain electrical systems in a large residential society.",
    highlights: ["Helper to Electrician", "Society maintenance", "Confidence boost"],
  },
  {
    id: 6,
    name: "Meera Devi",
    role: "Self-employed Electrician",
    company: "Self-employed",
    course: "Electrician Training",
    year: "2020",
    salary: "Rs. 20,000+/month",
    location: "Kakinada",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    story: "After completing the electrician course, I started doing house wiring and repairs on my own. Now I have my own client base and earn more than many of my friends who did regular college. Thank you Test Academy!",
    highlights: ["Self-employed", "Regular clients", "Good income"],
  },
];

const videoTestimonials = [
  { id: 1, title: "Rahul's Journey", thumbnail: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 2, title: "Priya's Success", thumbnail: "https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 3, title: "Amit's Story", thumbnail: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Student Success
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">
              Stories That Inspire
            </h1>
            <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
              Real stories from ITI and Diploma students who transformed their
              careers with practical skills training. Your success story could be next!
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <p className="text-4xl font-bold text-blue-600">2000+</p>
                <p className="text-gray-600 text-sm mt-1">Students Trained</p>
              </div>
              <div className="p-4">
                <p className="text-4xl font-bold text-blue-600">98%</p>
                <p className="text-gray-600 text-sm mt-1">Placement Rate</p>
              </div>
              <div className="p-4">
                <p className="text-4xl font-bold text-blue-600">100+</p>
                <p className="text-gray-600 text-sm mt-1">Hiring Partners</p>
              </div>
              <div className="p-4">
                <p className="text-4xl font-bold text-blue-600">22K</p>
                <p className="text-gray-600 text-sm mt-1">Highest Salary</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Video <span className="text-orange-500">Testimonials</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {videoTestimonials.map((video) => (
                <div key={video.id} className="relative rounded-xl overflow-hidden group cursor-pointer">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-blue-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Detailed <span className="text-orange-500">Stories</span>
              </h2>
            </div>

            <div className="space-y-12">
              {successStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Left - Image and Info */}
                      <div className="flex-shrink-0">
                        <div
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-cover bg-center border-4 border-blue-100"
                          style={{ backgroundImage: `url(${story.image})` }}
                        />
                      </div>

                      {/* Right - Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                            <p className="text-blue-600">{story.role} at {story.company}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                {story.salary}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {story.location}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: story.rating }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 mb-4">
                          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                            {story.course}
                          </span>
                          {story.highlights.map((h, idx) => (
                            <span key={idx} className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
                              {h}
                            </span>
                          ))}
                        </div>

                        <Quote className="h-8 w-8 text-blue-200 mb-2" />
                        <p className="text-gray-600 leading-relaxed">{story.story}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Your Success Story Starts Here"
          subtitle="Join hundreds of ITI/Diploma students who built their careers at Test Academy"
          primaryCTA={{ text: "Start Your Journey", href: "/apply" }}
          secondaryCTA={{ text: "Book Free Demo", href: "/contact?demo=true" }}
        />
      </main>
      <Footer />
    </>
  );
}
