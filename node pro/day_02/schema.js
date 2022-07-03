const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

blogSchema.pre('save',function(next){
  this.PostO
})
module.exports = blogSchema;
