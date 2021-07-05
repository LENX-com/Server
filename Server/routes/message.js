const express = require('express');
const router = express.Router();
const { MessageSend, conversationID } = require('../controller/messageController')

//add

router.post("/message", MessageSend)
//get
router.get("/message/:conversationId", conversationID)


module.exports = router;    