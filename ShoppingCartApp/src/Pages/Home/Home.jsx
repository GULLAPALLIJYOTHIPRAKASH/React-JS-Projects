import {useEffect} from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import InputSearch from "../../components/InputSearch/InputSearch.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts , Add_To_Cart } from "../../Redux/Slices/CartSlice.js";
import Sidebar from "../../components/SiderBar/Sidebar.jsx";
 
function Home({ category , handleCategory , searchItem , handleSearch}){
 
 

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {productsList , loading, isError  , cartItems} = useSelector((state) => state.cart);


    useEffect(() => {

        dispatch(fetchProducts())


    },[dispatch])
 
 
    const Handle_Add_Cart_items = (product) => {
        

        dispatch(Add_To_Cart(product));

        navigate('/cart');
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
 
 
    let SearchFilterItems = productsList?.filter((item) => {
 
        // return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
 
        return item.title.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1;
       
    })
 
 
   
 
    if(!searchItem) {
 
 
        SearchFilterItems = productsList;
 
       
 
    }
 
   
 
  
    console.log(category);
    
 
 
    return(<>
    <div className="flex-container">
            <Sidebar handleCategory={handleCategory} />
        <div className="sub-container">
            <InputSearch searchItem={searchItem} handleSearch={handleSearch} />
            <div className="home-container">
                <div className="home-center">
                            <section className="products-section  grid-template-cols paddingTopMobile-50 paddingTopDesktop-50 paddingBottomMobile-30 paddingBottomDesktop-30">
               { SearchFilterItems?.length > 0 ?
 
 
    SearchFilterItems?.map((product) => {
 
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
                            (product ? cartItems.findIndex( (item) => item.id === product.id) > -1 : false) ?
                            (<button onClick={() => navigate('/cart')} className="btn cart">Checkout Cart</button>) :
                        (<button onClick={ () => Handle_Add_Cart_items(product)} className="btn cart">Add to Cart</button>)
                        }
 
    </div>
</article>
        )
    })
 
 
: <p style={{textAlign:"center" , fontSize: "20px" ,color:"red", marginTop: "20px"}}>Not Items Found....!</p>
 
 
 
 
               }
 
 
            </section>
        </div>
    </div>
        </div>
        
    </div>
    
    </>)
}
 
export default Home;