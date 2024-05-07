const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    email: {type: String, require: true},
})

const userModel = mongoose.model('user-adyaai', userSchema);

module.exports = {userModel};