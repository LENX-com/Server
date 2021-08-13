const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/verify");
const { check, validationResult } = require("express-validator/check");
const {
 postQuestion,
 answer,
 listAll
} = require("../controller/question.controller");
const checkObjectId = require("../middlewares/checkObjectId");

const Check = check("text", "Text is required").not().isEmpty()

router.post("/question/:productId", auth, Check, postQuestion);

router.post("/answer/:questionId", check("answer", "Text is required").not().isEmpty(), auth, Check, answer );

router.get("/questions/:productId", listAll);

module.exports = router;
