import { BlogPost } from '@/types/blog';

// This function will be used to get blog metadata from the actual blog files
export const getBlogPosts = (): BlogPost[] => {
  // Define all blog posts with their metadata
  // This is the single source of truth for blog listing
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      slug: "boost-restaurant-sales-swiggy-zomato",
      title: "10 Proven Strategies to Boost Your Restaurant Sales on Swiggy & Zomato",
      description: "Discover 10 proven strategies to dramatically increase your restaurant sales on Swiggy and Zomato in 2024. Expert tips from GoalCraft consultants with real results.",
      category: "Restaurant Growth",
      readTime: "8 min read",
      author: "GoalCraft Team",
      publishedDate: "2024-01-15T00:00:00Z",
      bannerImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "TrendingUp"
    },
    {
      id: "2",
      slug: "menu-engineering-restaurant-profits",
      title: "Menu Engineering: The Science of Maximizing Restaurant Profits",
      description: "Learn the proven science of menu engineering to maximize restaurant profits. Expert strategies for menu design, pricing psychology, and profit optimization.",
      category: "Restaurant Management",
      readTime: "10 min read",
      author: "GoalCraft Team",
      publishedDate: "2024-01-20T00:00:00Z",
      bannerImage: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "TrendingUp"
    },
    {
      id: "3",
      slug: "customer-retention-strategies-restaurants",
      title: "Customer Retention Strategies That Actually Work for Restaurants",
      description: "Discover proven customer retention strategies that increase restaurant loyalty and lifetime value. Expert tips for building lasting customer relationships.",
      category: "Customer Experience",
      readTime: "7 min read",
      author: "GoalCraft Team",
      publishedDate: "2024-01-25T00:00:00Z",
      bannerImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Users"
    },
    {
      id: "4",
      slug: "digital-marketing-strategies-restaurants",
      title: "Digital Marketing Strategies That Drive Restaurant Growth",
      description: "Discover powerful digital marketing strategies to grow your restaurant business. Expert tips on social media, online advertising, and customer engagement.",
      category: "Digital Marketing",
      readTime: "6 min read",
      author: "GoalCraft Team",
      publishedDate: "2024-01-30T00:00:00Z",
      bannerImage: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "TrendingUp"
    },
    {
      id: "5",
      slug: "restaurant-cost-management-guide",
      title: "Complete Restaurant Cost Management Guide",
      description: "Master restaurant cost management with proven strategies to reduce expenses and increase profitability. Expert guide on food costs, labor, and operational efficiency.",
      category: "Cost Management",
      readTime: "9 min read",
      author: "GoalCraft Team",
      publishedDate: "2024-02-05T00:00:00Z",
      bannerImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "TrendingUp"
    },
    {
      id: "6",
      slug: "food-delivery-trends-2024",
      title: "Food Delivery Trends 2024: What Restaurants Need to Know",
      description: "Stay ahead with the latest food delivery trends in 2024. Discover emerging technologies, consumer preferences, and strategies for restaurant success.",
      category: "Industry Trends",
      readTime: "7 min read",
      author: "GoalCraft Team",
      publishedDate: "2024-02-10T00:00:00Z",
      bannerImage: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Clock"
    },
    {
      id: "7",
      slug: "restaurant-branding-complete-guide",
      title: "Restaurant Branding Complete Guide: Build a Memorable Food Brand",
      description: "Master restaurant branding with our complete guide. Learn to create a memorable brand identity, logo design, and consistent brand experience that drives customer loyalty.",
      category: "Branding",
      readTime: "8 min read",
      author: "GoalCraft Team",
      publishedDate: "2024-02-15T00:00:00Z",
      bannerImage: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "TrendingUp"
    },
    {
      id: "8",
      slug: "kalika-hut-restaurant-revenue-case-study",
      title: "Kalika Hut Restaurant Revenue Case Study",
      description: "Discover how Kalika Hut restaurant increased their revenue by 150% with GoalCraft's strategic consulting. Real case study with proven results.",
      category: "Case Study",
      readTime: "6 min read",
      author: "GoalCraft Team",
      publishedDate: "2024-01-10T00:00:00Z",
      bannerImage: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "TrendingUp"
    }
  ];

  return blogPosts;
};