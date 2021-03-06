var mongoose=require('mongoose')

var Schema=mongoose.Schema

mongoose.connect('mongodb://localhost/notebook', { useFindAndModify: false })

var todoSchema=new Schema({
    id:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
    },
    kind:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
      
    },
    finishedDate:{
        type:Date,
     
    },
    done:{
        type:Boolean,
        default:false
    },
    
})

module.exports=mongoose.model('Todo',todoSchema)
// var todo=mongoose.model('Todo',todoSchema)

// var first=new todo({id:1,level:"normal",content:"first test",createDate:'2021-04-12'})

// first.save(function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('success')
//     }
// })