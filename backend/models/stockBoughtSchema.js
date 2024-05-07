const mongoose = require('mongoose')

const stockBoughtSchema = new mongoose.Schema({
    stockId: {type: String, require: true},
    stockQuantity: {type: String, require: true},
    userName: {type: String, require: true}
})

const stockBoughtModel = mongoose.model('stockBought-adyaai', stockBoughtSchema);