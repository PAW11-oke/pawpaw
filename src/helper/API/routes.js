import { FiLogOut } from "react-icons/fi";

// config/apiRoutes.js
const mainRoute = process.env.NEXT_PUBLIC_API_URL;

// Pastikan mainRoute tidak undefined
if (!mainRoute) {
    console.warn('NEXT_PUBLIC_API_URL is not defined in environment variables');
}

export const apiRoutes = {
    auth: {
        login: `${mainRoute}/auth/login`,
        googleAuth: `${mainRoute}/auth/google`, // Perbaikan nama dan path
        signup: `${mainRoute}/auth/signup`,
        verifyEmail: `${mainRoute}/auth/verify-email/[token]`, // Konsistensi penamaan
        refreshToken: `${mainRoute}/auth/refresh-token`,
        forgotPassword: `${mainRoute}/auth/forgot-password`,
        resetPassword: `${mainRoute}/auth/reset-password`,
        logout: `${mainRoute}/auth/logout`, 
    },
    dailyActivities: { // Menggunakan camelCase untuk konsistensi
        base: `${mainRoute}/daily-activities`,
        getAll: `${mainRoute}/daily-activities`,
        getById: (id) => `${mainRoute}/daily-activities/${id}`,
        create: `${mainRoute}/daily-activities`,
        update: (id) => `${mainRoute}/daily-activities/${id}`,
        delete: (id) => `${mainRoute}/daily-activities/${id}`,
    },
    grooming: {
        base: `${mainRoute}/grooming`,
        getAll: `${mainRoute}/grooming`,
        getById: (id) => `${mainRoute}/grooming/${id}`,
        create: `${mainRoute}/grooming`,
        update: (id) => `${mainRoute}/grooming/${id}`,
        delete: (id) => `${mainRoute}/grooming/${id}`,
    },
    healthTracking: { // Menggunakan camelCase
        base: `${mainRoute}/health-tracking`,
        getAll: `${mainRoute}/health-tracking`,
        getById: (id) => `${mainRoute}/health-tracking/${id}`,
        create: `${mainRoute}/health-tracking`,
        update: (id) => `${mainRoute}/health-tracking/${id}`,
        delete: (id) => `${mainRoute}/health-tracking/${id}`,
    },
    pet: {
        base: `${mainRoute}/pet`,
        getAll: `${mainRoute}/pet`,
        getById: (id) => `${mainRoute}/pet/${id}`,
        create: `${mainRoute}/pet`,
        update: (id) => `${mainRoute}/pet/${id}`,
        delete: (id) => `${mainRoute}/pet/${id}`,
    }
};

// Helper untuk memastikan ID valid
export const validateId = (id) => {
    if (!id) throw new Error('ID is required');
    return String(id).trim();
};

// Contoh penggunaan dengan axios
export const createApiService = (axios) => ({
    auth: {
        login: (data) => axios.post(apiRoutes.auth.login, data),
        signup: (data) => axios.post(apiRoutes.auth.signup, data),
        verifyEmail: (token) => axios.post(apiRoutes.auth.verifyEmail, { token }),
        googleAuth: () => axios.get(apiRoutes.auth.googleAuth),
        logout: () => axios.post(apiRoutes.auth.logout),
    },
    dailyActivities: {
        getAll: () => axios.get(apiRoutes.dailyActivities.getAll),
        getById: (id) => axios.get(apiRoutes.dailyActivities.getById(validateId(id))),
        create: (data) => axios.post(apiRoutes.dailyActivities.create, data),
        update: (id, data) => axios.put(apiRoutes.dailyActivities.update(validateId(id)), data),
        delete: (id) => axios.delete(apiRoutes.dailyActivities.delete(validateId(id))),
    },
    // ... serupa untuk endpoint lainnya
});