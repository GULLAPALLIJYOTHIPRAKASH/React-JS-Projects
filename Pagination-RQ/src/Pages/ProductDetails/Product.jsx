import "./Product.css";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductInfo from "../../components/ProductInfo";
function Product(){

    const navigate = useNavigate();

    const {productid}  = useParams();



    const fetch_api = async (productid) => {



        const req = await fetch(`https://dummyjson.com/products/${productid}`);

        const res = await req.json()

        return res;

       

    }

    const {data , isLoading , isError , error} = useQuery({

        queryKey : ['product' , `${productid}`],

        queryFn : () => fetch_api(productid),
        staleTime: 1000 * 60 * 5,
       

    })

    const handleNavigate = () => {



        navigate('/' , {replace: true})

    }

   

   

    return (<>

    <div className="productinfo-container">

        <div className="productinfo-center wrapper">

        { (isLoading && !isError) && <div className="loader"></div> }
        <div className="heading"><button onClick={handleNavigate}><i className="fa-solid fa-arrow-left"></i> Back</button></div>
        {(isError && !isLoading) && <div className="text-center" style={{color: "red" , fontSize: "20px" , margin: "50px"}}>{error.message}</div> }

            {!isLoading && !isError&&  data && <section className="productinfo-section">

                <ProductInfo data={data} />

            </section> 
            }


        </div>

    </div>

    </>)

}



export default Product;