import white_shirt from "../assets/white-shirt.jpg"
import blue_jeans from "../assets/blue-jeans.jpg"
import leather_jacket from "../assets/leather-jacket.jpg";
import white_frog from "../assets/white-frog.jpg";

function FeaturedProducts(){

    return(<>
    
     {/* Featured Products */}
        <div className="featured-products-container py-16">
            <div className="featured-products-center max-w-[1550px] mx-auto px-[20px]  mx-auto">
                <div className="heading flex flex-col justify-center items-center gap-5 md:flex-row md:justify-between md:items-center mb-15">
                    <h3 className="text-3xl font-bold text-center ">Featured Products</h3>
                    <ul className="sub-menu-lists bg-gray-100 flex justify-between p-1 rounded-full w-[280px]">
                        <li className=" cursor-pointer bg-white py-1 px-3 text-sm font-medium text-gray-800 rounded-full transition-all linear duration-300 hover:bg-white">All</li>
                        <li className=" cursor-pointer  py-1 px-3 text-sm font-medium text-gray-500 rounded-full transition-all linear duration-300 hover:text-gray-800 hover:bg-white">New Arrivals</li>
                        <li className=" cursor-pointer  py-1 px-3 text-sm font-medium text-gray-500 rounded-full transition-all linear duration-300 hover:text-gray-800 hover:bg-white">Best Sellers</li>
                    </ul>
                </div>
    
                {/* featured sections */}
                <section className="featured-section grid md:grid-cols-2 lg:grid-cols-4 gap-5">
    
                    {/* Product-1 */}
                    <article className="single-product group">
                        <div className="img-container relative w-full  h-80 object-cover object-top overflow-hidden rounded-xl">
                            <img src={white_shirt} alt="Women's white shirt Blouse" className="w-[100%] h-[100%] object-cover object-top overflow-hidden" />
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
                                <h2 className="text-lg font-medium mb-1">Elegant White Blouse</h2>
                                <p className="text-xs mb-1"><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star-half-stroke text-yellow-500"></i> <span className="text-gray-500 text-sm">(42)</span> </p>
                                <p className="text-lg font-medium">$49.99</p>
                            </div>
                    </article>
    
                    {/* Product-2 */}
                      <article className="single-product group">
                        <div className="img-container relative w-full  h-80 object-cover object-top overflow-hidden rounded-xl">
                            <img src={blue_jeans} alt="Men's Blue jeans denim" className="w-[100%] h-[100%] object-cover object-top overflow-hidden" />
                            <p className="bg-yellow-500 text-xs font-normal text-white py-1 px-2 rounded-lg absolute top-4 left-4">Best Seller</p>
                            
                            {/* icons */}
                            <div className="icons-list w-[100%] h-[100%] bg-black/5 opacity-0 absolute inset-0 flex justify-center items-center transition-all linear duration-300 group-hover:opacity-100 ">
                                <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-eye  text-gray-500 "></i></button>
                                <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-heart  text-gray-500 "></i></button>
                                <button className="bg-[#4f46e5]  w-[40px] h-[40px] p-1 rounded-full cursor-pointer hover:opacity-90  "><i className="fa-solid fa-bag-shopping  text-white"></i></button>
                            </div>
                        </div>
                            {/* info */}
                            <div className="info mt-3">
                                <h2 className="text-lg font-medium mb-1">Premium Denim Jeans</h2>
                                <p className="text-xs mb-1"><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i> <span className="text-gray-500 text-sm">(128)</span> </p>
                                <p className="text-lg font-medium">$79.99</p>
                            </div>
                    </article>
    
                     {/* Product-3 */}
                    <article className="single-product group">
                        <div className="img-container relative w-full  h-80 object-cover object-top overflow-hidden rounded-xl">
                            <img src={leather_jacket} alt="Brown Leather Jacket" className="w-[100%] h-[100%] object-cover object-top overflow-hidden" />
                            {/* <p className="bg-[#4f46e5] text-xs font-normal text-white py-1 px-2 rounded-lg absolute top-4 left-4">New</p> */}
                            
                            {/* icons */}
                            <div className="icons-list w-[100%] h-[100%] bg-black/5 opacity-0 absolute inset-0 flex justify-center items-center transition-all linear duration-300 group-hover:opacity-100 ">
                                <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-eye  text-gray-500 "></i></button>
                                <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-heart  text-gray-500 "></i></button>
                                <button className="bg-[#4f46e5]  w-[40px] h-[40px] p-1 rounded-full cursor-pointer hover:opacity-90  "><i className="fa-solid fa-bag-shopping  text-white"></i></button>
                            </div>
                        </div>
                            {/* info */}
                            <div className="info mt-3">
                                <h2 className="text-lg font-medium mb-1">Classic Leather Jacket</h2>
                                <p className="text-xs mb-1"><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-regular fa-star text-yellow-500"></i> <span className="text-gray-500 text-sm">(76)</span> </p>
                                <p className="text-lg font-medium">$199.99</p>
                            </div>
                    </article>
    
    
                       {/* Product-3 */}
                    <article className="single-product group">
                        <div className="img-container relative w-full  h-80 object-cover object-top overflow-hidden rounded-xl">
                            <img src={white_frog} alt="Women's white Dress" className="w-[100%] h-[100%] object-cover object-top overflow-hidden" />
                            <p className="bg-pink-500 text-xs font-normal text-white py-1 px-2 rounded-lg absolute top-4 left-4">Sale</p>
                            
                            {/* icons */}
                            <div className="icons-list w-[100%] h-[100%] bg-black/5 opacity-0 absolute inset-0 flex justify-center items-center transition-all linear duration-300 group-hover:opacity-100 ">
                                <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-eye  text-gray-500 "></i></button>
                                <button className="bg-white w-[40px] h-[40px] p-1 rounded-full mr-5 cursor-pointer hover:opacity-90 "><i className="fa-regular fa-heart  text-gray-500 "></i></button>
                                <button className="bg-[#4f46e5]  w-[40px] h-[40px] p-1 rounded-full cursor-pointer hover:opacity-90  "><i className="fa-solid fa-bag-shopping  text-white"></i></button>
                            </div>
                        </div>
                            {/* info */}
                            <div className="info mt-3">
                                <h2 className="text-lg font-medium mb-1">Floral Summer Dress</h2>
                                <p className="text-xs mb-1"><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star-half-stroke text-yellow-500"></i> <span className="text-gray-500 text-sm">(54)</span> </p>
                                <p className="text-lg font-medium">$59.99 <span className="line-through text-gray-400 text-sm">$79.99</span></p>
                            </div>
                    </article>
    
    
            
                </section>

                {/* button */}
                <button className="bg-white border-1 border-gray-300 py-3 px-10 mt-10 text-base font-medium text-gray-600 cursor-pointer rounded-lg transition-all linear duration-300  hover:bg-gray-50 block mx-auto text-center">View All Products</button>
            </div>
        </div>
    </>)
}

export default FeaturedProducts;