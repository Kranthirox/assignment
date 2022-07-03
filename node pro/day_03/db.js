const mongoose =require("mongoose")
const mongooseURL ="mongodb+srv://admin:Rtrpuho6bp81T7HP@cluster0.zxngk.mongodb.net/?retryWrites=true&w=majority";
function connect(){
    mongoose.connect(
        mongooseURL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => {
            console.log("dataBase connected");
        }
    )
}
module.exports.connect=connect
