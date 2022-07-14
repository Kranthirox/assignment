const Post = require("../postModel");
const { v4: uuidv4 } = require("uuid");
const { findByIdAndUpdate } = require("../postModel");
const mongoose = require("mongoose");
const User = require("../userModel");
const _ = require('lodash')
const bcrypt =require ('bcrypt')



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
  let person = await User.findOne({email:req.body.email})
   if(person) return res.send("already resgisted")
  
   person = new User({
    id:uuidv4(),
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    contact:req.body.contact,
    DOB:req.body.DOB
   })

const salt = await bcrypt.genSalt(10);
person.password =  await bcrypt.hash(person.password,salt)
  await person.save();
 
  await res.send( _.pick(person,['username','email','contact']));
 

 }






