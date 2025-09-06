import "./ProductInfo.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../Context/useCart";




function ProductInfo(){

   

    const fetch_api = async (id) => {



        setLoading(true)

        setIsError({status: false , msg: ""})

       

        try {

           

            const req = await fetch(`https://dummyjson.com/products/${id}`);

            const res = await req.json();







            setLoading(false)

            setIsError({status: false , msg: ""});



            setProduct(res)



            if(req.status == 404){



                throw new Error("Data Not Found...!")

            }

           

           

        } catch (error) {



            setLoading(false)

            setIsError({status: true , msg: error.message || "SomeThing went wrong....!"});

           



        }

    }





    const {productid} = useParams();

    const navigate = useNavigate();



    const { loading , isError , setLoading , setIsError , product , setProduct , Handle_Add_Cart_items , cartItems} = useCart();    

   



    const [slide , setSlide] = useState(0);



    const handleBack= () => {



        navigate('/');

    }









     useEffect(() => {

   

        fetch_api(productid);



        } ,[productid])



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

            <div className="product-gallery">

                <div className="img-container">

                    <img src={slide > 0 ? product.images[slide] : product?.thumbnail } alt="" />

                </div>

                <div className="slide">

                    {

                   

                        product?.images?.map((item, index) => {



                            // console.log(item);

                           



                            return(



                                <img onClick={() => setSlide(index)} key={item} src={item} alt={index +"phote"} />

                            )

                        })

                    }

                </div>

                <div onClick={handleBack} className="back-btn">

                <i className="fa-solid fa-arrow-left back"></i>

                </div>

            </div>

            <section className="single-product-info">

               { product && <>

                        <h3 className="title">{product?.title}</h3>

                        <h3 className="price">${product?.price}

                                <span>{[...Array(Math.ceil(product?.rating))].map((item, index) => {



                                        return (<i key={index + "star"} className=" star fa-solid fa-star"></i>);

                                })}</span>

                        </h3>

                        <p className="desc">{product?.description}</p>

                        {

                            (product ? cartItems.findIndex( (item) => item.id === product.id) > -1 : false) ?

                            (<button onClick={() => navigate('/cart')} className="btn">Checkout Cart</button>) :

                        (<button onClick={ () => Handle_Add_Cart_items(product)} className="btn">Add to Cart</button>)

                        }

                </> }

            </section>





        </div>

    </div>

    </>)

}



export default ProductInfo;