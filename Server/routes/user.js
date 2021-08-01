const express = require("express");
const router = express.Router();
const { check } = require("express-validator/check");

const {
  isAuth,
  isAdmin,
  requireSignin,
} = require("../controller/auth.controller");
const { auth, protected } = require("../middlewares/verify");
const {
  userById,
  read,
  getUserById,
  update,
  purchaseHistory,
  updateUser,
  addShippingInfo,
  updateShippingInfo,
} = require("../controller/user.controller");

const {
  forgotPasswordController,
  resetPasswordController,
} = require("../controller/password.controller");

const {
  resetPasswordValidator,
  forgotPasswordValidator,
} = require("../validator/index");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

//******************************User Crud.********************** */
router.post("/user/update",upload.single("file"), auth, updateUser);
//******************************User Crud.********************** */

//*************************Shipping info**************************************** */
router.post("/shipping_details/create", auth, addShippingInfo);
router.post("/shipping_details/update", auth, updateShippingInfo);
//*************************Shipping info**************************************** */

//************************************************************stories***************************************************************** *
const { createStory, getStory } = require("../controller/user.controller");
router.post(
  "/story/create",
  upload.single("file"),
  auth,
  protected(1),
  createStory
);
router.get("/story/read", getStory);

//************************************************************stories***************************************************************** */

//************************************************************wishlist**************************************************************
const {
  addWishlist,
  getWishlist,
  removeWishlist,
} = require("../controller/user.controller");
router.get("/wishlist/read", auth, getWishlist);
router.post("/wishlist/create/:productId", auth, addWishlist);
router.delete("/wishlist/remove/:wishId", auth, removeWishlist);
//************************************************************wishlist**************************************************************

router.get("/secret", requireSignin, (req, res) => {
  res.json({
    user: "got here yay",
  });
});

router.get("user/:userId", getUserById);
router.get("user/:userId", requireSignin, read);
router.put("user/:userId", requireSignin, isAuth, update);
router.get("/orders/by/user/:userId", requireSignin, isAuth, purchaseHistory);

//Password RESET
router.put("/recover", forgotPasswordValidator, forgotPasswordController);

router.put("/resetpassword", resetPasswordValidator, resetPasswordController);

router.param("userId", userById);

module.exports = router;
