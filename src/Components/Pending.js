import React from 'react'
class Pending extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(
            <div>
            <h3> Pending tasks are </h3>
            {
                this.props.items.map((item)=>(
                (item.active)?
                (<div>
                <p>{item.title}</p>
                <button className='btn-primary' onClick={()=>this.props.fun1(item.id)}>done</button>
                <button onClick={()=>this.props.fun2(item.id)}>delete</button>
                </div>): <> </>)
                )
            }
            </div>
        )
    }
}
export default Pending;