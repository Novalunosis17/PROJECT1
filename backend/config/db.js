import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("DB Connected"))
    .catch(err => console.error("MongoDB connection error:", err));
};