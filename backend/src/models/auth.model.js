import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        reqiured:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps:true})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User;