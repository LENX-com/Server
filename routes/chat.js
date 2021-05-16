const express = require('express');
const router = express.Router();
let { getChannels } = require('../controller/chat.controller');

router.get('/getChannels', getChannels);


module.exports = router;