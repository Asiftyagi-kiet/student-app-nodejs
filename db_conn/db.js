var mongoose = require('mongoose');
require('dotenv').config();

// const mongourl = process.env.LOCAL_DB;
const mongourl = process.env.MONGO_DB;

mongoose.connect(mongourl, {}).then(() => {
    console.log("MongoDB Successfully connected...");

}).catch((err) => {
    console.log(err)
})


var mongodb = mongoose.connection;

module.exports = mongodb;
