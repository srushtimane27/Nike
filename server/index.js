import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import UserSchema from "./schemas/user.schema.js";

const app = express();
app.use(express.json());
dotenv.config();

var corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req,res) => {
    res.send("HELLO FORM NIKE SERVER...")
});

app.post("/register", async(req,res) => {
    try {
        const { name, email, password, confirmPassword } = req.body.userData;
        if(!name || !email || !password || !confirmPassword){
            return res.json({success: false, message: "All Fields Are Required "})
        }
        if(password !== confirmPassword){
            return res.json({success: false, message: "Password and confirm password are not same"})
        }
        const isEmailExist = await UserSchema.findOne({email: email});

        if(isEmailExist){
            return res.json({success: false, message: "Email is alredy exist, Please use another one"})
        }
        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = await UserSchema({
            name,
            email, 
            password: hashedPassword,
        })
        await newUser.save();
        return res.json({success: true,  message:"Registration Completed"})
    } catch (error) {
        console.log(error, "error");
        return res.json({error, success: false});
    }
})

app.post("/login", async(req,res) => {
    try {
        const {email, password} = req.body.loginData;
        if(!email || !password){
            return res.json({success: false, message: "All Fields Are Required"})
        }
        const user = await UserSchema.findOne({email: email});
        if(!user){
            return res.json({
                success: false,
                message: "User is not exist, Please check your email"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.json({success: false, message:"Invalid Password Please Try Again Later"})
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        // console.log(token, "token")
        res.cookie("token", token)

        return res.json({success: true, message: "Login Successfull", loginData: user,})
    } catch (error) {
        console.log(error, "error")
        return res.json({error, success: false});
    }
})

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

app.listen(3002, ()=> {
    console.log("Sever is running on port 3002")
});