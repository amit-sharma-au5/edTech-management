const express = require('express');
const cors = require('cors')
//DB config
require("dotenv").config()
const db = require('./config/Keys').MongoURI
const mongoose  = require('mongoose');

const app = new express();
app.use(cors())
app.use(express.json());
app.set("view engine","hbs")

app.use(express.static("public"));

app.use("/",require('./routes/root'))
app.use("/",require('./routes/signUp'))
app.use("/",require('./routes/login'))
app.use("/", require('./routes/admin'))
app.use("/",require('./routes/lecture'))




console.log(db)
//MongoDb connection 
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  
  .then(console.log("Mongodb connected...."))
  .catch(err => console.log(err));







module.exports = app;