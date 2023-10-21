import SingleRoomModel from "@/Models/SingleRoomModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(req,{params}){
    const {name} = params
    await connectDB()
    try {
        // console.log(name)
    const lowerCaseHostelName = name.toLowerCase()
    const res = await SingleRoomModel.find({ HostelName: lowerCaseHostelName })
    .populate({
        path: 'left.user',
        match: { _id: { $exists: true } } 
      })
      .populate({
        path: 'middle.user',
        match: { _id: { $exists: true } } 
      })
      .populate({
        path: 'right.user',
        match: { _id: { $exists: true } } 
      });
  
    if(res){
        return NextResponse.json({res},{status:200})
    }
    else return NextResponse.json({message:"Error in getting room data"},{status:201})
 } catch (error) {
    console.log(error)
    return NextResponse.json({message:"Error in getting room data from server"},{status:500})
    
 }
}

export async function PUT(req){
    const {Id,pos,userId} = await req.json();
    // console.log(Id)
    await connectDB()
    try {
        const room = await SingleRoomModel.findById(Id);
        // console.log(room)
        // return NextResponse.json({room},{status:200});
        if (!room) {
            return NextResponse.json({message:"Error in getting room data"},{status:500})
        
        }
        // console.log(userId),
        // console.log(pos)
        // console.log(room)
        // console.log(room[pos])
        room[pos].isBooked = true;
        room[pos].user = userId;
    
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
