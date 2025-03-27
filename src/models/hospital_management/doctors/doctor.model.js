import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    qualifications: {
      type: String,
      required: [true, "Qualifications are required"],
    },
    experienceInYears: {
      type: Number,
      required: [true, "Experience is required"],
      default: 0,
    },
    salary: {
      type: String,
      required: [true, "Salary are required"],
    },
    hospitals: [
      {
        type: Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = Model("Doctor", doctorSchema);

export default Doctor;
