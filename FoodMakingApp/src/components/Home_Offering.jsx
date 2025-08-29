import { offersList } from "../assets/assets";
import Card from "./Card";
 
function Home_Offering(){
 
    return(<>
    <div className="offering-home-container mt-[30px] py-[20px]  ">
        <div className="offering-home-center wrapper">
            <div className="heading">
                <h4 className="text-[#344742] text-center font-bold text-2xl tracking-[1px] mb-[15px]">Offering</h4>
                <h1 className="text-3xl text-black font-bold tracking-[1px] text-center mb-[15px]">Our amazing services</h1>
            </div>
            <section className="offers-section mt-[25px] grid grid-cols-1 gap-[25px] sm:grid-cols-3">
                {/* <article className="single-offer p-[15px] flex flex-col justify-center items-center gap-y-[20px]  bg-white-100 rounded-[10px]  [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px]">
                    <div className="img-container w-[100px] overflow-hidden ">
                        <img src={assets.one} alt=""  className="w-[100%] h-[100%] object-contain object-center"/>
                    </div>
                    <div className="offer-content">
                        <h1 className="text-[#34474] font-bold text-2xl tracking-[1xp] text-center mb-[10px]">Excellent food</h1>
                        <p className="text-black text-[15px] text-justify font-medium">We offer our clients excellent quailty services for many years with the best and delicious food in the city.</p>
                    </div>
                </article>
                <article className="single-offer p-[15px] flex flex-col justify-center items-center gap-y-[20px]  bg-white-100 rounded-[10px]  [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px]">
                    <div className="img-container w-[100px] overflow-hidden ">
                        <img src={assets.two} alt=""  className="w-[100%] h-[100%] object-contain object-center"/>
                    </div>
                    <div className="offer-content">
                        <h1 className="text-[#344742] font-bold text-2xl tracking-[1xp] text-center mb-[10px]">Fast food</h1>
                        <p className="text-black text-[15px] text-justify font-medium">We offer our clients excellent quailty services for many years with the best and delicious food in the city.</p>
                    </div>
                </article>
                <article className="single-offer p-[15px] flex flex-col justify-center items-center gap-y-[20px]  bg-white-100 rounded-[10px]  [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px]">
                    <div className="img-container w-[100px] overflow-hidden ">
                        <img src={assets.three} alt=""  className="w-[100%] h-[100%] object-contain object-center"/>
                    </div>
                    <div className="offer-content">
                        <h1 className="text-[#344742] font-bold text-2xl tracking-[1xp] text-center mb-[10px]">Delivery</h1>
                        <p className="text-black text-[15px] text-justify font-medium">We offer our clients excellent quailty services for many years with the best and delicious food in the city.</p>
                    </div>
                </article> */}
                {
                    offersList?.map((item) => {
 
                       const  {id  , img , title , desc } = item
 
                     return <Card key={id} id={id} img={img} title={title} desc={desc}/>
                    })
                }
               
            </section>
        </div>
    </div>
    </>)
}
 
export default  Home_Offering;
 