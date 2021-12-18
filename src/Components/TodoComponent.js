import React from 'react'
import Pending from './Pending'
import Completed from './Completed'
let todos=[
    {
        "status":true,
        "title":"complete react project",
        "id":1
    },
    {
        "status":false,
        "title":"upload a youtube video",
        "id":2
    },
    {
        "status":false,
        "title":"clarify session doubts on XYZ topic",
        "id":3
    },
    {
        "status":true,
        "title":"watch squid game on netflix",
        "id":4
    },
    {
        "status":true,
        "title":"watch squid game on netflix",
        "id":5
    },
    {
        "status":false,
        "title":"clarify session doubts on XYZ topic",
        "id":6
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
    changeCompletionStatus=()=>{
       const temp=[...this.state.todos]
       const res=temp.find((item)=>item.title==="clarify session doubts on XYZ topic")
       console.log(res.status)
       res.status=!res.status
       console.log(res.status)
       this.setState({todos:temp})
    }
    render(){
        return(
            <div>
            <Pending items={this.getPendingItems()}></Pending>
            <Completed items={this.getCompletedItems()}></Completed>
            <button onClick={this.changeCompletionStatus}>check </button>
            </div>
        )
    }
}
export default TodoComponent;