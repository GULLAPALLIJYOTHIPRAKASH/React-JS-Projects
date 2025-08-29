import { Link, NavLink } from "react-router-dom";
import { useContext , useMemo } from "react";
import { FavContext } from "../Context/FavContext";
import assets from "../assets/assets";
 
 
function Navbar({handle_Hambergur}){
 
 
    const {favList} = useContext(FavContext);
 
    const totalFav  = useMemo(() => {
 
     let count = 0;
 
     for(let i in favList){
 
 
        if(favList[i]){
 
           
           
 
            count = count + 1
        }
        else{
 
            count = count - 1
        }
 
       
    }
    return count
       
 
    },[favList])
 
   
   
 
    return(<>
    <nav className="nav-container py-[20px] border-b-[1px] border-b-gray-400 min-h-[50px] ">
        <div className="nav-center wrapper sm:flex sm:justify-center sm:items-center sm:gap-[30px]">
           <div className="logo-header flex justify-between items-center ">
           <div className="nav-logo w-[120px] ">
              <Link to="/"> <img src={assets.logo} alt="" /></Link>
            </div>
            <div className="nav-hambergur w-[50px] min-[639px]:hidden">
                <img src={assets.hamburger} alt="" className="cursor-pointer" onClick={handle_Hambergur} />
            </div>
            </div>
            <div className="nav-links-main max-[639px]:hidden w-[100%]">
                <ul className="nav-links flex justify-center items-center gap-x-[40px]">
                    <li><NavLink to="/"  className="nav-link text-[16px] tracking-[1px] font-semibold text-[#344742]  hover:transition hover:ease-linear hover:duration-200 ">Home</NavLink></li>
                    <li><NavLink to="/about"  className="nav-link text-[16px] tracking-[1px] font-semibold text-[#344742] hover:underline hover:underline-offset-[5px]  hover:decoration-[#cfb02c] hover:transition hover:ease-linear hover:duration-100">About</NavLink></li>
                    <li><NavLink to="/recipes"  className="nav-link text-[16px] tracking-[1px] font-semibold text-[#344742] hover:underline hover:underline-offset-[5px]  hover:decoration-[#cfb02c] hover:transition hover:ease-linear hover:duration-100">Recipes</NavLink></li>
                    <li><NavLink to="/contact"  className="nav-link text-[16px] tracking-[1px] font-semibold text-[#344742] hover:underline hover:underline-offset-[5px]  hover:decoration-[#cfb02c] hover:transition hover:ease-linear hover:duration-100">Contact</NavLink></li>
                 
                </ul>
           </div>
           {/* <div className="max-[639px]:hidden relative"><i className="fa-solid fa-heart text-black  p-[7px] rounded-[50%] text-[18px] font-medium transition ease-linear duration-200  cursor-pointer  "></i> {totalFav &&
           <i className="w-[10px] h-[10px] rounded-[50%] absolute top-[-2px] right-[7px] text-[#cfb02c]  [box-shadow:rgba(0,_0,_0,_0.24)_0px_3px_8px] fa-regular fa-eye font-bold text-[16px]"></i>}</div>*/}
        </div>
    </nav>
    </>)
}
 
export default Navbar;
 