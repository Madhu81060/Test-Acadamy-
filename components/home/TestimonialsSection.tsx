"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Rahul Kumar",
    role: "Electrical Technician",
    company: "Manufacturing Company",
    course: "Electrical Engineering (EEE)",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "Test Academy transformed my career. The practical training on motors, panels, and wiring helped me land an industrial job. The trainers have real industry experience.",
  },
  {
    id: 2,
    name: "Priya Devi",
    role: "Electronics Technician",
    company: "Electronics Service Center",
    course: "Electronics Engineering (ECE)",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "After 12th, I wanted to learn a skill. The electronics course taught me PCB design and repair. Now I earn good income from my job and home repairs.",
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Industrial Electrician",
    company: "Industrial Plant",
    course: "Electrician Training",
    rating: 5,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "I was just 10th pass with no job prospects. The 3-month electrician course changed everything. Now I work in a factory and earn a good salary.",
  },
  {
    id: 4,
    name: "Sneha Kumari",
    role: "Control Panel Operator",
    company: "Automation Company",
    course: "Electrical Technician (Advanced)",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "The advanced course with PLC and control panel training helped me upgrade my career. Got a promotion with better pay within 6 months of completing the course.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            What Our <span className="text-orange-500">Students Say</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hear from ITI and Diploma students who transformed their careers with
            Test Academy&apos;s practical skills training.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      {/* Image and Info */}
                      <div className="flex flex-col items-center text-center md:text-left">
                        <Avatar className="w-24 h-24 border-4 border-blue-100">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-blue-600 text-white text-2xl">
                            {testimonial.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <h4 className="mt-4 font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        <p className="text-blue-600 font-medium text-sm">
                          {testimonial.company}
                        </p>
                        <div className="flex items-center gap-1 mt-2">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="mt-2 text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {testimonial.course}
                        </span>
                      </div>

                      {/* Quote */}
                      <div className="flex-1">
                        <Quote className="h-10 w-10 text-blue-200 mb-4" />
                        <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-8 bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
