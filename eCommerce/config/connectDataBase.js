const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const atlat =
  "mongodb+srv://nguyenduylam2710:GIWdmbf8YNLfU5CN@ecommerceapp.jrw7c.mongodb.net/mySQL?retryWrites=true&w=majority&appName=eCommerceApp";
const connect = async () => {
  try {
    await mongoose.connect(atlat, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect success");
  } catch (error) {
    console.log("Connect fail");
    console.log(error);
  }
};

module.exports = { connect };
