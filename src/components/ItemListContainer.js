import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2>Soy el ItemListContainer</h2>
      <h3>{greeting}</h3>
      <ItemCount stock={5} initial={1} />
    </>
  );
};
export default ItemListContainer;
