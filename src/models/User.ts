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
    role:{
        type:String,
        require:true,
        default:"user"
    },
    createdAt:{
        type:Date,
        default: ()=> Date.now(),
        immutable:true,
    }
})

const User = models.User || model("User",UserSchema);
export default User