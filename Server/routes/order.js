const express = require("express");
const router = express.Router();
const { auth, protected } = require("../middlewares/verify");

const {
  create,
  listOrders,
  getStatusValues,
  orderById,  
  updateOrderStatus,
  payment
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
router.get("/order/status-values", auth, getStatusValues);
router.put("/order/:orderId/pay", auth, payment);
router.post("/order/create", auth, createOrder); 
router.get("/orders", auth, allOrder);
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


module.exports = router;
