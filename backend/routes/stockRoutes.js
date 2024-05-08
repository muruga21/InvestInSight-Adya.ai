const router = require('express').Router();
const { addStock, getTopStocks, getStocks, buyStock, getStocks } = require('../controllers/stockController');
const {checkUser} = require('../middleware/auth')

router.post('/addStock',addStock)
router.get('/getTopStocks',getTopStocks)
router.get('/getStocks',getStocks)
router.post('/buyStock', checkUser, buyStock)
router.get('/getStocks', checkUser, getStocks)

module.exports = router;