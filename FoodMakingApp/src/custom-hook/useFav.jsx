import { useCallback, useState } from "react";
 
 
function useFav(){
 
 
    const [favList , setFavList] = useState({});
 
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
 
 
return [favList , handle_Favourite ]
 
 
}
 
export default useFav;