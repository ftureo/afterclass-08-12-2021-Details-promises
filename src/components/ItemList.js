import Item from "./Item";

const ItemList = ({ products }) => {
  console.log("Los products", products);
  return (
    <div>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            description={product.descripcion}
            category={product.categoria}
            image={product.image}
            price={product.price}
            stock={product.stock}
            title={product.title}
            id={product.id}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
