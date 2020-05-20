const bcrypt = require('bcrypt')
require("dotenv").config();
const adminModel = require('../Model/adminSchema')
const jwt = require('jsonwebtoken');
const AdminController = {}

AdminController.admin = function (req, res) {
    const { email, password } = req.body
    // Checking Credentials of User
    adminModel.findOne({ email: email }).then(user => {
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                jwt.sign(
                    { id: user._id },
                    require('../config/Keys').adminJwtSecret,
                    { expiresIn: 3600 },
                    (err, token) => {
                        if (err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                email: user.email
                            }
                        })
                    }
                )
            }
        });

    })
}


module.exports = AdminController