"use client";

import Link from "next/link";
import { MdOutlineSave } from "react-icons/md";
import { LuPencilLine } from "react-icons/lu";
import { useState } from "react";
import Image from "next/image";

const Profile = () => {
  const [profilePhoto, setProfilePhoto] = useState(
    "/DefaultProfilePicture.png"
  );
  const [name, setName] = useState("");
  const [photoFile, setPhotoFile] = useState(null); // Menyimpan file foto asli
  const [statusMessage, setStatusMessage] = useState(""); // Untuk feedback

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file); // Simpan file untuk dikirim ke backend
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setStatusMessage("Name is required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    if (photoFile) {
      formData.append("photo", photoFile);
    }

    const token = localStorage.getItem("jwtToken");
    console.log("Token:", token);

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        header:{
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        setStatusMessage(`Error: ${error.error}`);
        return;
      }

      const data = await response.json();
      setStatusMessage("Profile updated successfully!");
      console.log("Updated profile:", data);
    } catch (error) {
      console.error("Error updating profile:", error);
      setStatusMessage("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="relative w-screen max-w-full h-[95vh] py-40 overflow-x-clip grid place-content-center mt-10">
      <div className="h-fit py-6 px-8 w-[440px] flex flex-col items-center gap-y-6 rounded-[32px] border-[#CBD5E1] border-2 shadow-[0_0.52vw_1.56vw_0_rgba(0,0,0,0.15)] z-0">
        <h1 className="font-bold text-3xl text-black">Your Pawrent Profile</h1>

        {/* Profile photo container */}
        <p>Tambahkan Foto</p>
        <div className="relative">
          <label htmlFor="profilePhotoInput" className="cursor-pointer">
            <div className="relative w-28 aspect-square rounded-full object-cover border-2 border-gray-300">
              <Image
                src={profilePhoto}
                alt="Profile"
                fill
                style={{ objectFit: "cover" }}
                draggable="false"
              />
            </div>
            {/* Edit icon */}
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 border-2 border-gray-300">
              <LuPencilLine className="text-pink-main text-2xl" />
            </div>
          </label>
          <input
            id="profilePhotoInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>

        {/* Name Input */}
        <div className="w-full">
          <label
            htmlFor="nameInput"
            className="block text-gray-700 font-bold mb-2">
            Your Name:
          </label>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Your name"
            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-pink-main focus:outline-none rounded-full"
          />
        </div>

        {/* Save button */}
        <button
          onClick={handleSubmit}
          className="w-full flex justify-center items-center gap-x-2 text-white font-bold bg-pink-main rounded-full py-2">
          Save
          <MdOutlineSave className="text-lg text-white" />
        </button>
      </div>
    </div>
  );
};

export default Profile;
