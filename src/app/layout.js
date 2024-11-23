import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ScheduleProvider } from "@/context/ScheduleContext";
import { PetProvider } from "@/context/PetContext";

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
        <Navbar />
        <PetProvider>
          <ScheduleProvider>{children}</ScheduleProvider>
        </PetProvider>
        <Footer key={Math.random()} />
      </body>
    </html>
  );
}
