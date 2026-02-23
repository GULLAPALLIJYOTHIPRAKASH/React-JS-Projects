import bedroom from "../assets/bedroom.jpg";
import living_room from "../assets/living-room.jpg";

function About_US(){

    return (<>
     {/* About us Section */}
        <div className="about-us-container font-[Jost]" id="About">
            <div className="about-us-center max-w-[1550px] mx-auto px-[20px] py-16 flex flex-col items-center sm:flex-row  sm:justify-center sm:items-start sm:gap-x-5">
                <div className="about-info  mb-[20px]  sm:mb-0 sm:order-2 ">
                    <h3 className="text-[#ad2100] text-lg md:text-xl mb-2 mb:mb-4 ">About us</h3>
                    <p className="text-2xl md:text-3xl font-medium"><span className="font-semibold">FURNIX HOMES</span> LEADS</p>
                    <p className="text-2xl md:text-3xl  font-medium">IN <span className="font-semibold">MODERN DESIGN,</span></p>
                    <p className="text-2xl md:text-3xl  font-medium">BLENDING TIMELESS</p>
                    <p className="text-2xl md:text-3xl  font-medium">AESTHETICS,</p>
                    <p className="text-2xl md:text-3xl  font-medium">FUNCTIONALITY AND</p>
                    <p className="text-2xl md:text-3xl font-semibold">METICULOUS</p>
                    <p className="text-2xl md:text-3xl   font-medium">CRAFTMANSHIP</p>
                    <button className="uppercase mt-4 md:mt-10 bg-[#ffaf4d] px-4 py-2 text-white rounded-full">More About us</button>
                </div>
                <div className="img-section w-[300px] h-[300px] md:w-[350px] md:h-[400px] relative sm:order-1 ">
                    <img src={living_room} alt="living room interior" className="w-[100%] h-[100%] overflow-hidden  rounded-[20px]  object-cover object-center " />
                    <img src={bedroom} alt="bedroom interior" className="absolute top-[20%] -left-[10%] w-[180px] h-[180px] md:top-[20%] md:-left-[10%]  md:w-[200px] md:h-[200px] lg:-left-[30%] lg:w-[250px] lg:h-[250px] -rotate-10 overflow-hidden rounded-[20px]  object-cover object-center" />
                </div>
            </div>
        </div>   
        {/* About us end */}
    </>)
}

export default About_US;