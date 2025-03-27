import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

const taskSchema = new Schema(
  {
    content: {
      type: String,
      require: [true, "Task description is required"],
    },
    complete: {
      type: Boolean,
      default: false,
    },
    completedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
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

const Task = Model("Task", taskSchema);

export default Task;
