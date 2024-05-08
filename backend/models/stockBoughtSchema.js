const mongoose = require('mongoose')

const stockBoughtSchema = new mongoose.Schema({
    stockId: {type: String, require: true},
    stockName: {type: String, require: true},
    stockQuantity: {type: String, require: true},
    userName: {type: String, require: true},
    imgUrl: {
        type: String,
        required: true
    },
})

const stockBoughtModel = mongoose.model('stockBought-adyaai', stockBoughtSchema);

module.exports = {stockBoughtModel}