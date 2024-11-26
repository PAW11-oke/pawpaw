// utils/jwt.js
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRE_TIME = '1d'; // 1 days

export function generateToken(userId) {
    try {
        return jwt.sign(
            { userId },
            JWT_SECRET,
            { expiresIn: TOKEN_EXPIRE_TIME }
        );
    } catch (error) {
        console.error('Error generating token:', error);
        throw new Error('Failed to generate token');
    }
}

export function verifyToken(token) {
    try {
        console.log('Verifying token:', token);
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log('Token verified, decoded payload:', decoded);
        return decoded;
    } catch (error) {
        console.error('Token verification error:', error.message);
        return null;
    }
}


export function getUserIdFromToken(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded.userId;
    } catch (error) {
        console.error('Error extracting user ID from token:', error);
        return null;
    }
}

export function isTokenExpired(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime;
    } catch (error) {
        return true; // Consider invalid tokens as expired
    }
}

export function extractTokenFromHeader(authHeader) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('Invalid header format');
        return null;
    }
    return authHeader.split(' ')[1]; // Mengambil bagian token
}