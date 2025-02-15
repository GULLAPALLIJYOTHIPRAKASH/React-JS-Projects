import { useNavigate, useParams } from 'react-router-dom';
import './UserProfile.css'
import useFetch from '../../custom Hook/useFetch';
 
function UserProfile(){
 
    const {userid } = useParams();
    const navigate = useNavigate();
   
    const [users_list , , ,  currentPage] = useFetch();
 
    const user = users_list[currentPage]?.find(( item) => {
       
        return ( item.login.uuid == userid)
    });
 
   
 
    return(<>
    <div className="user-profile-container">
        <div className="user-profile-center wrapper">
            <div className="heading">
                <h3 className="title">user Profile</h3>
                <div className="underline"></div>
            </div>
            <div className="profile-section paddingTopMobile-30  paddingTopDesktop-30">
              {user ?    <article className="single-profile">
                    <div className="img-container">
                        <img src={user.picture.large} alt="" />
                    </div>
                    <div className="profile-content">
                        <h3 className="username text-center">{user.name.title} {user.name.first} {user.name.last}</h3>
                        <div className="location">
                            <i className="fa-solid fa-globe"></i>
                            <span>{user.location.country}</span>
                        </div>
                        <div className="email">
                            <i className="fa-solid fa-envelope"></i>
                            <span>{user.email}</span>
                        </div>
                        <div className="cell-phone">
                            <i className="fa-solid fa-phone"></i>
                            <span>{user.cell}</span>
                        </div>
                        <div className="gender">
                            <i className="fa-solid fa-user"></i>
                            <span>{user.gender}</span>
                        </div>
                        <div className="DOB">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>{user.dob.date.split("T")[0]}</span>
                        </div>
                    </div>
                   
                </article> : <p className='text-center paddingBottomMobile-20 paddingBottomDesktop-20'>No Data Found ...!</p> }
                <div className="button-container text-center" >
                    <a onClick={() => { navigate("/")}}>Go Back</a>
                </div>
            </div>
        </div>
    </div>
    </>)
}
 
export default UserProfile;