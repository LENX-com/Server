const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const manufacturerSchema = new mongoose.Schema(
  {
    manufacturerId: {
      type: ObjectId,
      ref: "User",
      required: true
    },
    team: {
      type: String,
    },
    comments: [
    {
      user: {
        type: ObjectId,
        ref: "User"
      },
      title: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      name: {  
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Manufacturer", manufacturerSchema);

