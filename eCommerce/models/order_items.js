const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  images: { type: String, required: true },
  describe: { type: String, required: true },
  id_product: { type: Number, required: true, ref: "Products" },
  id_order: { type: Number, required: true, ref: "Orders" },
});

const OrderItem = mongoose.model("OrderItems", orderItemSchema);
module.exports = OrderItem;
