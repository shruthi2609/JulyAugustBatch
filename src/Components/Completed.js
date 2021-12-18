import React from 'react'
class Completed extends React.Component{
    constructor(props){
        super(props)
       
    }
    render(){
        return(
            <div>
            <h3> Completed tasks are </h3>
            {
                this.props.items.map((item)=>
                <div>
                <p>{item.title}</p>
                <button>delete forever</button>
                </div>)
            }
            </div>
        )
    }
}
export default Completed;