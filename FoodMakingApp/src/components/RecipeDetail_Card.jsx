import React, { useContext } from "react";
import { FavContext } from "../Context/FavContext";
 
function RecipeDetail_Card({data}){
 
   
    const {favList , handle_Favourite} = useContext(FavContext);
 
    return(
<>
        <div className="heading   flex flex-col justify-center items-center">
        <div className="img-container w-[300px] relative overflow-hidden  rounded-[10px] mb-[15px]">
            <img src={data?.image} alt=""  className="w-[100%] h-[100%] object-center object-container" />
            <div className=" absolute top-[10px] right-[10px]">
                <i value={data.id}  onClick={handle_Favourite} className={favList[data.id] ? "fa-solid fa-heart text-[20px] font-bold  bg-black p-[7px] rounded-[50%] text-[#cfb02c] cursor-pointer hover:text-[#cfb02c]" : "fa-solid fa-heart text-[20px] font-bold  bg-black p-[7px] rounded-[50%] text-[#344742] cursor-pointer hover:text-[#cfb02c]"}></i>
            </div>
        </div>
        <h1 className="title text-xl text-[#344742] font-bold tracking-[1px] mb-[5px]">{data?.name}</h1>
        {/* <h3 className="text-[15px] text-gray-500">Meal Type : {data[0]?.mealType.toString()}</h3> */}
        <h3 className="text-[16px] text-red-500 ">Making Time: <i className="fa-solid fa-stopwatch "> {data?.cookTimeMinutes === 0 ? 20 : data?.cookTimeMinutes}</i> Minutes</h3>
        </div>
        <section className="recipe-details-section mt-[15px] bg-grey-100">
        <div className="ingredients">
            <h2 className="text-[#344742] text-[18px] font-bold tracking-[1px] mb-[10px]">Ingredients</h2>
        <ul className="">
                {/* <li className="list-disc text-[14px] text-black ">Pizza dough</li> */}
                {
 
                    data?.ingredients?.map((item, index) => {
                   
                   return <li  key={index + item} className="list-disc text-[14px] text-black ">{item}</li>
 
                    })
                }
            </ul>
 
        </div>
            <div className="instructions mt-[10px]">
            <h2 className="text-[#344742] text-[18px] font-bold tracking-[1px] mb-[10px]">Instructions</h2>
        <ul className="">
                {/* <li className="list-disc text-[14px] text-black ">Pizza dough</li> */}
                    {
 
                    data?.instructions?.map((item, index) => {
 
                    return <li  key={index+item} className="list-disc text-[14px] text-black ">{item}</li>
 
                    })
                    }
            </ul>
 
        </div>                
        </section>
 
        </>
     
    )
}
 
export default React.memo(RecipeDetail_Card);
 