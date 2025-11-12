import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function PUT(req) {
  try {
    const { email, name, newEmail } = await req.json();

    await connectToDatabase();

    
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    
    if (name) existingUser.name = name;
    if (newEmail) existingUser.email = newEmail;

    await existingUser.save();

    return NextResponse.json(
      { message: "User updated successfully", user: existingUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
