const express = require("express");
const router = express.Router();
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
} = require("../controller/product.controller");
const { auth, protected } = require("../middlewares/verify");
const { userById } = require("../controller/user.controller");
const { uploadImage } = require("../middlewares/cloudinary");

//new implementation route
router.post(
  "/create",
  upload.single("file"),
  auth,
  protected(1),
  createProduct
);
router.put("/edit:/productId", auth, protected(1));
router.delete("/delete:/productId", auth, protected(1));
router.get("/category/:categoryId", auth, getProductByCategory);
router.get("/brands/:brandId", auth, getProductByBrand);
router.get("/:productId", auth, getProductById);
router.post("/tags", auth, getProductByTags);
router.get("/", auth, allProduct);
//*********************************** */

router.get("/", list);
router.get("/search", listSearch);
router.get("/related/:productId", listRelated);
router.get("/categories", listCategories);
router.post("/by/search", listBySearch);
router.get("/photo/:productId", photo);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
