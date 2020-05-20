const signUpModel = require('../Model/signupSchema')
const bcrypt = require('bcrypt')
require("dotenv").config();
const jwt = require('jsonwebtoken');



const LoginController = {}

LoginController.login = function(req,res){
   const { email, password} = req.body
   // Checking Credentials of User
   signUpModel.findOne({email : email}).then( user => { 
       bcrypt.compare(password, user.password, function(err,result){
           if(result){
               jwt.sign(
                   {id : user._id},
                   require('../config/Keys').jwtSecret,
                   { expiresIn : 3600},
                   (err, token) => {
                       if(err) throw err;
                       res.json({
                           token,
                           user : {
                               id : user.id,
                               email : user.email
                           }
                       })
                   }
               )
           }
       });

   })
}


module.exports = LoginController