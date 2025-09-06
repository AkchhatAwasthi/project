import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogTemplate = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        {/* Basic SEO - EDIT THESE FOR EACH BLOG */}
        <title>Your Blog Title Here | GoalCraft Consultancy</title>
        <meta name="description" content="Your custom meta description for this specific blog post. Keep it under 160 characters for best SEO results." />
        <meta name="keywords" content="keyword1, keyword2, keyword3, restaurant growth, Swiggy, Zomato" />
        <link rel="canonical" href="https://goalcraftconsultancy.netlify.app/blogs/your-blog-slug" />
        
        {/* Technical SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Your Blog Title Here | GoalCraft Consultancy" />
        <meta property="og:description" content="Your custom meta description for this specific blog post." />
        <meta property="og:url" content="https://goalcraftconsultancy.netlify.app/blogs/your-blog-slug" />
        <meta property="og:image" content="https://goalcraftconsultancy.netlify.app/images/your-blog-og-image.jpg" />
        <meta property="og:site_name" content="GoalCraft Consultancy" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Your Author Name" />
        <meta property="article:published_time" content="2024-01-15T00:00:00Z" />
        <meta property="article:section" content="Restaurant Growth" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Blog Title Here | GoalCraft Consultancy" />
        <meta name="twitter:description" content="Your custom meta description for this specific blog post." />
        <meta name="twitter:image" content="https://goalcraftconsultancy.netlify.app/images/your-blog-twitter-image.jpg" />
        <meta name="twitter:site" content="@goalcraft_consultants" />
        <meta name="twitter:creator" content="@goalcraft_consultants" />
        
        {/* Additional SEO */}
        <meta name="author" content="Your Author Name" />
        <meta name="article:tag" content="keyword1, keyword2, keyword3" />
        
        {/* Structured Data (JSON-LD) - EDIT THE CONTENT */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Your Blog Title Here",
            "description": "Your custom meta description for this specific blog post.",
            "image": "https://goalcraftconsultancy.netlify.app/images/your-blog-og-image.jpg",
            "author": {
              "@type": "Person",
              "name": "Your Author Name"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GoalCraft Consultancy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://goalcraftconsultancy.netlify.app/src/assets/logo.png"
              }
            },
            "datePublished": "2024-01-15T00:00:00Z",
            "dateModified": "2024-01-15T00:00:00Z",
            "url": "https://goalcraftconsultancy.netlify.app/blogs/your-blog-slug",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://goalcraftconsultancy.netlify.app/blogs/your-blog-slug"
            },
            "articleSection": "Restaurant Growth",
            "keywords": "keyword1, keyword2, keyword3, restaurant growth, Swiggy, Zomato"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Your blog banner image alt text for SEO"
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
                Restaurant Growth
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Blog Title Here - Edit This
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <span>By Your Author Name</span>
              </div>
              <div className="flex items-center gap-2">
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span>5 min read</span>
              </div>
            </div>
          </header>

          {/* Article Body - EDIT THIS CONTENT */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary">
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This is your blog introduction paragraph. Replace this with your actual content. 
              You can write about restaurant growth strategies, Swiggy optimization, Zomato marketing, 
              or any topic relevant to your audience.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Your First Main Heading
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Add your content here. You can include multiple paragraphs, lists, images, and more. 
              This template provides a clean structure that you can easily customize for each blog post.
            </p>

            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Descriptive alt text for SEO - replace this"
              className="w-full rounded-lg my-6"
            />

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
              Your Subheading Here
            </h3>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Continue with your content. You can add as many sections as needed.
            </p>

            <ul className="mb-4 pl-6">
              <li className="mb-2 text-muted-foreground">First point in your list</li>
              <li className="mb-2 text-muted-foreground">Second point in your list</li>
              <li className="mb-2 text-muted-foreground">Third point in your list</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
              "Add an inspiring quote or important callout here."
              <cite className="block mt-2 text-sm font-medium text-foreground not-italic">
                - Quote Author
              </cite>
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Conclusion
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Wrap up your blog post with a strong conclusion. Summarize key points and 
              provide a clear call-to-action for your readers.
            </p>

          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Restaurant?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert consultation and proven strategies to boost your restaurant's online presence and increase orders.
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

export default BlogTemplate;