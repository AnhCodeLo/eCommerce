const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true },
  id_user: { type: Number, required: true, ref: "Users" },
});

const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;
