const express = require('express');
const router = new express.Router();
const LectureController = require('../controllers/Lecture')

router.post("/addlecture",(req,res) =>{
    LectureController.addLecture(req,res)
})

router.post("/getlecture",(req,res) => {
    LectureController.getLecture(req,res)
})

router.post("/editlecture",(req,res) => {
    LectureController.editLecture(req,res)
})

router.patch("/addlecture",(req,res) => {
    LectureController.updateLecture(req,res)
})

module.exports = router