import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
  },
  {
    timestamps: true,
  }
);

const Category = Model("Category", categorySchema);

export default Category;
