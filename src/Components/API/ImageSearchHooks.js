import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const ImageSearchHooks=()=>{
    const [search,setSearch]=useState("")
    const [images,setImages]=useState([])
    useEffect(
        ()=>callUnsplashAPI(search),[search]
    )
    const callUnsplashAPI=(searchText)=>{
        const url="https://api.unsplash.com/search/photos?client_id=qdaCRvUmyx6hQiAghT-SuxRpUP5SPqOkx-rtktFz7ag&query="+searchText
        axios.get(url).
        then((response)=>setImages(response.data.results)).catch((err)=>console.log(err))
    }
    const handleChange=(event)=>{
        setSearch(event.target.value)
    }
    return(
        <div>
                <h3> Your Image search engine</h3>
                <form>
                    <input type="text" placeholder='enter the search text' 
                    onChange={handleChange}></input>
                   
                </form>
                {
                    images.map((item)=>(
                        <img src={item.urls.small}></img>
                    ))
                }
            </div>
    )
}
export default ImageSearchHooks