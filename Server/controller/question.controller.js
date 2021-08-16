const { check, validationResult } = require("express-validator/check");
const Question = require("../models/question");
const { User } = require("../models/user");

exports.postQuestion = async (req, res, next) => {
  try {
    const author = req.user._id;

    if(!author) {
        throw new Error ("User not found")
    }

    const question = await Question.create({
      question: req.body.question,
      productId: req.params.productId,
      author: {
        id: req.user._id,
        name: req.user.name,
        avatar: req.user.avatar
      },
      is_anonymous: false,
    })

     if (!question) {
      return res.status(400).json({ error: "Question failed" });
    }

    res.status(201).json({data: question, msg: "Question posted succesfully"});
  } catch (err) {
    next(err);
  }
};

//write review for product
exports.answer =  async (req, res) => {

    try {
      const user = await User.findById(req.user._id).select("-password");
      const question = await Question.findById(req.params.questionId);

      if(!user || !question ){
          throw new Error(" User does not exist ")
      }


      const newComment = {
        title: req.body.title,
        answer: req.body.answer,
        name: user.name,
        avatar: user.avatar,
        user: req.user._id,
      };

      question.answers.unshift(newComment);

      await question.save();

      res.json(question.answers);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }

  exports.listAll = async (req, res) => {
  try {    
  let questions = await Question.find({ productId : req.params.productId })
    .sort([["createdAt", "desc"]])
    .exec();

    if(!questions){
        throw new Error("Questions could not be found")
    }

    res.json(questions);
  } catch(err) {
      console.log(err.message);
      res.status(500).send("Questions not found")
  }
};