import { connectDB } from "@/lib/connectDB";

export const GET = async(request, {params}) => {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    try {
        const myBookings = await bookingsCollection.find({email: params.email}).toArray();
        return Response.json(myBookings, {status: 200})
    } catch(error){
        console.log(error)
        return Response.json({"message": "Something went wrong"}, {status: 400})
    }
}