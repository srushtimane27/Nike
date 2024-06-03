import UserSchema from "../schemas/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async(req,res) => {
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
}


export const login = async(req,res) => {
    try {
        const {email, password} = req.body.userData;
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
        console.log(token, "token")
        res.cookie("token", token)

        return res.json({success: true, message: "Login Successfull", userData: {name: user.name, email: user.email, },})
    } catch (error) {
        console.log(error, "error")
        return res.json({error, success: false});
    }
};


export const validateToken =  async(req,res) => {
    try {
        const token = req?.cookies?.token;
        // console.log(token,"token from validate token")
        if(!token){
            return res.json({
                success: false,
                message: "Invalid Token"
            });
        }
        const decodedData = await jwt.verify(token, process.env.JWT_SECRET)
        if(!decodedData.id){
            return res.json({
                success: false,
                message: "Token Expired"
            });
        }
        const currentTime = Math.floor(Date.now() / 1000);
        if(decodedData.exp < currentTime){
            return res.json({
                success: false,
                message: "Token Expired"
            });
        }
        const user = await UserSchema.findById(decodedData.id);
        console.log(user)
        if(!user){
            return res.json({
                success: false,
                message: "Invalid Token"
            })
        }
        return res.json({user, success: true})
    } catch (error) {
        console.log(error, "error")
        return res.json({error, success: false});
    }

};

export const logout = async(req,res) => {
    try {
        res.cookie("token", "");
        return res.json({success: true, message: "Logout Successfull"})
    } catch (error) {
        console.log(error, "error");
        return res.json({error, success: false})
    }
}