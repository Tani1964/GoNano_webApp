import Image from 'next/image';
import React from 'react';
import Coating1 from "../../public/images/coating1.png";
import Coating2 from "../../public/images/coating2.png";
import Coating3 from "../../public/images/coating3.png";
import BookEstimateButton from './BookEstimateButton';

export default function NanoCoatingLanding() {
  const services = [
    {
      category: "Asphalt Shingles",
      title: "Give your shingles 10 to 15 more years of life",
      image: Coating1,
      buttonText: "GONANO FOR SHINGLES",
      buttonLink: "#shingles"
    },
    {
      category: "Elastomeric Membrane",
      title: "Nano coatings for roof membranes",
      image: Coating2,
      buttonText: "GONANO FOR MEMBRANES",
      buttonLink: "#membranes"
    },
    {
      category: "Concrete Surfaces",
      title: "Extend the lifespan of your concrete with a nanotech coating",
      image: Coating3,
      buttonText: "GONANO FOR CONCRETE SURFACES",
      buttonLink: "#concrete"
    },
    // {
    //   category: "Wood Surfaces",
    //   title: "Extend the lifespan of your wood surfaces with nano coating",
    //   image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
    //   buttonText: "GONANO FOR WOOD SURFACES",
    //   buttonLink: "#wood"
    // }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Millions of <span className="text-indigo-600">nano particles</span>. A formidable technology.
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our Nano Coating Solution Consists Of Nano Particles That Transform The Molecular Structure Of Materials To Modify Permanently Their Properties, Enhance Their Resistance And Extend Their Lifespan By 10 To 15 Years.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                <Image
                  width={400}
                  height={100} 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">
                  {service.category}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>
               <BookEstimateButton/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}