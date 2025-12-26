import social_1 from "../assets/social-1.jpg"
import social_2 from "../assets/social-2.jpg"
import social_3 from "../assets/social-3.jpg"
import social_4 from "../assets/social-4.jpg"
import social_5 from "../assets/social-5.jpg"
import social_6 from "../assets/social-6.jpg"

function SocialMedia(){

    return(<>
    
    {/* social Media */}
        <div className="social-media-container">
            <div className="social-media-center max-w-[1550px] mx-auto px-[20px] py-16">
                <div className="heading text-center">
                    <h1 className="text-3xl font-bold mb-4">Follow Us On Instagram</h1>
                    <h3 className="text-gray-600 text-lg">@shopease_official</h3>
                </div>
    
                <section className="social-section mt-8 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 justify-center items-center">
    
                    {/* single photo */}
                    <article className="single-photo ">
                        <div className="img-container w-[100%] aspect-square object-center object-cover overflow-hidden rounded-lg ">
                            <img src={social_1} alt="Women stand picture" className="w-[100%] h-[100%]  object-center object-cover transition-all duration-500 linear overflow-hidden hover:scale-110" />
                        </div>
                    </article>
                    {/* single photo */}
                    <article className="single-photo ">
                        <div className="img-container aspect-square object-center object-cover overflow-hidden rounded-lg ">
                            <img src={social_2} alt="Women stand picture" className="w-[100%] h-[100%]  object-center object-cover transition-all duration-500 linear overflow-hidden hover:scale-110" />
                        </div>
                    </article>
                    {/* single photo */}
                    <article className="single-photo ">
                        <div className="img-container aspect-square object-center object-cover overflow-hidden rounded-lg ">
                            <img src={social_3} alt="Women stand picture" className="w-[100%] h-[100%]  object-center object-cover transition-all duration-500 linear overflow-hidden hover:scale-110" />
                        </div>
                    </article>
                      {/* single photo */}
                    <article className="single-photo ">
                        <div className="img-container aspect-square object-center object-cover overflow-hidden rounded-lg ">
                            <img src={social_4} alt="Women stand picture" className="w-[100%] h-[100%]  object-center object-cover transition-all duration-500 linear overflow-hidden hover:scale-110" />
                        </div>
                    </article>
                      {/* single photo */}
                    <article className="single-photo ">
                        <div className="img-container aspect-square object-center object-cover overflow-hidden rounded-lg ">
                            <img src={social_5} alt="Women stand picture" className="w-[100%] h-[100%]  object-center object-cover transition-all duration-500 linear overflow-hidden hover:scale-110" />
                        </div>
                    </article>
                      {/* single photo */}
                    <article className="single-photo ">
                        <div className="img-container aspect-square object-center object-cover overflow-hidden rounded-lg ">
                            <img src={social_6} alt="Women stand picture" className="w-[100%] h-[100%]  object-center object-cover transition-all duration-500 linear overflow-hidden hover:scale-110" />
                        </div>
                    </article>
    
                    
                </section>
            </div>
        </div>
        </>)
}

export default SocialMedia;