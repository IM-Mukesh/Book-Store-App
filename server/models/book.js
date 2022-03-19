const mongoose = require('mongoose');

const Books = mongoose.Schema({
    title:{ type: String, required: true, unique: true},
    image:{ type: String, required: true},
    price:{ type: Number, require: true},
    author:{ type: String, required: true}
})

module.exports = mongoose.model('book', Books);