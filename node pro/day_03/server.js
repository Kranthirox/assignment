const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser ")
const PORT = process.env.Port || 4000;
const IP = process.env.IP || "localhost";
const db = require("./db");
const postController = require("./exports");
const app = express();



db.connect();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.set("view engine","ejs")


router.get("/delete/:id", postController.deletePost);
router.get("/view", postController.viewPost);
router.get("/create", postController.createPost);
router.get("/find/:id", postController.findPost);
router.patch("/update/:id", postController.updatePost);
router.post("/post",postController.sendPost)



app.use(router);
app.listen(PORT, () => {
  console.log(`Server is running on ${IP}:${PORT}`);
});
