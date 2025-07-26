import React from "react";
import Input from "../../Custom/Input";
import "./Category.css"
 
function Category({handleChange}){
 
    return(<>
    <div className="category common">
    <h1 className="sidebar-title">Category</h1>
    <div className="all-label">
        <label  className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="category"  />
            <span className="checkmark"></span>All
        </label>
        <Input   handleChange={handleChange} title="Sneakers" value="sneakers" name="category" />
        <Input   handleChange={handleChange} title="Flats" value="flats" name="category" />
        <Input   handleChange={handleChange} title="Sandals" value="sandals" name="category" />
        <Input   handleChange={handleChange} title="Heels" value="heels" name="category" />
    </div>
    </div>
    </>)
}
 
export default React.memo(Category);