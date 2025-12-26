import banner from "../assets/banner.jpg"

function Banner(){

    return(<>
    
    {/* Hero section */}
        <div className={`hero-section w-full `} style={{backgroundImage:`url(${banner})` ,backgroundSize:"cover", backgroundPosition:"center right" }}>
            <div className="hero-section-center max-w-[1550px]  mx-auto p-[20px] py-22 md:py-40 flex justify-start items-center">
                <div className="main ">
                    <div className="heading mb-8">
                        <h1 className="text-4xl font-bold">Summer Collection <br /> 2025</h1>
                    </div>
                    <p className="text-gray-700 text-xl  text-justify font-normal mb-8 md:w-[560px]">Discover our latest arrivals designed for comfort and style. Premium quality that lasts.</p>
    
                    <div className="w-full">
                        <span className="text-lg font-medium py-3 px-5  text-white mr-6 transition-all linear duration-300 cursor-pointer bg-[#4f46e5]  hover:opacity-80  rounded-lg ">Shop Now</span>
                        <button className="bg-white py-3 px-5 font-medium  text-gray-800 rounded-lg transition-all linear duration-300  cursor-pointer hover:opacity-80 ">Explore Collection</button>
    
                    </div>
                </div>
    
            </div>
        </div>
    </>)

}

export default Banner;