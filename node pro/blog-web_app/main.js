const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');
const db = require("./db");
const router = require("./routes");



db.connect()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use("/", router);
app.use("/posts",router)
app.use("/up",router)
app.use('/user',router)




app.listen(port, () => {
  "server is connected";
});
