import React from 'react'
import { useState } from 'react'
/*
class classname{
    constructor(){
        this.state={
            msg:""
        }
    }
}
*/
const HooksEg =()=>{
 const [username,setUsername]=useState("")
 const [msg,setMsg]=useState("say hello")
 const [loggedIn,setLoggedIn]=useState(false)
const change=(event,key)=>{
    if(key=="username"){
        setUsername(event.target.value)
    }
    else if(key=="msg"){
        setMsg(event.target.value)
    }
}
return(
    <div>
        
       <h3>Message :{msg}</h3>
       <h3>From : {username}</h3>

      <form>
          <input type="text" placeholder="type your name" 
          onChange={(e)=>change(e,"username")}></input>
           <input type="text" placeholder="type your message" 
          onChange={(e)=>change(e,"msg")}></input>
      </form>
       
        
    </div>
)

}
export default HooksEg