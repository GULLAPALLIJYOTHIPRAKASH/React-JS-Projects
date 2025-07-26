import React from "react";
import Card from "../Custom/Button";
import "./Products.css";
function Products({results}){
 
   
   
 
    return(<>
    <section className="products-section">
        {results}
        {results.length ==0 && <p className="No-products">No Products Match</p>}
     
    </section>
    </>)
}
 
export default React.memo(Products);