import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username is already in use"],
      lowercase: [true, "Username must be in lowercase"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already in use"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: [8, "Password must be at least 8 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const User = Model("User", userSchema);

export default User;
