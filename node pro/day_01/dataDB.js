var mongoose = require("mongoose");
var mongooseURL =
  "mongodb+srv://admin:Rtrpuho6bp81T7HP@cluster0.zxngk.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(
  mongooseURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("working");
  }
);

module.exports = mongoose;
