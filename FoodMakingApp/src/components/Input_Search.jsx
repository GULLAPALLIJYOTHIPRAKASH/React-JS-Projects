import React from "react";
 
function Input_Search({handle_Input , query}){
 
    return(
 
        <>
        <div className="recipe-search-contianer mt-[30px] py-[20px]">
        <div className="recipe-search-center wrapper text-center">
            <h1 className="text-2xl font-bold text-[#cfb02c] mb-[15px]">Find Your Recipe Here !</h1>
            <input type="text" onChange={handle_Input} value={query} className="w-[80%] p-[10px] outline-none bg-[#344742] text-white rounded-[4px]" name="search" id="search" placeholder="Search for the recipes..." />
        </div>
    </div>
        </>
    )
}
 
export default React.memo(Input_Search);
 