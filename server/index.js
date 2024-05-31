import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import UserSchema from "./schemas/user.schema.js";
import AllRoutes from "./routes/index.js"


const app = express();

var corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

app.use(cors(corsOptions));

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req,res) => {
    res.send("HELLO FORM NIKE SERVER...")
});

app.use('/api/v1', AllRoutes)


// app.get("/validate-token", async(req,res) => {
//     try {
//         const token = req?.cookies?.token;
//     } catch (error) {
//         console.log(error, "error")
//         return res.json({error, success: false});
//     }
// })


mongoose.connect(process.env.MONGODB_URL).then(()=> {
    console.log("DB CONNECTED")
})

app.listen(3001, ()=> {
    console.log("Sever is running on port 3001")
});