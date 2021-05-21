const Product = require("../models/profile");
const Market = require("../models/marketplace");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.addBgImage = async (req, res) => {
  try {
    const market = await Market.find({ userId: req.user._id });
    if (!market.length) {
      return res.status(400).json({ error: "cant perform this operation" });
    }
    const file = req.file;
    if (!file) throw new Error("Enter a valid file");
    const result = await cloudinary.uploader.upload(req.file.path);
    const { ...args } = req.body;
    args.bg = result.public_id;
    const newDp = await Market.findOneAndUpdate(
      {
        userId: req.user._id,
      },
      {
        args,
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.status(200).json({ data: newDp });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
exports.addProfileImage = async (req, res) => {
  try {
    const market = await Market.find({ userId: req.user._id });
    if (!market.length) {
      return res.status(400).json({ error: "cant perform this operation" });
    }
    const file = req.file;
    if (!file) throw new Error("Enter a valid file");
    const result = await cloudinary.uploader.upload(req.file.path);
    const { ...args } = req.body;
    args.avatar = result.public_id;
    const newDp = await Market.findOneAndUpdate(
      {
        userId: req.user._id,
      },

      {
        args,
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.status(200).json({ data: newDp });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

exports.create = async (req, res) => {
  try {
    const { ...args } = req.body;
    args.userId = req.user._id;
    const newmarket = await Market.create(args);
    return res
      .status(200)
      .json({ data: newmarket, msg: "created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
exports.read = async (req, res) => {
  const market = await Market.find({ userId: req.user._id }).populate(
    "products"
  );
  try {
    if (!market.length) {
      return res.status(400).json({
        error: "no market place created yet create one anan try again",
      });
    }
    return res.status(200).json({ data: market });
  } catch (error) {
    console.log(error);
  }
};
exports.getById = async (req, res) => {
  const market = await Market.findById(req.params.marketId);
  try {
    if (!market) {
      return res.status(400).json({ error: "No market place with that Id" });
    }
    return res.status(200).json({ data: market });
  } catch (error) {
    console.log(error);
    res.staus(500).json({ error: error });
  }
};

exports.edit = async (req, res) => {
  const market = await Market.find({
    $and: [{ _id: req.params.marketId }, { userId: req.user._id }],
  });
  try {
    if (market < 1) {
      return res
        .status(400)
        .json({ error: "Resources with that id not found || access denied" });
    }
    const { ...args } = req.body;
    const updatedField = await Market.findOneAndUpdate(
      { _id: req.params.marketId },
      args,
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );
    return res.json({ msg: "fields updated succesfully", data: updatedField });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

exports.remove = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
