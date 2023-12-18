const {Router} = require('express')
const {renderRegisterForm, registerNewUser, renderLoginForm, loginUser, logoutUser} = require('../controllers/user.controller')
const router = Router()


router.get('/user/register',renderRegisterForm)
router.post('/user/register',registerNewUser)


router.get('/user/login',renderLoginForm)
router.post('/user/login',loginUser)


router.post('/user/logout',logoutUser)


module.exports =router