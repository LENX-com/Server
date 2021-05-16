const express = require("express");
const router = express.Router();
const { auth, protected } = require("../middlewares/verify");
const {
  create,
  read,
  edit,
  remove,
  getById,
  addProfileImage,
  addBgImage,
} = require("../controller/marketplace.controller");
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

router.post("/create", auth, create);
router.get("/read", auth, read);
router.post("/edit/:marketId", auth, edit);
router.get("/:marketId", auth, getById);

//handling files with cloudinary
router.post(
  "/dp/create/:marketId",
  auth,
  upload.single("file"),
  addProfileImage
);
router.post("/Bg/create/:marketId", auth, upload.single("file"), addBgImage);

module.exports = router;
