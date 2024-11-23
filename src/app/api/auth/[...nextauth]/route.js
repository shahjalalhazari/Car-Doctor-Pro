import NextAuth from "next-auth/next";
import bcrypt from 'bcrypt';
import CredentialsProviders from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import LinkedInProvider from "next-auth/providers/linkedin"
import { connectDB } from "@/lib/connectDB";

const handler = NextAuth({
    secret: process.env.NEXT_AUTH_SECRET,
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
                if (!email || !password) return null;

                // connect to db and get the current user details from DB.
                const db = await connectDB();
                const currentUser = await db.collection("users").findOne({email});

                // if user not found from db
                if (!currentUser) return null;

                // match submitted login password with current user password
                const matchPassword = await bcrypt.compare(password, currentUser.password);
                
                // finally return the user.
                return matchPassword ? currentUser : null;
            }
        }),

        // sign in/up with google account
        GoogleProvider({
            clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET
        }),

        // sign in with facebook
        FacebookProvider({
            clientId: process.env.NEXT_AUTH_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.NEXT_AUTH_FACEBOOK_CLIENT_SECRET
        }),

        // sign in with Linkedin
        LinkedInProvider({
            clientId: process.env.NEXT_AUTH_LINKEDIN_CLIENT_ID,
            clientSecret: process.env.NEXT_AUTH_LINKEDIN_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: "r_liteprofile r_emailaddress"
                },
            },
        })
    ],
    pages: {
        signIn: "/sign-in"
    },

    callbacks: {
        async signIn({ user, account }) {
            const {email} = user;

            if (["google", "facebook", "linkedin"].includes(account?.provider)){
                try {
                    const db = await connectDB();
                    const userCollection = db.collection("users");
                    const userExists = await userCollection.findOne({email});
                    if (!userExists) {
                        await userCollection.insertOne({
                            email: user.email,
                            name: user.name || "User",
                            provider: account.provider,
                            createdAt: new Date(),
                        });
                    }
                    return user;
                } catch (error) {
                    console.error("Error in signIn callback:", error);
            return false;
                }
            }
            return true;
        },

        async jwt({ token, user, account }) {
            if (user) {
                token.id = user._id || null;
                token.email = user.email;
                token.name = user.name;
                token.provider = account?.provider || "credentials";
            }
            return token;
        },

        async session({ session, token }) {
            session.user.id = token.id;
            session.user.provider = token.provider;
            return session;
        },
    }
});

export {handler as GET, handler as POST};