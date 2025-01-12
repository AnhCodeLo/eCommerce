const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id_user: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  phonenumber: { type: String, required: true },
  address: { type: String, required: true },
  images: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
