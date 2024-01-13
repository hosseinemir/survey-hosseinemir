import mongoose from "mongoose";

async function ConnectDB(){
    if (mongoose.connections[0].readyState) return;
    mongoose.set("strictQuery",false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to db")

}

export default ConnectDB;