const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },
    userId: {
      type: ObjectId,
    },
  },
  { timestamps: true }
);

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },
    userId: {
      type: ObjectId,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
module.exports = mongoose.model("Brand", brandSchema);
