const express = require('express');
const router = new express.Router();
const adminController = require('../controllers/Admin')

router.post("/admin",(req,res) =>{
    adminController.admin(req,res)
})

module.exports =router;