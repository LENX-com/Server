const { Order } = require("../models/order");
const { Wishlist, Story, User, ShippingInfo } = require("../models/user");
const { follower, following } = require("../models/follow");
const { errorHandler } = require("../helpers/dbErrorHandler");
const { validationResult } = require("express-validator/check");
const Product = require("../models/product");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.API_SECRET,
});

//get a user by id populating all their activities through virtuals
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.userId)
    .populate({ path: "wishlists", populate: { path: "productId" } })
    .populate("order")
    .populate("manufacturer")
    .populate("story")
    .populate("blogs")
    .populate("reviews")
    .populate("products");
  try {
    if (!user) {
      return res.json("no user found");
    }
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

exports.updateUser = async (req, res) => {
  console.log(req.file);
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
      invalidate: true,
    });
    const { ...args } = req.body;
    args.avatar = result.secure_url;
    args.avatarId = result.public_id;
    const user = await User.findOneAndUpdate({ _id: req.user._id }, args, {
      new: true,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.userById = (req, res, next, id) => {
  User.findById(id)
    .populate("session")
    .populate("product")
    .exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "User not found",
        });
      }
      req.profile = user;
      next();
    });
};

exports.read = (req, res) => {
  console.log(req);
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

exports.update = (req, res) => {
  console.log("user update", req.body);
  req.body.role = 0; // role will always be 0
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized to perform this action",
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    }
  );
};

exports.userExist = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist please sign up", //if the user is found make sure the email and password macth
      });
    }
  });
  next();
};

exports.update = (req, res) => {
  // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
  const { name, password } = req.body;

  User.findOne({ _id: req.profile._id }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    if (!name) {
      return res.status(400).json({
        error: "Name is required",
      });
    } else {
      user.name = name;
    }

    if (password) {
      if (password.length < 6) {
        return res.status(400).json({
          error: "Password should be min 6 characters long",
        });
      } else {
        user.password = password;
      }
    }

    user.save((err, updatedUser) => {
      if (err) {
        console.log("USER UPDATE ERROR", err);
        return res.status(400).json({
          error: "User update failed",
        });
      }
      updatedUser.hashed_password = undefined;
      updatedUser.salt = undefined;
      res.json(updatedUser);
    });
  });
};

exports.addOrderToUserHistory = (req, res, next) => {
  let history = [];

  req.body.order.products.forEach((item) => {
    history.push({
      _id: item._id,
      name: item.name,
      description: item.description,
      category: item.category,
      quantity: item.count,
      transaction_id: req.body.order.transaction_id,
      amount: req.body.order.amount,
    });
  });

  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $push: { history: history } },
    { new: true },
    (error, data) => {
      if (error) {
        return res.status(400).json({
          error: "Could not update user purchase history",
        });
      }
      next();
    }
  );
};

exports.purchaseHistory = (req, res) => {
  Order.find({ user: req.profile._id })
    .populate("user", "_id name")
    .sort("-created")
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(orders);
    });
};

//create wishlist for user

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let error = {};
    errors.array().map((err) => (error[err.param] = err.msg));
    return res.status(422).json({ error });
  }
  next();
};

// ************************************************************wishlist***************************************************************************//
//get wish list by authenticated user
exports.getWishlist = async (req, res) => {
  const wish = await Wishlist.find({ userId: req.user._id }).populate(
    "productId"
  );
  try {
    return res.json(wish);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

//add wish list
exports.addWishlist = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  const wish = await Wishlist.find({ productId: req.params.productId });
  try {
    if (wish.length > 1) {
      return res.status(400).json({ error: "wishlist already added" });
    }
    const data = {
      userId: req.user._id,
      productId: product._id,
    };
    const resp = await Wishlist.create(data);
    return res.status(200).json({ data: resp });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
exports.removeWishlist = async (req, res) => {
  const wish = await Wishlist.findByIdAndDelete(req.params.wishId);
  console.log(wish);
  try {
    if (!wish) {
      return res.status(400).json({ error: "wishlist not found" });
    }
    return res.status(200).json({ data: "wish list deleted succesfully" });
  } catch (error) {
    console.log(error);
  }
};
// ************************************************************wishlist***************************************************************************//

//*************************************************************manufacturers sotries****************************************
exports.createStory = async (req, res) => {
  try {
    const file = req.file;
    if (!file) throw new Error("Enter a valid file");
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
      start_offset: "1.0",
      end_offset: "10.0",
    });
    const { ...args } = req.body;
    args.userId = req.user._id;
    args.url = result.secure_url;
    const newStatus = await Story.create(args);
    return res.json(newStatus);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

exports.getStory = async (req, res) => {
  try {
    const story = await Story.find();
    if (!story.length) {
      return res.status(400).json({ error: "no story for this user" });
    }
    return res.status(200).json({ data: story });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

//*************************************************************manufacturers stories*****************************************

//*************************************Shipping info************************************ */

exports.addShippingInfo = async (req, res) => {
  try {
    const { ...args } = req.body;
    args.userId = req.user._id;
    const shipping = await ShippingInfo.create(args);
    return res.json(shipping);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

exports.updateShippingInfo = async (req, res) => {
  try {
    const { ...args } = req.body;

    const shipping = await ShippingInfo.findOneAndUpdate(
      req.body.shippingId,
      args,
      {
        new: true,
      }
    );
    return res.json(shipping);
  } catch (error) {
    console.log(error);
  }
};

//************************************Follow manufacturer************************************** */
exports.followManufacturer = async (req, res) => {
  try {
    const resp = await following.find({
      $and: [
        { userId: req.user.id },
        { manufacturerId: req.body.manufacturerId },
      ],
    });
    if (resp.length > 0) {
      return res.json("Already following");
    }
    const { ...args } = req.body;
    args.userId = req.user.id;
    const newfollow = await following.create(args);
    return res.json(newfollow);
  } catch (error) {
    console.log(error);
  }
};

exports.getFollowing = async (req, res) => {
  try {
    const resp = await following
      .find({ userId: req.user.id })
      .populate("manufacturerId");
    return res.json(resp);
  } catch (error) {
    console.log(error);
  }
};
//************************************Follow manufacturer************************************** */
