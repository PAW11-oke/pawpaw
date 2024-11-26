// services/api.js
import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // URL API diambil dari environment
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor untuk menambahkan token ke header (jika ada)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Interceptor untuk menangani error global
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Redirect ke login jika tidak terautentikasi
            localStorage.removeItem("token"); // Hapus token
            window.location.href = "/login"; // Redirect ke halaman login
        }
        return Promise.reject(error); // Tangani error lainnya
    }
);

export default api;