// FAQ Item Component

import { ChevronDown } from 'lucide-react';
import React from 'react';
type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};
export const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="w-full mb-4">
      <button
        onClick={onToggle}
        className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-between ${
          isOpen 
            ? 'bg-[#8b7dff] text-white' 
            : 'bg-[#1D1E40] text-white hover:bg-[#3a3459]'
        }`}
      >
        <span className="font-medium text-sm md:text-base pr-4">{question}</span>
        <ChevronDown 
          size={20} 
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="bg-[#2a2449] text-white px-6 py-4 rounded-b-lg -mt-2 animate-fadeIn">
          <p className="text-sm md:text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};