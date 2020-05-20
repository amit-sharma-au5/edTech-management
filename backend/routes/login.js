const express = require('express')
const router = new express.Router()
const LoginController = require('../controllers/Login')

router.post("/login",(req,res) => {
    LoginController.login(req,res)
})


module.exports = router;