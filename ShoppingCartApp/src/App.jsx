import "./App.css"
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";



function App(){




    return(<>

    <Navbar/>
    <Routes>

        <Route path="/"  element={<Home   />}/>

        <Route path="/product-item/:productid"  element={<ProductInfo/>}/>

        <Route path="/cart"  element={<Cart/>}/>

        <Route path="*"  element={<Home   />}/>

    </Routes>

   

    </>)

}



export default App;