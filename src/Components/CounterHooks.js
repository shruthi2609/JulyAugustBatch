import React from 'react'
import { useState } from 'react'
const CounterHooks=()=>{
    const [count,setCount]=useState(0)
   const increment=()=>{
       setCount(count+1)
   }
   const decrement=()=>{
    if(count<0){
        setCount(0)
    }
    else{
        setCount(count-1)
    }   
}
    return(
        <div>
           {(count>=0)?<h1>{count}</h1>:<h1></h1>}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default CounterHooks