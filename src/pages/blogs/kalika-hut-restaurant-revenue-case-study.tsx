import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KalikaHutRestaurantRevenueCaseStudy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        {/* Basic SEO */}
        <title>Kalika Hut Restaurant Revenue Case Study | GoalCraft Success Story</title>
        <meta name="description" content="Discover how Kalika Hut restaurant increased their revenue by 150% with GoalCraft's strategic consulting. Real case study with proven results." />
        <meta name="keywords" content="Kalika Hut case study, restaurant revenue growth, GoalCraft success story, restaurant consulting results, food business growth" />
        <link rel="canonical" href="https://goalcraftconsultancy.netlify.app/blogs/kalika-hut-restaurant-revenue-case-study" />
        
        {/* Technical SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Kalika Hut Restaurant Revenue Case Study | GoalCraft Success Story" />
        <meta property="og:description" content="Discover how Kalika Hut restaurant increased their revenue by 150% with GoalCraft's strategic consulting." />
        <meta property="og:url" content="https://goalcraftconsultancy.netlify.app/blogs/kalika-hut-restaurant-revenue-case-study" />
        <meta property="og:image" content="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta property="og:site_name" content="GoalCraft Consultancy" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kalika Hut Restaurant Revenue Case Study | GoalCraft Success Story" />
        <meta name="twitter:description" content="Discover how Kalika Hut restaurant increased their revenue by 150% with GoalCraft's strategic consulting." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta name="twitter:site" content="@goalcraft_consultants" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Kalika Hut Restaurant Revenue Case Study",
            "description": "Discover how Kalika Hut restaurant increased their revenue by 150% with GoalCraft's strategic consulting. Real case study with proven results.",
            "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
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
            "datePublished": "2024-01-10T00:00:00Z",
            "dateModified": "2024-01-10T00:00:00Z",
            "url": "https://goalcraftconsultancy.netlify.app/blogs/kalika-hut-restaurant-revenue-case-study"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Kalika Hut restaurant success story and revenue growth case study"
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
                Case Study
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Kalika Hut Restaurant Revenue Case Study
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <span>By GoalCraft Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span>January 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span>6 min read</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary">
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Kalika Hut, a traditional Indian restaurant, approached GoalCraft with declining sales 
              and poor online visibility. Within 6 months of implementing our strategic recommendations, 
              they achieved a remarkable 150% increase in revenue and became one of the top-rated 
              restaurants in their area.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              The Challenge
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Kalika Hut was struggling with low order volumes on Swiggy and Zomato, poor customer 
              reviews, and inconsistent food quality. Their monthly revenue had dropped by 40% over 
              the previous year, and they were considering closing the business.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Our Strategic Approach
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              We implemented a comprehensive transformation strategy focusing on menu optimization, 
              operational efficiency, and digital marketing. Our team worked closely with the 
              restaurant owners to rebuild their brand from the ground up.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Results Achieved
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              The transformation was remarkable. Kalika Hut not only recovered but thrived, 
              becoming a success story that demonstrates the power of strategic restaurant consulting.
            </p>

          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Restaurant Like Kalika Hut?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert consultation and proven strategies to boost your restaurant's revenue and online presence.
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

export default KalikaHutRestaurantRevenueCaseStudy;