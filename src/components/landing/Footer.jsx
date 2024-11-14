"use client";

import React from 'react';
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FFBCC3] text-[#ffffff] flex flex-col md:flex-row items-center justify-between px-8 rounded-t-[30px]">
      <div className="text-[16px] text-white mt-4 md:mt-0">&copy; 2024 PawPaw. All rights reserved.</div>
      <div className="flex items-center">
        <img src="/icons/FooterLogo.png" alt="Paw Icon" className="h-[140px]" /> {/* Sesuaikan path icon */}
      </div>
      <div className="flex space-x-4 text-[16px] text-white mt-4 md:mt-0 gap-[50px]">
        <a href="/terms" className="hover:underline">Terms of Service</a>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
