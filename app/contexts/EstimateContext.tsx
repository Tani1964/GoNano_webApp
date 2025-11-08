'use client';

import React, { createContext, useContext, useState } from 'react';

interface EstimateContextType {
  openEstimate: boolean;
  setOpenEstimate: (open: boolean) => void;
}

const EstimateContext = createContext<EstimateContextType | undefined>(undefined);

export function EstimateProvider({ children }: { children: React.ReactNode }) {
  const [openEstimate, setOpenEstimate] = useState(false);

  return (
    <EstimateContext.Provider value={{ openEstimate, setOpenEstimate }}>
      {children}
    </EstimateContext.Provider>
  );
}

export function useEstimate() {
  const context = useContext(EstimateContext);
  if (context === undefined) {
    throw new Error('useEstimate must be used within an EstimateProvider');
  }
  return context;
}