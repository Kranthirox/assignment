const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const db = require("./db");
const router = require("./routes");


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.set("view engine","ejs")
app.use(function(req, res, next){
  res.locals.message = req.flash();
  next();
});

db.connect();


app.use(router)


app.listen(port, () => {
  "server is connected";
});
