import React from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getBlogPosts } from '@/utils/blogUtils';
import { BlogPost } from '@/types/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage = ({ post }: BlogPostPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Head>
        {/* Basic SEO */}
        <title>{post.title} | GoalCraft Blog</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={`${post.category}, restaurant growth, Swiggy, Zomato, ${post.title}`} />
        <link rel="canonical" href={`https://goalcraftconsultancy.netlify.app/blog/${post.slug}`} />
        
        {/* Technical SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={`https://goalcraftconsultancy.netlify.app/blog/${post.slug}`} />
        <meta property="og:image" content={post.bannerImage} />
        <meta property="og:site_name" content="GoalCraft Consultancy" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.publishedDate} />
        <meta property="article:section" content={post.category} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.bannerImage} />
        <meta name="twitter:site" content="@goalcraft_consultants" />
        <meta name="twitter:creator" content="@goalcraft_consultants" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "description": post.description,
              "image": post.bannerImage,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "publisher": {
                "@type": "Organization",
                "name": "GoalCraft Consultancy",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://goalcraftconsultancy.netlify.app/assets/logo.png"
                }
              },
              "datePublished": post.publishedDate,
              "dateModified": post.publishedDate,
              "url": `https://goalcraftconsultancy.netlify.app/blog/${post.slug}`,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://goalcraftconsultancy.netlify.app/blog/${post.slug}`
              },
              "articleSection": post.category,
              "keywords": `${post.category}, restaurant growth, Swiggy, Zomato`
            })
          }}
        />
      </Head>
      
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
              onClick={() => router.back()}
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
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{new Date(post.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary">
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {post.description}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Expert Insights and Strategies
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              This comprehensive guide provides actionable strategies and proven techniques 
              to help your restaurant succeed in today's competitive market. Our expert 
              team at GoalCraft has helped hundreds of restaurants achieve remarkable growth.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Implementation Guide
            </h2>
            
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Follow our step-by-step approach to implement these strategies effectively. 
              Each recommendation is based on real-world experience and proven results 
              from our restaurant consulting practice.
            </p>

          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Restaurant?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert consultation and proven strategies tailored to your restaurant's specific needs and goals.
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

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = getBlogPosts();
  
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking', // Enable ISR for new posts
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogPosts = getBlogPosts();
  const post = blogPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // ISR: regenerate at most every 60 seconds
  };
};

export default BlogPostPage;