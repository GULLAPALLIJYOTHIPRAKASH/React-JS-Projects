import { useEffect, useState } from "react";



function useTheme(key , defaultValue){



    const [value , setThemeValue] = useState(() => {



        let currentValue ;





        try {



            currentValue = JSON.parse(localStorage.getItem(key) || defaultValue)

           

        } catch (error) {



            currentValue = defaultValue ;

           

        }





        return currentValue

    })


   

    useEffect(() => {



        localStorage.setItem(key, JSON.stringify(value))



    },[key , value])



    return [ value , setThemeValue];



}



export default useTheme;