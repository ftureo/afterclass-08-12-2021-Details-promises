import Item from './Item'

const ItemList = ({products}) =>{
    console.log('Products en ItemList', products)
    return(
        <div>
        {products.map(product => {
           return(
            <Item 
            key={product.id}
            description = {product.descripcion}
            category = {product.categoria}
            image = {product.image}
            price = {product.price}
            stock = {product.stock}
            title = {product.title}
            />
           )
        })}
        </div>
    )
}
export default ItemList