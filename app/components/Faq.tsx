"use client"
import React, { useState } from "react";
import { useEstimate } from "../contexts/EstimateContext";
import { concreteTreatmentFAQs } from "../data/faqs/concreteTreatmentFAQs";
import { generalRoofingFAQs } from "../data/faqs/generalRoofingFAQs";
import { woodTreatmentFAQs } from "../data/faqs/woodTreatmentFAQs";
import { FAQSubsection } from "./FAQSubsection";

// Main FAQ Section Component
const FAQSection = () => {
  const { setOpenEstimate } = useEstimate();
  return (
    <section id="faqs" className="bg-gradient-to-b from-[#675CE7] to-[#8b7dff] py-12 md:py-20 w-full">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-white text-sm md:text-base font-semibold mb-3 tracking-wider">
            STILL GOT QUESTIONS?
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* FAQ Subsections */}
        <FAQSubsection
          header="GENERAL/ROOFING QUESTIONS"
          faqs={generalRoofingFAQs}
        />

        <FAQSubsection
          header="CONCRETE TREATMENT QUESTIONS"
          faqs={concreteTreatmentFAQs}
        />

        {/* <FAQSubsection
          header="WOOD TREATMENT QUESTIONS"
          faqs={woodTreatmentFAQs}
        /> */}

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16">
          <button onClick={() => setOpenEstimate(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 md:px-12 py-4 rounded text-base md:text-lg transition-colors">
            GOT MORE QUESTIONS?
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
