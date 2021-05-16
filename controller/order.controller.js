const { Order, CartItem } = require("../models/order");
const { sendEmail } = require("../utils/email");
const Product = require("../models/product");
const { errorHandler } = require("../helpers/dbErrorHandler");

//create order
exports.createOrder = async (req, res) => {
  const carts = await CartItem.find({ userId: req.user._id });
  try {
    const { ...args } = req.body;
    args.user = req.user._id;
    args.product = carts;

    const newOrder = await Order.create(args);
    if (!newOrder) {
      return res.status(400).json({ error: "order failed" });
    }
    await sendEmail(
      req.user.email,
      "Order created successfully",
      {
        name: "new charge",
        link: "order link",
      },
      "../helpers/templates/order.ejs"
    );
    return res
      .status(200)
      .json({ data: newOrder, msg: "order initiated succesfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

//get all orders by authenticated user
exports.OrderByUser = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  console.log(req.user);
  try {
    if (orders < 1) {
      return res.status(400).json({ error: "You havent made any orders yet" });
    }
    return res.status(200).json({ data: orders });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

//get order by id
exports.Orderbyid = async (req, res) => {
  const order = await Order.find({
    $and: [{ _id: req.params.orderId }, { user: req.user._id }],
  });
  try {
    if (order < 1) {
      return res.status(400).json({ error: "Resources not found" });
    }
    return res.status(200).json({ data: order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

//order status by admin
exports.UpdateOrderStatus = async (req, res) => {
  const orders = await Order.findById(req.params.orderId);
  try {
    if (!orders) {
      return res.status(400).json({ error: "no order with that id" });
    }
    const update = {
      status: req.body.status,
    };

    const updatedField = await Order.findOneAndUpdate(
      { _id: req.params.orderId },
      update,
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

//get purchase history i.e all orders that have been made
exports.purchaseHistory = async (req, res) => {
  const order = await Order.find();
  try {
    if (order < 1) {
      return res.status(400).json({ error: "no orders for now" });
    }
    return res.status(200).json({ data: order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

// ***************************************************************************************************
//*****************************************************************cart controller*****************************************************//
exports.addToCart = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  try {
    if (!product) {
      return res
        .status(400)
        .json({ error: "cannot add product to cart product does not exist" });
    }
    const { ...args } = req.body;
    args.productId = product._id;
    args.userId = req.user._id;

    const newCart = await CartItem.create(args);
    return res.status(200).json({ data: newCart });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

//get item in cart for a authenticated user

exports.getCartItem = async (req, res) => {
  const cart = await CartItem.find({ userId: req.user._id });
  try {
    if (cart.length < 1) {
      return res.json({ error: "no item in cart keep shopping" });
    }
    return res.status(200).json({ data: cart });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

exports.removeCart = async () => {};

//*****************************************************************cart controller*****************************************************//

exports.orderById = (req, res, next, id) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
      if (err || !order) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      req.order = order;
      next();
    });
};

exports.create = (req, res) => {
  console.log("CREATE ORDER: ", req.body);
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    res.json(data);
  });
};

exports.listOrders = (req, res) => {
  Order.find()
    .populate("user", "_id name address")
    .sort("-created")
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }
      res.json(orders);
    });
};

exports.getStatusValues = (req, res) => {
  res.json(Order.schema.path("status").enumValues);
};

exports.updateOrderStatus = (req, res) => {
  Order.update(
    { _id: req.body.orderId },
    { $set: { status: req.body.status } },
    (err, order) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(order);
    }
  );
};
