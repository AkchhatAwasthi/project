import React, { useEffect, useState } from 'react';

const AboutSection = () => {
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
    src: '/assets/bts-1.jpg',
    alt: "GoalCraft restaurant consultation in progress"
  }, {
    id: 2,
    src: '/assets/bts-2.jpg',
    alt: "Menu optimization session with restaurant team"
  }, {
    id: 3,
    src: '/assets/bts-3.jpg',
    alt: "Food photography and styling for online platforms"
  }, {
    id: 4,
    src: '/assets/bts-4.jpg',
    alt: "Kitchen workflow analysis and optimization"
  }, {
    id: 5,
    src: '/assets/bts-5.jpg',
    alt: "Digital menu engineering and design process"
  }, {
    id: 6,
    src: '/assets/bts-6.jpg',
    alt: "Restaurant operations strategy meeting"
  }, {
    id: 7,
    src: '/assets/bts-7.jpg',
    alt: "Data analytics review for restaurant performance"
  }, {
    id: 8,
    src: '/assets/bts-12.jpg',
    alt: "Team collaboration and strategy development"
  }, {
    id: 9,
    src: '/assets/bts-13.jpg',
    alt: "Client consultation and needs assessment"
  }, {
    id: 10,
    src: '/assets/bts-14.jpg',
    alt: "Revenue maximization planning session"
  }, {
    id: 11,
    src: '/assets/bts-15.jpg',
    alt: "Final presentation of restaurant growth plan"
  }];

  return (
    <section id="about-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Behind the Scenes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we work with restaurants to transform their business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;