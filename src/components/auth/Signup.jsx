"use client";

import Image from "next/image";
import { useState } from "react";

import AuthOuterBox from "./AuthOuterBox";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";

const Signup = () => {
  const [signUpData, setSignUpData] = useState();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
});
const [message, setMessage] = useState('');

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        setMessage(data.message);
        if (data.success) {
            setTimeout(() => window.location.href = '/login', 3000); 
        }
    } catch (error) {
        setMessage('Something went wrong');
    }
};
  return (
    <div className="relative w-screen max-w-full h-[110vh] py-40 overflow-x-clip grid place-content-center mt-10">
      <AuthOuterBox auth="sign up">
        {/* Username */}
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="username" className="text-black text-base">
            Username
          </label>
          <div className="relative w-full">
            <input
              id="username"
              name="username"
              onChange={handleChange}
              value={formData.username}
              placeholder="username"
              spellCheck="false"
              className="py-2 pl-14 flex items-center border-[#CBD5E1] focus:border-pink-main border-2 rounded-full text-black text-base outline-none w-full"
            />
            <FaRegUser className="absolute left-4 bottom-1/2 translate-y-1/2 text-xl" />
          </div>
        </div>

        {/* Email */}
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="email" className="text-black text-base">
            Email Address
          </label>
          <div className="relative w-full">
            <input
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="youremail@gmail.com"
              spellCheck="false"
              className="py-2 pl-14 flex items-center border-[#CBD5E1] focus:border-pink-main border-2 rounded-full text-black text-base outline-none w-full"
            />
            <MdOutlineEmail className="absolute left-4 bottom-1/2 translate-y-1/2 text-xl" />
          </div>
        </div>

        {/* Password */}
        <div className="w-full flex flex-col gap-y-2">
          <label htmlFor="password" className="text-black text-base">
            Password
          </label>
          <div className="relative w-full">
            <input
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="********"
              spellCheck="false"
              className="py-2 pl-14 flex items-center border-[#CBD5E1] focus:border-pink-main border-2 rounded-full text-black text-base outline-none w-full"
            />
            <FiLock className="absolute left-4 bottom-1/2 translate-y-1/2 text-xl" />
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSubmit}
          className="w-full flex justify-center items-center gap-x-2 text-white font-bold bg-pink-main rounded-full py-2">
          Sign Up
          <MdLogin className="text-lg text-white" />
        </button>

        {/* Don't Have an Account */}
        <div className="w-full flex justify-center items-center gap-x-2 text-sm text-black font-bold">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-main">
            Sign In
          </Link>
        </div>
      </AuthOuterBox>

      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-40 aspect-[97/202]">
        <Image
          src="/decor/paw_kiri_bawah_pink.png"
          alt="decoration"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>
      <div className="absolute right-0 top-20 w-20 aspect-[99/261]">
        <Image
          src="/decor/tulang_kanan_pink.png"
          alt="decoration"
          fill
          style={{ objectFit: "contain" }}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Signup;
