import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req){
    const {name,email,password,isAdmin,secretAdminKey,image,number} = await req.json();
    await connectDB();
    try {
        console.log(name+" "+email+" "+password+" "+isAdmin+" "+secretAdminKey+" "+image+" "+number)
        return NextResponse.json({message:"WOrking"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error in registering user"},{status:500})
    }
}