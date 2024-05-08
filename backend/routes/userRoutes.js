const router = require('express').Router();
const { login,signup, getUser } = require('../controllers/userController');
const {checkUser} = require('../middleware/auth')

router.post('/login',login)
router.post('/signup',signup)
router.get('/getUser',checkUser,getUser)

module.exports = router;