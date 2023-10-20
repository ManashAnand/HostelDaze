import UserModel from "@/Models/UserModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req,{params}){
    const {id} = params;
    connectDB()
    try {
        
        console.log(id)
        const res = await UserModel.findById(id)
            .select("-password")
        // console.log(res)
        if(!res)     return NextResponse.json({message:"User not found"},{status:200})  
        return NextResponse.json({res},{status:200})     
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Error from server"},{status:500})
    }
}