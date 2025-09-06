import React, { useEffect, useState } from 'react';
import bts1 from '@/assets/bts-1.jpg';
import bts2 from '@/assets/bts-2.jpg';
import bts3 from '@/assets/bts-3.jpg';
import bts4 from '@/assets/bts-4.jpg';
import bts5 from '@/assets/bts-5.jpg';
import bts6 from '@/assets/bts-6.jpg';
import bts7 from '@/assets/bts-7.jpg';
import bts8 from '@/assets/bts-8.jpg';
import bts9 from '@/assets/bts-9.jpg';
import bts10 from '@/assets/bts-10.jpg';
import bts11 from '@/assets/bts-11.jpg';
import bts12 from '@/assets/bts-12.jpg';
import bts13 from '@/assets/bts-13.jpg';
import bts14 from '@/assets/bts-14.jpg';
import bts15 from '@/assets/bts-15.jpg';
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  const btsImages = [{
    id: 1,
    src: bts1,
    alt: "GoalCraft restaurant consultation in progress"
  }, {
    id: 2,
    src: bts2,
    alt: "Menu optimization session with restaurant team"
  }, {
    id: 3,
    src: bts3,
    alt: "Food photography and styling for online platforms"
  }, {
    id: 4,
    src: bts4,
    alt: "Kitchen workflow analysis and optimization"
  }, {
    id: 5,
    src: bts5,
    alt: "Digital menu engineering and design process"
  }, {
    id: 6,
    src: bts6,
    alt: "Restaurant operations strategy meeting"
  }, {
    id: 7,
    src: bts7,
    alt: "Data analytics review for restaurant performance"
  }, {
    id: 8,
    src: bts8,
    alt: "Team collaboration on restaurant growth strategies"
  }, {
    id: 9,
    src: bts9,
    alt: "On-site restaurant consultation and analysis"
  }, {
    id: 10,
    src: bts10,
    alt: "Menu positioning and pricing strategy session"
  }, {
    id: 11,
    src: bts11,
    alt: "Restaurant branding and positioning workshop"
  }, {
    id: 12,
    src: bts12,
    alt: "Delivery optimization and logistics planning"
  }, {
    id: 13,
    src: bts13,
    alt: "Customer engagement strategy development"
  }, {
    id: 14,
    src: bts14,
    alt: "Revenue maximization planning session"
  }, {
    id: 15,
    src: bts15,
    alt: "Final presentation of restaurant growth plan"
  }];
  return <section id="about-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{
          fontFamily: 'Helvetica Neue, Arial, sans-serif'
        }}>PhotoShoot with Goalcraft</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{
          fontFamily: 'Helvetica Neue, Arial, sans-serif'
        }}>Goalcraft Consultancy helps restaurants grow through tailored services and strategic optimization. Take a look at our restaurant shoots and consulting work.</p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {btsImages.map((image, index) => <div key={image.id} className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 delay-${index * 100}`} style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium" style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif'
                }}>
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{
          fontFamily: 'Helvetica Neue, Arial, sans-serif'
        }}>
            Our team works closely with restaurants to capture their unique story and optimize their operations for maximum growth and customer engagement.
          </p>
        </div>
      </div>
    </section>;
};
export default AboutSection;