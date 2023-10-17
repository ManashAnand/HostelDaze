const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true, min: 4,trim:true },
  password: { type: String, required: true },
  email: {type:String, required: true},
  number: {type:String, required: true},
  imageUrl: {type:String,default:"" },
});

const UserModel =mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = UserModel;
