const express = require("express");
const router = express.Router();
const {
  newConv,
  Conversations,
  findConversation,
  createConv,
  getConv
} = require("../controller/conversationController");
const { auth } = require("../middlewares/verify");

//new conv

router.post("/conversation", newConv);
router.post("/new_conv", createConv);
router.post("/get_conv", getConv);

//get conv of a user

router.get("/conversation/:userId", Conversations);

// get conv includes two userId

router.get("/conversation/find/:firstUserId/:secondUserId", findConversation);

module.exports = router;
