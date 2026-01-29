import footer_bg from "../assets/footer-bg.jpg";

function Footer(){

    return(<>
    
     {/* footer start */}
        <div className="footer-container font-[Poppins] w-full min-h-[350px] bg-no-repeat bg-cover bg-center relative z-2" style={{backgroundImage: `url(${footer_bg})`}}>
    
            <div className="absolute w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md bg-gray-400/40 -z-2 "></div>
            <div className="footer-center max-w-[1550px] mx-auto px-[20px] py-10 ">
                <div className="flex flex-row flex-wrap  justify-between gap-y-5">
                <div className="side-1 ">
                    <h1 className="text-xl  text-white font-bold"><span className="text-[#ffaf4d] text-3xl">F</span>URNIX.</h1>
                    <p className="text-xl text-white font-normal my-4">SIGN UP TO RECEIVE 10% OFF <br /> YOUR FIRST ORDER</p>
    
                    <div className="flex justify-center items-center w-[270px] backdrop-blur-md bg-gray-100/30 p-2 rounded-full">
                        <input type="email" name="email" placeholder="Enter your email"  className="w-[100%] outline-0 border-0 text-white p-2 laceholder:text-white "/>
                        <i className="fa-solid  fa-arrow-right text-white p-2 text-[18px] font-bold  rounded-full cursor-pointer  bg-[#ffaf4d]"></i>
                    </div>
    
                    <br />
                    <br />
                    <span className="text-white ">
                        <i className="text-lg mr-3 fa-brands fa-facebook-f"></i>
                        <i className="text-lg mr-3 fa-brands fa-x-twitter"></i>
                        <i className="text-lg mr-3 fa-brands fa-instagram"></i>
                        <i className="text-lg  fa-brands fa-pinterest-p"></i>
                    </span>
                </div>
                <div className="side-2 text-white ">
                    <h1 className="uppercase  font-medium mb-4">Collections</h1>
                    <ul className="font-light">
                        <li className="mb-1">Seating</li>
                        <li className="mb-1">Sofas</li>
                        <li className="mb-1">lighting</li>
                        <li className="">Accessories</li>
                    </ul>
                </div>
    
                <div className="side-3 text-white">
                    <h1 className="uppercase  font-medium mb-4">Information</h1>
                    <ul className="font-light">
                        <li className="mb-1">Our Story</li>
                        <li className="mb-1">Our Journak</li>
                        <li className="mb-1">FAQ's</li>
                        <li className="mb-1">Contact Us</li>
                    </ul>
                                        <br />
                    <p className="underline decoration-white">+92 123 456 789</p>
                    <p className="underline decoration-white">FURNIXHOMES@INFO.COM</p>

                </div>
                </div>
                <p className=" text-white text-center text-xs md:text-lg mt-10"> &copy; 2026 COPYRIGHT POWERED BY <a href="https://www.linkedin.com/in/gullapalli-jyothiprakash/" target="_blank">GULLAPALLI JYOTHI PRAKASH</a></p>
    
            </div>
        </div>
        {/* footer end */}
    </>)
}

export default Footer;