"use client";
import whygogonaworks from "@/public/images/whygogonaworks.png";
import { Calendar, Droplet, Sun } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useEstimate } from "../contexts/EstimateContext";

const WhyGoNanoWorks = () => {
  const { setOpenEstimate } = useEstimate();
  return (
    <section id="why-it-works" className="bg-[#DBE2E9] py-12 md:py-20 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a2449] mb-4">
            WHY GONANO WORKS 
          </h2>
          <p className="text-lg md:text-xl font-semibold text-[#2a2449] mb-4">
            {/* (When Coatings Don&apos;t) */}
            (Why others don&apos;t)
          </p>
          <p className="text-base md:text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Others sit on top of the surface, wear away fast, and trap moisture underneath. GoNano bonds below the surface to create long-lasting, invisible protection from within.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Features */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">🔬</span>
                <h3 className="text-2xl font-bold text-[#2a2449]">Molecular Bonding</h3>
              </div>
              <p className="text-base text-gray-800 leading-relaxed">
                Our nanotech penetrates deep into porous materials—creating a water-repelling barrier inside the surface, not on top of it.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <Droplet className="text-blue-500 flex-shrink-0 mt-1" size={32} />
                <h3 className="text-2xl font-bold text-[#2a2449]">Hydrophobic Repellency</h3>
              </div>
              <p className="text-base text-gray-800 leading-relaxed">
                Water beads up and rolls off treated areas instantly. No soaking, swelling, or staining—just dry, clean protection that lasts.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <Sun className="text-yellow-500 flex-shrink-0 mt-1" size={32} />
                <h3 className="text-2xl font-bold text-[#2a2449]">UV-Stable & Breathable</h3>
              </div>
              <p className="text-base text-gray-800 leading-relaxed">
                Unlike coatings that yellow or peel, GoNano stays invisible and lets moisture vapor escape—so surfaces stay healthy and natural-looking.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex flex-col items-center justify-center">
              <Image
                src={whygogonaworks}
                alt="Water beading on treated surface"
                className="w-full h-auto rounded-lg shadow-lg"
                width={800}
                height={500}
                priority
              />

              <p className="text-sm text-center text-gray-700 mt-4 italic">
                &quot;Water beads and rolls off instantly thanks to GoNano&apos;s molecular bonding.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8 mb-12">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-3xl">🔬</span>
              <h3 className="text-xl font-bold text-[#2a2449]">Molecular Bonding</h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed px-4">
              Our nanotech penetrates deep into porous materials—creating a water-repelling barrier inside the surface, not on top of it.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Droplet className="text-blue-500 flex-shrink-0" size={28} />
              <h3 className="text-xl font-bold text-[#2a2449]">Hydrophobic Repellency</h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed px-4">
              Water beads up and rolls off treated areas instantly. No soaking, swelling, or staining—just dry, clean protection that lasts.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sun className="text-yellow-500 flex-shrink-0" size={28} />
              <h3 className="text-xl font-bold text-[#2a2449]">UV-Stable & Breathable</h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed px-4">
              Unlike coatings that yellow or peel, GoNano stays invisible and lets moisture vapor escape—so surfaces stay healthy and natural-looking.
            </p>
            <Image
                src={whygogonaworks}
                alt="Water beading on treated surface"
                className="w-full h-auto rounded-lg shadow-lg"
                width={800}
                height={500}
                priority
              />

            <p className="text-xs text-center text-gray-700 mt-3 italic">
              &quot;Water beads and rolls off instantly thanks to GoNano&apos;s molecular bonding.&quot;
            </p>
          </div>
        </div>

        {/* Bottom Quote and CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2a2449]">
            &quot;We don&apos;t coat—we treat.&quot;
          </h3>
          <button  onClick={() => setOpenEstimate(true)} className="bg-[#675CE7] hover:bg-[#7a6bef] text-white font-bold px-8 md:px-12 py-4 rounded text-base md:text-lg transition-colors inline-flex items-center gap-2">
            <Calendar size={20} />
            BOOK YOUR FREE INSPECTION
          </button>
        </div>
    </section>
  );
};

export default WhyGoNanoWorks;