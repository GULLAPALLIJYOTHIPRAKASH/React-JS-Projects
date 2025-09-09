import "./ProductInfo.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add_To_Cart, fetchProducts } from "../../Redux/Slices/CartSlice";




function ProductInfo(){


    const {productid} = useParams();
    const navigate = useNavigate();  
    const dispatch = useDispatch();
    const {productsList , loading, isError , cartItems} = useSelector((state) => state.cart);

    const [slide , setSlide] = useState(0);
    let product = productsList.find((item) => item.id == productid ) ;

    useEffect(() => {

        dispatch(fetchProducts());

       
    },[dispatch])


     const Handle_Add_Cart_items = (product) => {
            
    
            dispatch(Add_To_Cart(product));
    
            navigate('/cart');
    }






    const handleBack= () => {



        navigate('/');

    }









 



    if(loading == true){



        return(

            <div className="loading-img-container">

            </div>

        )

    }



    if(isError.status){



        return ( <div className="error-img-container">

            </div>)

    }









   



   



    return(<>

    <div className="productinfo-container  paddingTopMobile-50 paddingTopDesktop-50" >

        <div className="productinfo-center wrapper">

           {product ? <div className="productinfo-main"><div className="product-gallery">

                    <div className="img-container">

                        <img src={slide > 0 ? product.images[slide] : product?.thumbnail} alt="" />

                    </div>

                    <div className="slide">

                        {product?.images?.map((item, index) => {
                            // console.log(item);



                            return (



                                <img onClick={() => setSlide(index)} key={item} src={item} alt={index + "phote"} />

                            );

                        })}

                    </div>

                    <div onClick={handleBack} className="back-btn">

                        <i className="fa-solid fa-arrow-left back"></i>

                    </div>

                </div><section className="single-product-info">

                        {product && <>

                            <h3 className="title">{product?.title}</h3>

                            <h3 className="price">${product?.price}

                                <span> {[...Array(Math.floor(product?.rating))].map((_item, index) => {



                                    return (<i key={index + "star"} className=" star fa-solid fa-star"></i>);

                                })}</span>

                            </h3>

                            <p className="desc">{product?.description}</p>

                            {(product ? cartItems.findIndex((item) => item.id === product.id) > -1 : false) ?

                                (<button onClick={() => navigate('/cart')} className="btn">Checkout Cart</button>) :

                                (<button onClick={() => Handle_Add_Cart_items(product)} className="btn">Add to Cart</button>)}

                        </>}

                    </section></div> :
                    <div className="no-data ">
                    <p className="not-avaiable paddingTopMobile-50 paddingTopDesktop-50">No Product Items are available</p>
                    <button className="btn-back btn-black" onClick={() => navigate("/")}>Back To Shopping</button>
                </div> }





        </div>

    </div>

    </>)

}



export default ProductInfo;