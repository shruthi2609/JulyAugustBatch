import React from 'react'
import { useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

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
 const [password,setPassword]=useState("")
 const [status,setStatus]=useState(false)
 const history=useNavigate()
const change=(event,key)=>{
    if(key=="username"){
        setUsername(event.target.value)
    }
    else if(key=="password"){
        setPassword(event.target.value)
    }
}
const handleLogin=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/signin",{"email":username,"password":password}).then((res)=>setStatus(res.data.status)).catch((err)=>console.log(err))

   
}
const handleNavigate=()=>{
    history("/search")
}

return(
    <div>
      <form>
          <input type="text" placeholder="type your username" 
          onChange={(e)=>change(e,"username")}></input>
           <input type="text" placeholder="type your password" 
          onChange={(e)=>change(e,"password")}></input>
         <button onClick={(e)=>handleLogin(e)}>login</button>
      </form>  
      {
          status?handleNavigate():<h1></h1>
      }
    </div>
)

}
export default HooksEg