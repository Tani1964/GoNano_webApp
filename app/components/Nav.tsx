"use client";
import Logo from "@/public/images/logo.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useEstimate } from "../contexts/EstimateContext";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { setOpenEstimate } = useEstimate();

  return (
    <div className="bg-white  fixed w-full top-0 left-0 right-0 z-50">
      {/* Desktop & Mobile Navigation */}
      <nav className="fixed mx-5 mt-4 top-0 left-0 right-0 z-50 bg-[#1D1E40] text-white">
        <div className="mx-4 h-20 flex items-center justify-between">
          {/* Logo */}
          {/* <div className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="12" cy="12" r="4" fill="#8b7dff" />
              <circle cx="28" cy="12" r="4" fill="#8b7dff" />
              <circle cx="12" cy="28" r="4" fill="#8b7dff" />
              <circle cx="28" cy="28" r="4" fill="#8b7dff" />
              <path d="M12 16 L12 24" stroke="#8b7dff" strokeWidth="2" />
              <path d="M28 16 L28 24" stroke="#8b7dff" strokeWidth="2" />
            </svg>
            <span className="text-2xl font-bold">gonano</span>
          </div> */}
          <Image
            src={Logo}
            alt="Water beading on treated surface"
            className=" rounded-lg shadow-lg"
            width={250}
            height={150}
            priority
          />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-white hover:bg-[#8b7dff] transition-colors p-2"
            >
              Home
            </a>
            <a
              href="#why-it-works"
              className="text-white hover:bg-[#8b7dff] transition-colors p-2"
            >
              Why It Works
            </a>
            <a
              href="#services"
              className="text-white hover:bg-[#8b7dff] transition-colors p-2"
            >
              Services
            </a>
            <a
              href="#faqs"
              className="text-white hover:bg-[#8b7dff] transition-colors p-2"
            >
              FAQs
            </a>
          </div>

          {/* Desktop CTA Button */}
          <button
            onClick={() => setOpenEstimate(true)}
            className="hidden md:block bg-[#675CE7] hover:bg-[#7a6bef] text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            BOOK FREE ESTIMATE
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#2a2449] z-50 md:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="mx-4 h-20 flex items-center justify-between">
              {/* <div className="flex items-center gap-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="12" cy="12" r="4" fill="#8b7dff" />
                  <circle cx="28" cy="12" r="4" fill="#8b7dff" />
                  <circle cx="12" cy="28" r="4" fill="#8b7dff" />
                  <circle cx="28" cy="28" r="4" fill="#8b7dff" />
                  <path d="M12 16 L12 24" stroke="#8b7dff" strokeWidth="2" />
                  <path d="M28 16 L28 24" stroke="#8b7dff" strokeWidth="2" />
                </svg>
                <span className="text-2xl font-bold text-white">gonano</span>
              </div> */}
              <Image
                src={Logo}
                alt="Water beading on treated surface"
                className=" rounded-lg shadow-lg"
                width={250}
                height={150}
                priority
              />
              <button
                onClick={toggleMenu}
                className="p-2 text-white"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col items-center justify-start pt-12 gap-8 text-white text-xl">
              <a
                href="#home"
                onClick={toggleMenu}
                className="hover:text-[#8b7dff] transition-colors"
              >
                Home
              </a>
              <a
                href="#why-it-works"
                onClick={toggleMenu}
                className="hover:text-[#8b7dff] transition-colors"
              >
                Why It Works
              </a>
              <a
                href="#services"
                onClick={toggleMenu}
                className="hover:text-[#8b7dff] transition-colors"
              >
                Services
              </a>
              <a
                href="#faqs"
                onClick={toggleMenu}
                className="hover:text-[#8b7dff] transition-colors"
              >
                FAQs
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-20"></div>
    </div>
  );
};

export default Nav;
