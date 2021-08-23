const { Conversations, Messages } = require("../models/conversation");

exports.newConv = async (req, res) => {
  const newConversation = await Conversations.create({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.Conversations = async (req, res) => {
  try {
    const conversation = await Conversations.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.findConversation = async (req, res) => {
  try {
    const conversation = await Conversations.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.createConv = async (req, res) => {
  try {
    const newConv = await Messages.create(req.body);
    return res.json(newConv);
  } catch (err) {
    console.log(err);
  }
};

exports.getConv = async (req, res) => {
  try {
    const resp = await Messages.find({
      $and: [
        {
          senderId: req.body.senderId,
        },
        {
          senderId: req.body.receiverId,
        },
      ],
    });
    return res.json(resp);
  } catch (err) {
    console.log(err);
  }
};
