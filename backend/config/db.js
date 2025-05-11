import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://HOPIA:hopianilasheryl123@cluster0.f9qknlz.mongodb.net/Project1').then(()=>console.log("DB Connected"));
}