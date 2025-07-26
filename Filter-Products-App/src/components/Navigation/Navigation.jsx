import React from "react";
import "./Navigation.css"
function Navigation({handleInputChange , query}){
 
   
   
    console.log("navigation");
   
   
    return(<>
    <nav className="nav-container">
        <div className="nav-center wrapper">
            <div className="logo-container">
            <h1><i className="fa-solid fa-cart-shopping"></i></h1>
            </div>
            <div className="nav-sub">
            <div className="input-container">
                <input  onChange={handleInputChange} value={query} type="text" name="search" id="search" placeholder="Enter your search shoes." />
            </div>
            <ul className="social-links-main">
                <li><a href="#" className="social-link"> <i className="fa-solid fa-heart"></i> </a></li>
                <li><a href="#" className="social-link"> <i className="fa-solid fa-cart-shopping"></i> </a></li>
                <li><a href="#" className="social-link"> <i className="fa-solid fa-user-plus"></i> </a></li>
 
            </ul>
            </div>
        </div>
    </nav>
    </>)
}
 
export default React.memo(Navigation);