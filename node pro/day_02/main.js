const express = require("express");
const app = express();
const Blog = require("./model");
const db = require("./database");

db.connect();
app.get("/news", async (req, res) => {
  const data = await Blog.find({});
  res.send(data);
});
app.listen(4000);
