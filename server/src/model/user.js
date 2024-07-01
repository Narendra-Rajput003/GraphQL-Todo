import { extendSchema } from "graphql";
import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["MALE","FEMALE","OTHER"],   
        required:true
    },
    todos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Todo"
    }]
})
const User=mongoose.model("User",userSchema)
export default User;