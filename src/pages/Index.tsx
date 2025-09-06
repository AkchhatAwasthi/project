
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowWeWork from '@/components/HowWeWork';
import SEOBlocks from '@/components/SEOBlocks';
import VideoTestimonials from '@/components/VideoTestimonials';

import Footer from '@/components/Footer';
import PollPopup from '@/components/PollPopup';
import DashboardPreview from '@/components/DashboardPreview';
import MenuComparison from '@/components/MenuComparison';
import AboutSection from '@/components/AboutSection';
import AboutUs from '@/components/AboutUs';
import OurPartners from '@/components/OurPartners';
import Services from '@/components/Services';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <PollPopup />
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <Services />
        <HowWeWork />
        <DashboardPreview />
        <OurPartners />
        <MenuComparison />
        <AboutSection />
        <VideoTestimonials />
        <SEOBlocks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
