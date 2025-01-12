const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  order_id: { type: Number, required: true, unique: true },
  user_id: { type: Number, required: true, ref: "Users" },
  order_date: { type: Date, required: true },
  status: { type: String, required: true },
  total_price: { type: Number, required: true },
  products: [
    {
      product_id: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
});

const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;
