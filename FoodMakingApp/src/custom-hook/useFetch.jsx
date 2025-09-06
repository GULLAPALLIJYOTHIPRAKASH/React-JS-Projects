import { useState , useEffect} from "react";
 
function useFetch(){
 
    const [recipes , setRecipes] = useState([]);
    const [Loading  , setLoading] = useState(true);
    const [error , setError] = useState({isError: false , msg:""})
 
 
const fetch_recipe = async () => {
 
 
    setLoading(true);
    setError({isError: false , msg:""})
 try {
 
    const req = await fetch("https://dummyjson.com/recipes");
    const res = await req.json();
    
    setRecipes(res?.recipes);
    setLoading(false);
    setError({isError: false , msg:""});
 
    if(req.status == 400 ){
 
        throw new error("Data not found");
    }
   
 } catch (error) {
   
    setLoading(false)
    setError({isError: true , msg:"Something went wrong" ||  error.msg})
 }
 
 
}
 
useEffect(() => {
 
    fetch_recipe();



},[])
 
 
return [recipes , Loading , error , setRecipes]
}
 
export default useFetch;
