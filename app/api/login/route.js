import UserModel from "@/Models/UserModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import AdminModel from "@/Models/AdminModel";


export async function POST(req) {
  let { data  } =
    await req.json();
    console.log("From here")
    console.log(data)

    const {name,password} = data?.pageData
    // console.log(name+" "+password)
    const isAdmin = data?.isAdmin
    console.log(isAdmin)

  await connectDB();
  
  if(isAdmin){
      try {
        let userDoc = await AdminModel.findOne({name}); 
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if(passOk){
            userDoc.password = ""
            return NextResponse.json({admin:"Admin is registered",userDoc},{status:200})
        } 
        return NextResponse.json({admin:"Admin is not registered"},{status:201})
    
      } catch (error) {
        return NextResponse.json({admin:"Error in fetching admin data",error},{status:500})
      }
  }
  else {
    try {
        let userDoc = await UserModel.findOne({name});   
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if(passOk){
            userDoc.password =""
            return NextResponse.json({user:"User is registered",userDoc},{status:200})
        } 
        return NextResponse.json({user:"User is not registered"},{status:201})
    
      } catch (error) {
        return NextResponse.json({user:"Error in fetching user data",error},{status:500})
      }
  }
}
