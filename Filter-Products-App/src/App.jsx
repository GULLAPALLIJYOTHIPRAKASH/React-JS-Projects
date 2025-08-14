import React  from "react";
import {  useMemo, useCallback, useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import products from "./data";
import Card from "./components/Custom/Card";
 
 
function App(){
 
 
    const [selectedCategory , setSelectedCategory] = useState({
 
        category: "",
        price:"",
        color: "",
    });
    const [selectedButton , setSelectedButton] = useState("");
 
    // ------ input ---------
 
    const [query , setQuery] = useState("")
 
    // input  change
    const handleInputChange = useCallback((e) => {
 
        setQuery(e.target.value)
    },[query])
 
    // ---- filter query-----
    const filteredItems = products.filter((product) => {
            return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
   
   
   
 
    // -------- radio -------------
    const handleChange = useCallback((e) => {
 
        let {name , value} = e.target;
 
        setSelectedCategory({
         ...selectedCategory,
         [name]: value
        })
     },[selectedCategory])
 
    // // --- button -------
    const handleClick = useCallback((e) => {
 
        let {name , value} = e.target;
 
        // setSelectedCategory({
        //  ...selectedCategory,
        //  company: value
        // })
     
 
        setSelectedButton(e.target.value);
 
 
    },[selectedButton])
 
 
 
    function filteredData(products , selected , query , company){
 
        let productsData = products;
       
        // for search
        if(query){
 
            productsData = filteredItems;
        }
 
 
        // for button/Radio
        if(selected){
 
            productsData = productsData.filter((product)=>{
 
                return(
                     
                    (company ? product.company === company : true ) &&
                        (selected.category ? product.category === selected.category : true ) &&
                        (selected.price ? product.newPrice === selected.price : true ) &&
                    (selected.color ? product.color === selected.color : true )
 
                )
            })
 
 
           
        }
 
       
   
           
           productsData.sort((a,b) => {return a.newPrice - b.newPrice})
           
 
            productsData = productsData.map( (product, index) => {
 
                const { title, img , reviews,prevPrice, newPrice} = product
   
                return ( <Card key={index} id={index} title={title}  img={img}  reviews={reviews}  prevPrice={prevPrice} newPrice={newPrice} />)
            })
 
           
 
           
       
           
            return(productsData)
    }
   
 
    const results = filteredData(products , selectedCategory , query , selectedButton);
 
  
    return(<>
    <Navigation handleInputChange={handleInputChange} query={query}/>
    <div className="flex-container">
    <Sidebar handleChange={handleChange}/>
    <div className="sub-section ">
    <Recommended handleClick={handleClick} selected_Button={selectedButton} />
    <Products results={results}/>
    </div>
    </div>
    </>)
}
 
export default App;
 