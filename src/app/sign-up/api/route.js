import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";


export const POST = async (request) => {
    const newUser = await request.json();

    try {
        const db = await connectDB();
        const userCollection = db.collection("users");
        const userExists = await userCollection.findOne({ email: newUser.email });

        if (userExists) {
            return new Response(
                JSON.stringify({ message: "User Already Exists" }),
                { status: 409, headers: { "Content-Type": "application/json" } }
            );
        }

        const hashPassword = bcrypt.hashSync(newUser.password, 16);

        await userCollection.insertOne({
            ...newUser, 
            password: hashPassword
        });
        return new Response(
            JSON.stringify({ message: "User Created Successfully!" }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Something went wrong", error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}