import mongoose, { SchemaType } from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, "Username is required"],
      unique: [true, "Username is already in use"],
      lowercase: [true, "Username must be in lowercase"],
      trim: [true, "Username cannot have leading or trailing spaces"],
    },
    email: {
      type: String,
      require: [true, "Email is required"],
      unique: [true, "Email is already in use"],
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
    phoneNumbers: [
      {
        type: Schema.Types.ObjectId,
        ref: "PhoneNumber",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = Model("User", userSchema);

export default User;
