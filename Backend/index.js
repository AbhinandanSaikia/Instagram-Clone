import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser  from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./Utils/db.js";
dotenv.config({}); 
const app = express();

const PORT = process.env.PORT || 3000;




app.get("/",(_ ,res) =>{
    return res.status(200).json({message:"Backend is running"});
    succcess:true
})
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOptions = {
    origin:'https://localhost:5173',
    Credentials:true
}
app.use(cors(corsOptions));




app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})