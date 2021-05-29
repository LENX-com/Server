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
const { getCategory } = require("../controller/category.controller");
const { auth, protected } = require("../middlewares/verify");
const { userById } = require("../controller/user.controller");
const { uploadImage } = require("../middlewares/cloudinary");

//new implementation route
router.post(
  "/product/create",
  upload.single("file"),
  auth,
  protected(1),
  createProduct
);
router.get("/products", list);
router.get("/products/search", listSearch);
router.put("/edit:/productId", auth, protected(1));
router.delete("/delete:/productId", auth, protected(1));
router.get("/category/:categoryId",  getProductByCategory);
router.get("/brands/:brandId", getProductByBrand);
router.get("product/:productId", getProductById);
router.post("/tags", getProductByTags);
router.get("/", allProduct);
//*********************************** */

router.get("/products", list);
router.get("/search", listSearch);
router.get("/related/:productId", listRelated);
router.get("/categories", getCategory);  
router.post("/product/by/search", listBySearch);
router.get("/product/photo/:productId", photo);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
