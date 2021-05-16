const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const CartItemSchema = new mongoose.Schema(
  {
    productId: { type: ObjectId, ref: "Product" },
    userId: { type: ObjectId, ref: "User" },
    name: String,
    price: Number,
    count: Number,
  },
  { timestamps: true }
);

const CartItem = mongoose.model("CartItem", CartItemSchema);

const OrderSchema = new mongoose.Schema(
  {
    product: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    shippingMethod: {
      type: String,
      required: false,
    },
    trackingInformation: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      default: "Not processed",
      enum: [
        "Not processed",
        "Processing",
        "Shipped",
        "Delivered",
        "Cancelled",
      ], // enum means string objects
    },
    updated: Date,
    user: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order, CartItem };
