const express = require("express");
const router = express.Router();
const multer = require("multer");
const { auth } = require("../middlewares/verify");
const {
  addReview,
  upVote,
  downVote,
} = require("../controller/review.controller");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/create/:productId",upload.single("file"), auth, addReview);
router.post("/vote/:reviewId", auth, upVote);
router.post("/downvote/:reviewId", auth, downVote);

module.exports = router;
