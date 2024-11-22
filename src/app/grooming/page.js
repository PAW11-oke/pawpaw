"use client";

import React from "react";
import ScheduleCard from "@/components/grooming/ScheduleCard";
import AddButton from "@/components/grooming/AddButton";
import { useSchedule } from "@/context/ScheduleContext";

export default function Grooming() {
  const scheduleContext = useSchedule();

  return (
    <div className="min-h-screen bg-white relative pt-[80px]">
      {/* Header Section */}
      <header
        className="relative w-full min-h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url('/bgGrooming.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-[48px] font-bold mt-[180px]">Grooming Schedule</h1>
          <p className="text-[14px] mt-2">
            Pengatur jadwal grooming hewan peliharaan kesayangan Anda
          </p>
        </div>
      </header>

      {/* Schedule Section */}
      <section className="p-6 sm:p-12 min-h-[500px] relative mt-8">
        <h2 className="flex items-center gap-2 text-3xl font-bold text-[#FFBCC3] ml-16">
          {/* Ikon Clock */}
          <img 
            src="/icons/clock.png" 
            alt="Clock Icon" 
            className="w-7 h-7 mr-2"
          />
          Your Schedule
        </h2>

        {/* Dekorasi Kanan 1 */}
        <div className="absolute top-[300px] right-0 w-[60px] z-0">
          <img src="/icons/SmallPaw1.png" alt="Small Paw Right 1" />
        </div>
        {/* Dekorasi Kanan 2 */}
        <div className="absolute top-[380px] right-[20px] w-[40px] z-0">
          <img src="/icons/SmallPaw2.png" alt="Small Paw Right 2" />
        </div>
        {/* Dekorasi Kiri */}
        <div className="absolute top-[20px] left-0 w-[120px] z-0">
          <img src="/icons/BlurPaw.png" alt="Blur Paw" />
        </div>

        {/* Schedule Card */}
        <div className="p-[60px] bg-white rounded-lg p-8">
          {scheduleContext?.schedule && scheduleContext?.schedule.length > 0 ? (
            // Jika ada jadwal, tampilkan ScheduleCard
            <ScheduleCard schedule={scheduleContext?.schedule} />
          ) : (
            // Jika tidak ada jadwal, tampilkan pesan
            <div className="flex flex-col items-center justify-center text-center text-[#FFBCC3]">
              <img
                src="/icons/NoSchedule.png"
                alt="No Schedule"
                className="w-24 h-24 mb-4"
              />
              <p className="text-[28px] text-black/50">
                Belum ada jadwal Grooming.
              </p>
            </div>
          )}
        </div>

        {/* Add Button */}
        <AddButton />
      </section>
    </div>
  );
}
