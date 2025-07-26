import React from "react";
import Input from "../../Custom/Input";
import "./Colors.css";
 
function Colors({handleChange}){
 
    return(<>
<div className="color common">
        <h1 className="sidebar-title">Colors</h1>
        <div className="all-label">
            <label className="sidebar-label-container">
                <input  onChange={handleChange} type="radio" name="color"  value="" />
                <span className="checkmark clr"></span>All
            </label>
 
            <Input handleChange={handleChange} name="color" title="Black" value="black" color="black" />
            <Input handleChange={handleChange} name="color" title="Red" value="red" color="red" />
            <Input handleChange={handleChange} name="color" title="Blue" value="blue" color="blue" />
            <Input handleChange={handleChange} name="color" title="Green" value="green" color="green" />
           
            <label className="sidebar-label-container">
                <input  onChange={handleChange} type="radio" name="color"  value="white" />
                <span className="checkmark" style={{background:"white" , border: "1px solid black", }}></span>White
            </label>
 
         
           
        </div>
    </div>
    </>)
}
export default React.memo(Colors);
 