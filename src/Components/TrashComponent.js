import React from 'react'
class Trash extends React.Component{
    constructor(props){
        super(props)
       
    }
    render(){
        return(
            <div>
            <h3> Trash items </h3>
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
export default Trash;