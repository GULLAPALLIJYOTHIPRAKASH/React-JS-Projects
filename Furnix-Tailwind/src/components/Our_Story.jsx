import fix_bg from "../assets/fix-bg.jpg";

function Our_Story(){

    return(<>
    {/* Our Story  start*/}
        <div className="our-story-container py-16 font-[Jost] w-[100%] min-h-[250px] relative bg-cover bg-center bg-no-repeat z-2" style={{ backgroundImage: `url(${fix_bg})` }}>
    
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black/60 -z-2"></div>   
    
            <div className="our-story-center max-w-[1550px] mx-auto px-[20px] ">
                <div className="heading ">
                    <h1 className=" text-white text-3xl font-medium mb-4 md:text-4xl">INNOVATIVE VISION  <br />
                    IN MODERN DESIGN</h1>
                    <p className="text-white text-lg md:w-[450px] leading-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugit ipsum accusantium error voluptatem aspernatur nobis quam expedita laborum officia ullam delectus, iste reiciendis placeat inventore, consectetur minima! Quis, provident.</p>
                    <button className="bg-[#ffaf4d] py-2 px-4 text-white mt-4 rounded-full">READ OUR STORY</button>
                </div>
            </div>
        </div>
        {/* Our Story  end*/}
        </>)
}

export default Our_Story;