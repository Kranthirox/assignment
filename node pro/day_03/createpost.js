const Posts = require("./model");
const newpost = new Posts({
    title: "PM COMING TO HYD",
    body: "HSDF DSHF DFJGSFDGS DFA DGF DFG DF",
    author: "KRANTHI KUMAR",
})
newpost.save()
module.exports.newpost=newpost