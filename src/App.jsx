import Addproduct from "./Addproduct";
import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Product />
      <br></br>
      <Addproduct />
    </div>
  );
}

export default App;
