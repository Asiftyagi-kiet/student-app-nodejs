var mongoose = require('mongoose');

const mongourl = "mongodb://127.0.0.1:27017/school-app";

mongoose.connect(mongourl, {}).then(() => {
    console.log("MongoDB Successfully connected...");

}).catch((err) => {
    console.log(err)
})


var mongodb = mongoose.connection;

module.exports = mongodb;
