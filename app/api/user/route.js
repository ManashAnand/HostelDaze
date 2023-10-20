import UserModel from "@/Models/UserModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req,{params}){
    const searchParams  = req.nextUrl.searchParams
    const name = searchParams.get('name')
    // console.log(name)
    
    connectDB();
    try {
        // const name=""
        const res = await UserModel.find({name}).select("-password");
        // console.log(name)
        // console.log(res)
        return NextResponse.json({res},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error from server"},{status:500})
    }
    
}