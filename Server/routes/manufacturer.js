const express = require("express");
const router = express.Router();
const { protected, auth } = require("../middlewares/verify");
const {
  createProfile,
  getProfile,
  getProfileById,
  manufacturerReview,
  reviewByManufacturer,
} = require("../controller/manufacturer.controller");
const checkObjectId = require("../middlewares/checkObjectId");
const { check, validationResult } = require("express-validator/check");

router.post("/create", auth, protected(1), createProfile);
router.get("/read", auth, getProfile);
router.get("/manufacturer/reviews/:manufacturerId", reviewByManufacturer)
router.get("/profile/:profileId", getProfile);
router.post("/manufacturer/:manufacturerId",
  check("text", "Text is required").not().isEmpty(),
  auth, manufacturerReview);

module.exports = router;
