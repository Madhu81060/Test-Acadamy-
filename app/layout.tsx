import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://testacademy.com'),
  title: 'Test Academy - Leading Training Institute | Industry-Focused Training & 100% Placement Assistance',
  description: 'Test Academy offers industry-focused training in Construction Engineering, IT, DevOps/Cloud, and Electrical Engineering. Get hands-on practical training, live projects, internships, and 100% placement assistance with government & industry recognized certificates.',
  keywords: 'Test Academy, Training Institute, Construction Engineering, IT Training, DevOps, Cloud Training, Electrical Engineering, Internships, Placement Assistance, Certification Courses, Industry Training',
  authors: [{ name: 'Test Academy' }],
  openGraph: {
    title: 'Test Academy - Leading Training Institute',
    description: 'Industry-focused training with 100% placement assistance. Free demo classes available!',
    type: 'website',
    locale: 'en_US',
    siteName: 'Test Academy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Academy - Leading Training Institute',
    description: 'Industry-focused training with 100% placement assistance. Free demo classes available!',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
