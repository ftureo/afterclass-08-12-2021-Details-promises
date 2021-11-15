const Item = ({description, price, stock, title}) =>{
    console.log(`Este es un texto ${description}`)
    return(
        <div>
            <h3>{title}</h3>
            <h2>{price}</h2>
            <p>{description}</p>
            <p>{stock}</p>
        </div>
    )
}
export default Item