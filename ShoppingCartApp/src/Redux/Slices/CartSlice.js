import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";



// export const fetchProducts = createAsyncThunk('cart/fetchProducts' , async () => {

//     const req = await fetch("https://dummyjson.com/products?limit=194");
//     const res = await req.json();
//     if (!req.ok) {
//     throw new Error(`Error ${req.status}: ${res.message || 'Failed to fetch products'}`);
// }


//     return res.products;
// })
const initialState = {

    // productsList:[],
    // loading:false,
    // isError: {status: false , msg:""},
    cartItems:[],


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
        },

        Remove_CartItem : (state , action) => {

            

            let {isfullRemoved ,product }= action.payload
            let cpyCartItems = [...state.cartItems];
            let findCartItemIndex = cpyCartItems.findIndex((cart) => cart.id == product.id);

            if(isfullRemoved){

                cpyCartItems.splice(findCartItemIndex , 1);
            }else{

                cpyCartItems[findCartItemIndex] = {

                    ... cpyCartItems[findCartItemIndex] ,
                    quantity :  cpyCartItems[findCartItemIndex].quantity - 1, // decrement quantity
                    totalPrice : (( cpyCartItems[findCartItemIndex].quantity - 1 ) * cpyCartItems[findCartItemIndex].price ), 
                }


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