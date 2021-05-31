const express = require("express");
const router = express.Router();
const { auth, protected } = require("../middlewares/verify");
const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../controller/auth.controller");
const {
  userById,
  addOrderToUserHistory,
} = require("../controller/user.controller");
const { decreaseQuantity } = require("../controller/product.controller");
const {
  create,
  listOrders,
  getStatusValues,
  orderById,
  updateOrderStatus,
} = require("../controller/order.controller");

//******************************************************************carts**************************************************************************//

const {
  addToCart,
  removeCart,
  getCartItem,
} = require("../controller/order.controller");

router.get("/cart", auth, getCartItem);
router.post("/cart/add/:productId", auth, addToCart);
router.delete("/cart/remove", auth, removeCart);

//******************************************************************carts**************************************************************************//

//****************************************************************orders routes********************************************************************//
const {
  createOrder,
  OrderByUser,
  allOrder,
  purchaseHistory,
  UpdateOrderStatus,
  Orderbyid,
} = require("../controller/order.controller");
router.get("/order/status-values", auth, protected(1), getStatusValues);
router.post("/order/create", auth, createOrder);
router.get("/orders", auth, protected(1), allOrder);
router.get("/order/purchaseHistory", auth, OrderByUser);
router.get("/order/history", purchaseHistory);
router.get("/order/:orderId", auth, Orderbyid);
router.post(
  "/order/:orderId/update_status",
  auth,
  protected(1),
  UpdateOrderStatus
);
//****************************************************************orders routes********************************************************************//

router.post(
  "/create/:userId",
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  decreaseQuantity,
  create
);

router.get("/list/:userId", requireSignin, isAuth, isAdmin, listOrders);

router.put(
  "/:orderId/status/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  updateOrderStatus
);

router.param("userId", userById);
router.param("orderId", orderById);

module.exports = router;
