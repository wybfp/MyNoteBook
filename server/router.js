var fs=require('fs')
var Todo=require('./connect')

var express=require('express')

var router = express.Router()

router.get('/todolist',function(req,res){
    Todo.find(function(err,todolist){
        if(err){
            return res.status(500).send('Server error')
        }
        console.log(todolist)
        res.send(todolist)
    })
})

module.exports=router