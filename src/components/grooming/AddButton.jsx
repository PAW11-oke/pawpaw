"use client";

import { useRouter } from "next/navigation";

export default function AddButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/grooming/add-schedule"); // Navigasi ke halaman untuk menambah jadwal
  };

  return (
        <button
            onClick={handleClick}
            className="fixed bottom-8 right-8 bg-[#FFBCC3] text-white w-16 h-16 rounded-[30] shadow-md flex items-center justify-center text-[30px] font-bold hover:bg-[#F3AAB5] transition">
            +
        </button>
  );
}