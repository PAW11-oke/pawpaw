import { NextResponse } from "next/server";

export async function POST() {
    try {
      const response = NextResponse.json(
        { success: true, message: "Logout successful" },
        { status: 200 }
      );
  
      // Hapus cookie token
      response.cookies.set("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 0, // Set cookie expired
        path: "/",
      });
  
      return response;
    } catch (error) {
      console.error("Logout error:", error);
      return NextResponse.json(
        { success: false, message: "Logout failed" },
        { status: 500 }
      );
    }
  }