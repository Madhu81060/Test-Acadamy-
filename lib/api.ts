export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  course?: string;
  message?: string;
  demoDate?: string;
  isDemo?: boolean;
}

export interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob?: string;
  gender?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  highestQualification?: string;
  collegeName?: string;
  passingYear?: string;
  percentage?: string;
  hasExperience?: boolean;
  experienceYears?: string;
  currentCompany?: string;
  course: string;
  batch: string;
}

export async function submitContactForm(data: ContactFormData) {
  console.log("Mock Submit Contact Form:", data);
  
  try {
    if (typeof window !== "undefined") {
      const submissions = JSON.parse(localStorage.getItem("contact_submissions") || "[]");
      submissions.push({ ...data, created_at: new Date().toISOString() });
      localStorage.setItem("contact_submissions", JSON.stringify(submissions));
    }
  } catch (e) {
    console.error("Local storage not available", e);
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { success: true };
}

export async function submitApplication(data: ApplicationFormData) {
  console.log("Mock Submit Application:", data);

  try {
    if (typeof window !== "undefined") {
      const applications = JSON.parse(localStorage.getItem("applications") || "[]");
      applications.push({ ...data, created_at: new Date().toISOString() });
      localStorage.setItem("applications", JSON.stringify(applications));
    }
  } catch (e) {
    console.error("Local storage not available", e);
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { success: true };
}
