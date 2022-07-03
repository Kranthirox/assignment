const express = require('express');
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const postController =require("./CONTROLLERS/ctrls");
const multer = require("multer");
const fs = require("fs");


router.post("/allpost",postController.PostNews)

router.get("/home",postController.viewPost)

router.get("/addpost",postController.createPost)

router.get("/delete/:id",postController.deletePost)




module.exports=router