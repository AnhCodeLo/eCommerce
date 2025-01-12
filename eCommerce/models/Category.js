const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  id_category: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  images: { type: String, required: true },
});

const Category = mongoose.model("Categories", categorySchema);
module.exports = Category;
