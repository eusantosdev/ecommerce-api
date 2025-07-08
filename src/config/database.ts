import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export function connectDataBase() {
    try {
        const connectionString = process.env.ATLAS_URI;

        if (!connectionString) {
            throw new Error(`ATLAS_URI is not defined in te .env file`);
        }

        mongoose.connect(connectionString, {
            dbName: 'ecommerce',
        });

        console.log('Connect to Database...');
    
    } catch (error) {
        console.error(`Server Error: ${error}`);
        process.exit(1);
    }
}

