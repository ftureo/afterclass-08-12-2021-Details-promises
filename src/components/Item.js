const Item = ({ description, price, stock, title }) => {
  return (
    <div className="flex bg-info">
      <h3>{title}</h3>
      <h2>{price}</h2>
      <p>{description}</p>
      <p>{stock}</p>
    </div>
  );
};
export default Item;
