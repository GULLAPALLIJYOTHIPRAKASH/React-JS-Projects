function Subscription(){

    return(<>
    
    {/* Subscription  */}
    <div className="subscription-container w-[100%] bg-gray-900 text-center">
        <div className="subscription-center max-w-[1550px] mx-auto py-16 px-[20px] ">
            <div className="heading">
                <h2 className="text-3xl text-white font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-300 text-lg mb-8">Stay updated with our latest collections, exclusive offers, and style tips.</p>

                <div className="form mb-4 md:flex md:justify-center md:items-center ">
                <input type="text" placeholder="Your email address" className="mb-4 md:mb-0 md:mr-2 bg-white rounded-lg text-gray-900 w-full  md:w-[300px] px-[15px] py-3 outline-none" />
                <button className="text-white font-medium text-base bg-[#4F46E5] w-full py-3 rounded-xl md:w-[120px] transition-all duration-300 linear hover:opacity-90  cursor-pointer">Subscribe</button>
                </div>


                <p className="text-[15px] text-gray-400 ">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
            </div>
        </div>
    </div>
    </>)
}


export default Subscription;