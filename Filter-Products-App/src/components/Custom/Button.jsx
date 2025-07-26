import React from "react";
function Button({handleClick , title , value ,selectedCompany}){
   
    return(
    <>
    <button name="company" className={ selectedCompany == value ? "btn active" : "btn"} onClick={handleClick} value={value}>{title}</button>
    </>
    );
}
 
export default React.memo(Button);