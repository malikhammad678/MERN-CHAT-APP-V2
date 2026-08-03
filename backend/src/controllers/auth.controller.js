import User from "../models/auth.model.js";
import bcryptjs from 'bcryptjs'
import { generateToken } from "../utils/generateCookie.js";

export const signup = async (req,res) => {
    try {
       const { fullName, email, password } = req.body;

       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       if(!fullName || !email || !password){
        res.status(400).json({success:false, message:"Please fill in all fields!"})
       }

       if(password.length < 6) {
        res.status(400).json({success:false, message:"Password must be 6 character long!"})
       }

       if(!emailRegex.test(email)){
        res.status(400).json({success:false, message:"Invalid Email"})
       }

       const existingEmail = await User.findOne({email})

       if(existingEmail){
        res.status(400).json({success:false, message:"Email already exits!"})
       }

       const hashedPassword = await bcryptjs.hash(password, 10)

       const user = new User({
            fullName,
            email,
            password:hashedPassword
       })

       if(user){
        generateToken(user._id, res)
        await user.save()

        res.status(201).json({
        _id:user._id,
        fullName:user.fullName,
        email:user.email,
        profilePic:user.profilePic
       })
       }
    } catch (error) {
        res.status(500).json({success:false, message:"internal server error!"})
       
    }
}

export const login = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}