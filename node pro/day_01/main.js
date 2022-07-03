const express = require("express");
const app = express();
const Todo = require("./todo-model");

app.get("/", (req, res) => {
  const allTodo = Todo.find();
  res.send(allTodo);
});
app.listen(3000);
