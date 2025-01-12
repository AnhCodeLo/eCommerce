const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  id_cart: { type: Number, required: true, ref: "Carts" },
  id_product: { type: Number, required: true, ref: "Products" },
});

const CartItem = mongoose.model("CartItems", cartItemSchema);
module.exports = CartItem;
