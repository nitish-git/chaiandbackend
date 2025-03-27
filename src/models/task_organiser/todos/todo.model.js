import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    subTasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Todo = Model("Todo", todoSchema);

export default Todo;
