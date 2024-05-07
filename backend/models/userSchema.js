const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    email: {type: String, require: true},
})

const userModel = mongoose.model('user-adyaai', userSchema);

module.exports = {userModel};