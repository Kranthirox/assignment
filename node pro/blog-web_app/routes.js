const express = require("express");
const router = express.Router();
const postController = require("./CONTROLLERS/ctrls");
const authController =require("./CONTROLLERS/auth")
const flash = require("connect-flash");
const session = require("express-session");

router.post("/post", postController.PostNews);
router.get("/home", postController.viewPost);
router.get("/addpost", postController.createPost);
router.get("/del/:id", postController.deletePost);
router.post("/up/:id", postController.updatePost);
router.get("/up/:id", postController.updatePage);
router.post("/home/user", postController.userPage);
router.post("/user/auth",authController.userPage)

module.exports = router;

