import React from "react";
function Input({handleChange , title , value , name , color}){
 
    return(<>
    <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" name={name} value={value}  />
                <span className="checkmark" style={{background: color}}></span>{title}
            </label>
    </>)
}
 
export default React.memo(Input);