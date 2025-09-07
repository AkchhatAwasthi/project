import React, { useEffect, useState } from 'react';
import { Play, Quote } from 'lucide-react';

const VideoTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('video-testimonials');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      restaurant: 'Spice Garden',
      location: 'Mumbai',
      thumbnail: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      quote: 'GoalCraft helped us increase our Swiggy orders by 300% in just 3 months!',
      videoUrl: '#'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      restaurant: 'Cafe Delight',
      location: 'Delhi',
      thumbnail: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      quote: 'Their menu optimization strategy doubled our average order value.',
      videoUrl: '#'
    },
    {
      id: 3,
      name: 'Amit Patel',
      restaurant: 'Taste of Home',
      location: 'Bangalore',
      thumbnail: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      quote: 'Professional service and amazing results. Highly recommended!',
      videoUrl: '#'
    }
  ];

  return (
    <section id="video-testimonials" className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from restaurant owners who transformed their business with GoalCraft
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={testimonial.thumbnail}
                    alt={`${testimonial.name} testimonial`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/20 mb-3" />
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="border-t border-border/50 pt-4">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.restaurant}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">250+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-muted-foreground">Average Growth</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;