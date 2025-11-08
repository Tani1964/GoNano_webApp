import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="12" cy="12" r="4" fill="#8b7dff" />
                <circle cx="28" cy="12" r="4" fill="#8b7dff" />
                <circle cx="12" cy="28" r="4" fill="#8b7dff" />
                <circle cx="28" cy="28" r="4" fill="#8b7dff" />
                <path d="M12 16 L12 24" stroke="#8b7dff" strokeWidth="2" />
                <path d="M28 16 L28 24" stroke="#8b7dff" strokeWidth="2" />
              </svg>
              <span className="text-2xl font-bold text-gray-900">gonano</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Molecular-level protection for roofs, wood, and concrete. Invisible nanotech treatments that extend the life of your surfaces—without coatings, mess, or disruption.
            </p>
            <a href="#how-it-works" className="inline-flex items-center text-sm text-gray-900 hover:text-[#8b7dff] transition-colors">
              Learn how it works <span className="ml-1">→</span>
            </a>
            <button className="bg-[#675CE7] hover:bg-[#7a6bef] text-white font-semibold px-8 py-3 rounded transition-colors mt-4">
              GET A QUOTE
            </button>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><a href="#financing" className="hover:text-[#8b7dff] transition-colors">Financing</a></li>
              <li><a href="#why-it-works" className="hover:text-[#8b7dff] transition-colors">Why It Works</a></li>
              <li><a href="#services" className="hover:text-[#8b7dff] transition-colors">Services</a></li>
              <li><a href="#science" className="hover:text-[#8b7dff] transition-colors">The Science</a></li>
              <li><a href="#about" className="hover:text-[#8b7dff] transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-[#8b7dff] transition-colors">Testimonials</a></li>
              <li><a href="#faqs" className="hover:text-[#8b7dff] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><a href="#roof-water" className="hover:text-[#8b7dff] transition-colors">Roof Water Repellent Treatment</a></li>
              <li><a href="#wood-deck" className="hover:text-[#8b7dff] transition-colors">Concrete Deck & Fence Protection</a></li>
              <li><a href="#eco-friendly" className="hover:text-[#8b7dff] transition-colors">Eco-Friendly Surface Treatment</a></li>
              <li><a href="#hydrophobic" className="hover:text-[#8b7dff] transition-colors">Hydrophobic Shingle Coating Alternative</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact & Coverage */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact & Coverage</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+1 (512) 538-4801" className="flex items-center gap-2 text-gray-700 hover:text-[#8b7dff] transition-colors">
                <Phone size={16} />
                +1 (512) 538-4801
              </a>
              <a href="mailto:info@jolawtinternational.com" className="flex items-center gap-2 text-[#8b7dff] hover:text-[#7a6bef] transition-colors">
                <Mail size={16} />
                info@jolawtinternational.com
              </a>
              <div className="mt-4">
                <p className="font-semibold text-gray-900 mb-2">Serving:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Austin</li>
                  <li>• Dripping Springs</li>
                  <li>• Kyle</li>
                  <li>• Buda</li>
                  <li>• Lockhart</li>
                  <li>• Driftwood</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8 mb-8">
          {/* Brand & Description */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="12" cy="12" r="4" fill="#8b7dff" />
                <circle cx="28" cy="12" r="4" fill="#8b7dff" />
                <circle cx="12" cy="28" r="4" fill="#8b7dff" />
                <circle cx="28" cy="28" r="4" fill="#8b7dff" />
                <path d="M12 16 L12 24" stroke="#8b7dff" strokeWidth="2" />
                <path d="M28 16 L28 24" stroke="#8b7dff" strokeWidth="2" />
              </svg>
              <span className="text-2xl font-bold text-gray-900">gonano</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed px-4">
              Molecular-level protection for roofs, wood, and concrete. Invisible nanotech treatments that extend the life of your surfaces—without coatings, mess, or disruption.
            </p>
            <a href="#how-it-works" className="inline-flex items-center text-sm text-gray-900 hover:text-[#8b7dff] transition-colors">
              Learn how it works <span className="ml-1">→</span>
            </a>
            <button className="bg-[#675CE7] hover:bg-[#7a6bef] text-white font-semibold px-8 py-3 rounded transition-colors w-full max-w-xs mx-auto block">
              GET A QUOTE
            </button>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><a href="#financing" className="hover:text-[#8b7dff] transition-colors">Financing</a></li>
              <li><a href="#why-it-works" className="hover:text-[#8b7dff] transition-colors">Why It Works</a></li>
              <li><a href="#services" className="hover:text-[#8b7dff] transition-colors">Services</a></li>
              <li><a href="#science" className="hover:text-[#8b7dff] transition-colors">The Science</a></li>
              <li><a href="#about" className="hover:text-[#8b7dff] transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-[#8b7dff] transition-colors">Testimonials</a></li>
              <li><a href="#faqs" className="hover:text-[#8b7dff] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="text-center">
            <h3 className="font-bold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><a href="#roof-water" className="hover:text-[#8b7dff] transition-colors">Roof Water Repellent Treatment</a></li>
              <li><a href="#wood-deck" className="hover:text-[#8b7dff] transition-colors">Concrete Deck & Fence Protection</a></li>
              <li><a href="#eco-friendly" className="hover:text-[#8b7dff] transition-colors">Eco-Friendly Surface Treatment</a></li>
              <li><a href="#hydrophobic" className="hover:text-[#8b7dff] transition-colors">Hydrophobic Shingle Coating Alternative</a></li>
            </ul>
          </div>

          {/* Contact & Coverage */}
          <div className="text-center">
            <h3 className="font-bold text-gray-900 mb-4">Contact & Coverage</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+1 (512) 538-4801" className="flex items-center justify-center gap-2 text-gray-700 hover:text-[#8b7dff] transition-colors">
                <Phone size={16} />
                +1 (512) 538-4801
              </a>
              <a href="mailto:info@jolawtinternational.com" className="flex items-center justify-center gap-2 text-[#8b7dff] hover:text-[#7a6bef] transition-colors">
                <Mail size={16} />
                info@jolawtinternational.com
              </a>
              <div className="mt-4">
                <p className="font-semibold text-gray-900 mb-2">Serving:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Austin</li>
                  <li>• Dripping Springs</li>
                  <li>• Kyle</li>
                  <li>• Buda</li>
                  <li>• Lockhart</li>
                  <li>• Driftwood</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Social */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center space-y-4">
            <p className="text-xs text-gray-600">
              Copyright 2025. GoNano Austin. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-600">
              GoNano Austin is an independent authorized reseller and installer of GoNano Nanotechnology
            </p>
            <div className="flex items-center justify-center gap-2 text-xs">
              <a href="#privacy" className="text-[#8b7dff] hover:text-[#7a6bef] transition-colors">Privacy Policy</a>
              <span className="text-gray-400">|</span>
              <a href="#terms" className="text-[#8b7dff] hover:text-[#7a6bef] transition-colors">Terms of Service</a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6 pt-4">
              <a href="#facebook" className="text-gray-600 hover:text-[#8b7dff] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#instagram" className="text-gray-600 hover:text-[#8b7dff] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#linkedin" className="text-gray-600 hover:text-[#8b7dff] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#youtube" className="text-gray-600 hover:text-[#8b7dff] transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#pinterest" className="text-gray-600 hover:text-[#8b7dff] transition-colors" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 21c0-5 3-8 6-8 2 0 3 1 3 3 0 3-2 5-4 5-1 0-2-1-1-3 0-1 1-3 1-3"/>
                </svg>
              </a>
              <a href="#tiktok" className="text-gray-600 hover:text-[#8b7dff] transition-colors" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#twitter" className="text-gray-600 hover:text-[#8b7dff] transition-colors" aria-label="Twitter/X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;