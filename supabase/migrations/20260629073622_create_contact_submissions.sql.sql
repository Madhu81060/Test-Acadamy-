-- Create contact submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    subject TEXT,
    course TEXT,
    message TEXT,
    demo_date DATE,
    is_demo BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for contact_submissions
CREATE POLICY "Allow insert for all users" ON public.contact_submissions
FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Create applications table
CREATE TABLE IF NOT EXISTS public.applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    dob DATE,
    gender TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    pincode TEXT,
    highest_qualification TEXT,
    college_name TEXT,
    passing_year TEXT,
    percentage TEXT,
    has_experience BOOLEAN DEFAULT false,
    experience_years TEXT,
    current_company TEXT,
    course TEXT NOT NULL,
    batch TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Create policies for applications
CREATE POLICY "Allow insert for all users" ON public.applications
FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_applications_email ON public.applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_status ON public.applications(status);