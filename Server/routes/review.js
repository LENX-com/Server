const express = require("express");
const router = express.Router();
const multer = require("multer");
const { auth } = require("../middlewares/verify");
const {
  addReview,
  upVote,
  downVote,
  getReviews,
} = require("../controller/review.controller");

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get("/reviews/:productId", getReviews);
router.post(
  "/review/create/:productId",
  upload.single("file"),
  auth,
  addReview
);
router.post("/review/vote", auth, upVote);
router.post("/review/downvote", auth, downVote);

module.exports = router;
