const express = require('express')
const app = express()
const connectDB = require('./config/db')
const dotenv  = require('dotenv')

dotenv.config({path:'./config/.env'})

connectDB()



const PORT = process.env.PORT || 9000



app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))