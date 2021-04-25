import {request} from './request'

export function getTodoListData(){
    return request({
        url:"/api1/todolist/show",
        method:'get'
    })
}

export function addTodoListData(todoObj){
    var {id,level,kind,content,createDate,done}=todoObj
    return request({
        url:"/api1/todolist/add", 
        method: 'post',
        data:{
            id,level,kind,content,createDate,done
            // todoObj
        }
    })
}


export function deleteTodoListData(id){
    return request({
        url:"/api1/todolist/delete", 
        method: 'post',
        data:{
            id
        }
    })
}
export function updateTodoListData(id,done){
    return request({
        url:"/api1/todolist/update", 
        method: 'post',
        data:{
            id,done
        }
    })
}