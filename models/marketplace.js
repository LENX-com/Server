const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const opts = { toJSON: { virtuals: true } };

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const marketSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/lenx/image/upload/v1619714832/avatar_g2cc3h.png",
    },
    bg: {
      type: String,
      default:
        "https://res.cloudinary.com/lenx/image/upload/v1619714832/avatar_g2cc3h.png",
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },
   
  },
  opts,
  { timestamps: true }
);

//virtual fields
marketSchema.virtual("products", {
  localField: "userId",
  ref: "Product",
  foreignField: "author",
  justOne: false,
});

module.exports = mongoose.model("Market", marketSchema);
module.exports = mongoose.model("Blog", blogSchema);
