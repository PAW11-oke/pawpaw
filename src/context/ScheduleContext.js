"use client";

import React, { createContext, useContext, useState } from "react";

const mock_schedules = [
  {
    schedule_id: "schedule1",
    nama: "Milo",
    tanggal: new Date("2021-03-15"),
    jam: "10:30",
    tempat: "Jakal Atas",
    catatan: "kasian Milo",
  },
  {
    schedule_id: "schedule2",
    nama: "Rocky",
    tanggal: new Date("2021-03-15"),
    jam: "08:10",
    tempat: "Jakal Bawah",
    catatan: "semangat Rocky",
  },
];

const ScheduleContext = createContext(undefined);

export const ScheduleProvider = ({ children }) => {
  const [schedules, setSchedules] = useState(mock_schedules);

  const addSchedule = (newSchedule) => {
    setSchedules((prev) => [...prev, newSchedule]);
  };

  return (
    <ScheduleContext.Provider value={{ schedules, addSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => useContext(ScheduleContext);
