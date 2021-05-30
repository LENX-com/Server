const express = require("express");
const router = express.Router();
const { protected, auth } = require("../middlewares/verify");
const {
  createProfile,
  getProfile,
  getProfileById,
} = require("../controller/profile.controller");

router.post("/create", auth, protected(1), createProfile);
router.get("/read", auth, getProfile);
router.get("/profile/:profileId", getProfile);

module.exports = router;
