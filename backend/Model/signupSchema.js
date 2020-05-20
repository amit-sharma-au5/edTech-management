const mongoose = require('mongoose');

var signupSchema = new mongoose.Schema({
    
    email : { 
        type : String,
        required: true
    },
    
    mob : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required: true
    }
})

const Signup = mongoose.model('signup', signupSchema)

module.exports = Signup