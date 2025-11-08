import { Calendar } from 'lucide-react';
import React from 'react';

// Process Step Card Component
export const ProcessStepCard = ({ number, title, description, benefits }) => {
  return (
    <div className="bg-[#7b6dff] text-white rounded-lg p-6 md:p-8 shadow-lg">
      <div className="text-5xl md:text-6xl font-bold text-[#2a2449] mb-4">
        {number}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        {title}
      </h3>
      <p className="text-base md:text-lg mb-4 leading-relaxed">
        {description}
      </p>
      <p className="text-base md:text-lg font-semibold leading-relaxed">
        {benefits}
      </p>
    </div>
  );
};

// Main How It Works Component
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Inspect & Quote",
      description: "We evaluate your surfaces and recommend the right treatment.",
      benefits: "Fast, friendly, and no pressure."
    },
    {
      number: "02",
      title: "Treat & Protect",
      description: "Our technician applies the GoNano treatment in one clean visit.",
      benefits: "No coatings, no mess, and no disruption."
    },
    {
      number: "03",
      title: "Long Term Results",
      description: "Water beads up. Surfaces stay dry and protected.",
      benefits: "No yellowing, peeling, or maintenance required."
    }
  ];

  return (
    <section className="bg-[#F5F7F9] py-12 md:py-20 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a2449] mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-base md:text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Molecular protection, made simple. Protecting your home is easy. Our 3-step process takes you from inspection to invisible, long-lasting results—with no mess, no hassle, and no coatings.
          </p>
        </div>

        {/* Desktop Layout - 3 Columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <ProcessStepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden space-y-6 mb-12">
          {steps.map((step) => (
            <ProcessStepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2a2449]">
            Molecular protection, made simple.
          </h3>
          <button className="bg-[#675CE7] hover:bg-[#6b5dff] text-white font-bold px-8 md:px-12 py-4 rounded text-base md:text-lg transition-colors inline-flex items-center gap-2">
            <Calendar size={20} />
            BOOK YOUR FREE INSPECTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;