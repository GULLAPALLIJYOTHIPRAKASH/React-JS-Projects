import {data } from '../../../public/Data';

import './Accordion.css';

import { useState } from 'react';

function Accordion(){



    const [selected , setSelected] = useState(false);

    const [enableMultiple , setEnableMultiple] = useState(false);

    const [selectMultiple , setSelectMultiple] = useState([]);



    const handleItem = (id) => {



        setSelected((prevID)  => { return (prevID == id ? null : id)})

    }



    const handleMultiple = (id) => {



        const m = [...selectMultiple];

        const findIndexSelected = m.indexOf(id);



        if(findIndexSelected == -1){





             m.push(id)

        }

        else{



         

            m.splice(findIndexSelected , 1);

        }



        setSelectMultiple(m);

    }







    return(<>

    <div className="container">

        <div className="center wrapper">

            <h2 className="heading text-center">Review Q&N</h2>

            <div className="accordion">

                {

                    data.map((item) => {



                        const {id, title , description} = item



                        return(

                            <div className="item" key={id} onClick={enableMultiple ? () => {handleMultiple(id)} : () => { handleItem(id)}}>

                                <div className="title">

                                    <h3>#{id} {title}</h3>

                                    <span className='icon'>{ selected  == id ? "-" : "+"}</span>

                                </div>

                               

                                    <div className="content">

                                    {

                                     enableMultiple ?

                                    ( selectMultiple.indexOf(id) !== -1 &&   <p className={selected == id && "paddingTopMobile-20 paddingTopDesktop-20  "}>Ans: {description}</p>) :

                                    ( selected == id && <p className='paddingTopMobile-10 paddingTopDesktop-20 ' >Ans: {description}</p> )

                                     

                                    }

                                   

                                  </div>

                            </div>

                        )

                    })

                }

            </div>

        </div>

    </div>

    </>)

}



export default Accordion;