import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Model = mongoose.model;

const orderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    requried: true,
  },
});

const orderSchema = new Schema(
  {
    orderPrice: {
      type: Number,
      required: [true, "Order price is requried"],
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Customer is required"],
    },
    items: {
      type: [orderItemSchema],
      required: [true, "Order items are required"],
    },
    status: {
      type: String,
      enum: ["PENDING", "PROCESSING", "COMPLETED", "CANCELLED"],
      default: "PENDING",
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: [true, "Address is requried"],
    },
    phone: {
      type: Schema.Types.ObjectId,
      ref: "PhoneNumber",
      required: [true, "Phone number is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Order = Model("Order", orderSchema);

export default Order;
