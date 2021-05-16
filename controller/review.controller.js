const Product = require("../models/product");
const { Review, Upvote, Downvote } = require("../models/review");

exports.addReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(400).json({ error: "product not found" });
    }
    const file = req.file;
    if (!file) throw new Error("Enter a valid file");
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: auto,
    });
    const { ...args } = req.body;
    args.asset = result.public_id;
    const newVideo = await Review.create(args);
    return res.status(200).json({ data: newVideo });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

exports.upVote = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!review) {
      return res.json({ error: "review not found" });
    }
    const { ...args } = req.body;
    const upvote = await Upvote.find({
      $and: [{ userId: req.user.id }, { reviewId: req.params.reviewId }],
    });
    const downvote = await Downvote.find({
      $and: [{ userId: req.user.id }, { reviewId: req.params.reviewId }],
    });
    if (downvote.length > 0) {
      await Upvote.findByIdAndDelete({ _id: upvote[0]._id });
    }
    const fields = {
      userId: req.user._id,
      reviewId: review._id,
    };
    if (upvote.length > 0) {
      return res.json({ error: "already upvoted" });
    }
    await Upvote.create(fields);
    const resp = await Review.findOneAndUpdate(
      { _id: req.params.reviewId },
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
    const review = await Review.findById(req.params.reviewId);
    if (!review) {
      return res.json({ error: "review not found" });
    }
    const { ...args } = req.body;
    const downvote = await Downvote.find({
      $and: [{ userId: req.user.id }, { reviewId: req.params.reviewId }],
    });
    const upvote = await Upvote.find({
      $and: [{ userId: req.user.id }, { reviewId: req.params.reviewId }],
    });
    if (upvote.length > 0) {
      await Upvote.findByIdAndDelete({ _id: upvote[0]._id });
    }
    const fields = {
      userId: req.user._id,
      reviewId: review._id,
    };
    if (downvote.length > 0) {
      return res.json({ error: "already downvoted" });
    }
    await Downvote.create(fields);
    const resp = await Review.findOneAndUpdate(
      { _id: req.params.reviewId },
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
