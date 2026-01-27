import { useState } from "react";

function Navbar(){


        const[showHover , setshowHover] = useState(null);

    return(
        <>
        {/* Navbar start */}
    <nav className="Navbar-container relative" >
        <div className="navbar-center max-w-[1550px] mx-auto p-[20px] flex justify-between items-center">
            <div className="logo-section order-1">
                <h1 className="text-xl font-bold font-[Poppins]"><span className="text-[#ffaf4d] text-3xl">F</span>URNIX.</h1>
            </div>
            <div className="navbar-links-main order-3">
                <ul className="navbar-links flex justify-between space-x-[20px]">
                    <li><a href="#" className="outline-none" onClick={() => setshowHover((prev) => prev != "search-icon" ? "search-icon" : null )}><i className="text-lg text-black cursor-pointer  hover:opacity-70   fa-solid fa-magnifying-glass"></i></a></li>
                    <li><a href="#" className="outline-none" onClick={() => setshowHover((prev) => prev != "profile-icon" ? "profile-icon" : null )}><i className="text-lg text-black cursor-pointer  hover:opacity-70   fa-solid fa-user"></i></a></li>
                    <li><a href="#" className="outline-none relative"><i className="text-lg text-black cursor-default fa-solid fa-bag-shopping"></i>
                    <span className="cart-count cursor-default absolute top-[-18px] left-[10px]  w-[20px] h-[20px]  text-sm font-normal bg-[#ffaf4d] text-white  rounded-full shadow-md shadow-white text-center">3</span>
                    </a></li>
                    <li className="md:hidden" ><a href="#" className="outline-none" onClick={() => setshowHover((prev) => prev != "hambuger-icon" ? "hambuger-icon" : null )}><i className="text-lg text-black cursor-pointer  hover:opacity-70   fa-solid fa-bars"></i></a></li>
                </ul>
            </div> 
            {/* search */}
            <div className={`search-input ${showHover == "search-icon" ? "block" : "hidden"}  absolute bottom-[-65px] right-[150px] bg-white p-2 rounded-[10px] shadow-sm shadow-black/20 transition-all duration-300 linear`}>
                <input type="text" placeholder="Search for Items..." className="w-[200px] p-2 border-1 rounded-[10px] outline-none" />
            </div>
            {/* Profile */}
            <ul className={`profile-detials ${showHover == "profile-icon" ? "block" : "hidden"}  absolute w-[250px]  bottom-[-150px] right-[120px] bg-white rounded-[10px] shadow-sm shadow-black/20 transition-all duration-300 linear`}>
            <li className="cursor-pointer text-sm font-normal text-gray-700 hover:bg-gray-300/20 p-2 hover:text-gray-800">Sign In</li>
            <li className="cursor-pointer text-sm font-normal text-gray-700 hover:bg-gray-300/20 p-2 hover:text-gray-800">Register</li>
            <li className="cursor-pointer text-sm font-normal text-gray-700 hover:bg-gray-300/20 p-2 hover:text-gray-800">My Account</li>
            <li className="cursor-pointer text-sm font-normal text-gray-700 hover:bg-gray-300/20 p-2 hover:text-gray-800">Orders</li>
            </ul>
            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar ${showHover == "hambuger-icon" ? "block" : "hidden"} md:hidden w-[100%] border-b-1 border-gray-300   absolute left-0 bottom-[-160px] bg-white p-4  transition-all duration-300 linear z-10`}>
                <ul className="mobile-sidebar-links ">
                    <li className="text-base font-[Poppins] text-[#ffaf4d] font-medium tracking-1 mb-2"><a href="#">Home</a></li>
                    <li className="text-base font-[Poppins] text-[#ffaf4d] font-medium tracking-1 mb-2"><a href="#">Shop</a></li>
                    <li className="text-base font-[Poppins] text-[#ffaf4d] font-medium tracking-1 mb-2"><a href="#">Offers</a></li>
                    <li className="text-base font-[Poppins] text-[#ffaf4d] font-medium tracking-1 mb-2"><a href="#">About</a></li>
                </ul>
            </div>
            {/* Desktop Nav links */}
            <div className="desktop-nav hidden md:block order-2 flex justify-center items-center">
                <ul className="desktop-nav-links flex justify-center items-center gap-x-20">
                    <li className="text-lg font-medium text-black hover:text-[#ffaf4d] transition-all duration-300 linear"><a href="#">Home</a></li>
                    <li className="text-lg font-medium text-black hover:text-[#ffaf4d] transition-all duration-300 linear"><a href="#">Shop</a></li>
                    <li className="text-lg font-medium text-black hover:text-[#ffaf4d] transition-all duration-300 linear"><a href="#">Offers</a></li>
                    <li className="text-lg font-medium text-black hover:text-[#ffaf4d] transition-all duration-300 linear"><a href="#">About</a></li>
                </ul>
            </div>
        </div>


    </nav>
    {/* Navbar end */}
    </>)

    
}

export default Navbar;