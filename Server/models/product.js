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
    ShippingPrice: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["active", "draft", "inactive"],
      default: "active",
      required: true
    },
    shippingTime: {
      type: String,
      enum: ["1 Business Day"," 1-3 Business Days","3-5 Business Days", "5+ Business Days"],
      required: true
    },
     slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
      comments: [
    {
      user: {
        type: ObjectId
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
    subs: [
      {
        type: ObjectId,
        ref: "Sub",
        required: true,
      },
    ],
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
      required: true,
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
    photo: [
      {
      url :{
        type: String
      },
      public_id: {
        type:String
      },
      },
    ],
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
productSchema.index({ name: "text"});
module.exports = mongoose.model("Product", productSchema);
