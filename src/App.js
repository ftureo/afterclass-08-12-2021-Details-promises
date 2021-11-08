import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Soy un h1</h1>
      <NavBar />
      <ItemListContainer greeting="Hola User" />
    </div>
  );
}

export default App;
