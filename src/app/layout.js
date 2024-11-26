import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import React from "react";
import { ScheduleProvider } from "@/helper/context/ScheduleContext";
import { PetProvider } from "@/helper/context/PetContext";
import { HealthTrackingProvider } from "@/helper/context/HealthTrackingContext";
import { AuthProvider } from "@/helper/context/AuthContext";
import { ToastProvider } from "@/helper/context/ToastContext";

// Configure Poppins with bold and medium weights, including italics
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"], // 500 for medium, and 700 for bold
  style: ["normal", "italic"],
});

export const metadata = {
  title: "PawPaw",
  description: "Your go-to for reliable and loving pet care.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
              <ToastProvider>
                <AuthProvider>
                    <PetProvider>
                        <ScheduleProvider>
                            <Navbar/>
                              <HealthTrackingProvider>{children}</HealthTrackingProvider>
                            <Footer key={Math.random()} />
                        </ScheduleProvider>
                    </PetProvider>
                </AuthProvider>
              </ToastProvider>
            </body>
        </html>
    );
}

