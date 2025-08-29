import { useState } from "react";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";
 
function Sidebar({close , handle_Hambergur }){
 
 
 
    return(<>
    <aside className={!close ? " sidebar-container w-[70%] min-h-[100vh] bg-black fixed opacity-[0.7] z-[10] top-0  right-[-100%] p-[30px] [transition:all_0.3s_linear]" : " sidebar-container w-[70%] min-h-[100vh] bg-black fixed top-0 right-[0px] opacity-100 z-[10]   p-[30px] [transition:all_0.3s_linear]"}>
        <div className="sidebar-center ">
            <div className="logo-header ">
                <img src={assets.close} alt="" className="w-[45px] cursor-pointer" onClick={(e) => handle_Hambergur(e  , false)}   />
            </div>
            <div className="sidebar-links-main w-[100%] mt-[30px]">
                <ul className="sidebar-links flex flex-col justify-center items-center gap-y-[30px]">
                    <li><NavLink onClick={(e) => handle_Hambergur(e  , false)} to="/" className="sidebar-link text-gray-400 tracking-[1px] text-[18px] hover:text-gray-400 ">Home</NavLink></li>
                    <li><NavLink onClick={(e) => handle_Hambergur(e  , false)} to="/about" className="sidebar-link text-white tracking-[1px] text-[18px] hover:text-gray-400 ">About</NavLink></li>
                    <li><NavLink onClick={(e) => handle_Hambergur(e  , false)} to="/recipes" className="sidebar-link text-white tracking-[1px] text-[18px] hover:text-gray-400 ">Recipes</NavLink></li>
                    <li><NavLink onClick={(e) => handle_Hambergur(e  , false)} to="/contact" className="sidebar-link text-white tracking-[1px] text-[18px] hover:text-gray-400 ">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    </aside>
    </>)
}
 
export default Sidebar;
 