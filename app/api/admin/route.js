import UserModel from "@/Models/UserModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import AdminModel from "@/Models/AdminModel";

var salt = bcrypt.genSaltSync(10);
const secret = process.env.BCRYPT_SECRET;
console.log(secret);

export async function POST(req) {
  let { name, email, password, secretAdminKey, number, isAdmin, imageUrl } =
    await req.json();
  await connectDB();

  if (secretAdminKey == process.env.ADMIN_SECRET_KEY) {
    try {
      const user = await AdminModel.create({
        name,
        email,
        password: bcrypt.hashSync(password, salt),
        secretAdminKey,
        number,
        isAdmin,
        imageUrl,
      });
      return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Error in registering user" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
        { message: "Admin key doesn't match" },
        { status: 200 }
      );
  }
}
