import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MenuEngineeringRestaurantProfits = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        {/* Basic SEO */}
        <title>Menu Engineering: The Science of Maximizing Restaurant Profits | GoalCraft Guide</title>
        <meta name="description" content="Learn the proven science of menu engineering to maximize restaurant profits. Expert strategies for menu design, pricing psychology, and profit optimization." />
        <meta name="keywords" content="menu engineering, restaurant profits, menu design, pricing strategy, food cost optimization, restaurant profitability, menu psychology, profit margins" />
        <link rel="canonical" href="https://goalcraftconsultancy.netlify.app/blogs/menu-engineering-restaurant-profits" />
        
        {/* Technical SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Menu Engineering: The Science of Maximizing Restaurant Profits" />
        <meta property="og:description" content="Learn the proven science of menu engineering to maximize restaurant profits. Expert strategies for menu design and pricing psychology." />
        <meta property="og:url" content="https://goalcraftconsultancy.netlify.app/blogs/menu-engineering-restaurant-profits" />
        <meta property="og:image" content="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta property="og:site_name" content="GoalCraft Consultancy" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="GoalCraft Team" />
        <meta property="article:published_time" content="2024-01-20T00:00:00Z" />
        <meta property="article:section" content="Restaurant Management" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Menu Engineering: The Science of Maximizing Restaurant Profits" />
        <meta name="twitter:description" content="Learn the proven science of menu engineering to maximize restaurant profits." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta name="twitter:site" content="@goalcraft_consultants" />
        <meta name="twitter:creator" content="@goalcraft_consultants" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Menu Engineering: The Science of Maximizing Restaurant Profits",
            "description": "Learn the proven science of menu engineering to maximize restaurant profits. Expert strategies for menu design, pricing psychology, and profit optimization.",
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
            "datePublished": "2024-01-20T00:00:00Z",
            "dateModified": "2024-01-20T00:00:00Z",
            "url": "https://goalcraftconsultancy.netlify.app/blogs/menu-engineering-restaurant-profits",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://goalcraftconsultancy.netlify.app/blogs/menu-engineering-restaurant-profits"
            },
            "articleSection": "Restaurant Management",
            "keywords": "menu engineering, restaurant profits, menu design, pricing strategy"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Menu engineering and restaurant profit optimization strategies"
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
                Restaurant Management
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Menu Engineering: The Science of Maximizing Restaurant Profits
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <span>By GoalCraft Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span>January 20, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span>10 min read</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary">
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Menu engineering is the strategic practice of designing and organizing your menu to maximize profitability 
              while enhancing customer satisfaction. It combines psychology, data analysis, and design principles to 
              guide customers toward high-margin items and increase average order value.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Understanding the Menu Engineering Matrix
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Every menu item falls into one of four categories based on profitability and popularity:
            </p>

            <ul className="mb-6 pl-6">
              <li className="mb-2 text-muted-foreground"><strong>Stars:</strong> High profit, high popularity - promote these heavily</li>
              <li className="mb-2 text-muted-foreground"><strong>Plowhorses:</strong> Low profit, high popularity - reduce costs or increase prices</li>
              <li className="mb-2 text-muted-foreground"><strong>Puzzles:</strong> High profit, low popularity - reposition or improve</li>
              <li className="mb-2 text-muted-foreground"><strong>Dogs:</strong> Low profit, low popularity - consider removing</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              The Psychology of Menu Design
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Customer eye movement follows predictable patterns. The "golden triangle" - top right, top left, 
              and center - receives the most attention. Place your most profitable items in these prime locations 
              to maximize their visibility and selection rate.
            </p>

            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Strategic menu layout design for maximum profitability"
              className="w-full rounded-lg my-6"
            />

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Pricing Psychology Techniques
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Strategic pricing goes beyond simple cost-plus calculations. Use these psychological principles:
            </p>

            <ul className="mb-6 pl-6">
              <li className="mb-2 text-muted-foreground">Remove currency symbols to reduce "payment pain"</li>
              <li className="mb-2 text-muted-foreground">Use charm pricing (₹199 vs ₹200) for value items</li>
              <li className="mb-2 text-muted-foreground">Implement price anchoring with premium options</li>
              <li className="mb-2 text-muted-foreground">Create decoy items to make target items appear more attractive</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
              "Restaurants that implement proper menu engineering see an average 15-20% increase in profit margins 
              without raising overall prices."
              <cite className="block mt-2 text-sm font-medium text-foreground not-italic">
                - Restaurant Industry Research
              </cite>
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Data-Driven Menu Optimization
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Successful menu engineering requires continuous analysis of sales data, food costs, and customer feedback. 
              Track item performance monthly and adjust positioning, pricing, or descriptions based on results.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Implementation Strategy
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Start by analyzing your current menu performance, then gradually implement changes. Test new layouts, 
              monitor results, and refine your approach based on customer response and sales data.
            </p>

          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Engineer Your Menu for Maximum Profits?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert menu engineering consultation and transform your restaurant's profitability with data-driven strategies.
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

export default MenuEngineeringRestaurantProfits;