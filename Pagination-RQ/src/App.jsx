import "./App.css"
import Pagination from "./Pages/Products/Pagination"
import Product from "./Pages/ProductDetails/Product";
import { Routes , Route } from "react-router-dom";

function App(){

  return(<>
  

  <Routes>

    <Route path='/' element={<Pagination/>} />

    <Route path='/:productid' element={<Product/>} />

  </Routes>
  </>)
}

export default App;