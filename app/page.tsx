import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CoursesPreview from "@/components/home/CoursesPreview";
import StatsSection from "@/components/home/StatsSection";
import IntermediateTraining from "@/components/home/IntermediateTraining";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InternshipsPreview from "@/components/home/InternshipsPreview";
import PlacementPartners from "@/components/home/PlacementPartners";
import CTASection from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <CoursesPreview />
        <IntermediateTraining />
        <WhyChooseUs />
        <InternshipsPreview />
        <TestimonialsSection />
        <PlacementPartners />
        <CTASection
          title="Ready to Start Your Career Journey?"
          subtitle="Join 5000+ successful professionals who started their career at Test Academy. Book your free demo class today!"
          primaryCTA={{ text: "Book Free Demo", href: "/contact?demo=true" }}
          secondaryCTA={{ text: "Apply Now", href: "/apply" }}
        />
      </main>
      <Footer />
    </>
  );
}
