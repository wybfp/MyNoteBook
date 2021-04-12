var express = require('express')
var router=require('./router')

var app=express()

app.get('/',function(req,res){
    res.send("hello")
})

app.use(router)

app.listen(3000,function(){
    console.log('running')
})

// module.exports=app