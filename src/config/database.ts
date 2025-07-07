import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDataBase() {
    try {
        const connectionString = process.env.ATLAS_URI;

        console.log('Connect to Database...');

        if (!connectionString) {
            throw new Error('ATLAS_URI is not defined');
        }
    
        mongoose.connect(connectionString, {
            dbName: 'ecommerce',
        });
    
    } catch (error) {
        console.error(`Server Error: ${error}`);
        process.exit(1);
    }
}

