import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DigitalMarketingStrategiesRestaurants = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        {/* Basic SEO */}
        <title>Digital Marketing Strategies That Drive Restaurant Growth | GoalCraft Guide</title>
        <meta name="description" content="Discover powerful digital marketing strategies to grow your restaurant business. Expert tips on social media, online advertising, and customer engagement." />
        <meta name="keywords" content="restaurant digital marketing, social media marketing, restaurant advertising, online marketing, customer engagement, restaurant branding, digital strategy" />
        <link rel="canonical" href="https://goalcraftconsultancy.netlify.app/blogs/digital-marketing-strategies-restaurants" />
        
        {/* Technical SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Digital Marketing Strategies That Drive Restaurant Growth" />
        <meta property="og:description" content="Discover powerful digital marketing strategies to grow your restaurant business." />
        <meta property="og:url" content="https://goalcraftconsultancy.netlify.app/blogs/digital-marketing-strategies-restaurants" />
        <meta property="og:image" content="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta property="og:site_name" content="GoalCraft Consultancy" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Strategies That Drive Restaurant Growth" />
        <meta name="twitter:description" content="Discover powerful digital marketing strategies to grow your restaurant business." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta name="twitter:site" content="@goalcraft_consultants" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Digital Marketing Strategies That Drive Restaurant Growth",
            "description": "Discover powerful digital marketing strategies to grow your restaurant business. Expert tips on social media, online advertising, and customer engagement.",
            "image": "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
            "author": {
              "@type": "Person",
              "name": "GoalCraft Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GoalCraft Consultancy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://goalcraftconsultancy.netlify.app/src/assets/logo.png"
              }
            },
            "datePublished": "2024-01-30T00:00:00Z",
            "dateModified": "2024-01-30T00:00:00Z",
            "url": "https://goalcraftconsultancy.netlify.app/blogs/digital-marketing-strategies-restaurants"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Digital marketing strategies for restaurant growth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Back Button */}
          <div className="absolute top-6 left-6">
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="bg-white/90 hover:bg-white text-black border-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Digital Marketing
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Digital Marketing Strategies That Drive Restaurant Growth
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <span>By GoalCraft Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span>January 30, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span>6 min read</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary">
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In today's digital-first world, restaurants need more than great food to succeed. 
              Effective digital marketing strategies can transform your restaurant from a local 
              hidden gem into a thriving business with loyal customers and consistent growth.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Social Media Marketing That Works
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Social media platforms are your restaurant's window to the world. Create engaging 
              content that showcases your food, atmosphere, and brand personality. Focus on 
              visual storytelling through high-quality photos and behind-the-scenes content.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Building Your Online Presence
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Establish a strong digital foundation with a professional website, active social 
              media profiles, and consistent branding across all platforms. Your online presence 
              should reflect your restaurant's unique identity and value proposition.
            </p>

          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Amplify Your Restaurant's Digital Presence?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert digital marketing strategies tailored to your restaurant's unique needs and goals.
            </p>
            <Button
              onClick={() => {
                const footer = document.querySelector('footer');
                footer?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/80"
            >
              Get Started Today
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalMarketingStrategiesRestaurants;