const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    stockName: {
        type: String,
        required: true
    },
    stockPrice: {
        type: Number,
        required: true
    },
    stockId: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    lastWeekData: {
        type: Array,
        required: true
    },
    hikeRate:{
        type: Number,
        required: true
    }
})

const stockModel =  mongoose.model('Stock-adyaai', stockSchema);

module.exports = {stockModel};

