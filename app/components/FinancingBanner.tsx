import React from 'react';

export default function FinancingBanner() {
  return (
    <div className="w-full bg-[#1a1d3a] text-white">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between px-8 lg:px-16 py-8">
        <div className="flex-1">
          <h2 className="text-[#a5a8ff] text-2xl lg:text-3xl font-bold mb-2 uppercase tracking-wide">
            See if you qualify for financing. Check eligibility will not affect your credit score.
          </h2>
          <p className="text-white text-lg lg:text-xl">
            Financing options are available to those who qualify!
          </p>
        </div>
        <div className="ml-8">
          <a href='https://app.gethearth.com/partners/jolawt-international-inc/jonathan/apply' className="bg-[#675CE7] hover:bg-[#6b6ee0] text-white font-bold py-4 px-8 uppercase tracking-wide transition-colors">
            Apply for Financing
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center justify-center px-6 py-12 text-center">
        <h2 className="text-[#a5a8ff] text-xl font-bold mb-4 uppercase tracking-wide">
          See if you qualify for financing. Check eligibility will not affect your credit score.
        </h2>
        <p className="text-white text-base mb-8">
          Financing options are available to those who qualify!
        </p>
        <button className="bg-[#675CE7] hover:bg-[#6b6ee0] text-white font-bold py-3 px-6 uppercase tracking-wide transition-colors">
          Apply for Financing
        </button>
      </div>
    </div>
  );
}