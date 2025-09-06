import { Link } from "react-router-dom";
import Home_Offering from "../../components/Home_Offering";
import Recipe_Card from "../../components/Recipe_Card";
import Home_Contact from "../../components/Home_Contact";
import assets from "../../assets/assets";
import { recipes } from "../../assets/assets";
import { useEffect } from "react";
 
function Home(){

     useEffect(() => {
     
            window.scrollTo(0,0)
     
        } ,[])
 
 
    return(<>
    <div className="home-container mt-[30px] py-[20px] ">
        <div className="home-center wrapper  flex  flex-col justify-center items-center sm:flex-row sm:justify-around sm:items-center sm:gap-x-[20px] md:gap-x-0 ">
            <div className="home-content ">
                <h1 className="text-4xl text-[#344742] font-bold tracking-[1px] mb-[20px] md:text-5xl">Tasty Food</h1>
                <h3 className="w-[300px] text-3xl font-normal  text-black  mb-[20px] tracking-[1px] leading-[45px] md:text-4xl">Try the best food of the week.</h3>
                <button className="w-[150px] bg-[#cfb02c] p-[7px] text-white tracking-[1px] text-center cursor-pointer hover:opacity-70 rounded-[4px]"><Link to="/recipes">View Menu</Link></button>
            </div>
            <div className="img-container w-[350px] h-[350px] overflow-hidden  mt-[20px] rounded-[50%]">
                <img src={assets.home} alt="" className="w-[100%] h-[100%]  overflow-hidden object-contain object-center" />
            </div>
        </div>
    </div>
 
    <div className="about-home-container mt-[30px] py-[20px]  ">
        <div className="about-home-center wrapper flex  flex-col justify-center items-center sm:flex sm:flex-row sm:justify-around sm:items-center sm:gap-x-[20px]">
            <div className="img-container w-[350px] h-[350px] overflow-hidden  rounded-[10px]">
                <img src={assets.about} alt=""  className="w-[100%] h-[100%] overflow-hidden object-contain object-center"/>
            </div>
            <div className="about-content mt-[20px] sm:mt-0">
                <h3 className="text-2xl text-[#344742] tracking-[1px] font-bold mb-[15px]">About us</h3>
                <p className="text-3xl text-black font-medium tracking-[1px] mb-[15px] leading-[45px]">We cook the best tasty food</p>
                <p className="w-[350px] border-red-200  text-gray-600 leading-[30px] mb-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo dolores similique incidunt officiis optio officia temporibus commodi, eos est.</p>
                <button className="w-[150px] bg-[#cfb02c] p-[7px] text-white tracking-[1px] text-center cursor-pointer hover:opacity-70 rounded-[4px]"><Link to="/about">Explore History</Link></button>
            </div>
        </div>
    </div>
 
    <Home_Offering/>
   
    <div className="recipe-home-container mt-[30px] py-[20px] ">
        <div className="recipe-home-center wrapper">
            <div className="heading mb-[20px]">
                <h2 className="text-[#344742]  font-medium text-center text-3xl tracking-[1px] ">Recipes of the week</h2>
            </div>
            {/* <section className="recipe-section  grid grid-cols-1 place-items-center  gap-[10px] sm:grid-cols-3 "> */}
            <section className="recipe-section  grid place-items-center  gap-[25px] grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]  ">
                {/* <div className="single-recipe  relative w-[100%] p-[15px]  flex flex-col justify-center items-center gap-y-[20px] bg-white-100 rounded-[10px]  [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px] cursor-pointer hover:[box-shadow:rgba(39,_29,_69,_0.2)_0px_2px_8px_0px] hover:translate-y-[-4px] transition ease-linear duration-[0.3s]">
                    <div className="img-container w-[140px] overflow-hidden  rounded-[50%]">
                        <img src={"https://cdn.dummyjson.com/recipe-images/1.webp"} alt="" className="w-[100%] h-[100%] object-center object-cover" />
                       <div className=" absolute top-[10px] right-[10px]">
                       <i className="fa-solid fa-heart text-[20px] font-bold text-[#344742] cursor-pointer hover:text-[#cfb02c]"></i>
                       </div>
                    </div>
                    <div className="w-[100%] recipe-content ">
                        <h2 className=" self-start text-[#344742] text-[18px] font-bold tracking-[1px] mb-[5px] ">Classic Margherita Pizza</h2>
                        <p className="text-gray-500 text-[16px] tracking-[1px] mb-[5px]">Delicious dish</p>
                        <p className="text-[18px]"><i className="fa-solid fa-stopwatch text-[#344742]"></i>  15</p>
                    </div>
                </div> */}
                {
 
                    recipes?.map((item , index) => {
 
                        const {name , cookTimeMinutes , image   } = item;
 
                        return <Recipe_Card key={"r" + index} title={name} id={index + 1} img={image} cookTimeMinutes={cookTimeMinutes} />
                    })
                 
 
                }
               
               
            </section>
                <button className="block mx-auto text-white bg-[#cfb02c] text-xl p-[10px_7px]  mt-[20px] text-center hover:opacity-70 rounded-[4px] cursor-pointer"><Link to="/recipes">view More</Link></button>
        </div>
    </div>
 
    <Home_Contact/>
    </>)
}
 
export default Home;