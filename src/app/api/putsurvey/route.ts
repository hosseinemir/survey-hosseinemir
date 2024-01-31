import ConnectDB from "@/utils/ConnectDB";
import { NextRequest, NextResponse } from "next/server";
import { apienums } from "../../../types/enums";
import User from "@/models/User";
import SurveyModel from "@/models/Survey";
import { getSession } from "next-auth/react";

export async function PUT(req: NextRequest) {
  try {
    // const session = getSession();
    // console.log(session);
    const { sname, title, uni, detail, questions, createdAt } =
      await req.json();
      return NextResponse.json({message:"ok"},{status:201})
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: apienums.ERR }, { status: 500 });
  }
}
