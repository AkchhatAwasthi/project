import React, { useEffect, useState } from 'react';
import serviceAggregator from '@/assets/service-aggregator.jpg';
import serviceMenu from '@/assets/service-menu.jpg';
import serviceExpansion from '@/assets/service-expansion.jpg';
import serviceCustomer from '@/assets/service-customer.jpg';
import serviceMarketing from '@/assets/service-marketing.jpg';
import serviceReports from '@/assets/service-reports.jpg';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

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

  const services = [
    {
      id: 1,
      title: "Zomato & Swiggy Business Growth",
      image: "https://raw.githubusercontent.com/codeandcanvas18/goalcraft/main/Untitled%20design%20(2).png",
      details: [
        "Revenue growth from aggregator platforms",
        "Extracting maximum benefits from aggregator platforms",
        "Hygiene checks, setting up profiles and maintaining pages on these platforms",
        "One point contact for all"
      ]
    },
    {
      id: 2,
      title: "Menu Strategy/Menu Designing/Menu Sequencing",
      image: "https://raw.githubusercontent.com/codeandcanvas18/goalcraft/main/WhatsApp%20Image%202025-08-12%20at%2011.14.00%20PM.jpeg",
      details: [
        "Building and revamping menu",
        "Analyzing food costing",
        "Styling menu as per market preference and trends",
        "Recipe fixing",
        "Waste management"
      ]
    },
    {
      id: 3,
      title: "Business Expansion and Legal Compliance",
      image: "https://raw.githubusercontent.com/codeandcanvas18/goalcraft/main/WhatsApp%20Image%202025-08-12%20at%2011.13.59%20PM%20(2).jpeg",
      details: [
        "Scouting ideal location",
        "Market research and data",
        "Comparative analysis with existing players",
        "Franchise distribution",
        "Government compliances and legal formalities"
      ]
    },
    {
      id: 4,
      title: "User Experience",
      image: "https://raw.githubusercontent.com/codeandcanvas18/goalcraft/main/Gemini_Generated_Image_clvooaclvooaclvo.png",
      details: [
        "Handling user grievances",
        "Feedback generation",
        "Extracting valuable suggestions and incorporating the same"
      ]
    },
    {
      id: 5,
      title: "Digital Marketing",
      image: "https://raw.githubusercontent.com/codeandcanvas18/goalcraft/main/Untitled%20design%20(3).png",
      details: [
        "Social media publishing, campaigns, posters, and reports",
        "SMS campaigns",
        "Branding and packaging"
      ]
    },
    {
      id: 6,
      title: "Monthly Performance Reports",
      image: "https://raw.githubusercontent.com/codeandcanvas18/goalcraft/main/WhatsApp%20Image%202025-08-12%20at%2011.16.11%20PM.jpeg",
      details: [
        "Timely reports to clients on business performance",
        "Complete analysis and solutions to roadblocks",
        "Plan of action for future"
      ]
    }
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#0B1E3F' }}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions to transform your restaurant business and maximize growth potential
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group h-80 perspective-1000 transition-all duration-500 delay-${index * 100}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-card shadow-lg border border-border overflow-hidden">
                  <div className="h-full flex flex-col">
                    <div className="h-48 overflow-hidden flex items-center justify-center bg-muted/20">
                    <img
  src={service.image}
  alt={`${service.title} - Swiggy Zomato optimization service`}
  className="w-[800px] h-[200px] object-contain bg-white transform scale-110 transition-transform duration-300 group-hover:scale-125"
/>




                    </div>
                    <div className="flex-1 p-6 flex items-center justify-center">
                      <h3 className="text-xl font-semibold text-foreground text-center leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-yellow shadow-lg border border-border p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-primary-foreground mb-4 text-center">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-primary-foreground/90 flex items-start">
                        <span className="text-primary-foreground mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white max-w-2xl mx-auto">
            Partner with GoalCraft to unlock your restaurant's full potential through our proven strategies and expert guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;