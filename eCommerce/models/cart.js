const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  id_cart: { type: Number, required: true, unique: true },
  id_user: { type: Number, required: true, ref: "Users" },
});

const Cart = mongoose.model("Carts", cartSchema);
module.exports = Cart;
