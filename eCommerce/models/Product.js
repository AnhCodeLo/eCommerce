const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock_quantity: { type: Number, required: true },
  image_url: { type: String, required: true },
});

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
