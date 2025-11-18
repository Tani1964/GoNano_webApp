import React from 'react';
import { VideoPlayer } from './Video';

const TestedAndProven = () => {
  return (
    <section className="bg-[#1D1E40] text-white py-16 md:py-24 w-full">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12">
          TESTED AND PROVEN
        </h1>

        {/* Video */}
        <VideoPlayer 
          url="https://youtu.be/9xyl42m-l48"
          className="aspect-video"
        />
      </div>
    </section>
  );
};

export default TestedAndProven;