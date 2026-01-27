import hangelight  from "../assets/hanglight.png";
import accessories_2  from "../assets/accessories_2.png";
import modern_chair  from "../assets/modern_chair.png";
import sofa_chair  from "../assets/sofa_chair.png";
import side_table  from "../assets/side_table.png";
function New_Arrivals(){


    return(<>
    
     {/* New Arrivals start */}
        <div className="new-arrivals-container font-[Poppins]">
            <div className="new-arrivals-center max-w-[1550px] mx-auto px-[20px] py-16">
                <div className="heading mb-15">
                    <h1 className="text-[#a44837] text-xl  font-medium mb-4 md:text-2xl ">NEW ARRIVALS</h1>
                    <p className="text-gray-600 text-[15px] font-normal">Explore Our New Collection Inspired By The Seamless Blend Of Personal And</p>
                    <p className="text-gray-600 text-[15px] font-normal">Professional Spaces In Modern Life. Our Verstile And Stylish Furniture Adapts To</p>
                    <p className="text-gray-600 text-[15px] font-normal">Any Setting, Providing Both Elegance And Functionality For Your Home.</p>
                </div>
                <div className="new-arrivals-section grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-center items-center gap-10 mt-10">
    
                    {/* article start */}
                    <div className="single-article group">
                        <div className="img-container aspect-[3/4] object-center object-cover overflow-hidden relative rounded-[20px] bg-[#f6f4f2]">
                            <img src={hangelight} alt="Hanging light"  className="w-[100%] h-[100%] object-center object-cover overflow-hidden group-hover:scale-[1.002] transition-all linear duration-200"/>
                            <div className=" opacity-0  group-hover:opacity-100 transition-all linear duration-200 absolute  inset-0  text-center  flex items-end justify-center">
                                <button className="bg-[#ad2100] text-white px-4 py-2 mb-5 rounded-full">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="info mt-2 ">
                            <h3 className="  text-sm tracking-[2px] text-gray-600 font-medium">LIGHTING</h3>
                            <h1 className="  text-lg tracking-[2px] font-medium mt-1">AURA PENDENT LAMP</h1>
                            <h4 className="text-sm font-normal mt-1 text-[#a44837]">$30.00</h4>
                        </div>
                    </div>
                    {/* article end */}
    
                          {/* article start */}
                    <div className="single-article group">
                        <div className="img-container aspect-[3/4] object-center object-cover overflow-hidden relative rounded-[20px] bg-[#f6f4f2]">
                            <img src={accessories_2} alt="flower vase accessories"  className="w-[100%] h-[100%] object-center object-cover overflow-hidden group-hover:scale-[1.002] transition-all linear duration-200"/>
                            <div className=" opacity-0  group-hover:opacity-100 transition-all linear duration-200 absolute  inset-0  text-center  flex items-end justify-center">
                                <button className="bg-[#ad2100] text-white px-4 py-2 mb-5 rounded-full">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="info mt-2 ">
                            <h3 className="  text-sm tracking-[2px] text-gray-600 font-medium">ACCESSORIES</h3>
                            <h1 className="  text-lg tracking-[2px] font-medium mt-1">FLOWER VASE DECORP</h1>
                            <h4 className="text-sm font-normal mt-1 text-[#a44837]">$20.00</h4>
                        </div>
                    </div>
                    {/* article end */}
    
    
                          {/* article start */}
                    <div className="single-article group">
                        <div className="img-container aspect-[3/4] object-center object-cover overflow-hidden relative rounded-[20px] bg-[#f6f4f2]">
                            <img src={modern_chair} alt="modern chair"  className="w-[100%] h-[100%] object-center object-cover overflow-hidden group-hover:scale-[1.002] transition-all linear duration-200"/>
                            <div className=" opacity-0  group-hover:opacity-100 transition-all linear duration-200 absolute  inset-0  text-center  flex items-end justify-center">
                                <button className="bg-[#ad2100] text-white px-4 py-2 mb-5 rounded-full">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="info mt-2 ">
                            <h3 className="  text-sm tracking-[2px] text-gray-600 font-medium">SEATING</h3>
                            <h1 className="  text-lg tracking-[2px] font-medium mt-1">MODERN CHAIR</h1>
                            <h4 className="text-sm font-normal mt-1 text-[#a44837]">$100.00</h4>
                        </div>
                    </div>
                    {/* article end */}
    
    
                             {/* article start */}
                    <div className="single-article group">
                        <div className="img-container aspect-[3/4] object-center object-cover overflow-hidden relative rounded-[20px] bg-[#f6f4f2]">
                            <img src={sofa_chair} alt="sofa chair"  className="w-[100%] h-[100%] object-center object-cover overflow-hidden group-hover:scale-[1.002] transition-all linear duration-200"/>
                            <div className=" opacity-0  group-hover:opacity-100 transition-all linear duration-200 absolute  inset-0  text-center  flex items-end justify-center">
                                <button className="bg-[#ad2100] text-white px-4 py-2 mb-5 rounded-full">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="info mt-2 ">
                            <h3 className="  text-sm tracking-[2px] text-gray-600 font-medium">SOFA</h3>
                            <h1 className="  text-lg tracking-[2px] font-medium mt-1">EMBARCE LOUNGE CHAIR</h1>
                            <h4 className="text-sm font-normal mt-1 text-[#a44837]">$200.00</h4>
                        </div>
                    </div>
                    {/* article end */}
    
    
                    
                             {/* article start */}
                    <div className="single-article group">
                        <div className="img-container aspect-[3/4] object-center object-cover overflow-hidden relative rounded-[20px] bg-[#f6f4f2]">
                            <img src={side_table} alt="Wooden side table "  className="w-[100%] h-[100%] object-center object-cover overflow-hidden group-hover:scale-[1.002] transition-all linear duration-200"/>
                            <div className=" opacity-0  group-hover:opacity-100 transition-all linear duration-200 absolute  inset-0  text-center  flex items-end justify-center">
                                <button className="bg-[#ad2100] text-white px-4 py-2 mb-5 rounded-full">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="info mt-2 ">
                            <h3 className="  text-sm tracking-[2px] text-gray-600 font-medium">TABLE</h3>
                            <h1 className="  text-lg tracking-[2px] font-medium mt-1">SIDE TABLE</h1>
                            <h4 className="text-sm font-normal mt-1 text-[#a44837]">$300.00</h4>
                        </div>
                    </div>
                    {/* article end */}
    
                </div>


            <div className="text-center">
             <button className="bg-[#ffaf4d] px-4 py-2 text-base  font-normal text-white rounded-3xl  mt-5 cursor-pointer transition-all duration-300 linear hover:opacity-80">VIEW ALL</button>

            </div>
            </div>
        </div>
        {/* New Arrivals end */}
        </>)
}

export default New_Arrivals;