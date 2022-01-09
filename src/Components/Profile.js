import React from 'react'
import { useSelector } from 'react-redux'
const Profile=()=>{
const data=useSelector((state)=>state.user.value)
return(
    <div>
        <h2>{data.fname}</h2>
        <h3>{data.email}</h3>
        <h3>{data.designation}</h3>
    </div>
)
}
export default Profile