import React from 'react'
import axios from 'axios'
class ImageSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:"",
            images:[]
        }
    }
    callUnsplashAPI=(searchText)=>{
        const url="https://api.unsplash.com/search/photos?client_id=qdaCRvUmyx6hQiAghT-SuxRpUP5SPqOkx-rtktFz7ag&query="+searchText
        axios.get(url).
        then((response)=>this.setState({images:response.data.results})).catch((err)=>console.log(err))
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.callUnsplashAPI(this.state.search)
    }
    handleChange=(event)=>{
        this.setState({search:event.target.value})
    }
    render(){
        return(
            <div>
                <h3> Your Image search engine</h3>
                <form onSubmit={this.handleChange}>
                    <input type="text" placeholder='enter the search text' 
                    onChange={this.handleChange}></input>
                    <input type="submit" value="search"></input>
                </form>
                {
                    this.state.images.map((item)=>(
                        <img src={item.urls.small}></img>
                    ))
                }
            </div>
        )
    }
}
export default ImageSearch