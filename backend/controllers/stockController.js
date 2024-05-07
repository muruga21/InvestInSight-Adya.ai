const {stockModel} = require('../models/stockSchema');

const addStock = async (req, res) => {
    const { stockName, stockPrice, stockId, imgUrl, lastWeekData, hikeRate } = req.body;
    console.log(req.body)

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

module.exports = { addStock, getTopStocks }