import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Admission from "@/models/Admission";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions"; 

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();

    const admissions = await Admission.find({ userEmail: session.user.email }).sort({ submittedAt: -1 });

    return NextResponse.json({ admissions });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
