import { connectDB } from "@/lib/connectDB";

export const POST = async(request) => {
    const booking = await request.json();
    const db = await connectDB();
    const bookingCollection = db.collection("bookings");

    try {
        await bookingCollection.insertOne(booking);
        return Response.json({"message": "Service Booked Successfully!"})
    } catch(error){
        console.log(error)
    }
}