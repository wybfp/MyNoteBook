var fs=require('fs')
var Todo=require('./connect')

var express=require('express')

var router = express.Router()

// 添加新信息
router.post('/todolist/add',function(req,res){
    // console.log(req.body)

    new Todo(req.body).save(function(err){     
        if(err){
            return res.status(500).send('Server error.')
        }
        // console.log(req.body)
    })
})

// 获得列表
router.get('/todolist/show',function(req,res){

    Todo.find(function(err,todolist){
        if(err){
            return res.status(500).send('Server error')
        }
        // console.log(todolist)
        res.send(todolist)
       
    })
})
// 根据id删除
router.post('/todolist/delete',function(req,res){
    // console.log(req.body)
    const id=req.body.id
    Todo.findByIdAndRemove(id, function (err) {
        if (err) {
        console.log(err)
          return res.status(500).send('Server error.')
        }
    })
})

router.post('/todolist/update',function(req,res){
    const id=req.body.id
    const done=req.body.done
    Todo.findByIdAndUpdate(id,{done:done},function(err){
        if(err){
            return res.status(500).send('Server error.')
        }
    })
})



module.exports=router