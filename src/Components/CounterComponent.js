import React from 'react'
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            deliveryOption:true
        }
      //  this.increment=this.increment.bind(this)
      // in onClick you can bind this.increment=this.increment.bind(this)
    }
    increment=()=>{
       this.setState({count:this.state.count+0})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
     }
    render(){
        return(
            <div>
            <img src={this.props.imgSource}></img>
            <a href={this.props.buyLink}>Click here to buy</a>
            <h2>{this.props.price}</h2>
            <button onClick={this.increment}>+</button>
            {this.state.count} 
            <button onClick={this.decrement}>-</button>
           {this.state.deliveryOption?<h3> Express Delivery </h3>:<h3>Standard delivery</h3>}
            {/*show delivery option , choose delivery option   */}
            <button>change delivery option</button>
            </div>
        )
    }
}
export default Counter;