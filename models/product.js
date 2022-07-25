import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;
const Product = new Schema(
  {
    name: {
      type: String,
      minlength: 5,
    },
    // price_new: {
    //   type: Number,
    // },
    // price_old: {
    //   type: Number,
    // },
    // img: {
    //   type: String,
    // },
    // desc: {
    //   type: String,
    // },
    // status: {
    //   type: Number,
    //   default: 0,
    // },
    category: {
        type: ObjectId,
        ref: "Category"
    }
  },
  { timestamps: true }
);

Product.index({ "$**": "text" });

export default mongoose.model("Product", Product);

