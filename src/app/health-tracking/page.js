"use client";

import React from "react";
import AddButton from "@/components/health-tracking/AddButton";
import HealthTrackingCard from "@/components/health-tracking/HealthTrackingCard";
import { useHealthTracking } from "@/context/HealthTrackingContext";

export default function HealthTracking() {
  const HealthTrackingContext = useHealthTracking();

  return (
    <div className="min-h-screen bg-white relative pt-[80px]">
      {/* Header Section */}
      <header
        className="relative w-full min-h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url('/bgHealthTracking.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-[60px] font-bold mt-[180px]">Health Tracking</h1>
          <p className="text-[20px]">
            Pantau kesehatan hewan peliharaan kesayangan Pawrents
          </p>
        </div>
      </header>

      {/* Health Tracking Section */}
      <section className="p-6 sm:p-12 min-h-[500px] relative mt-2">
        <h2 className="flex items-center gap-2 text-3xl font-bold text-[#FFBCC3] ml-16">
          {/* Ikon Clock */}
          <img
            src="/icons/HealthData.png"
            alt="Health Data Icon"
            className="w-7 h-7 mr-2"
          />
          Data Kesehatan
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

        {/* Health Tracking Card */}
        <div className="p-[60px] bg-white rounded-lg p-8">
          {HealthTrackingContext?.HealthTracking && HealthTrackingContext?.HealthTracking.length > 0 ? (
            // Jika ada data kesehatan, maka ditampilkan
            <HealthTrackingCard HealthTracking={HealthTrackingContext?.HealthTracking} />
          ) : (
            // Jika tidak ada, tampilkan pesan
            <div className="flex flex-col items-center justify-center text-center text-[#FFBCC3]">
              <img
                src="/icons/NoHealthTracking.png"
                alt="No HealthTracking"
                className="w-24 h-24 mb-4"
              />
              <p className="text-[28px] text-black/50">
                Belum ada data kesehatan.
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
