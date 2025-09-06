import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FoodDeliveryTrends2024 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        {/* Basic SEO */}
        <title>Food Delivery Trends 2024: What Restaurants Need to Know | GoalCraft Insights</title>
        <meta name="description" content="Stay ahead with the latest food delivery trends in 2024. Discover emerging technologies, consumer preferences, and strategies for restaurant success." />
        <meta name="keywords" content="food delivery trends 2024, restaurant technology, delivery innovation, consumer behavior, food tech, restaurant trends, delivery platforms" />
        <link rel="canonical" href="https://goalcraftconsultancy.netlify.app/blogs/food-delivery-trends-2024" />
        
        {/* Technical SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Food Delivery Trends 2024: What Restaurants Need to Know" />
        <meta property="og:description" content="Stay ahead with the latest food delivery trends in 2024. Discover emerging technologies and consumer preferences." />
        <meta property="og:url" content="https://goalcraftconsultancy.netlify.app/blogs/food-delivery-trends-2024" />
        <meta property="og:image" content="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta property="og:site_name" content="GoalCraft Consultancy" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Food Delivery Trends 2024: What Restaurants Need to Know" />
        <meta name="twitter:description" content="Stay ahead with the latest food delivery trends in 2024." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta name="twitter:site" content="@goalcraft_consultants" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Food Delivery Trends 2024: What Restaurants Need to Know",
            "description": "Stay ahead with the latest food delivery trends in 2024. Discover emerging technologies, consumer preferences, and strategies for restaurant success.",
            "image": "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
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
            "datePublished": "2024-02-10T00:00:00Z",
            "dateModified": "2024-02-10T00:00:00Z",
            "url": "https://goalcraftconsultancy.netlify.app/blogs/food-delivery-trends-2024"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Food delivery trends and technology innovations in 2024"
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
                Industry Trends
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Food Delivery Trends 2024: What Restaurants Need to Know
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <span>By GoalCraft Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span>February 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span>7 min read</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary">
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The food delivery landscape continues to evolve rapidly in 2024. From AI-powered 
              recommendations to sustainable packaging solutions, restaurants must stay informed 
              about emerging trends to remain competitive and meet changing consumer expectations.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Technology-Driven Innovations
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Artificial intelligence is revolutionizing menu recommendations, delivery route 
              optimization, and demand forecasting. Restaurants leveraging these technologies 
              are seeing improved efficiency and customer satisfaction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Sustainability Focus
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Consumers increasingly prioritize eco-friendly packaging and sustainable practices. 
              Restaurants adopting green initiatives are building stronger brand loyalty and 
              attracting environmentally conscious customers.
            </p>

          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Ahead of Food Delivery Trends
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert insights and strategies to adapt to the latest food delivery trends and technologies.
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

export default FoodDeliveryTrends2024;