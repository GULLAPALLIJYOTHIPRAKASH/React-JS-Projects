import './ScrollProgressBar.css'
import { useEffect, useState } from 'react';


function Scroll_ProgressBar(){



    const [ scrollBar , setScrollBar] = useState(0);
    const [data , setData] = useState([]);
    const [isLoading , setLoading] = useState(true);
    const [isError , setisError ] = useState({status: false , msg:""})

    const fetch_api = async () => {

        setLoading(true)
        setisError({status:false , msg:""} )

            try {

                
        const request = await fetch('https://jsonplaceholder.typicode.com/comments');

        const result = await request.json();

        setData(result);
        setLoading(false)
        setisError({status:false , msg:""} )

    
                
            } catch (error) {

                setLoading(false)
                setisError({status:true , msg:`${error.message}`} || "something went wrong" )

                
            }

    }





    const handle_scroll = () => {



        // geting value of how scroll from top

        const how_Much_Height_Scrolled = document.body.scrollTop || document.documentElement.scrollTop ;




        //  totalHeight of content present - innerHeight

        const scroll_percentage = document.documentElement.scrollHeight - document.documentElement.clientHeight



        setScrollBar( (how_Much_Height_Scrolled / scroll_percentage) * 100)

    }

    useEffect(() => {

        fetch_api()


    },[])



    useEffect(() => {



        window.addEventListener("scroll"  , handle_scroll);



        () => {



            return window.removeEventListener("scroll" , handle_scroll)

        }



    },[])





   



    if(isLoading){



        return <h1>Loading...</h1>

    }



    if(isError.status){



        return <h1>{isError.message}</h1>

    }


    




    return(<>

    <div className="progress-bar">

        {/* <h1>Scroll progress</h1> */}

        <div className="progress-bar-tracker">

            <div className="current-progress-bar" style={{width: `${scrollBar}%`}} ></div>

        </div>

    </div>

    <ul className="data-container">

        {

            data?.map((item) => {



                const {id , body} = item;



                return <li className='list' key={id}>{body}</li>

            })

        }

    </ul>

    </>)

}



export default Scroll_ProgressBar;