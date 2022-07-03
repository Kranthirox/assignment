const Post = require('../postModel')
const path = require('path');
const router = require('../routes');
const flash = require('connect-flash');

exports.viewPost = async(req,res)=>{
    const response = await Post.find({});
    res.render("home",{data:response});
}

exports.PostNews =async(req,res)=>{
    const payload = req.body
   const newPost = new Post(payload);
     const data =await  newPost.save();
  res.redirect("/home")
}

exports.createPost = async(req,res)=>{
    res.render("add-post");
}
exports.deletePost= async(req,res)=>{
    const id =req.params["id"]
    const response =await Post.deleteOne({id});
    req.flas
    req.flash("success",`Record deleted.`);
    res.redirect("/home")
}

