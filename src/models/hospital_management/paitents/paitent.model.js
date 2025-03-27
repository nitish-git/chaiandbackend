import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

const paitentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: [true, "Blood Group is required"],
    },
    diagnosis: {
      type: String,
      required: [true, "Diagnosis is required"],
    },
    treatment: {
      type: String,
      required: [true, "Treatment is required"],
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    hospital: {
      type: Schema.Types.ObjectId,
      ref: "Hospital",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Paitent = Model("Paitent", paitentSchema);

export default Paitent;
