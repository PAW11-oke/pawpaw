"use client";

import React, { createContext, useContext, useState } from "react";

const HealthTrackingContext = createContext(undefined);

export const HealthTrackingProvider = ({ children }) => {
    const [ HealthTracking, setHealthTracking] = useState([]);
    
    const addHealthTracking = (newHealthTracking) => {
        setHealthTracking((prev) => [...prev, newHealthTracking]);
    };

  return (
    <HealthTrackingContext.Provider value={{ HealthTracking, addHealthTracking }}>
      {children}
    </HealthTrackingContext.Provider>
  );
};

export const useHealthTracking = () => useContext(HealthTrackingContext);
