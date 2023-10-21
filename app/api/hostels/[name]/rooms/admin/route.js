import SingleRoomModel from "@/Models/SingleRoomModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";



export async function PUT(req,{params}){
    const {name} = params
    const {reqData} =  await req.json();
    console.log("here")
    console.log(reqData)
    const {Id,pos,hostelRoomNo} =reqData
    await connectDB()
    if(hostelRoomNo){
        const room = await SingleRoomModel.find({RoomNo:hostelRoomNo,HostelName:name});
        if (!room) {
            return NextResponse.json({message:"Error in getting room data"},{status:500})
        
        }
        console.log(room)
        room[0].left.isBooked = false;
        room[0].middle.isBooked = false;
        room[0].right.isBooked = false;
        room[0].left.user = null;
        room[0].right.user = null;
        room[0].middle.user = null;
        await room[0].save();
        return NextResponse.json({message:"Whole room vacated successfully"},{status:200})
 
    }
    try {
        // console.log(Id+" "+pos+" "+userId)
        const room = await SingleRoomModel.findById(Id);
        if (!room) {
            return NextResponse.json({message:"Error in getting room data"},{status:500})
        
        }
        room[pos].isBooked = false;
        room[pos].user = null;
    
        await room.save();
        return NextResponse.json({message:"Room updated successfully"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error in getting room data from server"},{status:500})
    }
  
}


// export async function POST(req){
//     await connectDB()
//     await SingleRoomModel.create({
//         left: {
//             isBooked: true,
//             user: "652d067c823b948f6e69ec90" 
//         },
//         middle: {
//             isBooked: true,
//             user: "652d067c823b948f6e69ec92"
//         },
//         right: {
//             isBooked: true,
//             user: "652d067c823b948f6e69ec93"
//         },
//         RoomNo: 102
//     },)
// }
