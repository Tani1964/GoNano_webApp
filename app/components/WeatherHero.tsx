"use client"
import Image from 'next/image';
import React from 'react';
import Storm from "../../public/images/storm.png";
import { useEstimate } from '../contexts/EstimateContext';

const WeatherHero = () => {
      const { setOpenEstimate } = useEstimate();
    
  return (
    <div className="w-full bg-gradient-to-br from-[#1D1E40] via-[#1D1E40] to-[#1D1E40] text-white">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Extreme weather? Bring it on.
            </h1>
            
            <p className="text-xl text-slate-300">
              Don&apos;t Worry About Damage From Extreme Weather.
            </p>

            {/* Weather Types List */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                <span className="text-4xl font-bold text-indigo-400">01</span>
                <span className="text-xl text-slate-200">Hail</span>
              </div>

              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                <span className="text-4xl font-bold text-indigo-400">02</span>
                <span className="text-xl text-slate-200">High Winds</span>
              </div>

              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                <span className="text-4xl font-bold text-indigo-400">03</span>
                <span className="text-xl text-slate-200">Extreme Heat</span>
              </div>

              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                <span className="text-4xl font-bold text-indigo-400">04</span>
                <span className="text-xl text-slate-200">Water And Ice</span>
              </div>
            </div>

            {/* CTA Button */}
            <button  onClick={() => setOpenEstimate(true)} className="bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105">
              GET A QUOTE
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
            
            className="w-full h-auto object-cover"
            width={800}
            height={80}
                src={Storm}
                alt="Storm clouds over rural buildings"
              />
              {/* Dark overlay for dramatic effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHero;