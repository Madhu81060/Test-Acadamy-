import { supabase } from './supabase';

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
  const { error } = await supabase.from('contact_submissions').insert({
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    course: data.course,
    message: data.message,
    demo_date: data.demoDate || null,
    is_demo: data.isDemo || false,
  });

  if (error) throw error;
  return { success: true };
}

export async function submitApplication(data: ApplicationFormData) {
  const { error } = await supabase.from('applications').insert({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone,
    dob: data.dob || null,
    gender: data.gender || null,
    address: data.address || null,
    city: data.city || null,
    state: data.state || null,
    pincode: data.pincode || null,
    highest_qualification: data.highestQualification || null,
    college_name: data.collegeName || null,
    passing_year: data.passingYear || null,
    percentage: data.percentage || null,
    has_experience: data.hasExperience || false,
    experience_years: data.experienceYears || null,
    current_company: data.currentCompany || null,
    course: data.course,
    batch: data.batch,
  });

  if (error) throw error;
  return { success: true };
}
