import ConnectDB from "@/utils/ConnectDB";
import { NextRequest, NextResponse } from "next/server";
import { apienums } from "../../../../types/enums";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
export async function POST(req: NextRequest) {
  try {
    await ConnectDB();
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        {
          error: apienums.NOT_VALID_DATA,
        },
        { status: 422 }
      );
    }
    const exsitingUser = await User.findOne({ email });
    if (exsitingUser) {
      NextResponse.json({ error: apienums.USER_EXIST }, { status: 422 });
    }
    const hashedpassword = await hashPassword(password);
    const newuser = await User.create({
      email,
      password: hashedpassword,
    });
    return NextResponse.json({message:apienums.CREATE_ACCOUNT},{status:201})
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: apienums.ERR }, { status: 500 });
  }
}
