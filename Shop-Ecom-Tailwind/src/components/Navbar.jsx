import { useState } from "react";
import shirt_item from "../assets/shirt-item.jpg"
import jeans_item from "../assets/jeans-item.jpg"
import watch_item from "../assets/watch-item.jpg"

function Navbar(){

const [icons_show , setIconsShow]  = useState(null);


return(<>
{/* Navbar start */}
<nav className="nav-container  bg-white border-b-1 border-gray-100 relative">
        <div className="nav-center max-w-[1550px] mx-auto p-[20px] flex justify-between items-center ">
            {/* logo */}
            <div className="logo md:order-1">
                <a href="#" className="font-['Pacifico'] text-[#4f46e5] font-medium text-2xl outline-0">Shop.inc</a>
            </div>
            {/* nav icons lists */}
            <div className="sub-nav md:order-3">
                <ul className="nav-main-icons  flex justify-between space-x-[45px]">
                <li  ><a href="#" onClick={() => setIconsShow((prev) => prev == "search-icon" ? null : "search-icon")}><i className="fa-solid fa-magnifying-glass text-[#374151]  text-lg "></i></a>
                <div className={`search ${icons_show =="search-icon" ? 'block' : 'hidden' }  absolute right-[70px] md:right-[100px] -bottom-[60px] p-[10px] bg-white rounded-[10px] shadow-xs  shadow-black/30 transition-all linear duration-300`}>
                    <input type="text" placeholder="Search Products..." className=" border-1 border-gray-700 py-[5px] px-[10px] rounded-[10px] focus:outline-1 focus:outline-offset-1  focus:outline-[#4f46e5]" />
                </div>
                </li>
                <li ><a href="#" onClick={() => setIconsShow( (prev) => prev == "profile-icon" ? null : "profile-icon")}><i className="fa-solid fa-user  text-[#374151] text-lg "></i></a>
                <div className={`profile ${icons_show == "profile-icon" ? 'block' : 'hidden'} w-[200px] absolute right-[100px] -bottom-[150px] bg-white  shadow-sm rounded-[10px] transition-all linear duration-300`}>
                    <p className=" text-sm font-normal text-gray-700 hover:bg-gray-300/20 p-2 hover:cursor-pointer">Sign In</p>
                    <p className=" text-sm font-normal text-gray-700 hover:bg-gray-300/20 p-2 hover:cursor-pointer">Register</p>
                    <p className=" text-sm font-normal text-gray-700 hover:bg-gray-300/20 p-2 hover:cursor-pointer">My Account</p>
                    <p className=" text-sm font-normal text-gray-700 hover:bg-gray-300/20 p-2 hover:cursor-pointer">Orders</p>
                </div>
                </li>
                <li className="">
                    <div className="relative">
                    <a href="#" onClick={() => setIconsShow( (prev) => prev == "cart-icon" ? null : "cart-icon")}><i className="fa-solid fa-bag-shopping text-[#374151]  text-lg"></i></a>
                    <div className="bg-[#4f46e5] text-white font-medium text-sm size-[20px]  rounded-full text-center absolute -top-[15px] -right-[15px]">3</div>

                    </div>
                    <div className={`cart-section ${icons_show == "cart-icon"  ? 'block' : 'hidden'} w-[300px] absolute right-[10px] -bottom-[400px] bg-white rounded-[10px] shadow-sm p-3 transition-all linear duration-300 `}>
                        <h3 className=" text-[15px] font-medium text-black">Your Cart (3)</h3>
                        <div className="cart-items space-y-[10px] py-5 border-b-[0.5px] border-gray-600/20">
                            {/* item start */}
                            <div className="cart-item w-[100%] flex justify-start items-start gap-3 ">
                                <div className="w-[55px] h-auto object-center object-contain">
                                <img src={shirt_item} alt="Men's Shirt" className="w-[100%] h-[100%] rounded-sm object-center object-cover " />

                                </div>
                                <div className="item-info w-[100%]">
                                    <h2 className=" text-sm font-medium">Essential White T-Shirt</h2>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-gray-500 text-xs font-medium">Size: M | Qty: 1</h1>
                                            <p className="text-sm font-medium">$24.99</p>
                                        </div>
                                        <p className="text-gray-500 text-[15px] font-medium hover:text-gray-700 hover:cursor-pointer">x</p>
                                    </div>
                                </div>
                            </div>
                             <div className="cart-item w-[100%] flex justify-start items-start gap-3 ">
                                <div className="w-[55px] h-auto object-center object-contain">
                                <img src={jeans_item} alt="Men's Fit Jeans black" className="w-[100%] h-[100%] rounded-sm object-center object-cover " />

                                </div>
                                <div className="item-info w-[100%]">
                                    <h2 className=" text-sm font-medium">Slim Fit Black Jeans</h2>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-gray-500 text-xs font-medium">Size: 32 | Qty: 1</h1>
                                            <p className="text-sm font-medium">$59.99</p>
                                        </div>
                                        <p className="text-gray-500 text-[15px] font-medium hover:text-gray-700 hover:cursor-pointer">x</p>
                                    </div>
                                </div>
                            </div>
                             <div className="cart-item w-[100%] flex justify-start items-start gap-3 ">
                                <div className="w-[55px] h-auto object-center object-contain">
                                <img src={watch_item} alt="Men's Leather watch" className="w-[100%] h-[100%] rounded-sm object-center object-cover " />

                                </div>
                                <div className="item-info w-[100%]">
                                    <h2 className=" text-sm font-medium">Classic Leather Watch</h2>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-gray-500 text-xs font-medium">Color: Brown | Qty: 1</h1>
                                            <p className="text-sm font-medium">$129.99</p>
                                        </div>
                                        <p className="text-gray-500 text-[15px] font-medium hover:text-gray-700 hover:cursor-pointer">x</p>
                                    </div>
                                </div>
                            </div>
                             {/* item  end*/}
                        </div>
                        <div className="my-[7px] flex justify-between items-center">
                            <p className="text-sm text-gray-600">Subtotal</p>
                            <p className="text-sm font-medium">$214.79</p>
                        </div>
                        <button className="inline-block w-[100%] p-[7px] bg-[#4f46e5] text-white font-medium rounded-[8px] transition-all linear duration-300 hover:opacity-80 hover:cursor-pointer">Checkout</button>
                        <button className="inline-block w-[100%] mt-2 p-[7px] bg-gray-100 text-gray-800 font-medium rounded-[8px] transition-all linear duration-300 hover:bg-gray-200  hover:cursor-pointer">View Cart</button>
                    </div>
                </li>
                <li className="md:hidden"><a href="#" onClick={() => setIconsShow((prev) =>  prev == "hamburger-icon" ? "null" :"hamburger-icon" )}><i className="fa-solid fa-bars text-[#374151] text-xl "></i></a></li>
                </ul>
            </div>


            {/* navbar links main on larger screen */}
             <ul className={`nav-main-links  hidden   md:w-[100%] md:bg-white  md:flex md:justify-center md:space-x-9 md:items-center order-2`}>

                    <li className=""><a href="#" className="text-lg font-medium text-gray-900 transition-all linear duration-200 hover:text-[#4f46e5] outline-0  ">Home</a></li>
                    <li className=""><a href="#" className="text-lg font-medium text-gray-900 transition-all linear duration-200 hover:text-[#4f46e5] outline-0  ">Shop</a></li>
                    <li className=""><a href="#" className="text-lg font-medium text-gray-900 transition-all linear duration-200 hover:text-[#4f46e5] outline-0  ">New Arrivals</a></li>
                    <li className=""><a href="#" className="text-lg font-medium text-gray-900 transition-all linear duration-200 hover:text-[#4f46e5] outline-0  ">Sale</a></li>
                    <li className=""><a href="#" className="text-lg font-medium text-gray-900 transition-all linear duration-200 hover:text-[#4f46e5] outline-0  ">About</a></li>

            </ul>

           
           
            
        </div>

            {/* mobile navbar on Hamburger */}
         <ul className={`nav-main-links ${icons_show == "hamburger-icon" ? 'block' :  'hidden'} md:hidden  space-y-[10px]  w-[100%] absolute   -bottom-[260px] z-10 bg-white px-[20px] py-[10px]`}>

                    <li className="py-2"><a href="#" className="text-base font-medium text-gray-900  ">Home</a></li>
                    <li className="py-2"><a href="#" className="text-base font-medium text-gray-900  ">Shop</a></li>
                    <li className="py-2"><a href="#" className="text-base font-medium text-gray-900  ">New Arrivals</a></li>
                    <li className="py-2"><a href="#" className="text-base font-medium text-gray-900  ">Sale</a></li>
                    <li className="py-2"><a href="#" className="text-base font-medium text-gray-900  ">About</a></li>

            </ul>
    </nav>
    {/* Navbar end */}
</>)

}

export default Navbar;