import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/dbConfig";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

export async function POST(request) {
  await connectToDatabase();

  try {
    const { email, password } = await request.json();

    // Validasi input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Cari user di database
    const user = await User.findOne({ email }).select("+password profilePicture name email");
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Bandingkan password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    // Generate token JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",

    });

    console.log("User logged in:", user);
    console.log("Token generated:", token);

    const response = NextResponse.json(
      {
        token: token,
        user: {
          id: user._id,
          username: user.name,
          email: user.email,
          profilePicture: user.profilePicture, // Sertakan foto profil
        },
      },
      { status: 200 }
    );

    // Set cookie dengan token
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 jam
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Login failed", error: error.message },
      { status: 500 }
    );
  }
}
