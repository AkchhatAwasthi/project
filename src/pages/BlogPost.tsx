import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '@/data/blogPosts';
import { BlogPost as BlogPostType } from '@/types/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const foundPost = blogPosts.find(p => p.slug === slug);
      setPost(foundPost || null);
    }
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Generate SEO metadata
  const getMetaDescription = () => {
    if (post.description) {
      return post.description.length > 160 
        ? post.description.substring(0, 157) + '...'
        : post.description;
    }
    // Fallback to first 150 characters of content (strip HTML)
    const textContent = post.content.replace(/<[^>]*>/g, '');
    return textContent.length > 150 
      ? textContent.substring(0, 147) + '...'
      : textContent;
  };

  const canonicalUrl = `https://goalcraft.app/blog/${post.slug}`;
  const metaDescription = getMetaDescription();
  
  // Generate keywords from category and title
  const generateKeywords = () => {
    const baseKeywords = [
      'restaurant growth',
      'Swiggy optimization',
      'Zomato marketing',
      'food delivery',
      'restaurant consulting',
      'GoalCraft'
    ];
    
    // Add category-specific keywords
    const categoryKeywords = post.category.toLowerCase().split(' ');
    
    // Add title-based keywords (extract meaningful words)
    const titleWords = post.title.toLowerCase()
      .split(' ')
      .filter(word => word.length > 3 && !['the', 'and', 'for', 'with', 'your'].includes(word));
    
    return [...baseKeywords, ...categoryKeywords, ...titleWords].join(', ');
  };

  // SEO field getters with fallbacks
  const getSeoTitle = () => {
    return post.seoTitle || `${post.title} | GoalCraft Consultancy`;
  };

  const getSeoDescription = () => {
    return post.seoDescription || metaDescription;
  };

  const getSeoKeywords = () => {
    if (post.seoKeywords && post.seoKeywords.length > 0) {
      return post.seoKeywords.join(', ');
    }
    return generateKeywords();
  };

  const getSeoCanonical = () => {
    return post.seoCanonical || canonicalUrl;
  };

  const getSeoImage = () => {
    return post.seoImage || post.bannerImage;
  };

  const getSeoRobots = () => {
    return post.seoRobots || 'index, follow';
  };

  const getSeoLocale = () => {
    return post.seoLocale || 'en_US';
  };

  // Generate structured data (JSON-LD)
  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": getSeoDescription(),
      "image": getSeoImage(),
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "GoalCraft Consultancy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://goalcraftconsultancy.netlify.app/src/assets/logo.png"
        }
      },
      "datePublished": post.publishedDate,
      "dateModified": post.publishedDate,
      "url": getSeoCanonical(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": getSeoCanonical()
      },
      "articleSection": post.category,
      "keywords": getSeoKeywords()
    };
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        {/* Basic SEO */}
        <title>{getSeoTitle()}</title>
        <meta name="description" content={getSeoDescription()} />
        <meta name="keywords" content={getSeoKeywords()} />
        <link rel="canonical" href={getSeoCanonical()} />
        
        {/* Technical SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={getSeoRobots()} />
        
        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={getSeoTitle()} />
        <meta property="og:description" content={getSeoDescription()} />
        <meta property="og:url" content={getSeoCanonical()} />
        <meta property="og:image" content={getSeoImage()} />
        <meta property="og:site_name" content="GoalCraft Consultancy" />
        <meta property="og:locale" content={getSeoLocale()} />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.publishedDate} />
        <meta property="article:section" content={post.category} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getSeoTitle()} />
        <meta name="twitter:description" content={getSeoDescription()} />
        <meta name="twitter:image" content={getSeoImage()} />
        <meta name="twitter:site" content="@goalcraft_consultants" />
        <meta name="twitter:creator" content="@goalcraft_consultants" />
        
        {/* Additional structured data hints */}
        <meta name="author" content={post.author} />
        <meta name="article:tag" content={getSeoKeywords()} />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Banner Image */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img
            src={post.bannerImage}
            alt={post.title}
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
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

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

export default BlogPost;