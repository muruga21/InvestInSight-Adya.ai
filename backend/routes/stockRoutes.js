const router = require('express').Router();
const { addStock, getTopStocks } = require('../controllers/stockController');

router.post('/addStock',addStock)
router.get('/getTopStocks',getTopStocks)

module.exports = router;