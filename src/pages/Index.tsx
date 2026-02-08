import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TreatmentsSection from '@/components/TreatmentsSection';
import AboutSection from '@/components/AboutSection';
import ApneaSection from '@/components/ApneaSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <TreatmentsSection />
        <AboutSection />
        <ApneaSection />
        <TestimonialsSection />
        <CTASection />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
