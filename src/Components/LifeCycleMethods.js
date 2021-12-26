import React from 'react'
class LifeCylceDemo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"initial message"
        }
    }
    componentDidMount=()=>{
        setTimeout(()=>{
            this.setState({msg:"initial message"})
        },5000)
    }
    componentDidUpdate=(prevState)=>{
        console.log(prevState)// undefined
        if(prevState.msg!==this.state.msg){//new message
          document.getElementById("lifecycle").innerHTML="state change"
        }
    }
    render(){
        return(
            <div>
                <h1> {this.state.msg}  </h1>
            </div>
        )
    }
}
export default LifeCylceDemo