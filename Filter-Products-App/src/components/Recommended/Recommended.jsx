import React from "react";
import Button from '../Custom/Button';
import './Recommended.css';
function Recommended({handleClick , selected_Button}){
 
   
   
 
    return(
        <section className="recommended-container">
            <h1>Recommended</h1>
            <div className="recommended-buttons">
                <Button handleClick={handleClick}   selected_Button={selected_Button}   value="" title="All"/>
                <Button handleClick={handleClick}   selected_Button={selected_Button}   value="Nike" title="Nike"/>
                <Button handleClick={handleClick}   selected_Button={selected_Button}   value="Adidas" title="Adidas"/>
                <Button handleClick={handleClick}   selected_Button={selected_Button}   value="Puma" title="Puma"/>
                <Button handleClick={handleClick}   selected_Button={selected_Button}   value="Vans" title="Vans"/>
            </div>
 
        </section>
    )
}
export default React.memo(Recommended);