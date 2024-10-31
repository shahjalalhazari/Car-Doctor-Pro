import NextAuth from "next-auth/next";
import bcrypt from 'bcrypt';
import CredentialsProviders from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import LinkedInProvider from "next-auth/providers/linkedin"
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
                if (!email || !password) return null;

                // connect to db and get the current user details from DB.
                const db = await connectDB();
                const currentUser = await db.collection("users").findOne({email});

                // if user not found from db
                if (!currentUser) return null;

                // match submitted login password with current user password
                const matchPassword = await bcrypt.compare(password, currentUser.password);
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
                    scope: "openid profile email"
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
                        await userCollection.insertOne(user);
                        return user;
                    } else {
                        return user;
                    }
                } catch (error) {
                    console.log(error)
                }
            } else {
                return user;
            }
        },

        // async jwt({ token, account, profile }) {
        //     if (account?.provider === "linkedin") {
        //     token.email = profile.email;  // Save LinkedIn email to token
        //     token.name = profile.name;    // Save LinkedIn name to token
        //     }
        //     return token;
        // }
    }
});

export {handler as GET, handler as POST};