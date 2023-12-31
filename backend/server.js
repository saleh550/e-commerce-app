require('dotenv').config()
const PORT=process.env.PORT || 5000
const express= require("express")
const app =express()
const {errorHandler}=require('./middleware/errorMiddleware')
const connectDB=require('./db')
const colors=require('colors');
const cors =require('cors')

// const fetch = require('node-fetch');
 
const {createOrder,captureOrder} =require('./paypal-api')


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDB()

//Routes
app.use('/api/users', require('./Routes/userRoutes'))
app.use('/api/paypal',require('./Routes/paypalRoutes'))




// use the errorHandler function for manage error events 
app.use(errorHandler)

app.listen(PORT,function(){
    console.log(`started serve on port ${PORT}`)
})