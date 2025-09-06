import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../Context/FavContext";
function Recipe_Card({id , title , img ,cookTimeMinutes , mealtype }){
 
     const {favList , handle_Favourite} = useContext(FavContext);
   
    return(
        // <Link to={`/recipes/${id}`} className="w-[100%]">
        <div  className="single-recipe  relative w-[100%] p-[15px]  flex flex-col justify-center items-center gap-y-[20px] bg-white-100 rounded-[10px]  [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px]  hover:[box-shadow:rgba(39,_29,_69,_0.2)_0px_2px_8px_0px] hover:translate-y-[-4px] transition ease-linear duration-[0.3s]">
        <div className="img-container w-[140px] overflow-hidden  rounded-[50%] outline-[2px] outline-yellow-500 outline-dotted hover:outline-offset-[5px] hover:outline-[3px]">
         <Link to={`/recipes/${id}`} className="w-[100%]"><img src={img} alt={title} className="w-[100%] h-[100%] object-center object-cover" /></Link>
           <div className=" absolute top-[10px] right-[10px] ">
           <i value={id} onClick={handle_Favourite} className={favList[id] ? "fa-solid fa-heart text-[20px] font-bold text-red-500 cursor-pointer " : "fa-solid fa-heart text-[20px] font-bold text-[#344742] cursor-pointer "}></i>
           </div>
        </div>
        <div className="w-[100%] recipe-content ">
            <h2 className="w-[100%] text-[#344742] text-[14px] font-bold tracking-[0.5px] mb-[5px] ">{title}</h2>
            <p className="text-gray-500 text-[16px] tracking-[1px] mb-[5px]">Delicious dish</p>
            <p className="text-gray-500 text-[16px] tracking-[1px] mb-[5px]">{mealtype}</p>
            <p className="text-[18px]"><i className="fa-solid fa-stopwatch text-[#344742]"></i>  {cookTimeMinutes == 0 ? 20 : cookTimeMinutes} </p>
        </div>
    </div>
        // </Link>
        
    )
}
 
export default React.memo(Recipe_Card);
 