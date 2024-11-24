import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/services";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const servicesCollection = db.collection("services");

    try {
        await servicesCollection.deleteMany();
        await servicesCollection.insertMany(services);
        return NextResponse.json({"message": "Seeded Successfully."}, {status:200})
    } catch (error) {
        return NextResponse.json({"message": "Something went wrong!."}, {status:400})
    }
}