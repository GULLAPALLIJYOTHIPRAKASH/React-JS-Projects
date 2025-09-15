import Category from "../Category/Category";
import "./Sidebar.css";
import React from "react";

function Sidebar({handleCategory}){

    return(<>
    <div className="sidebar-container">
        <div className="sidebar-center">
            <Category handleCategory={handleCategory}/>
        </div>
    </div>
    </>)
}

export default React.memo(Sidebar);