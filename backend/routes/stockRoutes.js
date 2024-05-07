const router = require('express').Router();
const { addStock, getTopStocks, getStocks } = require('../controllers/stockController');

router.post('/addStock',addStock)
router.get('/getTopStocks',getTopStocks)
router.get('/getStocks',getStocks)

module.exports = router;