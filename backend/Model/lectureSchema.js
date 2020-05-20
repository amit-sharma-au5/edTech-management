const mongoose = require('mongoose');

var lectureSchema = mongoose.Schema({
            classId : {
                type : String,
                required : true
            },
            subjectId : {
                type : String,
                required: true
            },
            topicId : {
                type : Number,
                required : true
            },
            lectureName : {
                type : String,
                required : true
            },
            lectureLink :{
                type : String,
                required : true
            },
            lectureDesc :{
                type : String,
                required : true

            },
            doubt : [{
                question : {
                    type : String
                },
                answer : {
                    type : String
                }
            }],
            assignment : {
                type : Array,
                required : true
            }
})

var lectures = mongoose.model('lectures', lectureSchema)

module.exports = lectures