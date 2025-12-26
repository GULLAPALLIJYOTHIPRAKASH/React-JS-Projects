import summer_sale_bg from "../assets/summer-sale-bg.jpg"

function Summer_sale(){

    return(<>
    
     {/* Summer Sale section */}
        <div className="summer-sale-container bg-[#111827] w-full">
            <div className="summer-sale-center max-w-[1550px]  mx-auto py-16 px-[20px]  md:flex md:justify-center md:items-center">
                <div className="sub-section md:w-1/2 ">
                    <h2 className="text-white  text-3xl font-bold md:text-4xl mb-4">Summer Sale</h2>
                    <p className="text-gray-300 text-[20px] font-normal mb-6">Up to 50% off on selected items. Limited time offer.</p>
                   
                   {/* counter */}
                    <div className="countdown text-white flex gap-3 md:gap-5  mb-8">
                        <div className="bg-white/10 p-3 md:p-4 rounded-lg">
                            <h1 className="text-3xl font-bold ">00</h1>
                            <h3 className="text-gray-300 font-normal">Days</h3>
                        </div>
                        <div className="bg-white/10 p-3 md:p-4 rounded-lg">
                            <h1 className="text-3xl font-bold ">12</h1>
                            <h3 className="text-gray-300 font-normal">Hours</h3>
                        </div>
                         <div className="bg-white/10 p-3 md:p-4 rounded-lg">
                            <h1 className="text-3xl font-bold ">45</h1>
                            <h3 className="text-gray-300 font-normal">Minutes</h3>
                        </div>
                         <div className="bg-white/10 p-3 md:p-4 rounded-lg">
                            <h1 className="text-3xl font-bold ">30</h1>
                            <h3 className="text-gray-300 font-normal">Seconds</h3>
                        </div>
                    </div>
    
                    <button className="bg-white  text-lg text-gray-900 font-medium px-8 py-3  cursor-pointer transition-all linear duration-200 hover:opacity-95  ">Shop the Sale</button>
                </div>
                {/* Banner */}
                <div className="img-container mt-10  md:mt-0 md:w-1/2 rounded-xl object-center object-cover overflow-hidden">
                    <img src={summer_sale_bg} alt="summer-sale-banner" className="w-[100%] h-[100%] object-center object-cover overflow-hidden " />
                </div>
            </div>
        </div>
    
    </>)
}

export default Summer_sale;