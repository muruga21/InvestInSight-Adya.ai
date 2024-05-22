const router = require('express').Router();
const { addStock, getTopStocks, getStocks, buyStock, getUserStocks, sellStocks } = require('../controllers/stockController');
const {checkUser} = require('../middleware/auth')

router.post('/addStock',addStock) //post
router.get('/getTopStocks',getTopStocks)
router.get('/getStocks',getStocks)
router.post('/buyStock', checkUser, buyStock)
router.get('/getUserStocks', checkUser, getUserStocks)
router.post('/sellStocks', checkUser, sellStocks)

module.exports = router;