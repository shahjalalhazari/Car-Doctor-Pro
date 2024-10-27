import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
    if (db) return db;

    try {
        // const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        const uri = `mongodb+srv://${NEXT_PUBLIC_MONGODB_USERNAME}:${NEXT_PUBLIC_MONGODB_PASSWORD}@cluster0.cp5mulo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        db = client.db("car-doctor-pro");
        return db;
    } catch (error) {
        
    }
}