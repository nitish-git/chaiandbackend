import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

const hospitalSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: [true, "Address is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Hospital = Model("Hospital", hospitalSchema);

export default Hospital;
