import scarf from "../assets/scarf.jpg";
import leather_handbag from "../assets/leather-handbag.jpg";
import sunglasses from "../assets/sunglasses.jpg";
function NewArrivals(){

    return(<>
     <div className="new-arrivals-container py-16">
                <div className="new-arrivals-center max-w-[1550px] mx-auto px-[20px]  mx-auto">
                    <div className="heading mb-15">
                        <h3 className="text-3xl font-bold text-center ">New Arrivals</h3>
                    </div>
        
                    {/* new arrivals sections */}
                    <section className="arrivals-section grid md:grid-cols-3 lg:grid-cols-3 gap-5">
        
                        {/* Product-1 */}
                        <article className="single-product group">
                            <div className="img-container relative w-full  h-90 object-cover object-top overflow-hidden rounded-xl">
                                <img src={scarf} alt="Women's Silk Scarf" className="w-[100%] h-[100%] object-cover object-top overflow-hidden" />
                                <p className="bg-[#4f46e5] text-xs font-normal text-white py-1 px-2 rounded-lg absolute top-4 left-4">New</p>
                                
                                {/* icons */}
                                <div className="icons-list w-[100%] h-[100%] bg-black/5 opacity-0 absolute inset-0 flex justify-center items-center transition-all linear duration-300 group-hover:opacity-100 ">
                                    <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-eye  text-gray-500 "></i></button>
                                    <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-heart  text-gray-500 "></i></button>
                                    <button className="bg-[#4f46e5]  w-[40px] h-[40px] p-1 rounded-full cursor-pointer hover:opacity-90  "><i className="fa-solid fa-bag-shopping  text-white"></i></button>
                                </div>
                            </div>
                                {/* info */}
                                <div className="info mt-3">
                                    <h2 className="text-lg font-medium mb-1">Luxury Silk Scarf</h2>
                                    <p className="text-xs mb-1"><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star-half-stroke text-yellow-500"></i> <span className="text-gray-500 text-sm">(2)</span> </p>
                                    <p className="text-lg font-medium">$39.99</p>
                                </div>
                        </article>
        
                        {/* Product-2 */}
                          <article className="single-product group">
                            <div className="img-container relative w-full  h-90 object-cover object-top overflow-hidden rounded-xl">
                                <img src={leather_handbag} alt="Brown Leather handbag" className="w-[100%] h-[100%] object-cover object-top overflow-hidden" />
                                {/* <p className="bg-yellow-500 text-xs font-normal text-white py-1 px-2 rounded-lg absolute top-4 left-4">Best Seller</p> */}
                                
                                {/* icons */}
                                <div className="icons-list w-[100%] h-[100%] bg-black/5 opacity-0 absolute inset-0 flex justify-center items-center transition-all linear duration-300 group-hover:opacity-100 ">
                                    <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-eye  text-gray-500 "></i></button>
                                    <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-heart  text-gray-500 "></i></button>
                                    <button className="bg-[#4f46e5]  w-[40px] h-[40px] p-1 rounded-full cursor-pointer hover:opacity-90  "><i className="fa-solid fa-bag-shopping  text-white"></i></button>
                                </div>
                            </div>
                                {/* info */}
                                <div className="info mt-3">
                                    <h2 className="text-lg font-medium mb-1">Designer Leather Handbag </h2>
                                    <p className="text-xs mb-1"><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i> <span className="text-gray-500 text-sm">(6)</span> </p>
                                    <p className="text-lg font-medium">$149.99</p>
                                </div>
                        </article>
        
                         {/* Product-3 */}
                        <article className="single-product group">
                            <div className="img-container relative w-full  h-90 object-cover object-top overflow-hidden rounded-xl">
                                <img src={sunglasses} alt="Brown Sunglasses" className="w-[100%] h-[100%] object-cover object-top overflow-hidden" />
                                <p className="bg-[#4f46e5] text-xs font-normal text-white py-1 px-2 rounded-lg absolute top-4 left-4">New</p>
                                
                                {/* icons */}
                                <div className="icons-list w-[100%] h-[100%] bg-black/5 opacity-0 absolute inset-0 flex justify-center items-center transition-all linear duration-300 group-hover:opacity-100 ">
                                    <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-eye  text-gray-500 "></i></button>
                                    <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-heart  text-gray-500 "></i></button>
                                    <button className="bg-[#4f46e5]  w-[40px] h-[40px] p-1 rounded-full cursor-pointer hover:opacity-90  "><i className="fa-solid fa-bag-shopping  text-white"></i></button>
                                </div>
                            </div>
                                {/* info */}
                                <div className="info mt-3">
                                    <h2 className="text-lg font-medium mb-1">Premium Sunglasses</h2>
                                    <p className="text-xs mb-1"><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-regular fa-star text-yellow-500"></i> <span className="text-gray-500 text-sm">(4)</span> </p>
                                    <p className="text-lg font-medium">$89.99</p>
                                </div>
                        </article>
        
        
                    
        
        
                
                    </section>
    
                    {/* button */}
                    <button className="bg-white border-1 border-gray-300 py-3 px-10 mt-10 text-base font-medium text-gray-600 cursor-pointer rounded-lg transition-all linear duration-300  hover:bg-gray-50 block mx-auto text-center">View All Products</button>
                </div>
            </div>
    
    </>)
}

export default NewArrivals;