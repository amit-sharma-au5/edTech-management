const express = require('express')
const router = express.Router();
const signupController = require('../controllers/SignUp')

router.post("/signup",(req,res) => {
    signupController.signup(req,res)
})

module.exports = router