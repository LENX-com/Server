const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage })

const {
  createProduct,
  editProduct,
  deleteProduct,
  getProductByCategory,
  getProductById,
  getProductByTags,
  getProductByBrand,
  allProduct,
  list,
  listRelated,
  listCategories,
  productById,
  listBySearch,
  photo,
  listSearch,
  searchFilters, 
  listAll,
  productReview,
} = require("../controller/product.controller");
const { auth, protected } = require("../middlewares/verify");
const { userById } = require("../controller/user.controller");
const { uploadImage } = require("../middlewares/cloudinary");
const checkObjectId = require("../middlewares/checkObjectId");
const { check, validationResult } = require("express-validator/check");
const _ = require("lodash");


//new implementation route
router.post(
  "/product/create",
  upload.array("file"),
  auth,
  protected(1),
  createProduct
);  
router.get("/products", list);
router.post("/products/by/search", listBySearch);
router.put("/edit/product/:productId", upload.array('photo', 12), auth, protected(1), editProduct);
router.delete("/delete:/productId", auth, protected(1));
router.get("/products/by/category/:categoryId", getProductByCategory);
router.get("/brands/:brandId", getProductByBrand);
router.get("/product/:productId", getProductById);  
router.post("/tags", getProductByTags);
router.post("/search/filters", searchFilters);
router.get("/products/:count", listAll);

router.post(
  "/product/comment/:id", checkObjectId("id"),
  check("text", "Text is required").not().isEmpty(),
  auth, productReview)
//*********************************** */

router.get("/products", list);
router.get("/search", listSearch);
router.get("/related/:productId", listRelated);
router.post("/product/by/search", listBySearch);
// router.get("/product/photo/:productId", photo);

// router.param("userId", userById);
// router.param("productId", productById);

module.exports = router;
