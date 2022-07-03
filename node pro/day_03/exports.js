const send = require("send");
const { object } = require("webidl-conversions");
const Posts = require("./model");
const newpost = require("./createpost");
const app = require("express");
const { json } = require("body-parser");

exports.createPost = async (req, res) => {
  const data = await newpost;
  res.send(data);
};
exports.viewPost = async (req, res) => {
  const data = await Posts.find({});
  res.send(data);
};
exports.deletePost = async (req, res) => {
  const result = await Posts.findByIdAndDelete(req.params.id);
  if (result.$isDeleted) {
    res.send("Successfully deleted one document.");
  } else {
    res.send("No documents matched the query. Deleted 0 documents.");
  }
};
exports.findPost = async (req, res) => {
  try {
    const data = await Posts.findById(req.params.id);
    res.send(data);
  } catch (error) {
    res.status(404).send({ error: "Post not found!" });
  }
};

exports.updatePost = async (req, res) => {
 
   try {
    const id =req.params.id
    const update =req.body
    const options ={new:true}
    const result =await Posts.findByIdAndUpdate(id,update,options);
    res.send(result)
  }
 catch (error) {
    res.status(404).send({ error: "Post not found and can't be updated" });
  }
};
exports.sendPost=async(req,res)=>{
  try {
    const update =req.body
    
    await article.save()
    res.send(article)
  } catch (error) {
    res.status(500).send({error:"bad request"})
  }
}
