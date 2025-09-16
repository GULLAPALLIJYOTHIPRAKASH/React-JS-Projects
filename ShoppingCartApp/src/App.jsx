import "./App.css"
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import { ToastContainer, toast } from 'react-toastify';




function App(){




    return(<>

    <Navbar/>
    <Routes>

        <Route path="/"  element={<Home   />}/>

        <Route path="/product-item/:productid"  element={<ProductInfo/>}/>

        <Route path="/cart"  element={<Cart/>}/>

        <Route path="*"  element={<Home   />}/>

    </Routes>
    <ToastContainer autoClose={1000} />


   

    </>)

}



export default App;