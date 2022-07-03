const mongoose = require("mongoose");
const { post } = require("./schema");
const blogschema = require("./schema")
const Blog = mongoose.model('blog',blogschema)

    
    const post = await new blog({
        title:  "PM going to supreme court ", 
        author: "Kranthi kumar",
        body:   "fhgjd iduhfiuh fdguh fidjguh ihfdshgo ifdighk",
        hidden: false,
        meta: {
          votes: 20,
          favs:  30}
    })
    post.save()

module.exports=post
