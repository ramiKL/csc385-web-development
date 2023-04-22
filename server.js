const express=require('express')
const path=require('path')
const fs=require('fs')

const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/home',express.static(path.join(__dirname,'public')))

app.use('/home',require('../practice/app'))
app.use('/student',require('./student'))

app.listen(5056,()=>{
    console.log("server is running on port 5056")
})
