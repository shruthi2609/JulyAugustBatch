import React from 'react'
class ClassComponent extends React.Component{
constructor(props){
super(props)
this.state={
    companiesPlaced:"cts",
    package:"6.5Lpa"
}
}
render(){
    return(
        <div>
         <h1> Student Name : {this.props.fname}</h1> 
         <h3> {this.state.companiesPlaced}</h3>
         <h4>{this.state.package}</h4>
        </div>
    )
}
}
export default ClassComponent;