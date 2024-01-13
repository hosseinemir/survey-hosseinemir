import { Schema , model,models } from "mongoose";

const UserSchema = new Schema({
    email:{
        type:String,
        require:true,

    },
    password:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default: ()=> Date.now(),
        immutable:true,
    }
})

const User = models.User || model("User",UserSchema);