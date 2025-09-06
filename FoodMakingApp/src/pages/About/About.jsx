import { useEffect } from "react";
import assets from "../../assets/assets";
import About_Banner from "../../components/About_Banner";
import Home_Contact from "../../components/Home_Contact";

 
function About(){

     useEffect(() => {
     
            window.scrollTo(0,0)
     
        } ,[])
 
    return(<>
   <About_Banner url={assets.about_bg} title="About us" desc="Our recipes have been passed down from one generation to the next, proudly combining our roots, our heritage and our dreams. We love to feed you delicious baked goods." />
 
    <Home_Contact/>
    </>)
}
 
export default About;
 