import Profile_1 from "../assets/profile1.jpg";
import Profile_2 from "../assets/profile2.jpg";
import Profile_3 from "../assets/profile3.jpg";
function Customer_Review(){

    return(<>
    
    {/* customer review  start*/}
        <div className="customer-review-container py-16 font-[Jost]">
            <div className="customer-review-center max-w-[1550px] mx-auto px-[20px]">
                <div className="heading  ">
                    <h1 className="text-[#ad2100] font-medium text-2xl mb-2">WHAT PEOPLE ARE SAYING</h1>
                    <p className="text-base text-gray-600 md:w-[450px]">Discover What Other Love About Us!From Exceptional Service To Our Top-Notch
    Products, Hear It Straight From Our Happy Customers. Your Words Inspire Us To
    Keep Delivering The Best. Share Your Experience Today!</p>
                </div>
    
                <div className="review-section mt-[100px]  grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-center items-center gap-15">
    
                    <div className="single-article relative bg-gray-50/80 p-10 shadow-2xs rounded-bl-[20px] rounded-br-[20px]">
                        <img src={Profile_1} alt="customer user profile -1" className="w-[80px] h-[80px] rounded-full object-center object-cover outline-[7px] outline-white  absolute -top-[20%] left-[5%] " />
                        <div className="info mt-4">
                            <h3 className="text-center text-xl mb-4">JOHN OLIVER</h3>
                        <p className="text-gray-500">"Exceptional Craftsmanship On Our Dining Table. It's
    Stunning And Sturdy. The Team Was Helpful
    Throughout. Seamless Delivery-Will Definitely Shop
    Here Again!"</p>
                        </div>
                        
                    </div>
    
    
                       <div className="single-article relative bg-gray-50/80 p-10 shadow-2xs rounded-bl-[20px] rounded-br-[20px]">
                        <img src={Profile_2} alt="customer user profile -2" className="w-[80px] h-[80px] rounded-full object-center object-cover outline-[7px] outline-white  absolute -top-[20%] left-[5%] " />
                        <div className="info mt-4">
                            <h3 className="text-center text-xl mb-4">ANNIE LILY</h3>
                        <p className="text-gray-500">"Loved The Modern Design Of My New Sofa! Super
    Comfortable And Arrived Earlier Than Expected. Great
    Quality-Worth Every Penny. Highly Recommend!"</p>
                        </div>
                        
                    </div>
    
    
                    <div className="single-article relative bg-gray-50/80 p-10 shadow-2xs rounded-bl-[20px] rounded-br-[20px]">
                        <img src={Profile_3} alt="customer user profile -2" className="w-[80px] h-[80px] rounded-full object-center object-cover outline-[7px] outline-white  absolute -top-[20%] left-[5%] " />
                        <div className="info mt-4">
                            <h3 className="text-center text-xl mb-4">FRANK DANIEL</h3>
                        <p className="text-gray-500">"Perfect Blend Of Style And Function! The Bookshelf Fits My Space Beautifully, And Assembly Was A Breeze. 5 Stars For Durability And Customer Service!"</p>
                        </div>
                        
                    </div>
                </div>
    
                {/* services  */}
                <div className="service-section grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))]  justify-center items-center  gap-6 mt-[30px] ">
    
                    <div className="single-article p-6 bg-gray-100/90 p-7 flex justify-center items-center gap-x-4 rounded-[20px]">
                        <div className="icon">
                            <i className="fa-solid fa-headset text-[#ad2100] text-xl font-medium"></i>
                        </div>
                        <div className="info">
                            <h1>CUSTOMER SERVICE</h1>
                           <p>It's Not Actually Free We Just Price It Into The Products.</p>
                        </div>
                    </div>
    
    
    
                    <div className="single-article p-6 bg-gray-100/90 p-7 flex justify-center items-center gap-x-4 rounded-[20px] ">
                        <div className="icon">
                            <i className="fa-solid fa-truck text-[#ad2100] text-xl font-medium"></i>
                        </div>
                        <div className="info">
                            <h1> FAST FREE SHIPPING </h1>
                           <p>Get Free Shipping On Order Of $150 Or More.</p>
                        </div>
                    </div>
    
    
                    <div className="single-article p-6 bg-gray-100/90 p-7 flex justify-center items-center gap-x-4 rounded-[20px]">
                        <div className="icon">
                            <i className="fa-solid fa-credit-card text-[#ad2100] text-xl font-medium"></i>
                        </div>
                        <div className="info">
                            <h1>SECURE PAYMENT</h1>
                           <p>Your Payment Information Is Processed Securely</p>
                        </div>
                    </div>
    
    
                </div>
    
    
                
              
    
                
    
            </div>
        </div>
        {/* customer review  end*/}
    </>)
}

export default Customer_Review;