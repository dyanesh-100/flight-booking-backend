require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

const mongoose = require('mongoose')

app.use(express.json())


const db = mongoose.connection
mongoose.connect(process.env.DB_URL)
db.on('error' , (errorMesage) => console.log(errorMesage))
db.once('open', ()=> console.log('connected to db successfully'))


app.listen(PORT,console.log(`Server started running on http://localhost:${PORT}/api/v1/`))