import React, { useEffect, useState } from 'react';

const OurPartners = () => {
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

    const element = document.getElementById('our-partners');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const partners = [
    {
      name: 'Swiggy',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png',
      description: 'Leading food delivery platform'
    },
    {
      name: 'Zomato',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png',
      description: 'Popular restaurant discovery platform'
    },
    {
      name: 'UberEats',
      logo: 'https://logos-world.net/wp-content/uploads/2020/05/Uber-Eats-Logo.png',
      description: 'Global food delivery service'
    },
    {
      name: 'Dunzo',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Dunzo-Logo.png',
      description: 'Hyperlocal delivery platform'
    }
  ];

  return (
    <section id="our-partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Platform Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading food delivery platforms to maximize your restaurant's reach
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>

          {/* Marquee Animation */}
          <div className="mt-16 overflow-hidden">
            <div className="flex animate-[marquee_20s_linear_infinite] space-x-8">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-10 max-w-full object-contain opacity-60"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">250+</div>
              <div className="text-gray-600">Partner Restaurants</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-gray-600">Platform Integrations</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;