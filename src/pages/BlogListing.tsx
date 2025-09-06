import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '@/data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogListing = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 6, blogPosts.length));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>;
      case 'Users':
        return <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>;
      case 'Clock':
        return <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>;
      default:
        return <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        {/* Basic SEO */}
        <title>Restaurant Growth Blog | Expert Tips & Strategies | GoalCraft Consultancy</title>
        <meta name="description" content="Expert insights, proven strategies, and real success stories to accelerate your restaurant's growth on Swiggy and Zomato. Get actionable tips from GoalCraft's restaurant consultants." />
        <meta name="keywords" content="restaurant blog, Swiggy tips, Zomato marketing, restaurant growth, food delivery optimization, menu engineering, restaurant consulting, GoalCraft blog" />
        <link rel="canonical" href="https://goalcraftconsultancy.netlify.app/blog" />
        
        {/* Technical SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Restaurant Growth Blog | Expert Tips & Strategies | GoalCraft Consultancy" />
        <meta property="og:description" content="Expert insights, proven strategies, and real success stories to accelerate your restaurant's growth on Swiggy and Zomato." />
        <meta property="og:url" content="https://goalcraftconsultancy.netlify.app/blog" />
        <meta property="og:image" content="https://goalcraftconsultancy.netlify.app/assets/og-image.jpg" />
        <meta property="og:site_name" content="GoalCraft Consultancy" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Restaurant Growth Blog | Expert Tips & Strategies | GoalCraft Consultancy" />
        <meta name="twitter:description" content="Expert insights, proven strategies, and real success stories to accelerate your restaurant's growth on Swiggy and Zomato." />
        <meta name="twitter:image" content="https://goalcraftconsultancy.netlify.app/assets/twitter-image.jpg" />
        <meta name="twitter:site" content="@goalcraft_consultants" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
          <div className="absolute inset-0 cosmic-grid opacity-20"></div>
          
          <div className={`max-w-4xl mx-auto text-center space-y-6 relative z-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Restaurant Growth Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights, proven strategies, and real success stories to accelerate your restaurant's growth on Swiggy and Zomato
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, visiblePosts).map((post, index) => (
                <article 
                  key={post.id}
                  className={`group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    {/* Post Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.bannerImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            {getIconComponent(post.icon)}
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                              {post.category}
                            </span>
                            <span className="text-muted-foreground">{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-medium text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                      </div>
                      
                      {/* Post Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(post.publishedDate)}</span>
                          </div>
                        </div>
                        
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <ExternalLink className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < blogPosts.length && (
              <div className="text-center mt-12">
                <Button
                  onClick={loadMorePosts}
                  variant="outline"
                  className="px-8 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  Load More Articles
                </Button>
              </div>
            )}

            {/* All Posts Loaded Message */}
            {visiblePosts >= blogPosts.length && (
              <div className="text-center mt-12">
                <p className="text-muted-foreground">
                  You've reached the end! Check back soon for more restaurant growth insights.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 md:px-12 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Implement These Strategies?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized consultation and proven strategies tailored to your restaurant's specific needs and goals.
            </p>
            <Button
              onClick={() => {
                const footer = document.querySelector('footer');
                footer?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 py-3 text-base"
            >
              Get Expert Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogListing;