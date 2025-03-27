import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

export const addressSchema = new Schema(
  {
    street: {
      type: String,
      required: [true, "Street is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
    zip: {
      type: String,
      required: [true, "Zip is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Address = Model("Address", addressSchema);

export default Address;
