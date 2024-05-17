const express = require('express')
const{signup,login} = require('../controllers/userController')

const route = express()

route.post('/signup',signup)
route.post('/login',login)


module.exports = route