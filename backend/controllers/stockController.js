const {stockModel} = require('../models/stockSchema');
const {stockBoughtModel} = require('../models/stockBoughtSchema');

const addStock = async (req, res) => {
    const { stockName, stockPrice, stockId, imgUrl, lastWeekData, hikeRate } = req.body;

    if (!stockName || !stockPrice || !stockId || !imgUrl || !lastWeekData || !hikeRate) {
        return res.status(400).json({ error:false, message: 'Please enter all fields' });
    }
    try{
        const exists = await stockModel.findOne({ stockId: stockId });
        if (exists) {
            return res.status(400).json({ error:false, message: 'Stock already exists' });
        }
        const doc = await stockModel.create({ stockName, stockPrice, stockId, imgUrl, lastWeekData, hikeRate });
        if (doc) {
            return res.status(200).json({ error: false, message: 'Stock added successfully' });
        }
    }
    catch(err){
        console.log(err.message)
        return res.status(500).json({error:true, message: err.message})
    }
}

const getTopStocks = async(req, res) =>{
    try{
        const stocks = await stockModel.find({}).sort({hikeRate:-1}).limit(5);
        if(stocks){
            return res.status(200).json({error:false, message: stocks})
        }
    }
    catch(err){
        console.log(err.message)
        return res.status(500).json({error:true, message: err.message})
    }
}

const getStocks = async(req, res) =>{
    try{
        const stocks = await stockModel.find({});
        if(stocks){
            return res.status(200).json({error:false, message: stocks})
        }
    }
    catch(err){
        console.log(err.message)
        return res.status(500).json({error:true, message: err.message})
    }
}

const buyStock = async(req, res) => {
    const { stockId, stockName, stockQuantity, imgUrl } = req.body;
    const userName = req.user;

    console.log(stockId, stockName, stockQuantity, imgUrl, userName);

    if (!stockId || !stockName || !stockQuantity || !userName || !imgUrl) {
        return res.status(400).json({ error:false, message: 'Please enter all fields' });
    }
    try{
        const isStock = await stockModel.findOne({ stockId: stockId });
        if (!isStock) {
            return res.status(400).json({ error:false, message: 'Stock does not exists' });
        }
        const doc = await stockBoughtModel.create({ stockId, stockName, stockQuantity, userName, imgUrl });
        if (doc) {
            return res.status(200).json({ error: false, message: 'Stock bought successfully' });
        }
    }
    catch(err){
        console.log(err.message)
        return res.status(500).json({error:true, message: err.message})
    }
}

const getUserStocks = async(req, res) =>{
    try{
        const stocks = await stockBoughtModel.find({userName: req.user});
        if(stocks){
            return res.status(200).json({error:false, message: stocks})
        }
    }
    catch(err){
        console.log(err.message)
        return res.status(500).json({error:true, message: err.message})
    }
}

const sellStocks = async (req, res) => {
    const { stockId } = req.body;
    const userName = req.user;

    if (!stockId || !userName ) {
        return res.status(400).json({ error:false, message: 'Please enter all fields' });
    }
    try{
        const isStocks = await stockBoughtModel.findOne({ stockId: stockId, userName: userName });
        if (!isStocks) {
            return res.status(400).json({ error:false, message: 'Stock does not exists' });
        }
        const doc = await stockBoughtModel.deleteOne({ stockId: stockId, userName: userName });
        if (doc) {
            return res.status(200).json({ error: false, message: 'Stock sold successfully' });
        }
    }
    catch(err){
        console.log(err.message)
        return res.status(500).json({error:true, message: err.message})
    }

}

module.exports = { addStock, getTopStocks, getStocks, buyStock, getUserStocks, sellStocks}