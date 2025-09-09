import Category from "../Category/Category";
import "./Sidebar.css";

function Sidebar({handleCategory}){

    return(<>
    <div className="sidebar-container">
        <div className="sidebar-center">
            <Category handleCategory={handleCategory}/>
        </div>
    </div>
    </>)
}

export default Sidebar;