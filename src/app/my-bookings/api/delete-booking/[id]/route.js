import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async(request, {params}) => {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    try {
        const res = await bookingsCollection.deleteOne({_id: new ObjectId(params.id)});
        return Response.json({
            "message": "Booking Deleted Successfully!", response: res
        }, { status: 200 })
    } catch(error){
        console.log(error)
        return Response.json({"message": "Something went wrong"}, {status: 400})
    }
}