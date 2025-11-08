// FAQ Subsection Component
"use client"

import React, { useState } from 'react';
import { FAQItem } from './FaqItem';
type FAQItemProps = {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
};

type FAQSubsectionProps = {
  header: string;
  faqs: FAQItemProps[];
};

export const FAQSubsection = ({ header, faqs }: FAQSubsectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12 md:mb-16">
      <h3 className="text-white font-bold text-lg md:text-xl text-center mb-6 tracking-wide">
        {header}
      </h3>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq: FAQItemProps, index: number) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};