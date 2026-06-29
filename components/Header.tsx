"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const courses = [
  { name: "Electrical Engineering (EEE)", href: "/courses#electrical-engineering" },
  { name: "Electronics Engineering (ECE)", href: "/courses#electronics-engineering" },
  { name: "Electrician Training", href: "/courses#electrician" },
  { name: "ITI Electrician & Wireman (Specialized)", href: "/courses#iti-electrician-wireman" },
  { name: "ITI & Intermediate Students Electrical Training", href: "/courses#intermediate-electrical-training" },
  { name: "Electrical Technician (Advanced)", href: "/courses#electrical-technician" },
];

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    hasDropdown: true,
    dropdownItems: [
      { name: "About Academy", href: "/about" },
      { name: "Trainers", href: "/trainers" },
      { name: "Certifications", href: "/certifications" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  {
    name: "Courses",
    hasDropdown: true,
    dropdownItems: courses,
  },
  { name: "Internships", href: "/internships" },
  {
    name: "Placements",
    hasDropdown: true,
    dropdownItems: [
      { name: "Placement Portal", href: "/placements" },
      { name: "Success Stories", href: "/success-stories" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-sky-300 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@testacademy.com" className="flex items-center gap-2 hover:text-sky-300 transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@testacademy.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Visakhapatnam, Andhra Pradesh, India</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-sky-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">TA</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-blue-900">Test</span>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-500"> Academy</span>
              <p className="text-xs text-gray-500 font-medium tracking-wide">Building Careers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navigation.map((item) =>
              item.hasDropdown && item.dropdownItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 px-2.5 xl:px-3 py-2 text-gray-700 hover:text-blue-600 font-semibold text-sm xl:text-base transition-colors focus:outline-none">
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5 opacity-80" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    {item.dropdownItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link href={subItem.href} className="cursor-pointer font-medium text-sm">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href || "#"}
                  className="px-2.5 xl:px-3 py-2 text-gray-700 hover:text-blue-600 font-semibold text-sm xl:text-base transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link href="/apply">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all px-4 xl:px-5">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact?demo=true">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-sm px-4 xl:px-5">
                Book Free Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-1">
                  {item.hasDropdown ? (
                    <div className="px-4 py-2 font-bold text-blue-900 border-b border-gray-100 text-sm uppercase tracking-wider">
                      {item.name}
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="pl-4 space-y-1 bg-slate-50/50 py-1.5 rounded-lg">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Link href="/apply" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-lg shadow">
                    Apply Now
                  </Button>
                </Link>
                <Link href="/contact?demo=true" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-5 rounded-lg">
                    Book Free Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
