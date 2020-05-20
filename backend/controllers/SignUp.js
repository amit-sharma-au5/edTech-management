const signupModel = require('../Model/signupSchema');
console.log(signupModel)
const bcrypt = require('bcrypt');

const signupController = {}

signupController.signup = function(req,res){
    const { body } = req
    const { email , mob } = body
    
        signupModel.findOne({email : email}).then( user => {
            if(!user){
            let password = body.password
        bcrypt.hash(password, 10, (err, hash) => {
            if(err) console.log(err)
            else {
                password = hash

                const newUser = new signupModel({
                    email,
                    mob,
                    password
                })

                newUser.save((err,user) => {
                    if (err) return console.error(err);
                    res.send(user)
                })

               
            }
        })

            }else {
                res.send(false)
            }
        })
    
}

module.exports = signupController