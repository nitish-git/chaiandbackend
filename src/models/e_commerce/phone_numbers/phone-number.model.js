import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

export const phoneNumberSchema = new Schema(
  {
    number: {
      type: String,
      required: [true, "Phone number is required"],
    },
  },
  {
    timestamps: true,
  }
);

const PhoneNumber = Model("PhoneNumber", phoneNumberSchema);

export default PhoneNumber;
