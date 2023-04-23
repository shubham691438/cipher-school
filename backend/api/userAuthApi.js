const express=require('express')
const {
    signup,
    signin
}=require('../controllers/userAuthController')

const router=express.Router()

//signup post request to create a new user in db
router.post('/signup',signup)

//signin post request to authenticate a current user
router.post('/signin',signin)

module.exports=router