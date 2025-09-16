import "./Cart.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Add_To_Cart, Remove_CartItem } from "../../Redux/Slices/CartSlice";
 
function Cart(){
 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state) => state.cart);

     useEffect(() => {
    
            localStorage.setItem("cartItem" , JSON.stringify(cartItems))
        },[cartItems])

    // dipatch action for add to cart
    const Handle_Add_Cart_items = (product) => {
        

        dispatch(Add_To_Cart(product));

        navigate('/cart');
    }  
    
   // dipatch action for remove item 
    const Handle_Remove_Cart_Items = (product , isfullRemoved) => {

        dispatch(Remove_CartItem({product , isfullRemoved}));
       };

    return(<>
    <div className="cart-container" >
        <div className="cart-center wrapper">
           <div className="heading">
            <h3 className="title">My Cart Items</h3>
           </div>
           <div className="cart-summary paddingTopMobile-30 paddingTopDesktop-30">
            {/*  order-summary*/}
           {cartItems.length > 0 &&  <div className="order-summary-container">
                <h3 className="title">Order Summary</h3>
                <hr />
                <h4>total : ${cartItems.length > 0 && cartItems.reduce((acc , curr) => acc + curr.totalPrice, 0).toFixed(2)}</h4>
                <div className="order-buttons">
                    <button className="btn">checkout</button>
                    <button className="btn-black" onClick={() => navigate("/")}>Continue Shopping</button>
                </div>
            </div>}
            {/*  order-summary*/}
 
            <section className="cart-items ">
                {/* <article className="single-cart-item">
                    <div className="img-container">
                        <img src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp" alt="" />
                    </div>
                    <div className="item-info">
                        <div className="cart-title">
                            <h3>eggs</h3>
                            <button className="btn-black remove">remove</button>
                        </div>
                        <div className="cart-fun-item">
                            <h4>$9.99</h4>
                            <span className="plus">-</span>
                            <span className="minus">+</span>
                        </div>
                    </div>
                </article> */}
                {
                    cartItems.length > 0 && cartItems?.map((item) => {
 
 
                        return(<article className="single-cart-item" key={item?.id + "cart"}>
                            <div className="img-container">
                                <img src={item?.thumbnail} alt={item?.title} />
                            </div>
                            <div className="item-info">
                                <div className="cart-title">
                                    <h3>{item?.title}</h3>
                                    <button className="btn-black" onClick={() => Handle_Remove_Cart_Items(item , true)}>remove</button>
                                </div>
                                <div className="cart-fun-item">
                                    <h4>${item?.totalPrice.toFixed(2)}</h4>
                                    <h3 className="quantity">quantity: {item.quantity}</h3>
                                    <button onClick={() =>{ item?.quantity === 1 ? "" : Handle_Remove_Cart_Items(item , false) }} className="minus btn-black">-</button>
                                    <button onClick={() => Handle_Add_Cart_items(item) }  className="plus" >+</button>
                                </div>
                            </div>
                        </article>)
                    })
                }
            </section>
 
           </div>
                {cartItems.length == 0 && <div className="no-data">
                    <p className="not-avaiable paddingTopMobile-50 paddingTopDesktop-50">No cart Items are available</p>
                    <button className="btn-back btn-black" onClick={() => navigate("/")}>Back To Shopping</button>
                </div>
                }
               
        </div>
    </div>
    </>)
}
 
export default React.memo(Cart);