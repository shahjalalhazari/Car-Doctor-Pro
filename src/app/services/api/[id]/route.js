import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const db = await connectDB();
    const servicesCollection = db.collection("services");

    try {
        const service = await servicesCollection.findOne({_id: params.id});
        return NextResponse.json({service}, {status: 200})
    } catch (error) {
        return NextResponse.json({"message":{error}}, {status: 400})
    }
}