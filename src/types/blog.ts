export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  readTime: string;
  author: string;
  publishedDate: string;
  bannerImage: string;
  icon: string;
  keywords?: string; // Optional field for custom keywords (deprecated - use seoKeywords)
  
  // Manual SEO Control Fields
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  seoCanonical?: string;
  seoImage?: string;
  seoRobots?: string; // default "index, follow"
  seoLocale?: string; // default "en_US"
}