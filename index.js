const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/taskApi')
const db = mongoose.connection
db.on('error',(error)=>{
    console.log(error)
})
db.once('open',()=>{
    console.log('Database connection successful')
})
const bodyParser = require('body-parser')
const router = require('./routes/router')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/',router)


app.listen(3000,()=>{
    console.log('Hello World')
})