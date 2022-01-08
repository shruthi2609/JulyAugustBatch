import React from 'react'
import axios from 'axios'
class TodoAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            msg:false
        }
    }
    componentDidMount=()=>{
       /* fetch("https://jsonplaceholder.typicode.com/todos").
        then((response)=>{return response.json()}).then(data=>this.setState({todos:data}))*/
        axios.get("https://jsonplaceholder.typicode.com/todos").
        then((result)=>{this.setState({todos:result.data})}).catch((err)=>{this.setState({msg:true})})
    }
    /*fetchData=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").
        then((response)=>{return response.json()}).then(data=>this.setState({todos:data}))
    }*/
    render(){
     
        return(
            <div>
           <h1>todo</h1>
          {this.state.msg?<h4>Some error occured</h4>:

              this.state.todos.map((item)=>{
              return <h1>{item.title}</h1>
              })
            }
            </div>
          
        )
    }
}
export default TodoAPI