const mongoose = require('mongoose')
const validator = require('validator')

const Word = mongoose.model('Word', {
    word: {
        type: String,
        required: true,
        trim: true
    },
    definition: {
        type: String,
        required: true,
        trim: true,
    }
})

module.exports = Word