import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

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
        <Navbar /> {/* Include Navbar here */}
        {children}
        <Footer key={Math.random()} /> {/* Tambahkan key dengan nilai acak */}
      </body>
    </html>
  );
}
