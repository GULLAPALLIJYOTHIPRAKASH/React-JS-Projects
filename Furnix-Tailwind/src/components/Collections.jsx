import chair from "../assets/collection-1.jpg"
import light from "../assets/collection-2.jpg"
import table from "../assets/collection-3.jpg"
import accessories from "../assets/collection-4.jpg"
function Collections(){

    return(<>
    
      {/* collections start */}
        <div className="collections-container  py-16">
            <div className="collections-center max-w-[1550px] mx-auto px-[20px] ">
                <div className="heading flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center mb-15">
                    <h1 className="text-black text-xl font-medium tracking-[2px] mb-5 font-[Poppins] md:mb-0">LOVE WHERE YOU LIVE</h1>
                    <button className="bg-[#ffaf4d]  text-white py-2 px-5 font-[Poppins] rounded-[50px] transition-all linear duration-300 cursor-pointer hover:opacity-70">VIEW ALL COLLECTION</button>
                </div>
                <section className="collections-section grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] items-center justify-center gap-5  mx-auto">
                    {/* Chair start */}
                    <article className="single-collection  group">
                        <div className="img-container aspect-[3/4] overflow-hidden rounded-[10px] relative">
                            <img src={chair} alt="Wooden Chair" className="w-[100%] h-[100%] object-center object-cover overflow-hidden transition-all linear duration-400 group-hover:scale-[1.090]" />
                            <div className="info absolute w-[100%] h-[100%] inset-0 bg-black/20 p-6  flex justify-between  items-end" >
                                <p className="text-white text-lg font-medium font-[Poppins] tracking-[1px] uppercase">seating</p>
                                <i className="fa-solid fa-arrow-right text-white p-2.5 text-[18px] font-bold bg-red-800 rounded-full cursor-pointer  transition-all linear duration-300 hover:bg-[#ffaf4d] hover:-rotate-45 "></i>
    
                            </div>
                        </div>
    
                    </article>
                    {/* Chair end */}
    
                    {/* light start */}
                    <article className="single-collection group">
                        <div className="img-container aspect-[3/4] overflow-hidden rounded-[10px] relative">
                            <img src={light} alt="wooden bed lamp" className="w-[100%] h-[100%] object-center object-cover overflow-hidden transition-all linear duration-400 group-hover:scale-[1.090]" />
                            <div className="info absolute w-[100%] h-[100%] inset-0 bg-black/20 p-6  flex justify-between  items-end" >
                                <p className="text-white text-lg font-medium font-[Poppins] tracking-[1px] uppercase">lighting</p>
                                <i className="fa-solid fa-arrow-right text-white p-2.5 text-[18px] font-bold bg-red-800 rounded-full cursor-pointer  transition-all linear duration-300 hover:bg-[#ffaf4d] hover:-rotate-45 "></i>
    
                            </div>
                        </div>
    
                    </article>
                    {/* light end */}
    
    
                      {/* table start */}
                    <article className="single-collection group">
                        <div className="img-container aspect-[3/4] overflow-hidden rounded-[10px] relative">
                            <img src={table} alt="wooden bed table" className="w-[100%] h-[100%] object-center object-cover overflow-hidden transition-all linear duration-400 group-hover:scale-[1.090]" />
                            <div className="info absolute w-[100%] h-[100%] inset-0 bg-black/20 p-6  flex justify-between  items-end" >
                                <p className="text-white text-lg font-medium font-[Poppins] tracking-[1px] uppercase">table</p>
                                <i className="fa-solid fa-arrow-right text-white p-2.5 text-[18px] font-bold bg-red-800 rounded-full cursor-pointer  transition-all linear duration-300 hover:bg-[#ffaf4d] hover:-rotate-45 "></i>
    
                            </div>
                        </div>
    
                    </article>
                    {/* table end */}
    
                     {/* accessories start */}
                    <article className="single-collection group">
                        <div className="img-container aspect-[3/4] overflow-hidden rounded-[10px] relative">
                            <img src={accessories} alt="accessories bed" className="w-[100%] h-[100%] object-center object-cover overflow-hidden transition-all linear duration-400 group-hover:scale-[1.090]" />
                            <div className="info absolute w-[100%] h-[100%] inset-0 bg-black/20 p-6  flex justify-between  items-end" >
                                <p className="text-white text-lg font-medium font-[Poppins] tracking-[1px] uppercase">accessories</p>
                                <i className="fa-solid fa-arrow-right text-white p-2.5 text-[18px] font-bold bg-red-800 rounded-full cursor-pointer  transition-all linear duration-300 hover:bg-[#ffaf4d] hover:-rotate-45 "></i>
    
                            </div>
                        </div>
    
                    </article>
                    {/* accessories end */}
                </section>
            </div>
        </div>
        {/* collections end */}
    </>)
}

export default Collections;