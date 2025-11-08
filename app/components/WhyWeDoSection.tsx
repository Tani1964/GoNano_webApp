import { CheckCircle } from 'lucide-react';
import React from 'react';
import BookEstimateButton from './BookEstimateButton';

// Reason Item Component
export const ReasonItem = ({ title, description }) => {
  return (
    <div className="flex gap-3 md:gap-4">
      <CheckCircle className="text-[#675CE7] flex-shrink-0 mt-1" size={24} />
      <div>
        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// Main Section Component
const WhyWeDoSection = () => {
  const leftReasons = [
    {
      title: "Homeowners' shingles weren't lasting nearly as long as expected.",
      description: "Too many roofs were wearing out early, long before their rated lifespan—leaving people with expensive surprises."
    },
    {
      title: "No one was offering a simple, long-lasting solution that worked.",
      description: "We saw the gap and stepped in—backed by proven science and warranties up to 15 years."
    }
  ];

  const rightReasons = [
    {
      title: "Concrete driveways and wood decks were breaking down from the elements.",
      description: "Central Texas sun, storms, and water exposure were shortening the life of high-cost surfaces."
    },
    {
      title: "People wanted protection without the mess or disruption.",
      description: "Paints, coatings, and quick fixes didn't last—or looked terrible. We deliver invisible defense with zero hassle."
    }
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#7b6dff] text-sm md:text-base font-bold mb-3 tracking-wider uppercase">
            Why We Do What We Do
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            HOME PROTECTION SHOULD<br />BE SMARTER, NOT HARDER
          </h2>
          <p className="text-base md:text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
            We wanted a better way to fight water damage, UV decay, and costly roof replacements—so we built it.
          </p>
        </div>

        {/* Desktop Layout - 2 Columns */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            {leftReasons.map((reason, index) => (
              <ReasonItem
                key={index}
                title={reason.title}
                description={reason.description}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightReasons.map((reason, index) => (
              <ReasonItem
                key={index}
                title={reason.title}
                description={reason.description}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden space-y-6 mb-12">
          {[...leftReasons, ...rightReasons].map((reason, index) => (
            <ReasonItem
              key={index}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-6">
          <p className="text-lg md:text-xl font-semibold text-gray-900 max-w-3xl mx-auto leading-relaxed">
            That's why we exist—to help protect your home before damage starts, not after.
          </p>
          <BookEstimateButton/>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDoSection;