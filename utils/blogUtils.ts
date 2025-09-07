import { BlogPost } from '@/types/blog';

export function getBlogPosts(): BlogPost[] {
  return [
    {
      id: '1',
      slug: 'boost-restaurant-sales-swiggy-zomato',
      title: 'How to Boost Your Restaurant Sales on Swiggy & Zomato',
      description: 'Learn proven strategies to increase your restaurant\'s visibility and sales on popular food delivery platforms.',
      category: 'Growth Strategy',
      readTime: '5 min read',
      author: 'GoalCraft Team',
      publishedDate: '2024-01-15',
      bannerImage: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      icon: 'TrendingUp'
    },
    {
      id: '2',
      slug: 'menu-engineering-restaurant-profits',
      title: 'Menu Engineering: The Secret to Higher Restaurant Profits',
      description: 'Discover how strategic menu design and pricing can significantly boost your restaurant\'s profitability.',
      category: 'Menu Optimization',
      readTime: '7 min read',
      author: 'GoalCraft Team',
      publishedDate: '2024-01-20',
      bannerImage: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      icon: 'Users'
    },
    {
      id: '3',
      slug: 'customer-retention-strategies-restaurants',
      title: 'Customer Retention Strategies That Actually Work',
      description: 'Build a loyal customer base with these proven retention strategies specifically designed for restaurants.',
      category: 'Customer Experience',
      readTime: '6 min read',
      author: 'GoalCraft Team',
      publishedDate: '2024-01-25',
      bannerImage: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg',
      icon: 'Clock'
    },
    {
      id: '4',
      slug: 'digital-marketing-strategies-restaurants',
      title: 'Digital Marketing Strategies for Modern Restaurants',
      description: 'Master digital marketing to attract more customers and grow your restaurant business online.',
      category: 'Digital Marketing',
      readTime: '8 min read',
      author: 'GoalCraft Team',
      publishedDate: '2024-01-30',
      bannerImage: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      icon: 'TrendingUp'
    },
    {
      id: '5',
      slug: 'restaurant-cost-management-guide',
      title: 'Complete Guide to Restaurant Cost Management',
      description: 'Learn how to optimize your restaurant\'s costs without compromising on quality or customer experience.',
      category: 'Operations',
      readTime: '9 min read',
      author: 'GoalCraft Team',
      publishedDate: '2024-02-05',
      bannerImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      icon: 'Users'
    },
    {
      id: '6',
      slug: 'food-delivery-trends-2024',
      title: 'Food Delivery Trends to Watch in 2024',
      description: 'Stay ahead of the competition by understanding the latest trends in food delivery and online ordering.',
      category: 'Industry Trends',
      readTime: '6 min read',
      author: 'GoalCraft Team',
      publishedDate: '2024-02-10',
      bannerImage: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg',
      icon: 'Clock'
    }
  ];
}