import Product from "../models/product";

export const create = async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Khong them duoc san pham",
    });
  }
};

export const list = async (req, res) => {
  const limitNumber = 8;
  const limit = req.query.limit ? +req.query.limit : limitNumber;
  const page = req.query.page ? +req.query.page : 1;
  const skip = (page - 1) * limitNumber;
  try {
    const product = await Product.find({})
      .skip(skip)
      .limit(limit)
      .populate("category");
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Khong them duoc san pham",
    });
  }
};

export const get = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id }).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Khong them duoc san pham",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Khong xóa duoc san pham",
    });
  }
};

export const update = async (req, res) => {
  const condition = { _id: req.params.id };
  const update = req.body;
  try {
    const product = await Product.findOneAndUpdate(condition, update).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Khong them duoc san pham",
    });
  }
};

export const search = async (req, res) => {
  try {
    const limitNumber = 20;
    const limit = req.query.limit ? +req.query.limit : limitNumber;
    console.log(req.query.q);
    const products = await Product.find({
      name: { $regex: new RegExp(req.query.q) },
    })
      .limit(limit)
      .exec();
    res.json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const paginate = async (req, res) => {
  const limitNumber = 20;
  const limit = req.query.limit ? +req.query.limit : limitNumber;
  const page = req.query.page ? +req.query.page : 1;
  const skip = (page - 1) * limit;
  try {
    const paginate = await Product.find().skip(skip).limit(limit);
    res.json(paginate);
  } catch (error) {
    console.log(error);
  }
};
