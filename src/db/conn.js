const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olymics" ,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {
    console.log("connection DataBase Estb:");
}).catch((e) => {
    console.log("No Connection:");
})