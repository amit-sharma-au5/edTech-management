
const LectureModel = require('../Model/lectureSchema')
const LectureController = {}

LectureController.addLecture = function(req,res){
    const { body } = req
    console.log(body)
    const newUser = new LectureModel(body)
    newUser.save((err,user) => {
        console.log(user)
        res.send(user)
    })    
}

LectureController.getLecture = function(req,res) {
    console.log("data from aios", req.body)
    LectureModel.find({ subjectId : req.body.subject, classId : req.body.class }, (err,data) => {
        res.send(data)
    })
}

LectureController.editLecture = function(req,res) {
    LectureModel.find({ subjectId : req.body.subject, classId : req.body.class, topicId : req.body.topicId }, (err,data) => {
        res.send(data)
    })
}

LectureController.updateLecture = function(req,res){   
    LectureModel.findOneAndUpdate({'_id' : req.body.id},req.body,{
        new: true
      },(err, doc) => {
        if (err) {
            res.send(null)
        }
        res.send(doc)
    })

}



module.exports = LectureController