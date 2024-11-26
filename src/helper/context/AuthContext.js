"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./ToastContext";
import apiService from "@/helper/API/services";

const AuthContext = createContext();

const auth_data_present = {
    user_id: "user1",
    email: "email@gmail.com",
    password: "secret",
    foto: "/DefaultProfilePicture.png",
    username: "pawrent",
  };

  const auth_data_null = undefined;


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({auth_data_present}) // State untuk menyimpan data user

    const login = (user) => { setUser(user);};
  
    const logout = () => {
      setUser(null); // Hapus data user dari state
    };

    const updateUser = (updatedData) => {
        setUser((prevUser) => ({ ...prevUser, ...updatedData }));
      };
    
    // [loading, setLoading] = useState(true);
    // const router = useRouter();
    // const { showToast } = useToast();

    // Check if user is authenticated on mount
    // useEffect(() => {
    //     const initAuth = async () => {
    //         try {
    //             const token = localStorage.getItem('token');
    //             if (token) {
    //                 const response = await apiService.auth.getProfile();
    //                 setUser(response.data);
    //             }
    //         } catch (error) {
    //             console.error('Auth initialization failed:', error);
    //             localStorage.removeItem('token');
    //             localStorage.removeItem('refreshToken');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     initAuth();
    // }, []);

    // const onLogin = async (email, password) => {
    //     try {
    //         const response = await api.auth.login({
    //             email,
    //             password,
    //         });

    //         const { token, user: user } = response.json();
            
    //         localStorage.setItem('token', token);
    //         localStorage.setItem('user', JSON.stringify(user)); // Simpan user data
            
    //         // Update state user
    //         setUser(user);
    //         // Save tokens
                        
    //         // Navigate to dashboard
    //         router.push("/");
            
    //         return response.data;
    //     } catch (error) {
    //         const errorMessage = error.response?.data?.message || "Login gagal";
    //         throw new Error(errorMessage);
    //     }
    // };

    // const onSignup = async (userData) => {
    //     try {
    //         const response = await apiService.auth.signup(userData);
    //         showToast("Pendaftaran berhasil! Silakan cek email Anda untuk verifikasi.", "success");
    //         return response.data;
    //     } catch (error) {
    //         const errorMessage = error.response?.data?.message || "Pendaftaran gagal";
    //         throw new Error(errorMessage);
    //     }
    // };

    // const onGoogleLogin = async () => {
    //     try {
    //         const response = await apiService.auth.googleAuth();
            
    //         const { token, refresh_token, user: userData } = response.data;
            
    //         localStorage.setItem('token', token);
    //         localStorage.setItem('refreshToken', refresh_token);
    //         setUser(userData);
            
    //         router.push("/dashboard");
    //         return response.data;
    //     } catch (error) {
    //         const errorMessage = error.response?.data?.message || "Google login gagal";
    //         throw new Error(errorMessage);
    //     }
    // };

    // const verifyEmail = async (token) => {
    //     try {
    //         const response = await apiService.auth.verifyEmail(token);
    //         showToast("Email berhasil diverifikasi!", "success");
    //         return response.data;
    //     } catch (error) {
    //         const errorMessage = error.response?.data?.message || "Verifikasi email gagal";
    //         throw new Error(errorMessage);
    //     }
    // };

    // const forgotPassword = async (email) => {
    //     try {
    //         await apiService.auth.forgotPassword({ email });
    //         showToast("Link reset password telah dikirim ke email Anda!", "success");
    //     } catch (error) {
    //         const errorMessage = error.response?.data?.message || "Gagal mengirim reset password";
    //         throw new Error(errorMessage);
    //     }
    // };

    // const resetPassword = async (token, newPassword) => {
    //     try {
    //         await apiService.auth.resetPassword({
    //             token,
    //             new_password: newPassword
    //         });
    //         showToast("Password berhasil direset!", "success");
    //     } catch (error) {
    //         const errorMessage = error.response?.data?.message || "Reset password gagal";
    //         throw new Error(errorMessage);
    //     }
    // };

    // // const logout = async () => {
    // //     const router = useRouter();
    // //     const [loading, setLoading] = useState(false);

        
    // //         try {
    // //         setLoading(true);
        
    // //         // Panggil API logout
    // //         await apiService.auth.logout();
        
    // //         // Hapus data auth dari lokal
    // //         clearAuthData();
        
    // //         // Redirect ke halaman login
    // //         router.push("/login");
        
    // //         // Tampilkan pesan sukses
    // //         showToast("Berhasil logout!", "success");
    // //         } catch (error) {
    // //         console.error("Logout error:", error);
        
    // //         // Tetap hapus data auth meskipun API gagal
    // //         clearAuthData();
        
    // //         // Tampilkan pesan error
    // //         showToast("Terjadi kesalahan, tetapi Anda telah logout", "info");
    // //         } finally {
    // //         setLoading(false);
    // //     }
    // // };

    // const updateProfile = async (userData) => {
    //     try {
    //         const response = await apiService.auth.updateProfile(userData);
    //         setUser(response.data);
    //         showToast("Profil berhasil diperbarui!", "success");
    //         return response.data;
    //     } catch (error) {
    //         const errorMessage = error.response?.data?.message || "Update profil gagal";
    //         throw new Error(errorMessage);
    //     }
    // };

    // const changePassword = async (oldPassword, newPassword) => {
    //     try {
    //         await apiService.auth.changePassword({
    //             old_password: oldPassword,
    //             new_password: newPassword
    //         });
    //         showToast("Password berhasil diubah!", "success");
    //     } catch (error) {
    //         const errorMessage = error.response?.data?.message || "Gagal mengubah password";
    //         throw new Error(errorMessage);
    //     }
    // };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser: updateUser,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);