import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const fetch_api = async (pageNo) => {


            const prev  = pageNo -10
            const req = await fetch(`https://dummyjson.com/products/?limit=${10}&skip=${prev}`);

            const res = await req.json();
            return res.products;

}

function useProductsList(){


    let [pageNo , setPageNo] = useState(() => {

        let defaultValue ;

        try {
            
                

            defaultValue =  JSON.parse(localStorage.getItem("pagecount")) || 10

        } catch (error) {

            defaultValue =10;
            
        }

        return defaultValue;
    });

    const {data :productsList , isLoading:isloading , isError , error ,isFetching} = useQuery({
        queryKey: ["productpage" , `${pageNo}`],
        queryFn : () => fetch_api(pageNo),
        staleTime: 1000 * 60 *5,
    });

   

    
    useEffect(() => {


                   localStorage.setItem("pagecount" , JSON.stringify(pageNo));

    },[pageNo])


    return [productsList , isloading , isError , pageNo , setPageNo];
}

export default useProductsList;





   