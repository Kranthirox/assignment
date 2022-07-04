const Post = require('../postModel')
const path = require('path');
const router = require('../routes');
const {v4:uuidv4}=require("uuid");
const { Console } = require('console');
const { response } = require('express');
const flash =require('connect-flash')
const session = require('express-session')

exports.viewPost = async(req,res)=>{
    const response = await Post.find({});
    res.render("home",{data:response});
}

exports.PostNews =async(req,res)=>{
const data =req.body

const newPost = new Post(data)
const response = await newPost.save()
res.redirect("/home")
}

exports.createPost = async(req,res)=>{
    res.render("add-post");
}

exports.deletePost = async (req, res) => {
    const result = await Post.findByIdAndDelete(req.params.id);
    
     res.redirect("/home")
  };


