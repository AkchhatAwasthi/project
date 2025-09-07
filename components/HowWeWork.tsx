import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Users, Target, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "We analyze your current restaurant performance on Swiggy & Zomato",
      icon: Users,
      details: [
        "Complete audit of your current listings",
        "Performance metrics analysis",
        "Competitor research",
        "Growth opportunity identification"
      ]
    },
    {
      id: 2,
      title: "Strategy Development",
      description: "Custom growth strategy tailored to your restaurant's unique needs",
      icon: Target,
      details: [
        "Menu optimization strategy",
        "Pricing and combo recommendations",
        "Brand positioning plan",
        "Marketing calendar creation"
      ]
    },
    {
      id: 3,
      title: "Implementation",
      description: "We execute the strategy with precision and attention to detail",
      icon: TrendingUp,
      details: [
        "Menu redesign and optimization",
        "Logo and branding updates",
        "Platform listing enhancements",
        "Combo pack creation"
      ]
    },
    {
      id: 4,
      title: "Results & Growth",
      description: "Track performance and scale your restaurant's success",
      icon: Award,
      details: [
        "Performance monitoring",
        "Monthly growth reports",
        "Continuous optimization",
        "Scaling strategies"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process has helped 250+ restaurants achieve remarkable growth on food delivery platforms
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <step.icon className="w-5 h-5" />
                <span className="font-medium">Step {step.id}</span>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    {React.createElement(steps[activeStep].icon, {
                      className: "w-8 h-8 text-blue-600"
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {steps[activeStep].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {steps[activeStep].details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold">{steps[activeStep].id}</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-4">
                      Expected Timeline
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">
                          {activeStep === 0 ? '1-2' : activeStep === 1 ? '2-3' : activeStep === 2 ? '1-2' : '1+'}
                        </div>
                        <div className="text-sm opacity-90">
                          {activeStep === 3 ? 'Months' : 'Days'}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">
                          {activeStep === 0 ? '100%' : activeStep === 1 ? '95%' : activeStep === 2 ? '98%' : '92%'}
                        </div>
                        <div className="text-sm opacity-90">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= activeStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;