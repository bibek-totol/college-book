import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Admission from "@/models/Admission";

export async function GET() {
  try {
    await connectToDatabase();

    
    const admissions = await Admission.find({}).sort({ submittedAt: -1 });

    return NextResponse.json({ admissions }, { status: 200 });
  } catch (err) {
    console.error("Error fetching all admissions:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
