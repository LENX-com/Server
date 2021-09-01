const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const { following } = require("../models/follow");
const { isAdmin, requireSignin } = require("../controller/auth.controller");
const _ = require("lodash");
const { auth, protected } = require("../middlewares/verify");
const Blog = require("../models/blog");
const { User } = require("../models/user");
const checkObjectId = require("../middlewares/checkObjectId");
const multer = require("multer");
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage })


//get all users for demo purpose
router.get("/all", auth, async (req, res) => {
  try {
    const user = await User.find({ _id: { $ne: req.user._id } });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
});


//get all the blogs of all the manufacturer you are following
router.get("/blog/following", auth, async (req, res) => {
  try {
    const user = await following.find({ userId: req.user.id });
    const manuIds = user.map((item) => item.manufacturerId);
    const resp = await Blog.find({ user: { $in: manuIds } });
    return res.json(resp);
  } catch (error) {
    console.log(error);
  }
});
//get all blogs for a single manufacturer you are following.
router.post("/blog/following/single", auth, async (req, res) => {
  try {
    const user = await following.find({ userId: req.user.id });

    const resp = await Blog.find({ user: req.body.manufacturerId });
    return res.json(resp);
  } catch (error) {
    console.log(error);
  } 
});

// @route    Blog api/Blogs
// @desc     Create a Blog
// @access   Private
router.post(
  "/blog",
  auth,
  protected(1),
  upload.single("file"),
  check("text", "Text is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user._id).select("-password");

      const newBlog = new Blog({
        title: req.body.title,
        text: req.body.text,
        avatar: user.avatar,
        name: user.name,
        user: req.user._id,
        status: req.body.status,
      });

      const blog = await newBlog.save();

      res.json(blog);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/Blogs
// @desc     Get all Blogs
// @access   Private
router.get("/blog", async (req, res) => {
  try {
    const Blogs = await Blog.find().sort({ date: -1 });
    res.json(Blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Get blogs by user for the admin dashboard 
router.get("/blogs/user", auth, protected(1), async (req, res ) => {
  try {
    const Blogs = await Blog.find({user : req.user._id});
    res.json(Blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});  

// @route    GET api/Blogs/:id
// @desc     Get Blog by ID
// @access   Private
router.get("/blog/:id", checkObjectId("id"), async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/Blogs/:id
// @desc     Delete a Blog
// @access   Private
router.delete("/blog/:id", [auth, checkObjectId("id")], async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    console.log(req);

    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }

    // Check user
    if (!_.isEqual(req.user._id, blog.user)) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await blog.remove();

    res.json({ msg: "Blog removed" });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    PUT api/Blogs/like/:id
// @desc     Like a Blog
// @access   Private
router.put("/blog/like/:id", auth, checkObjectId("id"), async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    // Check if the Blog has already been liked
    if (blog.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: "Blog already liked" });
    }

    blog.likes.unshift({ user: req.user.id });

    await blog.save();

    return res.json(blog.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/Blogs/unlike/:id
// @desc     Unlike a Blog
// @access   Private
router.put("/blog/unlike/:id", auth, checkObjectId("id"), async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    // Check if the Blog has not yet been liked
    if (!blog.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: "Blog has not yet been liked" });
    }

    // remove the like
    blog.likes = blog.likes.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    await blog.save();

    return res.json(blog.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    Blog api/Blogs/comment/:id
// @desc     Comment on a Blog
// @access   Private
router.post(
  "/blog/comment/:id",
  auth,
  checkObjectId("id"),
  check("text", "Text is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user._id).select("-password");
      const blog = await Blog.findById(req.params.id);

      const newComment = {  
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      blog.comments.unshift(newComment);

      await blog.save();

      res.json(blog.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/Blogs/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete("/blog/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    // Pull out comment
    const comment = blog.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }
    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    blog.comments = blog.comments.filter(
      ({ id }) => id !== req.params.comment_id
    );

    await blog.save();

    return res.json(blog.comments);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
