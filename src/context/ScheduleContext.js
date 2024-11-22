"use client";

import React, { createContext, useContext, useState } from "react";

const ScheduleContext = createContext(undefined);

export const ScheduleProvider = ({ children }) => {
    const [schedule, setSchedule] = useState([]);
    
    const addSchedule = (newSchedule) => {
        setSchedule((prev) => [...prev, newSchedule]);
    };

  return (
    <ScheduleContext.Provider value={{ schedule, addSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => useContext(ScheduleContext);