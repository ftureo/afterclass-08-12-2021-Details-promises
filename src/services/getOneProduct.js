const oneProduct = {
  id: 1,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/616VM20%2BAzL.__AC_SY300_SX300_QL70_ML2_.jpg",
  title: "Ryzen 5900x",
  descripcion: "este es el primer producto",
  categoria: "Procesadores",
  price: "73000",
  stock: "4",
};

const getOneProduct = new Promise((resolve) => {
  setTimeout(() => {
    resolve(oneProduct);
  }, 2000);
});

export default getOneProduct;
