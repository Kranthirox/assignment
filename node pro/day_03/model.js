
const mongoose = require('mongoose')
const PostSchema = require('./schema')
const Post = mongoose.model("newspage", PostSchema);

module.exports=Post;
