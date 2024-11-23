import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";


// get a single booking from user booking list
export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    try {
        const res = await bookingsCollection.findOne({_id: new ObjectId(params.id)});
        return Response.json({
            "message": "Booking Found!", res: res
        }, { status: 200 })
    } catch(error){
        console.log(error)
        return Response.json({"message": "Something went wrong"}, {status: 400})
    }
};


// delete a single booking from user booking list
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
};


// update single booking
export const PATCH = async (request, { params }) => {
    const updateDoc = await request.json();
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    try {
        const res = await bookingsCollection.updateOne(
            { _id: new ObjectId(params.id) },
            {
                $set: {
                    ...updateDoc
                }
            },
            { upsert: true }
        );
        return Response.json({
            "message": "Booking Updated Successfully!", res: res
        }, { status: 200 })
    } catch(error){
        console.log(error)
        return Response.json({"message": "Something went wrong"}, {status: 400})
    }
};

