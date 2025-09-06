import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RestaurantCostManagementGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        {/* Basic SEO */}
        <title>Complete Restaurant Cost Management Guide | Reduce Expenses & Increase Profits</title>
        <meta name="description" content="Master restaurant cost management with proven strategies to reduce expenses and increase profitability. Expert guide on food costs, labor, and operational efficiency." />
        <meta name="keywords" content="restaurant cost management, food cost control, labor cost optimization, restaurant profitability, expense reduction, operational efficiency, restaurant finances" />
        <link rel="canonical" href="https://goalcraftconsultancy.netlify.app/blogs/restaurant-cost-management-guide" />
        
        {/* Technical SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Complete Restaurant Cost Management Guide" />
        <meta property="og:description" content="Master restaurant cost management with proven strategies to reduce expenses and increase profitability." />
        <meta property="og:url" content="https://goalcraftconsultancy.netlify.app/blogs/restaurant-cost-management-guide" />
        <meta property="og:image" content="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta property="og:site_name" content="GoalCraft Consultancy" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete Restaurant Cost Management Guide" />
        <meta name="twitter:description" content="Master restaurant cost management with proven strategies to reduce expenses and increase profitability." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta name="twitter:site" content="@goalcraft_consultants" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Complete Restaurant Cost Management Guide",
            "description": "Master restaurant cost management with proven strategies to reduce expenses and increase profitability. Expert guide on food costs, labor, and operational efficiency.",
            "image": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
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
            "datePublished": "2024-02-05T00:00:00Z",
            "dateModified": "2024-02-05T00:00:00Z",
            "url": "https://goalcraftconsultancy.netlify.app/blogs/restaurant-cost-management-guide"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Restaurant cost management and financial planning"
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
                Cost Management
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Complete Restaurant Cost Management Guide
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <span>By GoalCraft Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span>February 5, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span>9 min read</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary">
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Effective cost management is the backbone of restaurant profitability. With razor-thin 
              margins in the food service industry, controlling expenses while maintaining quality 
              is crucial for long-term success.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Understanding Your Cost Structure
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Restaurant costs typically fall into three main categories: food costs (28-35%), 
              labor costs (25-35%), and overhead expenses (15-25%). Understanding these ratios 
              helps identify areas for optimization and improvement.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Food Cost Control Strategies
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Implement portion control, reduce waste through proper inventory management, 
              negotiate better supplier terms, and regularly review menu pricing to maintain 
              healthy food cost percentages.
            </p>

          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Help Optimizing Your Restaurant Costs?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert cost management strategies and financial planning guidance tailored to your restaurant.
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

export default RestaurantCostManagementGuide;