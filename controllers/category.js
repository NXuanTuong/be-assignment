import Category from "../models/category";
import Product from "../models/product";

export const list = async (req, res) => {
  try {
    const category = await Category.find({}).exec();
    res.json(category);
  } catch (error) {
    res.status(400).json({
      error: "Khong lay duoc san pham",
    });
  }
};

export const create = async (req, res) => {
  try {
    const category = await new Category(req.body).save();
    res.json(category);
  } catch (error) {
    res.status(400).json({
      error: "Khong them duoc san pham",
    });
  }
};
export const read = async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id }).exec();
    const product = await Product.find({ category }).exec();
    res.json({
      category,
      product,
    });
  } catch (error) {
    res.status(400).json({
      error: "Khong đọc duoc san pham",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove({
      _id: req.params.id,
    }).exec();
    res.json(category);
  } catch (error) {
    res.status(400).json({
      error: "Khong xóa duoc san pham",
    });
  }
};

export const update = async (req, res) => {
  const condition = { id: req.params.id };
  const update = req.body;
  try {
    const category = await Category.findOneAndUpdate(condition, update).exec();
    res.json(category);
  } catch (error) {
    res.status(400).json({
      error: "Khong sửa duoc san pham",
    });
  }
};
