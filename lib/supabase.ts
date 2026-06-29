import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  course?: string;
  message?: string;
  demo_date?: string;
  is_demo: boolean;
  created_at: string;
};

export type Application = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  dob?: string;
  gender?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  highest_qualification?: string;
  college_name?: string;
  passing_year?: string;
  percentage?: string;
  has_experience?: boolean;
  experience_years?: string;
  current_company?: string;
  course: string;
  batch: string;
  status: string;
  created_at: string;
};
