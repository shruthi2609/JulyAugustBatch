import React from 'react'
class TodoAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[]
        }
    }
    componentDidMount=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").
        then((response)=>{return response.json()}).then(data=>this.setState({todos:data}))
        
    }
    render(){
        console.log(this.state.todos)
        return(
            <div>
           <h1>todo</h1>
              {this.state.todos.map((item)=>{
              return <h1>{item.title}</h1>
              })
            }
            </div>
          
        )
    }
}
export default TodoAPI