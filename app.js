var express = require('express');
const mongoose = require('mongoose');
var api = require("./src/route/index.js");
    
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
 
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/InsuredMine').then( () => {
      console.log("connected")
    })
} catch (error) {
    console.log(error.message)
  }
}
connectDb();

app.use("/", api);

app.listen(5000, () => {
 console.log("Listening Port 5000");
})


module.exports = app;
