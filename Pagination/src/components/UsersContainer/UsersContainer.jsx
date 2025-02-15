import useFetch from '../../custom Hook/useFetch';
import './usersContainer.css';
import { Link } from 'react-router-dom';

 
function UsersContainer(){
 
 
 
    const  [users_list , loading , error,  currentPage , handle_count ,handle_nxt , handle_prev ] = useFetch();    
 
    return(<>
    <div className="user-container">
        <div className="user-center wrapper">
            <div className="heading text-center">
                <h3 className="title">Users Profiles</h3>
                <div className="underline"></div>
            </div>
            {
                users_list[currentPage]?.length == 0  && loading == true && error?.status == false && <div className='text-center paddingTopMobile-30 paddingTopDesktop-30 loading' >data fetching .....!</div>
            }
            {
 
                users_list[currentPage]?.length == 0  &&  loading == false && error?.status == true && <p className='text-center paddingTopMobile-30 paddingTopDesktop-30 error'>{error.msg}</p>
            }
            <div className="users-section three-template-cols paddingTopMobile-30 paddingTopDesktop-30 paddingBottomMobile-30 paddingBottomDesktop-30">
            {
                users_list[currentPage]?.map( (user) => {
                   
                    return(
                        <article className="single-user" key={user?.login?.uuid}>
                            <div className="img-container">
                                <img src={user?.picture?.large} alt="" />
                            </div>
                            <div className="user-content">
                                <h3 className="username">{user?.name?.first}</h3>
                            </div>
                            <div className="button-container">
                                <Link  to={`/user/${user?.login?.uuid}`}  >view profile</Link>
                            </div>
                        </article>              
                    )
                })
 
            }
            </div>
            {
                users_list[currentPage]?.length > 0 && <div className="page-buttons paddingBottomMobile-30 paddingBottomDesktop-30 ">
                <button  style={currentPage == 1 ? {opacity: "0.7"} : null } onClick={currentPage == 1 ? null : handle_prev} className='prev'>prev</button>
                        <button   onClick={(e) => { handle_count(e)}} className={ currentPage == 1 ? "active" : 'btn-1'}>1</button>
                        <button   onClick={(e) => { handle_count(e)}} className={ currentPage == 2 ? "active" : 'btn-2'}>2</button>
                        <button   onClick={(e) => { handle_count(e)}} className={ currentPage == 3 ? "active" : 'btn-3'}>3</button>
                        <button   onClick={(e) => { handle_count(e)}} className={ currentPage == 4 ? "active" : 'btn-4'}>4</button>
                        <button   onClick={(e) => { handle_count(e)}} className={ currentPage == 5 ? "active" : 'btn-5'}>5</button>
                        <button   onClick={(e) => { handle_count(e)}} className={ currentPage == 6 ? "active" : 'btn-6'}>6</button>
                        <button   onClick={(e) => { handle_count(e)}} className={ currentPage == 7 ? "active" : 'btn-7'}>7</button>
                        <button   onClick={(e) => { handle_count(e)}} className={ currentPage == 8 ? "active" : 'btn-8'}>8</button>
                        <button   onClick={(e) => { handle_count(e)}} className={ currentPage == 9 ? "active" : 'btn-9'}>9</button>
                        <button   onClick={(e) => { handle_count(e)}} className={ currentPage == 10 ? "active" :'btn-10'}>10</button>
                <button   onClick={currentPage == 10 ? null : handle_nxt} className='nxt' style={currentPage == 10 ? {opacity: "0.7"} : null }>next</button>
            </div>
            }
           
           
 
        </div>
    </div>
    </>)
}
 
export default UsersContainer;