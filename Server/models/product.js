const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    author: {
      type: ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      trim: true,
      required: true,
      //maxlength: 32
    },
    tags: {
      type: String,
      enum: ["tag1", "tag2", "tag3", "tag4"],
      default: "tag1",
    },

    description: {
      type: String,
      required: true,
      //maxlength: 2000
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },

    discount: {
      type: Number,
    },
    // category: [
    //   {
    //     type: ObjectId,
    //     ref: "Category",
    //     required: true,
    //   },
    // ],
    category: {
      type: ObjectId,
      ref: "Category",
      required:true
    },
    brands: {
      type: ObjectId,
      ref: "Brand",
    },
    quantity: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String
    },
    shipping: {
      required: false,
      type: Boolean,
    },
    shippingZone: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// productSchema
//   .virtual("categoryId")
//   .set(function (categoryId) {
//     this.addCategory(JSON.parse(categoryId));
//   })
//   .get(function () {
//     return this.category;
//   });

// productSchema.methods = {
//   addCategory(categories) {
//     for (let category of categories) {
//       this.category.push({ _id: category });
//     }
//   },
// };

module.exports = mongoose.model("Product", productSchema);
