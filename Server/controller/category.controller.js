const { Brand, Category } = require("../models/category");
const { errorHandler } = require("../helpers/dbErrorHandler");

//create a category
exports.createCategory = async (req, res) => {
  try {
    const { ...args } = req.body;
    console.log(args);
    args.userId = req.user._id;
    const newCategory = await Category.create(args);
    return res.status(200).json(newCategory);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

exports.allCategories = async (req, res) => {
  try {
    const category = await Category.find();
    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId).populate(
      "products"
    );
    return res.json(category);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Category does not exist",
      });
    }
    req.category = category;
    next();
  });
};

exports.create = (req, res) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};

exports.read = (req, res) => {
  return res.json(req.category);
};

exports.update = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.remove = (req, res) => {
  const category = req.category;
  category.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Category deleted",
    });
  });
};

exports.list = (req, res) => {
  Category.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

//create a brand
exports.createBrand = async (req, res) => {
  try {
    const { ...args } = req.body;
    args.userId = req.user._id;
    const newBrand = await Brand.create(args);
    return res.status(200).json({ data: newBrand });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
