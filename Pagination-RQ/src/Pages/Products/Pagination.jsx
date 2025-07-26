import { useEffect, useState } from 'react';
import './Pagination.css'
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import {Link} from "react-router-dom"
import ProductCard from '../../components/ProductCard';

function Pagination(){



    const [pageCount , setPageCount] = useState(() => {



        let currentValue ;



        try {

           

            currentValue = JSON.parse(localStorage.getItem("pagecount")) || 10;

        } catch (error) {



            currentValue = 10

           

        }



        return currentValue;

    });


   
   



    const fetch_api = async (pageCount) => {



        const prev = pageCount - 10

        const request = await fetch(`https://dummyjson.com/products/?limit=${10}&skip=${prev}`)

        const response = await request.json();



        return response.products;





    }



    const {data , isLoading , isError , error , isFetching  } = useQuery({



        queryKey: ['products' , `${pageCount}`],

        queryFn: () => fetch_api(pageCount),

        staleTime: 1000 * 60 * 5,

       

    })

   
 useEffect(() => {



        localStorage.setItem('pagecount' , JSON.stringify(pageCount))

    } , [pageCount])

   







    return(<>

    <div className="container">

        <div className="center wrapper">

            <div className="heading">

               

               <h3 className="title">Pagination RQ</h3>

                <div className="underline"></div>

            </div>
            {(isLoading) && <div className="loader"></div> }
            {(isError) && <div className="text-center" style={{color: "red" , fontSize: "20px" , margin: "50px"}}>{error.message}</div> }
            <section className="product-list-container template-column paddingTopMobile-50 paddingTopDesktop-50 paddingBottomMobile-30 paddingBottomDesktop-30">

               
                {

                    data?.map((item) => {



                        const {id, thumbnail , title } = item;



                        return(

                          <ProductCard key={title+id} id={id} thumbnail={thumbnail} title={title}/>

                        )



                    })

                }



               

            </section>

            { !isFetching &&<div className='paddingBottomMobile-20 paddingBottomDesktop-20'>

                 <div className="page-items-count">

                <div onClick={() => setPageCount(10)}className={pageCount==10 ? "page-count active" :"page-count"}>1</div>

                <div onClick={() => setPageCount(20)}className={pageCount==20 ? "page-count active" :"page-count"}>2</div>

                <div onClick={() => setPageCount(30)}className={pageCount==30 ? "page-count active" :"page-count"}>3</div>

                <div onClick={() => setPageCount(40)}className={pageCount==40 ? "page-count active" :"page-count"}>4</div>

                <div onClick={() => setPageCount(50)}className={pageCount==50 ? "page-count active" :"page-count"}>5</div>

                <div onClick={() => setPageCount(60)}className={pageCount==60 ? "page-count active" :"page-count"}>6</div>

                <div onClick={() => setPageCount(70)}className={pageCount==70 ? "page-count active" :"page-count"}>7</div>

                <div onClick={() => setPageCount(80)}className={pageCount==80 ? "page-count active" :"page-count"}>8</div>

                <div onClick={() => setPageCount(90)}className={pageCount==90 ? "page-count active" :"page-count"}>9</div>

                <div onClick={() => setPageCount(100)}className={pageCount==100 ? "page-count active" :"page-count"}>10</div>

            </div>

               </div>
            }

        </div>

    </div>

    </>)

}



export default Pagination;