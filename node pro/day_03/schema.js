const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  body: String,
  author: String,
  PostedOn: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});
PostSchema.pre("save", function (next) {
  this.PostedOn = Date.now();
  next();
});
module.exports = PostSchema;
