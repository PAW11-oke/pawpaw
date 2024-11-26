import { connectToDatabase } from '@/utils/dbConfig';
import { NextResponse } from 'next/server';
import User from '@/models/userModel';
import { authMiddleware } from '@/utils/authMiddleware';
import { uploadImage } from '@/utils/uploadImage';

export async function POST(req) {
    try {
      // Periksa autentikasi

    //   const authResult = await authMiddleware(req);
    //   if (!authResult || authResult.status === 401) {
    //     return new Response("Unauthorized", { status: 401 });
    //   }
  
      // Sambungkan ke database
      await connectToDatabase();
  
      const formData = await req.formData();
      const id = formData.get("id"); // Ambil ID dari FormData
      const name = formData.get("name");
      const photo = formData.get("photo");
  
      if (!id || !name) {
        return new Response(
          JSON.stringify({ error: "ID and Name are required." }),
          { status: 400 }
        );
      }
  
      // Tangani unggahan foto jika tersedia
      let photoUrl = null;
      if (photo && photo.size > 0) {
        const uploadResult = await uploadImage(photo, "profile");
        if (uploadResult.error) {
          return new Response(
            JSON.stringify({ error: "Failed to upload photo." }),
            { status: 400 }
          );
        }
        photoUrl = uploadResult.secure_url;
      }
  
      // Perbarui atau buat profil pengguna dengan ID khusus
      const updatedProfile = await User.findOneAndUpdate(
        { _id: '67459fc1a119f82a0b057830' }, // Cari berdasarkan ID
        {
          name,
          ...(photoUrl && { photoProfile: photoUrl }),
        },
        { new: true, upsert: true } // Buat dokumen baru jika tidak ditemukan
      );
  
      return new Response(
        JSON.stringify({
          success: true,
          data: updatedProfile,
        }),
        { status: 201 }
      );
    } catch (error) {
      console.error("Error updating profile:", error);
      return new Response(
        JSON.stringify({ error: "Failed to update profile." }),
        { status: 500 }
      );
    }
  }