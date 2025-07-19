import { useState } from "react";

import "./Gallery.css";
import { photo_list } from "../../public/data";

function Gallery(){

    const [count , setCount] = useState(0);


    const handleIncrement = () => {        



        setCount((prev) => {



            if(prev < 9){



                return prev = prev + 1

            }

            else{



                return 9;

            }

        });

    }


    const handledecrement = () => {



        setCount((prev) => {



            if(prev == 0){



                return  0;

            }

            else{



                return prev = prev - 1

            }



        });

    }


    

    return(<>

    <div className="container">

        <div className="center wrapper">

            <div className="heading">
                <h3 className="title">React Gallery Slider</h3>
            </div>

            <div className="photo-gallery">

                <div className="img-container">


                    <img src={photo_list[count].photo_url} alt={photo_list[count].description} />

                    <div className="buttons">

                    <div className="slide-btn"  style={count <=0 ? {opacity: "0"} :{opacity: "1"} } onClick={handledecrement}><i className="fa-solid fa-arrow-left"></i></div>

                    <div className="slide-btn" style={count >=9 ? {opacity: "0"} :{opacity: "1"} } onClick={handleIncrement}><i   className="fa-solid fa-arrow-right"></i></div>

                </div>

                <div className="photo-count">

                    <span>{count + 1} / {photo_list.length}</span>

                </div>

                </div>

                <div className="content">

                    <p className="text-center">{photo_list[count].description}</p>

                </div>

               

            </div>



        </div>

    </div>



    </>)

}



export default Gallery;