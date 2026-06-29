import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Courses", href: "/courses" },
  { name: "Internships", href: "/internships" },
  { name: "Placements", href: "/placements" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Gallery", href: "/gallery" },
];

const courses = [
  { name: "Electrical Engineering (EEE)", href: "/courses#electrical-engineering" },
  { name: "Electronics Engineering (ECE)", href: "/courses#electronics-engineering" },
  { name: "Electrician Training", href: "/courses#electrician" },
  { name: "Electrical Technician (Advanced)", href: "/courses#electrical-technician" },
];

const support = [
  { name: "Contact Us", href: "/contact" },
  { name: "Apply Now", href: "/apply" },
  { name: "Certifications", href: "/certifications" },
  { name: "FAQs", href: "/contact#faqs" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                <span className="text-blue-900 font-bold text-xl">TA</span>
              </div>
              <div>
                <span className="text-xl font-bold">Test</span>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-400"> Academy</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Leading training institute providing industry-focused training, internships,
              and 100% placement assistance. Building careers since 2014.
            </p>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-blue-200 hover:text-sky-300 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <a href="mailto:info@testacademy.com" className="flex items-center gap-3 text-blue-200 hover:text-sky-300 transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@testacademy.com</span>
              </a>
              <div className="flex items-start gap-3 text-blue-200">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  123, Skills Park, Dwaraka Nagar,<br />
                  Visakhapatnam, Andhra Pradesh 530016
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-orange-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    href={course.href}
                    className="text-blue-200 hover:text-orange-400 text-sm transition-colors"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-200 hover:text-orange-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              &copy; {new Date().getFullYear()} Test Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-blue-200 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-blue-200 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
