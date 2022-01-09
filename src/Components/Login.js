import React from 'react'
import { useDispatch } from 'react-redux'
import {login,logout} from '../reducers/user'
const Login=()=>{  
    const dispatch=useDispatch() 
return(
    <div>
        <button 
        onClick={
            ()=>{dispatch(login({name:"john",email:"abc@gmail.com",designation:"SE"}))}
        }>Login</button>
        <button
        onClick={()=>{dispatch(logout())}}>
            logout
        </button>
    </div>
)
}
export default Login