import { useReducer, useState  , useEffect} from "react";

 function useTodo(){

 
  
  // local storage obj

    const initialValue = () => {

       

        let obj = localStorage.getItem("todos");

        if(!obj){

   

            localStorage.setItem("todos" , JSON.stringify({tasks: [], editing: {status:false , id:"" , msg : ""}  , option: "all"}));

   

            return ({ tasks: [], editing: {status:false , id:"" , msg : ""} , option : "all"});

        }

   

        return JSON.parse(obj);

    }



   

    // todo operation

    const reducer = (state , action) => {





        // add a todo

        if(action.type == "Add_Task"){



            return ({



                ...state , tasks:[ ...state.tasks , action.payload]

            })

        }



        // delete a todo

        if(action.type == "Delete_Task"){



           

            // filter todo

            let items = state.tasks.filter((task) => {



                return task.id != action.payload;

            })



            return({



                ...state , tasks:items

            })

        }





        // changing edit status of todo

        if(action.type == "Edit_task_status"){



            return({

                ...state ,

                editing: action.payload



            })





        }





        // add edited todo

        if(action.type == "Add_Edit_Task"){



            // replace  new text with old todo text

            let items = state.tasks.map((task) => {



                if(task.id == state.editing.id){



                    return({

                        ...task,

                        id: state.editing.id,

                        task: action.payload.task,

                        task_status: action.payload.task_status,



                    })

                }



                return task;

            })





            return({



                ...state,

                tasks: items

            })

        }





        // set task status (Done / Pending )

        if(action.type == "Set_Task_status"){



            // change task status

            const items = state.tasks.map((task) => {



                if(task.id == action.payload.id){



                    return({

                       

                        ...task,

                        task_status: task.task_status =="pending" && action.payload.status == "pending"  ? "done" : "pending" ,



                    })

                }



                return task;

            })



            return ({



                ...state,

                tasks : items

            })

        }





        // clear all task with option status

        if(action.type == "Clear_All_Task"){



            // clear all  or clear particular todo with option status

            if(action.payload == "all") {



                return({ tasks: [], editing: {status: false , id:""} , option: "all"})

            }

            else{





                const items = state.tasks.filter((task) => {

                    return task.task_status !=  state.option

                });

                // when clear all todos change option to all 
   

                return({

   

                    ...state,

                    tasks: items,
                    option: "all"

                })

            }

        }





        // add filter tab

        if(action.type == "Add_Filter_option"){



            return({



                ...state,

                option: action.payload

            })

        }





        //  update state

        return {...state};

       





    }



    // todo state

    const [state , dispatch] = useReducer(reducer , initialValue());

    const [text , setText] = useState(state.editing.status ? state.editing.msg : "");

   





    // handle submit with (New / edited ) todos
    const handle_submit = (e) =>{

        e.preventDefault();



        // check todo length

        if(text.trim().length > 0) {



            // check edit status

           if(state.editing.status){





            // add edited todo

            dispatch({

                type:"Add_Edit_Task",

                payload: {task:text , task_status: "pending"}

            })



            // change edit todo status defualt

            dispatch({

                type:"Edit_task_status",

                payload: {status:false , id:"" , msg : "" , task_status:""}



            })





           }



           else{



            // add new todo

            dispatch({

                type:"Add_Task",

                payload: {task:text , id: new Date().getTime() , task_status:"pending"}

            })





           



           }

                     

         

        }

        else{



            // give alert for empty todo

            alert("Please Enter Task");

        }







            setText("");



     

                     

    }





    // handle delete todo

    const handle_delete = (id) => {        



        dispatch({



            type:"Delete_Task",

            payload: id

        })

    }





    // handle editing status change

    const handle_editing_status = (msg , id , task_status) => {





        // set  to input tag

        setText(msg);



        // change edit todo status

        dispatch({



            type:"Edit_task_status",

            payload:{status: true , id ,  task_status , msg }

        })

       

    }







    // handle clear all todo

    const handle_clearAll = () =>{



       dispatch({



        type: "Clear_All_Task",

        payload: state.option





       })

    }





    // handle task status option ( done / pending )

    const handle_Task_status = (id) => {



        // find todo

        const item = state.tasks.find((task) => {



            if(task.id == id){



                return task;

            }

        })



        // set task status todo

        dispatch({



            type: "Set_Task_status",

            payload: {id , status : item.task_status }



        })



    }





    // handle filter option tab

    const handle_filter_option = (filter_opt) => {



        // add filter tab

        dispatch({



            type: "Add_Filter_option",

            payload: filter_opt

        })

       

    }

    





    useEffect(() => {



        // update local

        localStorage.setItem("todos" , JSON.stringify(state));



    },[state]);


     return([state  ,  text , setText,handle_submit , handle_delete , handle_editing_status , handle_filter_option , handle_Task_status , handle_clearAll])
   
 }

 export default useTodo;