import React from "react";
import Input from "../../Custom/Input";
import "./Price.css";
 
function Price({handleChange}){
 
    return (<>
    <div className="price common">
        <h1 className="sidebar-title">Price</h1>
        <div className="all-label">
            <label className="sidebar-label-container">
                <input  onChange={handleChange} type="radio" value="" name="price"  />
                <span className="checkmark"></span>All
            </label>
            <Input  handleChange={handleChange} value={50} title="$0 - $50"   name="price"/>
            <Input  handleChange={handleChange} value={100} title="$50 - $100"  name="price" />
            <Input  handleChange={handleChange} value={150} title="$100 - $150"   name="price"/>
            <Input  handleChange={handleChange} value={200} title="Over $150"   name="price"/>
           
        </div>
    </div>
    </>)
}
 
export default React.memo(Price);
