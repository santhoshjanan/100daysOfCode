const mongoose = require('mongoose')
// const passwordHash = require('password-hash')
const bcrypt = require('bcrypt')
const saltRounds = parseInt(process.env.SALT_ROUNDS)

const UserModel = new mongoose.Schema(
    {
        name: { type: String, required: true, index: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
)
UserModel.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()
})

UserModel.methods.comparePassword = (candidatePassword, next) => {
    console.log(candidatePassword)
    passwordHash.verify(candidatePassword, this.password, (err, decoded) => {
        if (err) return next(err)
        next(null, decoded)
    })
}
const User = mongoose.model('User', UserModel)

module.exports = User
