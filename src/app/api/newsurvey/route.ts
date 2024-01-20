import { NextRequest, NextResponse } from "next/server";
import SurveyModel from "@/models/Survey";
import ConnectDB from "@/utils/ConnectDB";
import { apienums } from "../../../types/enums";
export default async function POST(req: NextRequest) {
  try {
    await ConnectDB();
    const { sname, title, uni, detail,questions } = await req.json();
    if (!sname || !title || !questions) {
      return NextResponse.json(
        { error: apienums.NOT_VALID_DATA },
        { status: 422 }
      );
    }
    
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: apienums.SERVER_ERR }, { status: 500 });
  }
}
