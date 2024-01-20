import nextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import ConnectDB from "@/utils/ConnectDB";

const authOptions ={
    session : {strategy : "jwt"},
    
}