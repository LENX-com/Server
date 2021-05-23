const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuid } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ObjectId } = mongoose.Schema.Types;
const opts = { toJSON: { virtuals: true } };

const StorySchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },
  },
  {
    timeStamp: true,
  }
);

const wishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
    },
    productId: {
      type: ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlenght: 32,
    },
    title: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: 32,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    history: {
      type: Array,
      default: [],
    },
    resetPasswordToken: {
      type: String,
      required: false,
    },
    resetPasswordExpires: {
      type: Date,
      required: false,
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/lenx/image/upload/v1619714832/avatar_g2cc3h.png",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    session: [
      {
        type: ObjectId,
        ref: "Session",
      },
    ],
  },
  opts,
  { timestamps: true }
);

//virtual fields
userSchema.virtual("wishlists", {
  localField: "_id",
  ref: "WishList",
  foreignField: "userId",
  justOne: false,
});
userSchema.virtual("products", {
  localField: "_id",
  ref: "Product",
  foreignField: "author",
  justOne: false,
});
//virtual fields
userSchema.virtual("order", {
  localField: "_id",
  ref: "Order",
  foreignField: "user",
  justOne: false,
});
//virtual fields
userSchema.virtual("profile", {
  localField: "_id",
  ref: "Profile",
  foreignField: "userId",
  justOne: false,
});
//virtual fields
userSchema.virtual("blogs", {
  localField: "_id",
  ref: "Blog",
  foreignField: "userId",
  justOne: false,
});
//virtual fields
userSchema.virtual("story", {
  localField: "_id",
  ref: "Story",
  foreignField: "userId",
  justOne: false,
});
//virtual fields
userSchema.virtual("review", {
  localField: "_id",
  ref: "Review",
  foreignField: "userId",
  justOne: false,
});


//Virtual Fields
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuid();
    this.hashed_password = this.encryptPassword(password);
  })

  .get(function () {
    return this._password;
  });

userSchema
  .virtual("sessionId")
  .set(function (sessionId) {
    this.session.push({ _id: sessionId });
  })
  .get(function () {
    return this.session;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  generatePasswordReset: function () {
    this.resetPasswordToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
  },
};

const User = mongoose.model("User", userSchema);
const Wishlist = mongoose.model("WishList", wishlistSchema);
const Story = mongoose.model("Story", StorySchema);
module.exports = { User, Wishlist, Story };
