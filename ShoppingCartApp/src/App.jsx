import "./App.css"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";



function App(){



    const [searchItem , setSearchItem] = useState("")



    const handleSearch = (e) => {



        setSearchItem(e.target.value);



       

    }



   





   



    return(<>

    <Navbar/>

    <Routes>

        <Route path="/"  element={<Home  searchItem={searchItem}  handleSearch={handleSearch} />}/>

        <Route path="/product-item/:productid"  element={<ProductInfo/>}/>

        <Route path="/cart"  element={<Cart/>}/>

        <Route path="*"  element={<Home  searchItem={searchItem}  handleSearch={handleSearch} />}/>

    </Routes>

   

    </>)

}



export default App;