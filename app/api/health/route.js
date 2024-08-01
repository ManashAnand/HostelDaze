
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();
  return NextResponse.json({ health: "Working just perfect" }, { status: 200 });
}
