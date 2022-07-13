const Post = require("../postModel");
const { v4: uuidv4 } = require("uuid");
const { findByIdAndUpdate } = require("../postModel");
const mongoose = require("mongoose");
const User = require("../userModel");

exports.viewPost = async (req, res) => {
  const response = await Post.find({});
  res.render("home", { data: response });
};

exports.PostNews = async (req, res) => {
  const newbook = new Post({ ...req.body, id: uuidv4() });
  const data = await newbook.save();
  res.redirect("/home");
  console.log(newbook);
};

exports.createPost = async (req, res) => {
  res.render("add-post");
};

exports.deletePost = async (req, res) => {
  const id = req.params["id"];
  const response = await Post.deleteOne({ id });
  res.redirect("/home");
};
exports.updatePage = async (req, res) => {
  res.render("update-post");
};

exports.updatePage = async (req, res) => {
  const id = req.params["id"];
  const result = await Post.find({ id });
  console.log(result);
  res.render("update-post", { data: result });
};
exports.updatePost = async (req, res) => {
  const id = req.params["id"];
  const update = req.body;
  const result = Post.findOneAndReplace({ id }, update);
  console.log(result);
  res.redirect("/home");
};
exports.userPage = async (req, res) => {
const newpost = new User(req.body)
console.log(newpost)
};




