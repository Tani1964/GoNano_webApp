"use client"
import { Star, Volume2, X } from 'lucide-react';
import React, { useState } from 'react';
import BookEstimateButton from './BookEstimateButton';
import { VideoPlayer } from './Video';

// Testimonial Video Card Component
export const TestimonialCard = ({ 
  title, 
  quote, 
  author, 
  rating = 5,
  onClick 
}: {
  title: string;
  quote: string;
  author: string;
  rating?: number;
  onClick: () => void;
  videoUrl?: string;
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow flex-shrink-0 w-full md:w-80"
      onClick={onClick}
    >
      {/* Video Thumbnail */}
      <div className="relative bg-black aspect-video">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="24" cy="24" r="8" fill="#8b7dff" />
              <circle cx="56" cy="24" r="8" fill="#8b7dff" />
              <circle cx="24" cy="56" r="8" fill="#8b7dff" />
              <circle cx="56" cy="56" r="8" fill="#8b7dff" />
              <path d="M24 32 L24 48" stroke="#8b7dff" strokeWidth="4" />
              <path d="M56 32 L56 48" stroke="#8b7dff" strokeWidth="4" />
            </svg>
            <span className="text-white text-2xl font-bold">gonano</span>
          </div>
        </div>
        
        {/* Enable Sound Button */}
        <button className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2 hover:bg-white/30 transition-colors">
          <Volume2 size={16} />
          Enable sound
        </button>

        {/* Video Controls Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1 bg-white/30 rounded-full">
              <div className="h-full w-0 bg-white rounded-full"></div>
            </div>
            <button className="text-white hover:text-gray-300">
              <Volume2 size={16} />
            </button>
            <button className="text-white hover:text-gray-300">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="1" y="1" width="6" height="6" />
                <rect x="9" y="1" width="6" height="6" />
                <rect x="1" y="9" width="6" height="6" />
                <rect x="9" y="9" width="6" height="6" />
              </svg>
            </button>
            <button className="text-white hover:text-gray-300">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 2 L14 14 M14 2 L2 14" />
              </svg>
            </button>
          </div>
        </div>

        {/* YouTube Shorts Badge */}
        {/* <div className="absolute bottom-16 left-4 flex items-center gap-2 text-white text-xs">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2L10 6h4l-3.5 3L12 14l-4-3-4 3 1.5-5L2 6h4z" />
          </svg>
          <span className="font-semibold">YouTube Shorts</span>
        </div> */}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-sm text-gray-700 mb-3 leading-relaxed">
          {quote}
        </p>
        <p className="text-sm font-semibold text-gray-900 mb-3">
          — {author}
        </p>
        
        {/* Star Rating */}
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  );
};

// Video Modal Component
const VideoModal = ({ videoUrl, isOpen, onClose }: { videoUrl: string | null, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X size={32} />
        </button>
        
        {/* <div className="bg-black rounded-lg overflow-hidden aspect-video"> */}
          <div className="mb-8 md:mb-12 max-w-4xl mx-auto">
                    <VideoPlayer
                      url={videoUrl || ""}
                      className="aspect-video"
                    />
                  </div>
        {/* </div> */}
      </div>
    </div>
  );
};

// Main Testimonials Section
const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const testimonials = [
    {
      id: 1,
      videoUrl: "https://content.apisystem.tech/hls/medias/wbwKVz9CXZMVcQrXeB0S/media/transcoded_videos/cts-2137a61315ea3b6c_,360,480,720,1080,1440,p.mp4.urlset/master.m3u8",
      title: "No mess, real protection",
      quote: "We love that GoNano didn't change how our roof looked—but still gave us real protection. No mess, no smell, just clean work and great service.",
      author: "Rich & Denise",
      rating: 5
    },
    {
      id: 2,
      videoUrl: "https://content.apisystem.tech/hls/medias/wbwKVz9CXZMVcQrXeB0S/media/transcoded_videos/cts-a35f983d39f4ada4_,360,480,720,1080,1440,p.mp4.urlset/master.m3u8",
      title: "Impressed by the science.",
      quote: "The GoNano team was great. I appreciated how they explained the science behind it, and the fact that it doesn't leave a film on the roof. I'd recommend them to anyone.",
      author: "David Flowers",
      rating: 5
    },
    {
      id: 3,
      videoUrl: "https://content.apisystem.tech/hls/medias/wbwKVz9CXZMVcQrXeB0S/media/transcoded_videos/cts-5b7d7d98e4c8c311_,360,480,720,1080,1440,p.mp4.urlset/master.m3u8",
      title: "Skeptic now convinced",
      quote: "I was honestly skeptical at first, but the GoNano team was professional, showed me how it worked, and the results were exactly what they said they'd be. I'm impressed and would absolutely recommend them.",
      author: "Carla",
      rating: 5
    },
    {
      id: 4,
      videoUrl: "https://youtu.be/dJxgA4EeIb0",
      title: "Skeptic now convinced",
      quote: "We had GoNano Placed on our roof, then just about two weeks later we had a hail storm that came through. We had no damage to our roof at all. We felt very protected and recommended it to our neighbors.",
      author: "Shauna Steel",
      rating: 5
    },
    // {
    //   id: 5,
    //   videoUrl: "https://youtube.com/shorts/jLWVViPlNNY",
    //   title: "Skeptic now convinced",
    //   quote: "I was honestly skeptical at first, but the GoNano team was professional, showed me how it worked, and the results were exactly what they said they'd be. I'm impressed and would absolutely recommend them.",
    //   author: "Carla",
    //   rating: 5
    // }
  ];

  return (
    <>
      <section id='testimonials' className="bg-gray-50 py-12 md:py-20 px-4 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#7b6dff] text-sm md:text-base font-bold mb-2 tracking-wider uppercase">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              WHAT OTHERS ARE SAYING
            </h2>
          </div>

          {/* Desktop Layout - 3 Columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                videoUrl={testimonial.videoUrl}
                title={testimonial.title}
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
                onClick={() => setSelectedVideo(testimonial.videoUrl)}
              />
            ))}
          </div>

          {/* Mobile Layout - Horizontal Scroll */}
          <div className="md:hidden mb-12">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  videoUrl={testimonial.videoUrl}
                  title={testimonial.title}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                  onClick={() => setSelectedVideo(testimonial.videoUrl)}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <BookEstimateButton/>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        videoUrl={selectedVideo}
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
      />

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-mandatory > * {
          scroll-snap-align: start;
        }
      `}</style>
    </>
  );
};

export default TestimonialsSection;