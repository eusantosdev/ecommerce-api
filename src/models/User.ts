import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: { 
        type: String, 
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    job: {
        type: String,
        required: true
    }
});

const User = model('user', userSchema);

export default User;