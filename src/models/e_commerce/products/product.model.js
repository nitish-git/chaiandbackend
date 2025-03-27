import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: [true, "Product name cannot have leading or trailing spaces"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },

    stock: {
      type: Number,
      required: [true, "Product stock is required"],
    },
    images: [String],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = Model("Product", productSchema);

export default Product;
