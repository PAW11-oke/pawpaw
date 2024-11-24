"use client";

import React, { useState } from "react";
import { useHealthTracking } from "@/context/HealthTrackingContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AddHealthTrackingForm() {
  const healthTrackingContext = useHealthTracking();
  const router = useRouter();

  const [formData, setFormData] = useState({
    petName: "",
    medicalRecord: "",
    allergy: "",
    vaccination: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHealthTracking = {
      ...formData,
      id: Date.now().toString(),
    };

    healthTrackingContext?.addHealthTracking(newHealthTracking);
    router.push("/health-tracking");
  };

  return (
    <div className="min-h-screen bg-white relative pt-[80px]">
      {/* Dekorasi Kanan 1 */}
      <div className="absolute top-[420px] -right-10 w-36 z-0 aspect-[53.71/52.64]">
        <Image
          src="/icons/SmallPaw1.png"
          alt="Small Paw Right 1"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>
      {/* Dekorasi Kanan 2 */}
      <div className="absolute top-[580px] right-[20px] w-16 z-0 aspect-[53.71/52.64]">
        <Image
          src="/icons/SmallPaw2.png"
          alt="Small Paw Right 2"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>
      {/* Dekorasi Kiri */}
      <div className="absolute top-[100px] -left-12 w-48 z-0 aspect-[53.71/52.64]">
        <Image
          src="/icons/BlurPaw.png"
          alt="Blur Paw"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>

      <main className="container mx-auto px-6 flex-grow flex flex-col items-center py-12">
        <div className="bg-white w-full max-w-2xl p-8 rounded-[30px] shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)]">
          <h2 className="text-[35px] font-bold text-[#3A3A3A]">Health Data</h2>
          <p className="text-[18px] text-gray-500 mb-6">
            Isi data kesehatan hewan peliharaan Pawrents.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-[14px] font-bold mb-2">
                  Nama Peliharaan
                </label>
                <input
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-[120px] focus:outline-none focus:ring-2 focus:ring-[#FFBCC3] text-[14px]"
                  placeholder="Nama peliharaan"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-[14px] font-bold mb-2">
                  Riwayat Penyakit
                </label>
                <textarea
                  name="medicalRecord"
                  value={formData.medicalRecord}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#FFBCC3] text-[14px]"
                  placeholder="Detail riwayat penyakit yang dimiliki"
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-[14px] font-bold mb-2">
                  Alergi
                </label>
                <textarea
                  name="allergy"
                  value={formData.allergy}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#FFBCC3] text-[14px]"
                  placeholder="Daftar alergi yang dimiliki"
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-[14px] font-bold mb-2">
                  Vaksinasi
                </label>
                <textarea
                  name="vaccination"
                  value={formData.vaccination}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#FFBCC3] text-[14px]"
                  placeholder="Daftar vaksin yang pernah dilakukan"
                  rows="3"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFBCC3] text-white py-3 rounded-[120px] font-bold text-[16px] hover:bg-[#F3AAB5] transition-colors mt-6">
              Simpan
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
