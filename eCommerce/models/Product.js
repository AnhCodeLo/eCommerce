const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id_product: { type: Number, required: true, unique: true },
  images: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  describle: { type: String, required: true },
  id_category: { type: Number, required: true, ref: "Categories" },
});

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
