import NextAuth from "next-auth/next";
import bcrypt from 'bcrypt';
import CredentialsProviders from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { connectDB } from "@/lib/connectDB";

const handler = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60  // days * hours * minutes * seconds
    },
    providers: [
        CredentialsProviders({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                // get email & password.
                const { email, password } = credentials;

                // check is empty email & password or not
                if (!email || !password) {
                    return null;
                }

                // connect to db and get the current user details from DB.
                const db = await connectDB();
                const currentUser = await db.collection("users").findOne({email});

                // if user not found from db
                if (!currentUser) {
                    return null;
                }

                // match submitted login password with current user password
                const matchPassword = bcrypt.compare(password, currentUser.password);
                if (!matchPassword) {
                    return null;
                }

                // finally return the user.
                return currentUser;
            }
        }),

        // sign in/up with google account
        GoogleProvider({
            clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET
        }),
    ],
    pages: {
        signIn: "/sign-in"
    }
});

export {handler as GET, handler as POST};