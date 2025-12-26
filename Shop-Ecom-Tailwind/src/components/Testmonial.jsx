function Testmonial(){

    return(<>
     {/* testmonials */}
    <div className="testmonials-container bg-gray-50">
        <div className="testmonials-center max-w-[1550px] mx-auto py-16 px-[20px]">
            <div className="heading">
                <h3 className="text-3xl font-bold text-center">What Our Customers Say</h3>
            </div>
            <section className="testmonial-section mt-6 flex flex-col items-center justify-center gap-8 md:flex-row ">

                {/* single testmonial */}
                <article className="single-testmonial p-5 bg-white rounded-lg shadow-md ">
                    <p className="text-sm mb-4"><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i></p>
                    <p className="text-gray-700 mb-6 ">" The quality of the clothes is exceptional. I've ordered multiple
              times and have never been disappointed. The customer service is
              also top-notch! "</p>
              <div className="profile flex gap-3 ">
                <div className="profile-icon  w-12 h-12 p-2 text-center rounded-full bg-gray-200 text-gray-500 text-lg"><i className="fa-regular fa-user"></i></div>
                <div className="name">
                    <h1 className="text-base font-medium">Emily Richardson</h1>
                    <h3 className="text-gray-600 font-normal ">Loyal Customer</h3>
                </div>
              </div>
                </article>

                   {/* single testmonial */}
                <article className="single-testmonial p-5 bg-white rounded-lg shadow-md">
                    <p className="text-sm mb-4"><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star-half-stroke text-yellow-500"></i></p>
                    <p className="text-gray-700 mb-6 ">" Fast shipping and the products look exactly like the pictures.
              The sizing guide was very helpful. Will definitely shop here
              again! 
             "</p>
              <div className="profile flex gap-3 ">
                <div className="profile-icon  w-12 h-12 p-2 text-center rounded-full bg-gray-200 text-gray-500 text-lg"><i className="fa-regular fa-user"></i></div>
                <div className="name">
                    <h1 className="text-base font-medium">Michael Thompson</h1>
                    <h3 className="text-gray-600 font-normal ">Verified Buyer</h3>
                </div>
              </div>
                </article>

                 {/* single testmonial */}
                <article className="single-testmonial p-5 bg-white rounded-lg shadow-md">
                    <p className="text-sm mb-4"><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i><i className="fa-solid fa-star text-yellow-500"></i></p>
                    <p className="text-gray-700 mb-6 ">" I love the sustainable approach this brand takes. The packaging is eco-friendly and the clothes are made from high-quality, sustainable materials. "</p>
              <div className="profile flex gap-3 ">
                <div className="profile-icon  w-12 h-12 p-2 text-center rounded-full bg-gray-200 text-gray-500 text-lg"><i className="fa-regular fa-user"></i></div>
                <div className="name">
                    <h1 className="text-base font-medium">Sophia Martinez</h1>
                    <h3 className="text-gray-600 font-normal ">Repeat Customer</h3>
                </div>
              </div>
                </article>
            </section>
        </div>
    </div>
    </>)
}

export default Testmonial;