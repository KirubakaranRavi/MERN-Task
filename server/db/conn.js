const mongoose = require("mongoose");

// const DB = process.env.DATABASE

const DB ="mongodb+srv://Ravikirubakaran:Mongodb312@cluster0.aosxmte.mongodb.net/merndeveloper?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));