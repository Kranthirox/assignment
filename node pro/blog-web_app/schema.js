const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  
  title: {type:String,unique:true,required:true},
  body: {type:String,required:true},
  author: {type:String,required:true},
  catagory:{
  type:String,
  required:true,
  enum:[
    "Business",
    "Cars",
    "Entertainment",
    "Family",
    "Health",
    "Politics",
    "Religion",
    "Science",
    "Sports",
    "Technology",
    "Travel",
    "Video",
    "World"
],
  },
  PostedOn: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  }
});

module.exports = PostSchema;
