
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        {/* Basic SEO - Enhanced for homepage */}
        <title>GoalCraft – Boost Your Restaurant on Swiggy & Zomato | Restaurant Growth Consultancy</title>
        <meta name="description" content="GoalCraft helps restaurants expand on Swiggy & Zomato—from menu redesign to business growth strategies, boosting brand visibility and sales. Trusted by 250+ restaurants." />
        <meta name="keywords" content="GoalCraft, Swiggy menu optimization, Zomato business growth, restaurant expansion India, Swiggy combo packs optimization, Zomato logo redesign, menu optimization for Swiggy restaurants, Zomato combo pack strategy consultancy, restaurant expansion services on Swiggy Zomato India, menu redesign Swiggy growth, logo redesign restaurants food delivery platforms" />
        <link rel="canonical" href="https://goalcraftconsultancy.netlify.app" />
        
        {/* Technical SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GoalCraft – Boost Your Restaurant on Swiggy & Zomato" />
        <meta property="og:description" content="Comprehensive restaurant services—from menu and logo redesign to combo strategy—for better sales and online presence." />
        <meta property="og:url" content="https://goalcraftconsultancy.netlify.app" />
        <meta property="og:image" content="https://goalcraftconsultancy.netlify.app/assets/og-image.jpg" />
        <meta property="og:site_name" content="GoalCraft Consultancy" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GoalCraft – Restaurant Optimization for Swiggy & Zomato" />
        <meta name="twitter:description" content="Transform your Swiggy & Zomato presence with menu, branding, and growth optimization—GoalCraft does it all." />
        <meta name="twitter:image" content="https://goalcraftconsultancy.netlify.app/assets/twitter-image.jpg" />
        <meta name="twitter:site" content="@goalcraft_consultants" />
      </Helmet>
      
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
