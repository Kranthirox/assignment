const Post = require("../postModel");
const { v4: uuidv4 } = require("uuid");

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
exports.updatePost = async (req, res) => {
  try {
    const id = req.params["id"];
    const update = req.body;
    const options = { new: true };
    const result = await Post.findById(id);
    this.updatePage={ data: result }
   
    res.redirect("update-post")
    
    
  } catch (error) {
    res.status(404).send({ error: "Post not found and can't be updated" });
  }
};

