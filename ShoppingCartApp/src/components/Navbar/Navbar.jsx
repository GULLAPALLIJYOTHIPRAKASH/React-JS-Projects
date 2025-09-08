import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../../Context/useCart";
import { useState } from "react";
import { useSelector } from "react-redux";
 
function Navbar(){
 
    const data = useLocation();
    const navigate = useNavigate();
    const {cartItems} = useSelector( (state) => state.cart);
    return(<>
    <div className="navbar-container"  >
        <div className="navbar-center wrapper">
            <div className="main">
                <div className="logo" onClick={() => navigate('/')}>
                Shoo<i className="fa-brands fa-product-hunt"></i>Cart
                </div>
                    {/* <div className="search-container">
                    <input  disabled={data.pathname == "/" ? false : true} type="text" value={SearchItem}  onChange={handleSearch} name="search" id="search"  placeholder="Find Yours Items."/>
                    </div> */}
                 
                    <div className="cart" onClick={() => navigate('/cart')}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    { cartItems.length > 0 && <div className="dot"></div>}
                    </div>
            </div>
        </div>
    </div>
    </>)
}
 
export default Navbar;