import { useState } from "react"
import { useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import authHeader from "./authHeader"
import axios from "axios"
const PasswordUpdate =()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [msg,setMsg]=useState("")
    const [status,setStatus]=useState(false)
  
    const history=useNavigate()
   
   const instance=axios.create({
       baseURL:"http://localhost:3001"
   })
   const change=(event,key)=>{
       if(key=="username"){
           setUsername(event.target.value)
       }
       else if(key=="password"){
           setPassword(event.target.value)
       }
   }
   const updatePassword=(e)=>{
       e.preventDefault()
       axios.post("http://localhost:3001/updateuser",{"email":username,"upassword":password},{headers:authHeader()}).
       then((res)=>{ 
       setMsg(res.data.msg)
       setStatus(res.data.status)
    }
       ).catch((err)=>console.log(err)) 
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
            <button onClick={(e)=>updatePassword(e)}>login</button>
         </form>  
     
            {
                status?handleNavigate():<h1></h1>
            }
     
       </div>
   )
   
   }
   export default PasswordUpdate