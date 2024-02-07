import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import ConnectDB from "@/utils/ConnectDB";
import NextAuth from "next-auth";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [],
};
export default NextAuth(authOptions);
