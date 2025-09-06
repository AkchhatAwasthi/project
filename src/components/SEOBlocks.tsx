import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { ExternalLink, Clock, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SEOBlocks = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return TrendingUp;
      case 'Users':
        return Users;
      case 'Clock':
        return Clock;
      default:
        return TrendingUp;
    }
  };

  return <section className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
            Restaurant Growth Resources
          </h2>
          <p className="text-muted-foreground text-lg">
            Expert insights, proven strategies, and real success stories to accelerate your restaurant's growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 6).map((article, index) => {
            const IconComponent = getIconComponent(article.icon);
            return <article 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
            >
              <Link to={`/blogs/${article.slug}`}>
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {article.category}
                      </span>
                      <span className="text-muted-foreground">{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center text-sm text-primary group-hover:text-primary/80 transition-colors">
                    Read article
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          })}
        </div>
        
        <div className="text-center">
          <div className="mt-12">
            <Link to="/blog">
              <Button
                variant="outline"
                className="px-8 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default SEOBlocks;