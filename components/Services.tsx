@@ .. @@
 import React, { useEffect, useState } from 'react';
-import serviceAggregator from '@/assets/service-aggregator.jpg';
-import serviceMenu from '@/assets/service-menu.jpg';
-import serviceExpansion from '@/assets/service-expansion.jpg';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to grow your restaurant business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
-import serviceMarketing from '@/assets/service-marketing.jpg';
-import serviceReports from '@/assets/service-reports.jpg';

 const Services = () => {
   const [isVisible, setIsVisible] = useState(false);
 }
