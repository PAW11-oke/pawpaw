"use client";

import React from "react";

export default function ScheduleCard({ schedule }) {
  const formatDay = (dateString) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const formatMonth = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", { month: "short" }).toUpperCase();
  };

  return (
    <div className="flex flex-col gap-6">
      {schedule.map((item, index) => (
        <div
          key={index}
          className="flex flex-wrap items-center bg-[#FFF2F3] rounded-lg shadow-md h-[120px]"
        >
          
          <div className="relative top-0 left-0 h-full w-[4px] h-[120px] bg-[#FFBCC3] rounded-l-lg"></div>
          
          {/* Kolom Tanggal */}
          <div className="flex flex-col items-center justify-center text-[#FFBCC3] ml-36 flex-shrink-0">
            <span className="text-[40px] font-bold">{formatDay(item.dateGrooming)}</span>
            <span className="text-[26px] font-bold">{formatMonth(item.dateGrooming)}</span>
          </div>

          {/* Baris Nama */}
          <div className="flex items-center justify-start text-[#FFBCC3] ml-36 text-[40px] font-bold w-64 flex-shrink-0">{item.petName}</div>

          {/* Baris waktu, lokasi */}
          <div className="flex flex-col text-[#949191] ml-20 w-20 flex-shrink-0">
            <span className="text-[16px] font-medium">{item.timeGrooming}</span>
            <span className="text-[16px] font-medium">{item.location}</span>
          </div>

          {/* Baris Catatan */}
          {item.notes && (
            <div className="flex flex-col text-[16px] text-[#949191] ml-32 flex-shrink-0">
              <strong>Catatan:</strong> {item.notes}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
