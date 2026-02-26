import { useEffect, useState } from "react";


type Theme = "dark" | "light";


function useTheme(key:string , defaultValue:Theme){



    const [value , setThemeValue] = useState<Theme>(() => {

        
        try {



           const storedValue = localStorage.getItem(key);

            if(!storedValue){ 

                return defaultValue
            }

            const parsed = JSON.parse(storedValue)

            if(parsed === "dark" || parsed === "light"){

                return parsed
            }


            return defaultValue;
            

           

        } catch (error) {



             return defaultValue ;

           

        }


    })


   

    useEffect(() => {



        localStorage.setItem(key, JSON.stringify(value))



    },[key , value])



    return { value , setThemeValue};



}



export default useTheme;