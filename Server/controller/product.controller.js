const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Product = require("../models/product");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.API_SECRET,
});
const { errorHandler } = require("../helpers/dbErrorHandler");

//get all products
exports.allProduct = async (req, res) => {
  try {
    const product = await Product.find().populate("category", "_id, name");
    if (!product.length) {
      return res.status(400).json({ error: "No product uploaded yet" });
    }
    return res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

//create a product route accessible by only manufacturer(role 1) and add category from req.body.category
exports.createProduct = async (req, res) => {
  const file = req.file;
  try {
    if (!file) throw new Error("Enter a valid file");
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
    });

    const { ...args } = req.body;
    args.author = req.user._id;
    args.photo = result.secure_url;
    const newProduct = await Product.create(args);
    return res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "oops somethib went wrong try again" });
  }
};

//edit a product
exports.editProduct = async (req, res) => {
  try {
    const product = await product.findById(req.params.productId);
    if (!product) {
      return res.status(400).json({ error: "no product found with that id" });
    }
    const { ...args } = req.body;

    const updated = await Product.findOneAndUpdate(
      req.params.productId,
      {
        args,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    return res.status(200).json({ data: updated });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
//delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);
    return res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

//get product by its id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product(req.params.productId);
    if (!product) {
      return res.status(400).json({ error: "No product found" });
    }
    return res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

//get product by its category
exports.getProductByCategory = async (req, res) => {
  try {
    const product = await Product.find({
      category: req.params.categoryId,
    }).populate("category", "_id name");
    if (product.length < 0) {
      return res.status(400).json({ error: "No product for this category" });
    }
    return res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

//get product by tags
exports.getProductByTags = async (req, res) => {
  try {
    const product = await Product.find({ tags: req.body.tags });
    if (!product.length) {
      return res.status(400).json({ error: "no product found with that tag" });
    }
    return res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

//get product by brands
exports.getProductByBrand = async (req, res) => {
  try {
    const product = await Product.find({ brand: req.params.brandId });
    if (!product.length) {
      return res
        .status(400)
        .json({ error: "no products with that brand for now" });
    }
    return res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

//****************************************old implementation **************************************************** */
exports.productById = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((err, product) => {
      if (err || !product) {
        return res.status(400).json({
          error: "Product not found",
        });
      }
      req.product = product;
      next();
    });
};

exports.remove = (req, res) => {
  let product = req.product;
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Product deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    let product = req.product;
    product = _.extend(product, fields);

    // 1kb = 1000
    // 1mb = 1000000

    if (files.photo) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

/**
 * sell / arrival
 * by sell = /products?sortBy=sold&order=desc&limit=4
 * by arrival = /products?sortBy=createdAt&order=desc&limit=4
 * if no params are sent, then all products are returned
 */

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Product.find()
    .populate("category")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "Products not found",
        });
      }
      res.json(products);
    });
};

/**
 * it will find the products based on the req product category
 * other products that has the same category, will be returned
 */

exports.listRelated = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Product.find({ _id: { $ne: req.product }, category: req.product.category })
    .limit(limit)
    .populate("category", "_id name")
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "Products not found",
        });
      }
      res.json(products);
    });
};

exports.listCategories = (req, res) => {
  Product.distinct("category", {}, (err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "Categories not found",
      });
    }
    res.json(categories);
  });
};

/**
 * list products by search
 * we will implement product search in react frontend
 * we will show categories in checkbox and price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the products to users based on what he wants
 */

exports.listBySearch = (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  let findArgs = {};

  // console.log(order, sortBy, limit, skip, req.body.filters);
  // console.log("findArgs", findArgs);

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        // gte -  greater than price [0-10]
        // lte - less than
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  Product.find(findArgs)
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: "Products not found",
        });
      }
      res.json({
        size: data.length,
        data,
      });
    });
};

exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
  next();
};

exports.listSearch = (req, res) => {
  // create query object to hold search value and category value
  const query = {};
  // assign search value to query.name
  if (req.query.search) {
    query.name = { $regex: req.query.search, $options: "i" };
    // assigne category value to query.category
    if (req.query.category && req.query.category != "All") {
      query.category = req.query.category;
    }
    // find the product based on query object with 2 properties
    // search and category
    Product.find(query, (err, products) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(products);
    }).select("-photo");
  }
};

exports.decreaseQuantity = (req, res, next) => {
  let bulkOps = req.body.order.products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item._id },
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });

  Product.bulkWrite(bulkOps, {}, (error, products) => {
    if (error) {
      return res.status(400).json({
        error: "Could not update product",
      });
    }
    next();
  });
};
