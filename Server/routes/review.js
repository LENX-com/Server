const express = require("express");
const router = express.Router();
const multer = require("multer");
const { auth, protected } = require("../middlewares/verify");
const {
  addReview,
  upVote,
  downVote,
  addResponse,
  getReviewsByManufacturer,
  removeResponse
} = require("../controller/review.controller");

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post(
  "/review/create/manufacturer/",
  upload.single("file"),
  auth,
  addReview
);

router.get("/reviews/manufacturer/:storeSlug", getReviewsByManufacturer);

router.post(
  "/review/response/:reviewId",
  auth,
  addResponse
);

router.put("/review/remove/response/:reviewId", auth, removeResponse)

router.post("/review/vote", auth, upVote);
router.post("/review/downvote", auth, downVote);

module.exports = router;
