"use client";

import Image from "next/image";
import { useState } from "react";
import AuthOuterBox from "./AuthOuterBox";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useToast } from "@/helper/context/ToastContext";
import { useAuth } from "@/helper/context/AuthContext";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/compat/router";

const Login = () => {
  const { setUser, login, authContext } = useAuth();
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
      email: "",
      password: "",
  });

  const [loading, setLoading] = useState(false);
  const [isPasswordRemembered, setIsPasswordRemembered] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
          ...prev,
          [name]: value, // Update state sesuai input
      }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        const data = await response.json();
        const { token, user } = data;

        if (data.token) {
          // Simpan token ke localStorage atau sessionStorage
          window.localStorage.setItem("jwtToken", data.token);
          setStatusMessage("Profile updated successfully!");
        } else {
          setStatusMessage("Token not provided by the server.");
        }

        if (user) {
          login(setUser); // Simpan data user ke context

          if (authContext?.setUser) {
            authContext.setUser({
              photoprofile: user.profilePhoto,
              username: user.username,
            });
          }

          alert("Login berhasil!");
          window.location.href = "/"; // Redirect ke halaman utama
        } else {
          alert("User data not found in response!");
        }

      } else {
        const error = await response.json();
        alert(error.message || "Login gagal!");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat login!");
    }
  };

  const handleGoogleLogin = async () => {
    await signIn('google', { callbackUrl: '/chat' });
  };

  return (
    <div className="relative w-screen max-w-full h-[110vh] py-40 overflow-x-clip grid place-content-center mt-10">
      <AuthOuterBox auth="sign in">
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
          <div className="flex justify-between w-full mt-1">
            {/* Remember Passowrd Radio Btn */}
            <div className="flex gap-x-2">
              <input
                type="radio"
                checked={isPasswordRemembered === true}
                onChange={() => setIsPasswordRemembered(!isPasswordRemembered)}
                id="isPasswordRemembered"
                name="isPasswordRemembered"
                value={isPasswordRemembered}
                className="size-4 cursor-pointer"
              />
              <label
                htmlFor="isPasswordRemembered"
                className="text-sm text-black cursor-pointer">
                Remember For 30 Days
              </label>
            </div>

            {/* Forgot Password */}
            <button className="text-pink-main font-bold text-sm">
              Forgot Password
            </button>
          </div>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full flex justify-center items-center gap-x-2 text-white font-bold bg-pink-main rounded-full py-2">
          Sign In
          <MdLogin className="text-lg text-white" />
        </button>

        {/* Don't Have an Account */}
        <div className="w-full flex justify-center items-center gap-x-2 text-sm text-black font-bold">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-pink-main">
            Sign Up
          </Link>
        </div>

        <div className="w-full h-4 relative flex items-center">
          <span className="w-full h-[1px] bg-[#CBD5E1]"></span>
          <p className="absolute left-1/2 -translate-x-1/2 bg-white h-4 w-8 font-bold text-[#94A3B8] grid place-content-center text-sm">
            OR
          </p>
        </div>

        {/* Sign In with Google */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex justify-center items-center gap-x-2 text-black font-bold bg-white rounded-full py-2 border-2 border-[#CBD5E1]">
          <FcGoogle className="text-lg" />
          Sign In With Google
        </button>
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

export default Login;
