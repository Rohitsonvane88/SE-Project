const mongoose = require('mongoose')

const AnswerSchema = new mongoose.Schema({
    answerName: String,
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions"
    },
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Questions", AnswerSchema)