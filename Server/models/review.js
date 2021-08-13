const mongoose = require("mongoose");

const upvoteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  },
  {
    timestamp: true,
  }
);
const downvoteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  },
  {
    timestamp: true,
  }
);

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },  
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: "https://i.imgur.com/aq39RMA.jpg",
    },
    votes: {
      type: Number,
      default: 0,
    },
    hasVoted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);
const Upvote = mongoose.model("Upvote", upvoteSchema);
const Downvote = mongoose.model("Downvote", downvoteSchema);

module.exports = { Review, Upvote, Downvote };
