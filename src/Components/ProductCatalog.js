const ProductCatalog=(props)=>{
    console.log(props)
    return(
        <>
        <img src={props.propObject.imgSource}></img>
        <a href={props.propObject.buyLink}>Click here to buy</a>
        <h3>{props.propObject.rating}</h3>
        <h2>{props.propObject.price}</h2>
        </>
    )
}
export default ProductCatalog;