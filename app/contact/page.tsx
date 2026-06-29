"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/api";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  CalendarDays,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    subValue: "+91 22 4567 8900",
    action: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@testacademy.com",
    subValue: "admissions@testacademy.com",
    action: "mailto:info@testacademy.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123, Skills Park, Dwaraka Nagar",
    subValue: "Visakhapatnam, Andhra Pradesh 530016",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM",
    subValue: "Sunday: 10:00 AM - 2:00 PM",
  },
];

const faqs = [
  {
    question: "What are the eligibility criteria for courses?",
    answer: "For EEE and ECE courses, you need ITI or Diploma in Electrical/Electronics Engineering. Electrician Training is open for 10th/12th pass students. Electrical Technician (Advanced) requires ITI Electrician qualification or prior experience.",
  },
  {
    question: "Do you offer free demo classes?",
    answer: "Yes! We offer 2 days of free demo classes for all our courses. This helps you experience our teaching methodology before enrolling. You can book a free demo through our website or by calling our admissions team.",
  },
  {
    question: "What is the placement assistance provided?",
    answer: "We provide 100% placement assistance including resume building, mock interviews, aptitude training, and direct campus placement drives with 50+ partner companies. Our placement rate is 98%.",
  },
  {
    question: "Are the courses available online?",
    answer: "We offer both offline and hybrid learning options. Some modules can be attended online, but practical training requires campus attendance. Contact us to know more about flexible learning options.",
  },
  {
    question: "What payment options are available?",
    answer: "We offer flexible payment options including EMI facilities. You can pay in installments. We also offer scholarships for meritorious students from economically weaker sections.",
  },
  {
    question: "How do I apply for internships?",
    answer: "Enrolled students get automatic access to our internship portal. After completing 50% of your course, you can apply for paid internships with our partner companies.",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDemo, setIsDemo] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    course: "",
    message: "",
    demoDate: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsDemo(params.get("demo") === "true");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        course: formData.course,
        message: formData.message,
        demoDate: formData.demoDate || undefined,
        isDemo: isDemo,
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        course: "",
        message: "",
        demoDate: "",
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
              Have questions? We&apos;re here to help. Reach out to us and
              we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    {info.action ? (
                      <a href={info.action} className="text-blue-600 text-sm hover:underline">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm">{info.value}</p>
                    )}
                    <p className="text-gray-500 text-xs">{info.subValue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {isDemo ? "Book Your Free Demo" : "Send Us a Message"}
                </h2>
                <p className="text-gray-600 mb-6">
                  {isDemo
                    ? "Fill in the form below and we'll schedule your free demo class."
                    : "Fill in the form below and we'll get back to you soon."}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Interested Course</Label>
                    <select
                      id="course"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900"
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                    >
                      <option value="">Select a course</option>
                      <option value="electrical-engineering">Electrical Engineering (EEE)</option>
                      <option value="electronics-engineering">Electronics Engineering (ECE)</option>
                      <option value="electrician">Electrician Training</option>
                      <option value="electrical-technician">Electrical Technician (Advanced)</option>
                    </select>
                  </div>

                  {isDemo && (
                    <div className="space-y-2">
                      <Label htmlFor="demoDate">Preferred Demo Date</Label>
                      <Input
                        id="demoDate"
                        type="date"
                        value={formData.demoDate}
                        onChange={(e) =>
                          setFormData({ ...formData, demoDate: e.target.value })
                        }
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="message">{isDemo ? "Any Questions?" : "Message *"} </Label>
                    <Textarea
                      id="message"
                      placeholder={isDemo ? "Any specific questions about the course..." : "Your message..."}
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required={!isDemo}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        {isDemo ? "Book Free Demo" : "Send Message"}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Map & Quick Contact */}
              <div className="space-y-6">
                {/* Map placeholder */}
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Map: Dwaraka Nagar, Visakhapatnam</p>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Phone className="h-6 w-6" />
                      <div>
                        <p className="font-medium">Call Us Now</p>
                        <p className="text-blue-100 text-sm">+91 98765 43210</p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/919876543210"
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <MessageCircle className="h-6 w-6" />
                      <div>
                        <p className="font-medium">WhatsApp Chat</p>
                        <p className="text-blue-100 text-sm">Quick response guaranteed</p>
                      </div>
                    </a>
                    <a
                      href="mailto:info@testacademy.com"
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Mail className="h-6 w-6" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-blue-100 text-sm">info@testacademy.com</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Schedule Visit */}
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CalendarDays className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Schedule Campus Visit
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Visit our campus for a tour and meet our counselors
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                      >
                        Schedule Visit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Frequently Asked <span className="text-orange-500">Questions</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-gray-50 px-6 rounded-lg border-0"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="text-left font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
