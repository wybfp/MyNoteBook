import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './index.css'

import {addTodoListData,getTodoListData,deleteTodoListData,updateTodoListData} from '../../network/home'

export default class Todo extends Component {
    state={todos:[]
        // {id:'01',name:"cook",done:false},
        // {id:'02',name:"eat",done:true}
    }
    componentDidMount(){
        getTodoListData().then(res=>{
            // console.log(res.data);
            let newTodos=[]
            for(let key in res.data){
                // console.log(key);
                // console.log(res.data[key]);
                newTodos.push(res.data[key])
            }
            // console.log(newTodos);
            this.setState({todos:res.data})
        }).catch(err=>{
            console.log(err);
        })
    }
    // 增加
    addTodo=(todoObj)=>{
        const {todos}=this.state
        const newtodos=[todoObj,...todos]
        addTodoListData(todoObj).then().catch()
        this.setState({todos:newtodos})
    }
    // 删除
    deleteTodo=(id)=>{
        const {todos}=this.state
        const newTodos=todos.filter((todoObj)=>{
            return todoObj._id!==id
        })
        deleteTodoListData(id)
        this.setState({todos:newTodos})
    }
    // 更新
    updateTodo = (id,done)=>{
		//获取状态中的todos
		const {todos} = this.state
		//匹配处理数据
		const newTodos = todos.map((todoObj)=>{
			if(todoObj._id === id) return {...todoObj,done}
			else return todoObj
        })
        // console.log(id,done)
        updateTodoListData(id,done)
		this.setState({todos:newTodos})
	}
    	//checkAllTodo用于全选
	checkAllTodo = (done)=>{
		//获取原来的todos
		const {todos} = this.state
		//加工数据
		const newTodos = todos.map((todoObj)=>{
            updateTodoListData(todoObj._id,done)
            return {...todoObj,done}
		})
		//更新状态
		this.setState({todos:newTodos})
	}

	//clearAllDone用于清除所有已完成的
	clearAllDone = ()=>{
		//获取原来的todos
		const {todos} = this.state
		//过滤数据
		const newTodos = todos.filter((todoObj)=>{
          if(todoObj.done) deleteTodoListData(todoObj._id)
			return !todoObj.done
		})
		//更新状态
		this.setState({todos:newTodos})
	}
    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
            <div className="todo-wrap">
                <Header addTodo={this.addTodo}/>
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
			<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>

            </div>
            </div>
        )
    }
}
