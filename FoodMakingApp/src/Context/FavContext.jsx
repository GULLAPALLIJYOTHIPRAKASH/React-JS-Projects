import React, { useState, useContext, useCallback, useEffect, useMemo } from "react";
 
export const FavContext = React.createContext();
 
export const FavContextProvider = ({children}) => {
 
     const [favList , setFavList] = useState(() => {
 
        let currentvalue ;
 
       try{
 
          currentvalue =  JSON.parse(localStorage.getItem("favList")) || {}
 
       }
       catch(error){
 
        currentvalue = {};
 
       }
 
 
        return currentvalue
     });
 
 
 
 
     useEffect(() => {
 
        localStorage.setItem("favList"  , JSON.stringify(favList));
 
       
     },[favList])
   
    const handle_Favourite = useCallback((e) => {
   
            if(!favList[e.target.getAttribute('value')]){
       
                           setFavList({
       
                           ...favList,
                           [e.target.getAttribute('value')] : true
                           })
           }
       
           else if(favList[e.target.getAttribute('value')]){
       
               setFavList({
       
                   ...favList,
                   [e.target.getAttribute('value')] : false
                   })
           }
           
       
    },[favList])
   
   
 
 
    return <FavContext.Provider value={{favList , handle_Favourite}}>{children}</FavContext.Provider>
}