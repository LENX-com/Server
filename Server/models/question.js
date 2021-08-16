 const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types

const QuestionSchema = new mongoose.Schema(
  {
    productId: { 
        type: ObjectId,
        ref: "Product",
        required : true 
     },
     author: {
         id: {
            type: ObjectId,
            ref: "User",
            required: true
         },
         name: {
            type: String,
            required: true 
         },
         avatar: {
             type: String
         },
    },
    question: {
      type: String,
      required: true
    },
    score: {
        type: Number,
        default: 0
    },
    answers: [{
        answer : {
            type: String,
            required: true
        },
        user: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        avatar: {
            type: String
        },
        name: {
            type: String,
            required: true
        },
        upvotes: {
            type: Number
        },
        downvotes : {
            type: Number
        },
        is_anonymous : {
            type: Boolean
        },
    }],
    is_answered : {
        type: Boolean,
        default: false
    },
    is_anonymous : {
        type: Boolean
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);    