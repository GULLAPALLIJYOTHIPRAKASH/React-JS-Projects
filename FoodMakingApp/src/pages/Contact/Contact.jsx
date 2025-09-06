import { useEffect } from "react";
import assets from "../../assets/assets";
import About_Banner from "../../components/About_Banner";
import Home_Offering from "../../components/Home_Offering";

 
function Contact(){

     useEffect(() => {
     
            window.scrollTo(0,0)
     
        } ,[])
 
    return(<>
    <About_Banner url={assets.contact_bg} title="Contact us" desc="Over past decade , We provide Support to customers with 100% success rate and We available all over the world with top notch customer support team , if you need help please get in touch with us."  />
    <Home_Offering/>
    </>)
}
 
export default Contact;
 