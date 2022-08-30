const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title:String,
    author:String,
    year:Number,
    genre:String,
    image:String,
    description:String,
}, {
    timestamp: true,
})

module.exports = mongoose.model('Book',bookSchema)