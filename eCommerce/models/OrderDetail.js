const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderDetailSchema = new Schema(
  {
    order_id: { type: Number, required: true, ref: "Orders" },
    product_id: { type: Number, required: true, ref: "Products" },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { _id: false }
);

const OrderDetail = mongoose.model("OrderDetails", orderDetailSchema);
module.exports = OrderDetail;
