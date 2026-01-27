import bed from "../assets/bed.png";

function BedMaterial(){

    return(<>
       {/* Bed Material start */}
        <div className="bed-material-container">
            <div className="bed-material-center max-w-[1550px] mx-auto px-[20px] py-16 ">
    
                <div className="bed-info uppercase font-[Poppins] text-3xl text-center mb-10">
                <p className=""><span className="text-[#c79c62] ">Our</span> <span className="text-[#c0854a] font-bold">bed</span> <span className="text-[#bc936f]">collection blends </span></p>
                <p className="text-[#bc936f]"> modern scandinavian design with</p> 
                <p className="text-[#bc936f]">Sculptural forms, enhancing any</p>
                <p className="text-[#bc936f]"> space with <span className="text-[#a15e2c] font-bold">comfort</span> and <span className="text-[#64311e] font-bold">style.</span></p>
                </div>
                
                <div className="img-containers  mx-auto overflow-hidden relative ">
                    <img src={bed} alt="luxury Premium King Bed" className="w-[100%] h-[100%] object-center object-cover" />
                    <div className="bed-info hidden md:block w-[270px] h-auto absolute top-[15%] right-[5%]   backdrop-blur-md bg-gray-400/10  border-white/40 shadow-lg rounded-xl p-4">
                        <h3 className="uppercase text-black font-medium">bed material</h3>
                        <p className=" capitalize text-black text-sm leading-4 mt-1">Cotton, Slik And Bamboo are Hypoallergenic and Breathable, making them good choices for people with sensitive skin.</p>
                        <div className="flex  justify-between items-center mt-2">
                            <p className="font-normal"><span className="text-black line-through">$2000</span> <span className="text-[#ae1f00]">$1500</span></p>
                            <p><i className=" text-white bg-[#ae1f00] p-2 text-sm rounded-full fa-solid fa-bag-shopping"></i></p>
                        </div>
                    </div>
                </div>
                
    
            </div>
        </div>
        {/* Bed Material end */}
       
    </>)
}

export default BedMaterial;