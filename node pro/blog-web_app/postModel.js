const mongoose = require("mongoose");
const PostSchema = require('./schema')
module.exports =mongoose.model('newspages',PostSchema);
