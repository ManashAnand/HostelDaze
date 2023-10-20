const mongoose = require("mongoose");

  const AdminSchema = mongoose.Schema({
    name: { type: String, required: true, min: 4,trim:true },
    password: { type: String, required: true },
    email: {type:String, required: true},
    number: {type:String, required: true},
    secretAdminKey: {type:String },
    imageUrl: {type:String,default:"" },
    isAdmin: {type:Boolean },
  },{
    timestamps: true 
  });

const AdminModel =mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;
