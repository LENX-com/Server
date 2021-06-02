const express = require("express");
const router = express.Router();
const { auth,protected } = require("../middlewares/verify");
const {
  createCategory,
  allCategories,
  createBrand,
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require("../controller/category.controller");
const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../controller/auth.controller");
const { userById } = require("../controller/user.controller");

router.get("categor/:categoryId", read);
router.post("/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put("/:categoryId/:userId", requireSignin, isAuth, isAdmin, update);
router.delete(
  "category/:categoryId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.get("/categoriess", list);

router.param("categoryId", categoryById);
router.param("userId", userById);

//new routes setup for categories
router.post("/category/create", auth, protected(1), createCategory);
router.get("/categories", allCategories);
//routes for brand
router.post("/brands/create", auth, createBrand);

module.exports = router;
