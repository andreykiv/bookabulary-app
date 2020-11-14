const mongoose = require("mongoose")
const validator = require("validator")

const Book = mongoose.model('Book', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    bookCover: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isURL(value)) {
                throw new Error('URL is not valid')
            }
        }
    },
    year: {
        type: Number,
        required: true,
        trim: true
    }
})

module.exports = Book