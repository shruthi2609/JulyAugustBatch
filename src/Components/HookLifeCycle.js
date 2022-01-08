import React, { useEffect,useState } from "react";
const HookLifecycle=(props)=>{
    console.log(props)
    const [username,setUsername]=useState("")
    const [msg,setMsg]=useState("")
    useEffect(
        ()=>{
            setUsername(props.uname)
            setMsg(props.msg)
        },[]
    )
    return(
        <div>
            <h2>Name:{username}</h2>
            <h2>msg:{msg}</h2>
        </div>
    )
}
export default HookLifecycle