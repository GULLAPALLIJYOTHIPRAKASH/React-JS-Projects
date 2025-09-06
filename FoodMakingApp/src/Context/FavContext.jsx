import React, { useState, useContext, useCallback, useEffect, useMemo } from "react";
import { toast} from 'react-toastify';

 
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

                           toast.success("Item added Favourite" , { toastId: 'added-101' });
           }
       
           else if(favList[e.target.getAttribute('value')]){
       
               setFavList({
       
                   ...favList,
                   [e.target.getAttribute('value')] : false
                   })

                        toast.warning("Item removed Favourite" , { toastId: 'removed-102' });
           }
           
       
    },[favList])
   
   
 
 
    return <FavContext.Provider value={{favList , handle_Favourite}}>{children}</FavContext.Provider>
}