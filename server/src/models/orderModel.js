const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    orderItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItems",
      },
    ],
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "addresses",
    },
    orderDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    paymentDetails: {
      paymentMethod: {
        type: String,
      },
      transationId: {
        type: String,
      },
      paymentId: {
        type: String,
      },
      paymentStatus: {
        type: String,
        default: "PENDING",
      },
    },
    totalDiscountedPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    discounts: {
      type: Number,
      required: true,
    },
    shippingPrice: {
      type: Number,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    orderStatus: {
      type: String,
      required: true,
      default: "PENDING",
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    totalItem: {
      type: Boolean,
      required: true,
    },
    deliveredDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
