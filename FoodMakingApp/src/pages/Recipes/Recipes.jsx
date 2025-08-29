import { useCallback, useContext, useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useFilter from "../../custom-hook/useFilter";
import Input_Search from "../../components/Input_Search";
import Recommended from "../../components/Recommended";
import Recipe_Card from "../../components/Recipe_Card";
import Home_Contact from "../../components/Home_Contact";
 
function Recipes(){
 
    const [Loading , error , result , query , handle_Input , handle_Button] = useFilter();
 
    useEffect(() => {
 
        window.scrollTo(0,0)
 
    } ,[])
 
   
   
 
    return(<>
    <Input_Search handle_Input={handle_Input} query={query} />
    <Recommended handle_Button={handle_Button}/>
    <div className="recipes-container mt-[30px] py-[20px]">
        <div className="recipes-center wrapper grid place-items-center  gap-[25px] grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]  ">
        {Loading && !error?.isError && <p className="text-[16px]  text-center font-bold  tracking-[1px] text-green-400">Loading ....!</p>}
        {!Loading && error?.isError && <p className="text-[16px]  text-center font-bold  tracking-[1px] text-red-400">{error.msg}</p>}
        {
 
          !Loading && !error?.isError && result?.length >0 && result.map((item) => {
 
            const {name , image, id , cookTimeMinutes ,mealType } = item
   
          return (
   
            <Link  className="w-[100%] "to={`/recipes/${id}`} key={id}>
            <Recipe_Card  id={id} title={name}  img={image}  cookTimeMinutes={cookTimeMinutes} mealtype={mealType[0]}/>
           
            </Link>
          )
 
        })
    }
 
        {
            !Loading && !error?.isError && result?.length == 0 && <p className="text-[#344742] font-bold text-center tracking-[1px]">Data Not Found ....!</p>
        }
        </div>
    </div>
    <Home_Contact/>
    </>)
}
 
export default React.memo(Recipes);