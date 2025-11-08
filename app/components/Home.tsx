"use client";
import { DollarSign, MapPin, ThumbsUp } from 'lucide-react';
import React from 'react';
import { useEstimate } from "../contexts/EstimateContext";
import BookEstimateButton from './BookEstimateButton';
import { VideoPlayer } from './Video';


// Home Hero Component
const HomeHero = () => {
  const { setOpenEstimate } = useEstimate();
  return (
    <section id='home' className="bg-[#1D1E40] text-white py-32 md:py-32  w-full font-extrabold font-stretch-95% font-sans">
        <div className='flex justify-center align-middle py-4 visible md:hidden'>
            <BookEstimateButton/>
        </div>
        <div className='w-full bg-[#675CE7] px-2 py-2 flex justify-center align-middle items-center my-2 md:mb-20'>
            <a href="https://app.gethearth.com/partners/jolawt-international-inc/jonathan/apply" className='text-lg underline text-center'>** Pre-qualify for project financing **</a>
        </div>
      <div className=" mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-extrabold mb-6 leading-18 ">
            MOLECULAR PROTECTION FOR ROOFS,
            <br />
            DRIVEWAYS, AND DECKS
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Invisible nanotechnology treatments that help roofs, and concrete repel water, resist
            damage, and stay looking new—without coatings, films, or harsh chemicals.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-8 md:mb-12 max-w-4xl mx-auto">
          <VideoPlayer 
            url="https://www.youtube.com/watch?v=EmQv_W83yqE"
            className="aspect-video"
          />
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12 md:mb-16">
          <button onClick={() => setOpenEstimate(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 md:px-12 py-4 rounded text-base md:text-lg transition-colors">
            GET YOUR FREE ESTIMATE
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex items-center justify-center w-12 h-12 bg-[#8b7dff] rounded-full">
              <DollarSign size={24} />
            </div>
            <h3 className="font-bold text-lg md:text-xl">FINANCING AVAILABLE</h3>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex items-center justify-center w-12 h-12 bg-[#8b7dff] rounded-full">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-lg md:text-xl">LOCALLY OWNED IN AUSTIN</h3>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex items-center justify-center w-12 h-12 bg-[#8b7dff] rounded-full">
              <ThumbsUp size={24} />
            </div>
            <h3 className="font-bold text-lg md:text-xl">10K+ SATISFIED CLIENTS</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;