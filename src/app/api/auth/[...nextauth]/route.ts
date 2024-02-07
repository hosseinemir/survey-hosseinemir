import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import ConnectDB from "@/utils/ConnectDB";
import { error } from "console";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// export const authOptions = {

//   providers: [CredentialsProvider({
//     async authorize(credentials){
//         const {email , password} = credentials;

//         try{
//             await ConnectDB()

//         }catch(err){
//             throw new Error("مشکلی در سمت سرور پیش امده است")
//         }
//         if(!email || !password){
//             throw new Error("اطلاعات درست را وارد کنید ")
//         }
//         const user = await User.findOne({email})
//         if (!user){
//             throw new Error("ابتدا حساب کاربری ایجاد کنید")
//         }
//         const isvalid = await verifyPassword(password,user.password)
//         if(!isvalid){
//             throw new Error("ایمیل و یا پسورد اشتباه است")
//         }
//         return {email}
//     }
//   })],
// };
// export default NextAuth(authOptions);
