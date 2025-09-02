import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");

    } catch (error) {
        console.log("Error");
    }
}
export default connectDB;

////mongodb+srv://abhinandansaikia773_db_user:<db_password>@cluster0.dbjiz9t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
