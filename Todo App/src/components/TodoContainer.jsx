import './TodoContainer.css';
import useTodo from '../custom hook/useTodo';

function TodoContainer(){

 const [state  ,  text , setText , handle_submit , handle_delete , handle_editing_status , 
    handle_filter_option , handle_Task_status , handle_clearAll] = useTodo();

    let arr = [];

    return(<>

    <div className="todo-container">

        <div className="todo-center">

            <div className="todo-heading">

                <h1 className="title">📋 Todo Board </h1>

            </div>

           { state.tasks.length > 0  ?  <ul className="todo-count">

                <li className={state.option == "done" ? 'active' : ""} onClick={() => { return(handle_filter_option(state.option == "done" ? "all" : "done"))}}>Done</li>

                <li className={state.option == "pending" ? "active" : ""} onClick={() => { return(handle_filter_option(state.option == "pending" ? "all" : "pending")) }}>Pending</li>

            </ul> : <></>}

            <form className="todo-form" onSubmit={handle_submit}>

                <input type="text" name="task"  placeholder='Enter task here... ' value={text} onChange={(e) => setText(e.target.value)}/>

                <button>{state.editing.status ? "edit" : "submit" }</button>

            </form>

            <p className="copy-right"><a href='https://www.linkedin.com/in/gullapalli-jyothiprakash/' target='_blank'>Made By GULLAPALLI JYOTHI PRAKASH</a></p>



            <section className="task-list">

                {/* single todo start*/}

                {state?.tasks.map((item , i) => {

                      


                    if(item.task_status == state.option || state.option == "all" ){

                        

                       arr.push(item.task);
                        

                        
                        

                        return(<article className="single-task" key={item.id} >

                        <div className="task-content">

                            <p className="task">{item.task}</p>



                            <div className="task-icons">

                                <span className={item.task_status == "done" ? "done-btn green" : "done-btn"} onClick={() => { handle_Task_status(item.id)}}>

                                <i className="fa-solid fa-thumbs-up"></i>

                                </span>

                                <span className='edit-btn' onClick={() => handle_editing_status(item.task ,item.id , item.task_status)}>

                                <i className="fa-regular fa-pen-to-square"></i>

                                </span>

                                <span className='delete-btn' onClick={() => handle_delete(item.id)}>

                                <i className="fa-regular fa-trash-can"></i>

                                </span>

                               

                            </div>

                        </div>

                        </article>)

                    }
                

                })}

               

                {/* single todo end*/}

            </section>

            {

                arr.length > 0 ?  <div className="button-container text-center" >

                <a  onClick={handle_clearAll}>clear task</a>

                </div>

            : <p className='text-center' style={{textTransform:'capitalize', paddingTop:'30px' , color: "#09122C"}}>{state.option =="pending" || state.option == "done" ? `no task at ${state.option} status 🙄...!`: "no task added yet 🙄...! "}</p>

            }

        </div>

    </div>

   

    </>)

}



export default TodoContainer;