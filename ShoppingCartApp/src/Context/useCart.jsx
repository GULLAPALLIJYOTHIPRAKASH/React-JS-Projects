import React, { useState, useEffect , useContext } from "react";

import { useNavigate } from "react-router-dom";



export const CartContext = React.createContext(null);





export const CartContextProvider = ({children}) => {





    const fetch_api = async () => {



        setLoading(true)



        setIsError({status: false , msg: ""})



       

        try {



            const req =await fetch("https://dummyjson.com/products/category/smartphones");

            const res = await req.json();

           

            setLoading(false)



            setIsError({status: false , msg: ""})



            setProductsList(res.products);

   





        if(req.status == 404){



            throw new Error("Data Not Found");

        }



           



        } catch (error) {



           

            setLoading(false)



            setIsError({status: true , msg: `${error.message}` || "Something went wrong" })



           

           

        }

    }





    const [productsList , setProductsList] = useState([]);

    const [loading, setLoading] = useState(true);

    const [isError , setIsError] = useState({status: false , msg:""})

    const [product , setProduct] = useState(null);

    const[cartItems , setCartItems] = useState([]);



    const navigate = useNavigate();


    const Handle_Add_Cart_items = (getProduct) => {


        const cpy_CartItems = [...cartItems];

        const findIndexOfCartItem = cartItems.findIndex((cart) => cart.id === getProduct.id);


        if(findIndexOfCartItem === -1){

           

            cpy_CartItems.push({



                ...getProduct ,

                quantity: 1,

                totalPrice: getProduct?.price

            })

        }

        else{



            cpy_CartItems[findIndexOfCartItem] = {



                ...cpy_CartItems[findIndexOfCartItem],

                quantity : cpy_CartItems[findIndexOfCartItem]?.quantity + 1 ,// increment quantity

                totalPrice: (cpy_CartItems[findIndexOfCartItem]?.quantity + 1 )* cpy_CartItems[findIndexOfCartItem]?.price,

            }

        }


        setCartItems(cpy_CartItems);

       

       

        navigate("/cart");





       

    }





    const Handle_Remove_Cart_Items = (getProduct , isFullyRemoveFromCartItem) => {



        let cpy_CartItems = [...cartItems];



        const findIndexOfCartItem = cpy_CartItems.findIndex((item) => item.id === getProduct.id);





        if(isFullyRemoveFromCartItem){



            cpy_CartItems.splice(findIndexOfCartItem , 1);

        }

        else{



            cpy_CartItems[findIndexOfCartItem] = {



                ...cpy_CartItems[findIndexOfCartItem],

                quantity: cpy_CartItems[findIndexOfCartItem]?.quantity -1,

                totalPrice: (cpy_CartItems[findIndexOfCartItem]?.quantity -1 ) * cpy_CartItems[findIndexOfCartItem]?.price

            }

        }





        setCartItems(cpy_CartItems);



    }





    useEffect(() => {



        fetch_api();

    } ,[])

   







    return(<CartContext.Provider value={{productsList , loading , isError , setLoading , setIsError , product , setProduct , Handle_Add_Cart_items , cartItems , Handle_Remove_Cart_Items}}>{children}</CartContext.Provider>)

}





export const useCart = () => {



    return useContext(CartContext);

}







