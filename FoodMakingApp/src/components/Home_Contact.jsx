import { Link } from "react-router-dom";
 
 
function Home_Contact(){
 
    return(<>
    <div className="contact-home-container mt-[30px] py-[20px] ">
            <div className="contact-home-center wrapper flex flex-col  items-start gap-y-[15px] sm:flex-row  sm:items-center sm:gap-x-[20px] sm:gap-y-0 ">
                <div className="contact-contact">
                    <h2 className="text-3xl text-[#344742] font-bold mb-[15px]">Get in Touch with Us</h2>
                    <p className="text-gray-500 text-[15px] leading-[25px] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis in nesciunt nam aliquam aliquid repellat labore eveniet recusandae facere? </p>
                </div>
                <button className=" flex-none text-[16px] text-white bg-[#cfb02c] text-xl p-[10px]   text-center hover:opacity-70 rounded-[4px] cursor-pointer"><Link to="/contact">Contact us</Link></button>
            </div>
        </div>
 
   
    </>)
}
 
export default Home_Contact;
 
