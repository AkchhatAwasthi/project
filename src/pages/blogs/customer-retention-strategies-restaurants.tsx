import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomerRetentionStrategiesRestaurants = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        {/* Basic SEO */}
        <title>Customer Retention Strategies That Actually Work for Restaurants | GoalCraft</title>
        <meta name="description" content="Discover proven customer retention strategies that increase restaurant loyalty and lifetime value. Expert tips for building lasting customer relationships." />
        <meta name="keywords" content="customer retention, restaurant loyalty, customer lifetime value, repeat customers, restaurant marketing, customer experience, loyalty programs" />
        <link rel="canonical" href="https://goalcraftconsultancy.netlify.app/blogs/customer-retention-strategies-restaurants" />
        
        {/* Technical SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Customer Retention Strategies That Actually Work for Restaurants" />
        <meta property="og:description" content="Discover proven customer retention strategies that increase restaurant loyalty and lifetime value." />
        <meta property="og:url" content="https://goalcraftconsultancy.netlify.app/blogs/customer-retention-strategies-restaurants" />
        <meta property="og:image" content="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta property="og:site_name" content="GoalCraft Consultancy" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="GoalCraft Team" />
        <meta property="article:published_time" content="2024-01-25T00:00:00Z" />
        <meta property="article:section" content="Customer Experience" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Retention Strategies That Actually Work for Restaurants" />
        <meta name="twitter:description" content="Discover proven customer retention strategies that increase restaurant loyalty and lifetime value." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta name="twitter:site" content="@goalcraft_consultants" />
        <meta name="twitter:creator" content="@goalcraft_consultants" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Customer Retention Strategies That Actually Work for Restaurants",
            "description": "Discover proven customer retention strategies that increase restaurant loyalty and lifetime value. Expert tips for building lasting customer relationships.",
            "image": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
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
            "datePublished": "2024-01-25T00:00:00Z",
            "dateModified": "2024-01-25T00:00:00Z",
            "url": "https://goalcraftconsultancy.netlify.app/blogs/customer-retention-strategies-restaurants",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://goalcraftconsultancy.netlify.app/blogs/customer-retention-strategies-restaurants"
            },
            "articleSection": "Customer Experience",
            "keywords": "customer retention, restaurant loyalty, customer lifetime value, repeat customers"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Happy restaurant customers enjoying their dining experience"
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
                Customer Experience
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Customer Retention Strategies That Actually Work for Restaurants
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <span>By GoalCraft Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span>January 25, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span>7 min read</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary">
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Acquiring new customers costs 5-25 times more than retaining existing ones. For restaurants, 
              building customer loyalty isn't just about great food—it's about creating memorable experiences 
              that keep customers coming back. Here are proven strategies that actually work.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              The Power of Personalized Service
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Remember customer preferences, dietary restrictions, and special occasions. Train your staff 
              to recognize regular customers and their usual orders. This personal touch creates emotional 
              connections that transcend price competition.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Implement a Strategic Loyalty Program
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Design loyalty programs that provide real value. Instead of generic point systems, 
              create tiered rewards that make customers feel special:
            </p>

            <ul className="mb-6 pl-6">
              <li className="mb-2 text-muted-foreground">Birthday specials and anniversary rewards</li>
              <li className="mb-2 text-muted-foreground">Early access to new menu items</li>
              <li className="mb-2 text-muted-foreground">Exclusive events for VIP customers</li>
              <li className="mb-2 text-muted-foreground">Surprise and delight moments</li>
            </ul>

            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Restaurant staff providing excellent customer service"
              className="w-full rounded-lg my-6"
            />

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Master the Art of Follow-Up
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Proactive communication shows customers you care about their experience. Send personalized 
              thank-you messages, ask for feedback, and address concerns promptly. Use multiple channels 
              including SMS, email, and social media.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
              "Restaurants with strong customer retention strategies see 67% higher profits than those 
              focused solely on acquisition."
              <cite className="block mt-2 text-sm font-medium text-foreground not-italic">
                - Harvard Business Review
              </cite>
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Create Community and Belonging
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Transform your restaurant into a community hub. Host events, support local causes, 
              and create spaces where customers feel they belong. Social media groups and exclusive 
              communities can extend this feeling beyond your physical location.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Consistency is King
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Ensure consistent quality in food, service, and experience across all touchpoints. 
              Customers return when they know what to expect. Document processes, train staff regularly, 
              and maintain quality standards religiously.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Conclusion: Building Lasting Relationships
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Customer retention is about building relationships, not just serving food. Focus on 
              creating emotional connections, providing consistent value, and showing genuine care 
              for your customers' experience. The investment in retention pays dividends in long-term success.
            </p>

          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Build Customer Loyalty That Lasts?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert guidance on implementing customer retention strategies that increase loyalty and lifetime value.
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

export default CustomerRetentionStrategiesRestaurants;