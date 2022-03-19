const mongoose = require('mongoose');
const Users = mongoose.Schema({
    name : { type: String, required: true},
    email : { type: String, required: true, unique: true},
    password : { type: String, required: true},
    phone: { type: Number, required: true, unique: true}

})

module.exports = mongoose.model('user', Users);