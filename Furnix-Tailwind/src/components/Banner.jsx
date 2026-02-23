import sofa from "../assets/sofa.png"

function Banner(){

    return(<>
    {/* Banner start */}
        <div className="banner-container bg-white flex  justify-center items-center" id="home">
            <div className="banner-center max-w-[1550px] mx-auto px-[20px] relative  z-6">
                <div className="heading mt-20">
                    <h1 className="font-[Jost] font-medium text-5xl  sm:ml-[20%] md:ml-[20%] tracking-1 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ">INOVA<span className="font-light">TION</span></h1>
                    <h3 className="font-[Jost] font-light text-2xl sm:ml-[20%]   md:ml-[20%] text-black mt-4 md:text-3xl">Design Your Space</h3>
                    <button className="bg-[#ffaf4d] text-white text-xs md:text-sm  py-2 px-5 rounded-full uppercase font-medium mt-4 ml-[70%] sm:ml-[55%] md:ml-[58%] lg:ml-[60%] xl:ml-[58%] cursor-pointer hover:opacity-80 ">Buy Now</button>
                </div>
                <div className="img-container md:w-1/2 overflow-hidden object-center object-cover mt-4   md:ml-[15%]">
                    <img src={sofa} alt="sofa Banner"  className="w-[100%] h-[100%] overflow-hidden object-center object-cover"/>
                </div>
                <div className="cirlce bg-[#f6f4f2] absolute top-0 left-0 md:w-[270px] md:h-[270px]  md:top-[60px] md:left-[50px]  lg:w-[300px] lg:h-[300px] lg:top-[60px] lg:left-[70px] xl:w-[350px] xl:h-[350px] xl:top-[50px] xl:left-[80px] 2xl:left-[180px]  rounded-full -z-6"></div>
            </div>
        </div>
        {/* Banner end */}
        </>)
}

export default Banner;