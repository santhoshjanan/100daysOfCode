const mongoose = require('mongoose')
const passwordHash = require('password-hash')

const UserModel = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false }
})
UserModel.pre('save', function(next) {
    this.password = passwordHash.generate(this.password)
    next()
})
const User = mongoose.model('User', UserModel)

module.exports = User
