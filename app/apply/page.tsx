"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitApplication } from "@/lib/api";
import { CheckCircle2, User, GraduationCap, Briefcase, Phone } from "lucide-react";

const courses = [
  { id: "electrical-engineering", name: "Electrical Engineering (EEE)", fee: "Rs. 35,000", duration: "6 Months", eligibility: "ITI/Diploma" },
  { id: "electronics-engineering", name: "Electronics Engineering (ECE)", fee: "Rs. 38,000", duration: "6 Months", eligibility: "ITI/Diploma" },
  { id: "electrician", name: "Electrician Training", fee: "Rs. 18,000", duration: "3 Months", eligibility: "10th/12th Pass" },
  { id: "electrical-technician", name: "Electrical Technician (Advanced)", fee: "Rs. 25,000", duration: "4 Months", eligibility: "ITI Electrician" },
];

const batches = [
  { id: "weekday-morning", name: "Weekday Morning (9 AM - 12 PM)" },
  { id: "weekday-evening", name: "Weekday Evening (6 PM - 9 PM)" },
  { id: "weekend", name: "Weekend (Saturday & Sunday)" },
];

export default function ApplyPage() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    // Educational Details
    highestQualification: "",
    collegeName: "",
    passingYear: "",
    percentage: "",
    // Course Selection
    course: "",
    batch: "",
    // Experience
    hasExperience: "",
    experienceYears: "",
    currentCompany: "",
    // Declaration
    agreeTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitApplication({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        dob: formData.dob || undefined,
        gender: formData.gender || undefined,
        address: formData.address || undefined,
        city: formData.city || undefined,
        state: formData.state || undefined,
        pincode: formData.pincode || undefined,
        highestQualification: formData.highestQualification || undefined,
        collegeName: formData.collegeName || undefined,
        passingYear: formData.passingYear || undefined,
        percentage: formData.percentage || undefined,
        hasExperience: formData.hasExperience === "yes",
        experienceYears: formData.experienceYears || undefined,
        currentCompany: formData.currentCompany || undefined,
        course: formData.course,
        batch: formData.batch,
      });

      toast({
        title: "Application Submitted Successfully!",
        description: "We'll contact you within 24-48 hours.",
      });

      setStep(4);
    } catch {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Apply Now</h1>
            <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
              Take the first step towards your dream career. Fill out the application
              form and our team will get in touch.
            </p>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      s < step
                        ? "bg-green-500 text-white"
                        : s === step
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {s < step ? <CheckCircle2 className="h-5 w-5" /> : s}
                  </div>
                  <div className="ml-2 hidden sm:block">
                    <p className={`text-sm font-medium ${s <= step ? "text-gray-900" : "text-gray-500"}`}>
                      {s === 1 ? "Personal" : s === 2 ? "Education" : s === 3 ? "Course" : "Complete"}
                    </p>
                  </div>
                  {s < 4 && (
                    <div
                      className={`w-12 sm:w-24 h-1 mx-2 ${
                        s < step ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4">
            {step < 4 ? (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Step 1: Personal Details */}
                {step === 1 && (
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">Personal Details</h2>
                        <p className="text-gray-500 text-sm">Fill in your basic information</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          required
                        />
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
                        <Label htmlFor="phone">Phone Number *</Label>
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
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={formData.dob}
                          onChange={(e) =>
                            setFormData({ ...formData, dob: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Gender *</Label>
                        <RadioGroup
                          value={formData.gender}
                          onValueChange={(value) =>
                            setFormData({ ...formData, gender: value })
                          }
                          className="flex gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male">Male</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female">Female</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          placeholder="Full address"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="Visakhapatnam"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          placeholder="Andhra Pradesh"
                          value={formData.state}
                          onChange={(e) =>
                            setFormData({ ...formData, state: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input
                          id="pincode"
                          placeholder="400001"
                          value={formData.pincode}
                          onChange={(e) =>
                            setFormData({ ...formData, pincode: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Educational Details */}
                {step === 2 && (
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">Educational Details</h2>
                        <p className="text-gray-500 text-sm">Your academic background</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Highest Qualification *</Label>
                        <Select
                          value={formData.highestQualification}
                          onValueChange={(value) =>
                            setFormData({ ...formData, highestQualification: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select qualification" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="bachelor">Bachelor&apos;s Degree</SelectItem>
                            <SelectItem value="master">Master&apos;s Degree</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="collegeName">College/University Name *</Label>
                        <Input
                          id="collegeName"
                          placeholder="Andhra University / Local ITI"
                          value={formData.collegeName}
                          onChange={(e) =>
                            setFormData({ ...formData, collegeName: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="passingYear">Passing Year *</Label>
                        <Select
                          value={formData.passingYear}
                          onValueChange={(value) =>
                            setFormData({ ...formData, passingYear: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => (
                              <SelectItem key={i} value={`${2024 - i}`}>
                                {2024 - i}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="percentage">Percentage/CGPA *</Label>
                        <Input
                          id="percentage"
                          placeholder="75% or 8.5 CGPA"
                          value={formData.percentage}
                          onChange={(e) =>
                            setFormData({ ...formData, percentage: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Experience Section */}
                    <div className="mt-8 pt-8 border-t">
                      <h3 className="font-semibold text-gray-900 mb-4">Work Experience (Optional)</h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label>Do you have work experience?</Label>
                          <RadioGroup
                            value={formData.hasExperience}
                            onValueChange={(value) =>
                              setFormData({ ...formData, hasExperience: value })
                            }
                            className="flex gap-6"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="exp-yes" />
                              <Label htmlFor="exp-yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="exp-no" />
                              <Label htmlFor="exp-no">No</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        {formData.hasExperience === "yes" && (
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="experienceYears">Years of Experience</Label>
                              <Input
                                id="experienceYears"
                                placeholder="2 years"
                                value={formData.experienceYears}
                                onChange={(e) =>
                                  setFormData({ ...formData, experienceYears: e.target.value })
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="currentCompany">Current/Last Company</Label>
                              <Input
                                id="currentCompany"
                                placeholder="Company name"
                                value={formData.currentCompany}
                                onChange={(e) =>
                                  setFormData({ ...formData, currentCompany: e.target.value })
                                }
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Course Selection */}
                {step === 3 && (
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">Course Selection</h2>
                        <p className="text-gray-500 text-sm">Choose your course and batch</p>
                      </div>
                    </div>

                    {/* Course Selection */}
                    <div className="space-y-4 mb-8">
                      <Label>Select Course *</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {courses.map((course) => (
                          <div
                            key={course.id}
                            className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                              formData.course === course.id
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300"
                            }`}
                            onClick={() =>
                              setFormData({ ...formData, course: course.id })
                            }
                          >
                            <h4 className="font-semibold text-gray-900">{course.name}</h4>
                            <div className="flex gap-4 mt-2 text-sm text-gray-600">
                              <span>{course.duration}</span>
                              <span>|</span>
                              <span className="text-green-600 font-medium">{course.fee}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Batch Selection */}
                    <div className="space-y-4 mb-8">
                      <Label>Preferred Batch *</Label>
                      <RadioGroup
                        value={formData.batch}
                        onValueChange={(value) =>
                          setFormData({ ...formData, batch: value })
                        }
                        className="space-y-3"
                      >
                        {batches.map((batch) => (
                          <div
                            key={batch.id}
                            className={`flex items-center space-x-3 border-2 rounded-lg p-4 ${
                              formData.batch === batch.id
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200"
                            }`}
                          >
                            <RadioGroupItem value={batch.id} id={batch.id} />
                            <Label htmlFor={batch.id} className="cursor-pointer">
                              {batch.name}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={formData.agreeTerms}
                        onChange={(e) =>
                          setFormData({ ...formData, agreeTerms: e.target.checked })
                        }
                        className="mt-1"
                      />
                      <Label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the terms and conditions and understand that the
                        information provided will be used for admission purposes.
                      </Label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="px-8 py-6 bg-gray-50 border-t flex justify-between">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className="ml-auto bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : step === 3
                      ? "Submit Application"
                      : "Continue"}
                  </Button>
                </div>
              </form>
            ) : (
              /* Success Message */
              <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Application Submitted Successfully!
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Thank you for your interest in Test Academy. Our admissions team
                  will contact you within 24-48 hours to discuss the next steps.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">What&apos;s Next?</h3>
                  <div className="space-y-3 text-left">
                    {[
                      "Our team will review your application",
                      "You'll receive a call for a brief discussion",
                      "Free demo class scheduling",
                      "Document verification",
                      "Fee payment and enrollment",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                    <Phone className="h-5 w-5" />
                    Call Us Now
                  </a>
                  <a
                    href="/courses"
                    className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium"
                  >
                    Explore Courses
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
