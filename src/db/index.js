import mongoose from "mongoose";
import {DBNAME} from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI, {
            dbName: DBNAME,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
        throw error;
    }
};

export default connectDB;