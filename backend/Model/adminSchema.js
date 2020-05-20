const mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({    
    email : { 
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    }
})

const Admin = mongoose.model('admin', adminSchema)

module.exports = Admin