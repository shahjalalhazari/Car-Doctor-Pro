import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
    if (db) return db;

    try {
        const username = process.env.NEXT_MONGODB_USERNAME;
        const password = process.env.NEXT_MONGODB_PASSWORD;
        const uri = `mongodb+srv://${username}:${password}@cluster0.cp5mulo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        // create client
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db("CarDoctorProDB")
        return db;
    } catch (error) {
        console.log(error);
    }
}