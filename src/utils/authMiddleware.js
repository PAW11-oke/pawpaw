import { verifyToken, extractTokenFromHeader } from '@/utils/jwt';

export async function authMiddleware(req) {
    try {
        const authHeader = req.headers.get('Authorization');
        const token = extractTokenFromHeader(authHeader);
        console.log('authHeader:', authHeader);
        console.log('token:', token);
        
        if (!token) {
            return new Response('Unauthorized: No token provided', { status: 401 });
        }

        console.log('Verifying token:', token);
        const decoded = verifyToken(token);
        if (!decoded) {
            return new Response('Unauthorized: Invalid token', { status: 401 });
        }

        // Menambahkan userId ke dalam request setelah token terverifikasi
        req.userId = decoded.userId;
        return null; // Token valid, lanjutkan ke request handler selanjutnya

    } catch (error) {
        console.error('Auth middleware error:', error);
        return new Response('Internal server error', { status: 500 });
    }
}