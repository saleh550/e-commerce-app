const express=require('express')
const router=express.Router()
const {protect}=require("../middleware/authMiddleware")
const {createPaypalOrder,capturePaypalOrder} =require('../Controllers/paypalController')


router.post('/my-server/create-paypal-order',createPaypalOrder)
router.post('/my-server/capture-paypal-order',capturePaypalOrder)

module.exports=router
