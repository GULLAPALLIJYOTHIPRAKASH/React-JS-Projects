import React from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Colors";
 
 
function Sidebar({handleChange}){
 
 
   
 
    return(<>
    <div className="sidebar-container">
        <Category  handleChange={handleChange}  />
        <Price  handleChange={handleChange}  />
        <Color  handleChange={handleChange}  />
    </div>
    </>)
}
 
export default React.memo(Sidebar);