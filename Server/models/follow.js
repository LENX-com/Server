const mongoose = require("mongoose");

const followingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);
const followerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const following = mongoose.model("following", followingSchema);
const follower = mongoose.model("follower", followerSchema);

module.exports = { following, follower };
