function Footer(){

    return(<>
    
     {/* footer */}
    <div className="footer-container">
        <div className="footer-center max-w-[1550px] mx-auto pt-16 px-[20px] ">

            <section className="md:grid md:grid-cols-2">
                  <div className="one-section">

                <h1 className="font-['Pacifico'] text-[#4f46e5] font-medium text-2xl mb-6">Shop.inc</h1>
                <p className="text-base text-gray-600 mb-6 md:w-[340px]">
              We offer premium quality clothing and accessories for men and
              women. Our mission is to provide sustainable fashion that lasts.
            </p>
            <div className="footer-icons flex flex-row justify-start gap-4">
                <div className=" bg-gray-100 w-[40px] h-[40px] p-2 rounded-full text-center"><i className="fa-brands fa-facebook-f text-gray-500"></i></div>
                <div className=" bg-gray-100 w-[40px] h-[40px] p-2 rounded-full text-center"><i className="fa-brands fa-instagram text-gray-500"></i></div>
                <div className=" bg-gray-100 w-[40px] h-[40px] p-2 rounded-full text-center"><i className="fa-brands fa-x-twitter text-gray-500"></i></div>
                <div className=" bg-gray-100 w-[40px] h-[40px] p-2 rounded-full text-center"><i className="fa-brands fa-linkedin-in text-gray-500"></i></div>

            </div>
            </div>

            <div className="two-section md:flex md:justify-between">

                {/* shop */}
                <div className="footer-nav-list-main">
                    <h1 className="text-lg text-gray-900 font-bold mb-4 mt-6 md:mt-0">Shop</h1>
                    <ul className="footer-nav-list">
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Womens</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Mens</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Accessories</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Footwear</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">New Arrivals</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Sale</li>
                    </ul>
                    
                </div>

                 {/* help */}
                <div className="footer-nav-list-main">
                    <h1 className="text-lg text-gray-900 font-bold mb-4 mt-6 md:mt-0">Help</h1>
                    <ul className="footer-nav-list">
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Customer Service</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">My Account</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Find a Store</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Footwear</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Shipping & Returns</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">FAQs</li>
                    </ul>
                    
                </div>

                    {/* About */}
                <div className="footer-nav-list-main">
                    <h1 className="text-lg text-gray-900 font-bold mb-4 mt-6 md:mt-0">About</h1>
                    <ul className="footer-nav-list">
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">About Us</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Sustainability</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Careers</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Press</li>
                        <li className="text-gray-600 text-lg mb-4 transition-all linear duration-100 cursor-pointer hover:text-[#4f46e5]">Contact Us</li>
                    </ul>
                    
                </div>
                
            </div>

            </section>
          
            <div className="copy-right mt-[30px] w-[100%] md:flex md:justify-between">
                <p className="text-gray-500 font-medium text-sm mb-4 text-center">© 2025 ShopEase. All rights reserved.</p>
                <div className="policy flex justify-center gap-3 mb-4">
                    <p className="text-gray-500">Privacy Policy</p>
                    <p className="text-gray-500">Terms of Service</p>
                    <p className="text-gray-500">Cookies Settings</p>
                </div>
                <div className="payment-icons flex justify-center gap-3">
                    <div><i className="fa-brands text-gray-600 fa-cc-visa text-2xl transition-all linear duration-100 hover:opacity-90 cursor-pointer"></i></div>
                    <div><i className="fa-brands text-gray-600 fa-google-pay text-2xl transition-all linear duration-100 hover:opacity-90 cursor-pointer"></i></div>
                    <div><i className="fa-brands text-gray-600 fa-paypal text-2xl transition-all linear duration-100 hover:opacity-90 cursor-pointer"></i></div>
                    <div><i className="fa-brands text-gray-600 fa-apple text-2xl transition-all linear duration-100 hover:opacity-90 cursor-pointer"></i></div>
                </div>
                
            </div>
        </div>
    </div>
    </>)
}

export default Footer;