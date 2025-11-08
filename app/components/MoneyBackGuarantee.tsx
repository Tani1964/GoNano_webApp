import React from 'react';
import { VideoPlayer } from './Video';

export default function MoneyBackGuarantee() {
  return (
    <div className="w-full bg-[#8583F2] text-[#1a1d3a]">
      {/* Desktop Layout */}
      <div className="hidden md:block px-8 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-semibold uppercase tracking-wider mb-4">
            Still Not Sure?
          </p>
          
          <h2 className="text-center text-4xl lg:text-5xl font-bold mb-6">
            OUR 100% MONEY BACK GUARANTEE
          </h2>
          
          <p className="text-center text-lg mb-6 max-w-3xl mx-auto">
            Your roof, concrete, and wood surfaces are too important for guesswork.
          </p>
          
          <p className="text-center text-base mb-12 max-w-4xl mx-auto leading-relaxed">
            That's why we offer a 100% money-back guarantee. If our treatment fails to deliver the protection we promised, you get your money back. No red tape. No excuses. Just accountability.
          </p>
          
          <div className="relative max-w-2xl mx-auto mb-8">
                      <VideoPlayer
                        url="https://www.youtube.com/watch?v=mFqYl0NQ7kw"
                        className="aspect-video"
                      />
          
          </div>
          
          <div className="text-center">
            <button className="bg-[#675CE7] hover:bg-[#5a5ee5] text-white font-bold py-4 px-10 uppercase tracking-wide transition-colors text-sm">
              Get a Free Quote with Confidence
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-6 py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-wider mb-4">
          Still Not Sure?
        </p>
        
        <h2 className="text-center text-3xl font-bold mb-6 leading-tight">
          OUR 100% MONEY BACK GUARANTEE
        </h2>
        
        <p className="text-center text-base mb-6">
          Your roof, concrete, and wood surfaces are too important for guesswork.
        </p>
        
        <p className="text-center text-sm mb-10 leading-relaxed">
          That's why we offer a 100% money-back guarantee. If our treatment fails to deliver the protection we promised, you get your money back. No red tape. No excuses. Just accountability.
        </p>
        
        <div className="relative mb-8">
                    <VideoPlayer 
                      url="https://www.youtube.com/watch?v=mFqYl0NQ7kw"
                      className="aspect-video"
                    />
          
        </div>
        
        <div className="text-center">
          <button className="bg-[#675CE7] hover:bg-[#5a5ee5] text-white font-bold py-4 px-8 uppercase tracking-wide transition-colors text-sm w-full">
            Get a Free Quote with Confidence
          </button>
        </div>
      </div>
    </div>
  );
}