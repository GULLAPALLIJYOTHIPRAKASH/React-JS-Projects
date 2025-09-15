import {useCallback, useEffect, useState} from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import InputSearch from "../../components/InputSearch/InputSearch.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Add_To_Cart } from "../../Redux/Slices/CartSlice.js";
import Sidebar from "../../components/SiderBar/Sidebar.jsx";
import useProductsList from "../../Context/useProductsList.jsx";
import { use } from "react";
 
function Home(){

    const [searchItem , setSearchItem] = useState("")
    const [category , setCategory] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const[productsList , isloading , isError ,pageNo , setPageNo] = useProductsList()
    const {cartItems} = useSelector((state) => state.cart);



    const handleSearch =useCallback( (e) => {

        setSearchItem(e.target.value);

    },[searchItem]);

    const HandlePageNo =useCallback( (e) => {

        setPageNo(Number(e.target.value));
        setCategory("");

    },[pageNo])

     const handleCategory = useCallback((e) => {

        

        setCategory(e.target.value);

    },[category])









   





    const Handle_Add_Cart_items = (product) => {

       



        dispatch(Add_To_Cart(product));



        navigate('/cart');

    }





    if(isloading){


       
        

        return(

            <div className="loading-img-container">

            </div>

        )

    }



    if(isError){



        return ( <div className="error-img-container">

            </div>)

    }

    





    let SearchFilterItems = productsList?.filter((item) => {



        // return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;



        return item.title.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1;

       

    })





   

 function filterProductData(all_product , query , selected){



    let productData = all_product;



    if(query){



        productData = SearchFilterItems;

    }



    if(selected){





        productData = productData.filter((item) => {



            return item.category == selected

        })

    }



    return productData;





 }



 let result = filterProductData(productsList ,searchItem , category)




    return(<>

    <div className="flex-container">

            <Sidebar handleCategory={handleCategory} />

        <div className="sub-container">

            <InputSearch searchItem={searchItem} handleSearch={handleSearch} />

            <div className="pagination-container paddingTopMobile-20 paddingTopDesktop-20">
                <div className="page-show">
                    <span>PageNo:</span>
                    <select name="pagecount" value={pageNo} onChange={HandlePageNo} >
                       {[...Array(20)].map((_, indx) => {

                            let pg = indx + 1;
                                    
                            const pageNumber = (indx)* 10 ;
                            const displayText = pg <=9 ? `0${pg}` : `${pg}`;

                            return (
                            <option value={pageNumber + 10} key={`pageno-${pg}`}>
                                {displayText}
                            </option>
                            );
                       })} 
                    </select>
                </div>
            </div>

            <div className="home-container">

                <div className="home-center">

                            <section className="products-section  grid-template-cols paddingTopMobile-20 paddingTopDesktop-20 paddingBottomMobile-30 paddingBottomDesktop-30">

               { result?.length > 0 ?





 result?.map((product) => {



        const {id,title , price ,thumbnail } = product;



        return(

            <article key={id + title} className="single-product">

    <div className="img-container">

        <img src={thumbnail} alt={title} />

    </div>

    <div className="product-info">

        <h3 className="title">{title}</h3>

        <h3 className="price">${price} </h3>

        <Link to={`/product-item/${id}`} style={{color: "white"}}><button style={{width: "100%"}} className="btn view">view Details</button></Link>

        {/* <button className="btn cart">Add to Cart</button> */}

        {

                            (product ? cartItems.findIndex( (item) => item?.id === product?.id) > -1 : false) ?

                            (<button onClick={() => navigate('/cart')} className="btn cart">Checkout Cart</button>) :

                        (<button onClick={ () => Handle_Add_Cart_items(product)} className="btn cart">Add to Cart</button>)

                        }



    </div>

</article>

        )

    })





: <p style={{ textAlign:"center" , fontSize: "25px" ,color:"black", marginTop: "20px"}}>Not Items Found....!</p>









               }





            </section>

        </div>

    </div>

        </div>

       

    </div>

   

    </>)

}



export default Home;