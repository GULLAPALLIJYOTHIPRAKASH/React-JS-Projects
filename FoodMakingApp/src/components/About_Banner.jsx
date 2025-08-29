function About_Banner({title , url , desc}){
 
 
 
    return(<>
     <div  style={{backgroundImage: `url(${url})`}} className="about-banner-container w-[100%] min-h-[350px]  bg-no-repeat bg-cover bg-center relative flex flex-col justify-center items-center before:absolute before:w-[100%] before:h-[100%] before:bg-black before:opacity-30 before:-z-3 z-3 ">
        <div className="about-banner-center wrapper">
            <div className="heading flex flex-col justify-center items-center">
                <h3 className="text-5xl text-[#344742] font-bold mb-[15px]">{title}</h3>
                <p className="w-[80%] text-md sm:text-2xl text-white text-justify leading-[30px]">{desc}</p>
            </div>
        </div>
    </div>
    </>)
}
 
export default About_Banner;
 