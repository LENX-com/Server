const express = require('express');
const router = express.Router();
const { 
    newConv,
    Conversations,
    findConversation
} = require('../controller/conversationController')

//new conv

router.post("/conversation", newConv)

//get conv of a user

router.get("/conversation/:userId", Conversations )

// get conv includes two userId

router.get("/conversation/find/:firstUserId/:secondUserId", findConversation ) 

module.exports = router; 