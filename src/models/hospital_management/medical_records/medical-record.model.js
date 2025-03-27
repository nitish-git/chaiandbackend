import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

const medicalRecordSchema = new Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    paitent: {
      type: Schema.Types.ObjectId,
      ref: "Paitent",
    },
    diagnosis: {
      type: String,
      required: [true, "Diagnosis is required"],
    },
    treatment: {
      type: String,
      required: [true, "Treatment is required"],
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

const MedicalRecord = Model("MedicalRecord", medicalRecordSchema);

export default MedicalRecord;
