import React from 'react'
import Pending from './Pending'
import Completed from './Completed'
import Trash from './TrashComponent'
let todos=[
    {
        "status":true,
        "title":"complete react project",
        "id":1,
        "active":true
    },
    {
        "status":false,
        "title":"upload a youtube video",
        "id":2,
        "active":true
    },
    {
        "status":false,
        "title":"clarify session doubts on XYZ topic",
        "id":3,
        "active":true
    },
    {
        "status":true,
        "title":"watch squid game on netflix",
        "id":4,
        "active":true
    },
    {
        "status":true,
        "title":"watch squid game on netflix",
        "id":5,
        "active":true
    },
    {
        "status":false,
        "title":"clarify session doubts on XYZ topic",
        "id":6,
        "active":true
    }
]
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:todos
        }
    }
    getPendingItems=()=>{
        const arr=this.state.todos.filter((todoitem)=>todoitem.status===false)
        return arr
    }
    getCompletedItems=()=>{
        const arr=this.state.todos.filter((todoitem)=>todoitem.status===true)
        return arr
    }
    getTrashItems=()=>{
        const arr=this.state.todos.filter((todoitem)=>todoitem.active===false)
        return arr
    }
    changeCompletionStatus=(todoid)=>{
       const temp=[...this.state.todos]
       const res=temp.find((item)=>item.id===todoid)
       res.status=!res.status
       this.setState({todos:temp})
    }
    deleteTask=(todoid)=>{
        const temp=[...this.state.todos]
        const res=temp.find((item)=>item.id===todoid)
        res.active=!res.active
        this.setState({todos:temp})
     }
    render(){
        return(
            <div>
            <Pending
             fun1={this.changeCompletionStatus}
             fun2={this.deleteTask}
             items={this.getPendingItems()} ></Pending>
            <Completed items={this.getCompletedItems()}></Completed>
            <Trash items={this.getTrashItems()}></Trash>
            </div>
        )
    }
}
export default TodoComponent;