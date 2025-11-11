"use client";
import React from 'react';
import { useEstimate } from '../contexts/EstimateContext';
import { VideoPlayer } from './Video';

export default function ServicesSection() {
  const { setOpenEstimate } = useEstimate();
  const services = [
    {
      icon: "🏠",
      title: "ROOF PROTECTION",
      subtitle: "Asphalt shingles & composite roofs",
      description: "Protect asphalt shingles with GoNano treatments that resist hail, wind, and UV—adding up to 15 years of performance without replacing your roof.",
      videoURL: "https://youtu.be/JGoEf2JxODQ",
      videoBanner: "ROOF WILL NOW LAST ANOTHER 10-15 YEARS"
    },
    {
      icon: "🪨",
      title: "CONCRETE DEFENSE",
      subtitle: "Driveways, patios, pool decks, walkways",
      description: "Prevent cracking, fading, and stains on driveways, patios, and walkways with a breathable nanotech seal that lasts for years.",
      videoURL: "https://youtu.be/0FG6KECw9SU",
      videoBanner: "Cleans & Protects Against",
      labels: ["Algae", "Mold", "Mildew &", "Efflorescence"]
    },
    // {
    //   icon: "🪵",
    //   title: "WOOD CARE",
    //   subtitle: "Decks, fences, pergolas, siding",
    //   description: "Safeguard decks, fences, and pergolas from rot, sun damage, and moisture—while preserving their natural look and feel.",
    //   videoURL: "https://www.youtube.com/watch?v=RdrMbQB59F8",
    //   videoBanner: "Resists staining from Grease, Food & Atmospheric exposure",
    //   footer: "Made For - All wood surfaces"
    // }
  ];

  return (
    <div id='services' className="w-full bg-gray-100">
      {/* Desktop Layout */}
      <div className="hidden md:block px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl lg:text-5xl font-bold text-[#1a1d3a] mb-3">
            SERVICES WE OFFER
          </h2>
          <p className="text-center text-xl text-[#1a1d3a] font-semibold mb-4">
            (Treatment options)
          </p>
          <p className="text-center text-lg text-[#1a1d3a] mb-16 max-w-5xl mx-auto">
            We apply science-backed nanotech to protect the key surfaces around your home—helping them last longer with less maintenance.
          </p>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Video Section */}
                <div className="mb-8 md:mb-12 w-[50%] mx-auto">
                          <VideoPlayer 
                            url={service.videoURL}
                            className="aspect-video"
                          />
                        </div>

                {/* Content Section */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl">{service.icon}</span>
                    <h3 className="text-3xl font-bold text-[#6b6ff5]">{service.title}</h3>
                  </div>
                  <h4 className="text-2xl font-bold text-[#1a1d3a] mb-4">{service.subtitle}</h4>
                  <p className="text-[#1a1d3a] text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button  onClick={() => setOpenEstimate(true)} className="bg-[#675CE7] hover:bg-[#5a5ee5] text-white font-bold py-3 px-8 uppercase tracking-wide transition-colors text-sm">
                    Get a Free Custom Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-6 py-12">
        <h2 className="text-center text-3xl font-bold text-[#1a1d3a] mb-2">
          SERVICES WE OFFER
        </h2>
        <p className="text-center text-lg text-[#1a1d3a] font-semibold mb-3">
          (Treatment options)
        </p>
        <p className="text-center text-sm text-[#1a1d3a] mb-12 leading-relaxed">
          We apply science-backed nanotech to protect the key surfaces around your home—helping them last longer with less maintenance.
        </p>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              {/* Video Section */}
              <div className="mb-8 md:mb-12 max-w-4xl mx-auto">
                        <VideoPlayer 
                          url="https://www.youtube.com/watch?v=EmQv_W83yqE"
                          className="aspect-video"
                        />
                      </div>

              {/* Content Section */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-2xl font-bold text-[#6b6ff5]">{service.title}</h3>
              </div>
              <h4 className="text-xl font-bold text-[#1a1d3a] mb-4">{service.subtitle}</h4>
              <p className="text-[#1a1d3a] text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <button onClick={() => setOpenEstimate(true)} className="bg-[#675CE7] hover:bg-[#5a5ee5] text-white font-bold py-3 px-6 uppercase tracking-wide transition-colors text-sm w-full">
                Get a Free Custom Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}