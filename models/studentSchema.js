var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    fathername: {
        type: String,
        require: true
    },
    age: {
        type: Number,                   // name, fathername, age, roll, email, phone,
        require: true
    },
    roll: {
        type: Number,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: Number,
        unique: true
    }
})

// models create---

var studentRecord = mongoose.model("studentRecord", studentSchema);

module.exports = studentRecord;