import SingleRoomModel from "@/Models/SingleRoomModel";
import UserModel from "@/Models/UserModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(req){
    
    await connectDB()
 try {
    const res = await SingleRoomModel.find()
    .populate({
        path: 'left.user',
        match: { _id: { $exists: true } } // Filter out null values
      });
    // .populate('middle.user')
    // .populate('right.user');
  
    if(res){
        return NextResponse.json({res},{status:200})
    }
    return NextResponse.json({message:"Error in getting room data"},{status:201})
 } catch (error) {
    console.log(error)
    return NextResponse.json({message:"Error in getting room data from server"},{status:500})
    
 }
}

export async function POST(req){
    await connectDB()
    await SingleRoomModel.create({
        left: {
            isBooked: true,
            user: "652d067c823b948f6e69ec90" 
        },
        middle: {
            isBooked: false,
            user: null
        },
        right: {
            isBooked: false,
            user: null
        },
        RoomNo: 101
    },)
}
