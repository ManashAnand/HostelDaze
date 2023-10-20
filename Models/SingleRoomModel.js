const mongoose = require("mongoose");

const SingleRoomSchema = mongoose.Schema(
  {
    left: {
      isBooked: Boolean,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    middle: {
      isBooked: Boolean,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    right: {
      isBooked: Boolean,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    RoomNo: {
      type: Number,
    },
  },
  { timestamps: true }
);

const SingleRoomModel =
  mongoose.models.SingleRoom || mongoose.model("SingleRoom", SingleRoomSchema);

module.exports = SingleRoomModel;
