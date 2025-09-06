import { useCallback, useContext, useEffect  , useState} from "react";
import useFetch from "./useFetch";
import { FavContext } from "../Context/FavContext";

 
 
function useFilter(){
 
 
    const  [recipes , Loading , error] = useFetch();
    const {favList} = useContext(FavContext);

 
    const [query , setQuery] = useState(() => {
 
        let currentSearch ;
 
        try {
           
            currentSearch = JSON.parse(localStorage.getItem("search")) || ""
        } catch (error) {
 
            currentSearch = ""
           
        }
 
        return currentSearch;
 
    });
 
    const [selectedCategory  , setSelectedCategory] = useState(() => {
 
        let currentCategory ;
 
        try {
           
            currentCategory = JSON.parse(localStorage.getItem("category")) || ""
        } catch (error) {
 
            currentCategory = ""
           
        }
 
        return currentCategory;
 
    });
 
    useEffect(() => {
 
     
 
            localStorage.setItem("category" , JSON.stringify(selectedCategory))
       
 
    },[selectedCategory])
 
    useEffect(() => {
 
       
       
 
            localStorage.setItem("search" , JSON.stringify(query))
       
    },[query])
 
 
    const handle_Button =useCallback((e) => {
 
        setSelectedCategory((prev) => {
 
            return prev == e.target.value ? "" : e.target.value
        });
 
    }, [selectedCategory])
 
    const handle_Input = useCallback((e) => {
 
        setQuery(e.target.value);
 
    } , [query])
 
    // search filter
 
    const filterItems = recipes?.filter((item) => {
 
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
 
   
 
   
    const filteredData = (query , Allrecipes , selected) => {
 
        let filtered_data = Allrecipes
 
        if(query){
 
            filtered_data = filterItems
        }
        if(selected){
 
           
 
                filtered_data  = filtered_data.filter((item) => {

                    
                //    here match the selected btn
                    return (( selected == "favourite" ?  favList[item.id]   == true : true) &&(selected !="favourite" ? item.mealType[0].toLowerCase() === selected : true) );
 
                })
 
 
    }
       
 
 
       
       
 
       return filtered_data
 
 
 
         
    };

   const result = filteredData(query ,recipes , selectedCategory); 


    return [Loading , error , result , query , handle_Input , handle_Button,recipes]
}
 
 
export default useFilter;
 