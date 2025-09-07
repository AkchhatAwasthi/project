import React, { useState, useEffect } from 'react';

const DashboardPreview = () => {
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

    const element = document.getElementById('dashboard-preview');
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
    <section id="dashboard-preview" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Dashboard Preview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a glimpse of our powerful analytics dashboard with real-time data visualization
            </p>
          </div>

          {/* Graphs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['/assets/graph-1.jpg', '/assets/graph-2.jpg', '/assets/graph-1-new.jpg', '/assets/graph-4.jpg'].map((graph, idx) => (
              <div
                key={idx}
                className="bg-white/40 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={graph}
                  alt={`Graph ${idx + 1}`}
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

export default DashboardPreview;