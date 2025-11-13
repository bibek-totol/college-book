import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Admission from "@/models/Admission";


import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../lib/authOptions";




export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in." },
        { status: 401 }
      );
    }

    const data = await req.json();
    await connectToDatabase();

    const newAdmission = await Admission.create({
      userEmail: session.user.email, 
      collegeId: data.collegeId,
      collegeName: data.collegeName,
      candidateName: data.candidateName,
      subject: data.subject,
      email: data.email,
      phone: data.phone,
      address: data.address,
      dateOfBirth: data.dateOfBirth,
      imageUrl: data.imageUrl || null,
      submittedAt: new Date(),
    });

    return NextResponse.json({ message: "Admission submitted!", admission: newAdmission });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}



export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in." },
        { status: 401 }
      );
    }

    const url = new URL(req.url);
    const userEmail = url.searchParams.get("userEmail");

    if (!userEmail || userEmail !== session.user.email) {
      return NextResponse.json(
        { error: "Unauthorized. Invalid user email." },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const admissions = await Admission.find({ userEmail }).sort({ submittedAt: -1 });

    return NextResponse.json({ admissions }, { status: 200 });
  } catch (err) {
    console.error("Error fetching admissions:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
