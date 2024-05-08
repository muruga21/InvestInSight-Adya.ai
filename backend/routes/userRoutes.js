const router = require('express').Router();
const { login,signup, getUser } = require('../controllers/userController');
const {auth} = require('../middleware/auth')

router.post('/login',login)
router.post('/signup',signup)
router.get('/getUser',auth,getUser)

module.exports = router;