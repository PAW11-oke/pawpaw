// utils/nextAuthConfig.js
import GoogleProvider from 'next-auth/providers/google';
import { connectToDatabase } from './dbConfig';
import User from '@/models/userModel';
import { generateToken } from './jwt';

const nextAuthConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === 'google') {
                try {
                    await connectToDatabase();
                    
                    // Cek user berdasarkan googleId terlebih dahulu
                    let existingUser = await User.findOne({ googleId: profile.sub });

                    if (!existingUser) {
                        // Jika tidak ada user dengan googleId tersebut
                        // Cek apakah email sudah terdaftar
                        const userWithEmail = await User.findOne({ email: profile.email });

                        if (userWithEmail) {
                            // Jika email sudah ada, update dengan googleId
                            existingUser = await User.findOneAndUpdate(
                                { email: profile.email },
                                { 
                                    $set: {
                                        googleId: profile.sub,
                                        name: profile.name,
                                        profilePicture: profile.picture
                                    }
                                },
                                { new: true }
                            );
                        } else {
                            // Jika benar-benar user baru, buat user baru
                            existingUser = await User.create({
                                googleId: profile.sub,
                                email: profile.email,
                                name: profile.name,
                                profilePicture: profile.picture
                            });
                        }
                    } else {
                        // Update informasi user yang sudah ada
                        existingUser = await User.findOneAndUpdate(
                            { googleId: profile.sub },
                            { 
                                $set: {
                                    name: profile.name,
                                    profilePicture: profile.picture
                                }
                            },
                            { new: true }
                        );
                    }

                    user.id = existingUser._id;
                    return true;
                } catch (error) {
                    console.error('Sign in error:', error);
                    return false;
                }
            }
            return false;
        },
        async jwt({ token, user, account }) {
            if (user && account) {
                const jwtToken = generateToken(user.id);
                token.accessToken = jwtToken;
                token.userId = user.id;
            }
            console.log('JWT token:', token);
            return token;
        },
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl;
        }
    },
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error'
    }
};

export default nextAuthConfig;