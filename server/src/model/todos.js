import mongoose from "mongoose";



const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    },
    tags:{
        type:[String],
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})



const Todo= mongoose.model("Todo",todoSchema);


export default Todo;