//create server...
var express = require('express');
var app = express();
require('dotenv').config();

const db = require('././db_conn/db'); // database conn..

const port = process.env.PORT || 5000;

//body parser -----
const bodyparser = require("body-parser");
app.use(bodyparser.json());



app.get('/', (req, res) => {
    res.send(`<h1>Welcome to NodeJs Server...`);
})

//router import..

var studentRouter = require('./routes/studentsRoute');
app.use('/student', studentRouter);








app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Server is running successfully working ->" + " " + port);
})