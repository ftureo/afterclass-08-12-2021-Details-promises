import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  // Voy a sumar hasta que el número sea menor o igual que stock
  // Voy a restar hasta que el número sea mayor o igual que el valor inicial

  // Declaro el hook para el contador
  const [count, setCount] = useState(initial);

  const addItem = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };

  const quitItem = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };

  const onAdd = () => {
    const message = `Agregaste ${count} producto`;
    //   Utilizo un condicional ternario (condicional) ? (true) : (false)
    count === 1 ? alert(message) : alert(`${message}s`);
  };
  return (
    <>
      <h1>Voy a ser el contador</h1>
      <div>
        {/* Acá sumamos (addItem) */}
        <button onClick={addItem}>+</button>
        <h3>{count}</h3>
        {/* Acá restamos (quitItem) */}
        <button onClick={quitItem}>-</button>
      </div>
      <button onClick={onAdd}>Agregar al Carrito</button>
    </>
  );
};
export default ItemCount;
