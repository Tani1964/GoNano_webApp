"use client";
import React from "react";
import { useEstimate } from "../contexts/EstimateContext";

const BookEstimateButton = () => {
  const { setOpenEstimate } = useEstimate();
  return (
    <button onClick={() => setOpenEstimate(true)} className="bg-[#675CE7] hover:bg-[#6b5dff] text-white font-bold px-8 md:px-12 py-4 rounded text-base md:text-lg transition-colors">
      BOOK YOUR FREE ESTIMATE
    </button>
  );
};

export default BookEstimateButton;
