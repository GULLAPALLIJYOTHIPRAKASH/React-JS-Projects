import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
  import {toast } from 'react-toastify';


  const persistedState  = (() => {
        
    let defaultvalue ;

        try {
            
            defaultvalue = JSON.parse(localStorage.getItem("cartItem")) || []
        } catch (error) {

            defaultvalue = []
            
        }

        return defaultvalue
    })();

const initialState = {

    // productsList:[],
    // loading:false,
    // isError: {status: false , msg:""},
    cartItems: persistedState


}

const CartSlices =  createSlice({

    name: "Cart",
    initialState,
    reducers:{

        Add_To_Cart: (state , action) => {
            

            let product = action.payload

            let cpyCartItems = [...state.cartItems];
            let findCartItemIndex = cpyCartItems.findIndex((cart) => cart.id == product.id);

            if(findCartItemIndex == -1) {

                cpyCartItems.push({

                    ...product , 
                    quantity: 1 ,
                    totalPrice : product?.price
                })
            }
            else{


                cpyCartItems[findCartItemIndex] = {

                    ... cpyCartItems[findCartItemIndex] ,
                    quantity :  cpyCartItems[findCartItemIndex].quantity + 1, // increment quantity
                    totalPrice : (( cpyCartItems[findCartItemIndex].quantity + 1 ) * cpyCartItems[findCartItemIndex].price ),
                }
            }

            // console.log(cpyCartItems);
            

            state.cartItems = cpyCartItems;

            toast.success("Product added to carted" , {toastId: "product-add"})
        },

        Remove_CartItem : (state , action) => {

            

            let {isfullRemoved ,product }= action.payload
            let cpyCartItems = [...state.cartItems];
            let findCartItemIndex = cpyCartItems.findIndex((cart) => cart.id == product.id);

            if(isfullRemoved){

                cpyCartItems.splice(findCartItemIndex , 1);

                    toast.warn("Product removed from cart" , {toastId: "product-remove"})

            }else{

                cpyCartItems[findCartItemIndex] = {

                    ... cpyCartItems[findCartItemIndex] ,
                    quantity :  cpyCartItems[findCartItemIndex].quantity - 1, // decrement quantity
                    totalPrice : (( cpyCartItems[findCartItemIndex].quantity - 1 ) * cpyCartItems[findCartItemIndex].price ), 
                }
                                        toast.warn("Product quantity decreased" , {toastId: "product-remove"})



            }

            state.cartItems = cpyCartItems;




        }


        
    },
    // extraReducers: (builder) => {

    //     builder.addCase(fetchProducts.pending , (state , action) => {

    //         state.loading = true ;
    //         state.isError = {status: false , msg:""};
    //     })
    //     .addCase(fetchProducts.fulfilled , (state , action) => {

    //         state.loading = false;
    //         state.productsList = action.payload;
    //     })
    //     .addCase(fetchProducts.rejected , (state , action) => {

    //         state.loading  = false;
    //         state.isError = {status: true , msg: action.error.message || "Something went Wrong...!"}
    //     })
    // }


});


export const {Add_To_Cart , Remove_CartItem } = CartSlices.actions;

export default CartSlices.reducer;