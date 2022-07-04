const express = require('express');
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const postController =require("./CONTROLLERS/ctrls");
const flash =require('connect-flash')
const session = require('express-session')




router.post("/",postController.PostNews)

router.get("/home",postController.viewPost)

router.get("/addpost",postController.createPost)

router.get("/del/:id",postController.deletePost);
router.get("update/:id",postController.updatePost)




module.exports=router