const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const User = mongoose.model('User', UserModel)

module.exports = User
