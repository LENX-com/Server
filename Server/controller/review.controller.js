const Product = require("../models/product");
const { Review, Upvote, Downvote } = require("../models/review");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.API_SECRET,
});
exports.addReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    const file = req.file;
    if (!file) throw new Error("Enter a valid file");
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
    });
    const { ...args } = req.body;
    args.url = result.secure_url
    args.productID = product._id;
    args.userId = req.user._id;
    const newVideo = await Review.create(args);
    return res.status(200).json({ data: newVideo });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const review = await Review.find({ productID: req.params.productId });
    return res.json({ data: review });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

exports.upVote = async (req, res) => {
  try {
    const review = await Review.find({ _id: req.body.reviewId });
    const { ...args } = req.body;
    const upvote = await Upvote.find({
      $and: [{ userId: req.user.id }, { reviewId: req.body.reviewId }],
    });
    console.log(upvote)
    const downvote = await Downvote.find({
      $and: [{ userId: req.user.id }, { reviewId: req.body.reviewId }],
    });
    if (downvote.length > 0) {
      await Downvote.findByIdAndDelete({ _id: downvote[0]._id });
    }
    const fields = {
      userId: req.user._id,
      reviewId: review[0]._id,
    };
    if (upvote.length > 0) {
      return res.json({ error: "already upvoted" });
    }
    await Upvote.create(fields);
    const resp = await Review.findOneAndUpdate(
      { _id: req.body.reviewId },
      {
        $inc: { votes: args.increase },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.json(resp);
  } catch (error) {
    return res.json({ error: error });
  }
};

exports.downVote = async (req, res) => {
  try {
    const review = await Review.find({ _id: req.body.reviewId });

    const { ...args } = req.body;
    const upvote = await Upvote.find({
      $and: [{ userId: req.user.id }, { reviewId: req.body.reviewId }],
    });
    const downvote = await Downvote.find({
      $and: [{ userId: req.user._id }, { reviewId: req.body.reviewId }],
    });
    if (upvote.length > 0) {
      await Upvote.findByIdAndDelete({ _id: upvote[0]._id });
    }
    const fields = {
      userId: req.user._id,
      reviewId: review[0]._id,
    };
    if (downvote.length > 0) {
      return res.json({ error: "already downvoted" });
    }
    await Downvote.create(fields);
    const resp = await Review.findOneAndUpdate(
      { _id: req.body.reviewId },
      {
        $inc: { votes: args.decrease },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.json(resp);
  } catch (error) {
    return res.json({ error: error });
  }
};

exports.deleteReview = async () => {};
