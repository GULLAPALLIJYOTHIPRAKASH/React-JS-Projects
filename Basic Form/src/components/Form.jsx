import {useState } from 'react';
import './Form.css';
import useForm from '../custom hook/useForm';



function Form(){




      const [ image , information , handle_inputs , handle_submit ] = useForm();


    return(<>

    <div className="form-container">

        <div className="form-center">

           <form className="form-section" >

           <div className="heading">

                <h3 className="title">form validation</h3>

                <div className="underline"></div>

            </div>

            <div className="upload-profile">

                <label htmlFor="upload-img" >

                    <img src={image ? URL.createObjectURL(image) : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" } alt="" />

                </label>

                <p>add profile</p>

                <input type="file"  accept="image/png, image/gif, image/jpeg" name="uplaod-img" id="upload-img"  onChange={(e) => setImage(e.target.files[0])} hidden/>

            </div>

            <div className="form">

                <div className="desktop">

                <div className="field">

                    <label htmlFor="firstname">firstname</label>

                    <input type="text" name="firstname" id="firstname"  placeholder='Enter firstname...' value={information.firstname} onChange={(e) => {handle_inputs(e)}} required  />

                </div>

                <div className="field">

                    <label htmlFor="lastname">lastname</label>

                    <input type="text" name="lastname" id="lastname" placeholder='Enter lastname...'   value={information.lastname}  onChange={(e) => {handle_inputs(e)}} required />

                </div>

                </div>

                <div className="field">

                    <label htmlFor="email">email</label>

                    <input type="email" name="email" id="email" placeholder='Enter email...'   value={information.email} onChange={(e) => {handle_inputs(e)}}  required />

                </div>

               <div className="desktop">

                    <div className="field">

                            <label htmlFor="occupation">occupation</label>

                            <input type="text" name="occupation" id="occupation" placeholder='Enter occupation...'  value={information.occupation}  onChange={(e) => {handle_inputs(e)}} required />

                    </div>

                    <div className="field">

                            <label htmlFor="company">company</label>

                            <input type="text" name="company" id="company" placeholder='Enter company... '   value={information.company} onChange={(e) => {handle_inputs(e)}} required />

                    </div>

               </div>

                <div className="desktop">

                <div className="field">

                    <label htmlFor="password">password</label>

                    <input type="text" name="password" id="password" placeholder='Enter password...'  value={information.password}  onChange={(e) => {handle_inputs(e)}} required />

                </div>

                <div className="field">

                    <label htmlFor="confirmpassword">Confirm password</label>

                    <input type="text" name="confirmpassword" id="confirmpassword" placeholder='Enter confirmpassword...'  value={information.confirmpassword}  onChange={(e) => {handle_inputs(e)}} required />

                </div>

                </div>

                <div className="field-radio">

                    <p>gender</p>

                    <input type="radio" name="gender" id="male"  defaultChecked value="male"     onChange={(e) => {handle_inputs(e)}}/>

                    <label htmlFor="male" >male</label>

                    <input type="radio" name="gender" id="female" value="female"   onChange={(e) => {handle_inputs(e)}}/>

                    <label htmlFor="female">female</label>

                </div>

                <button onClick={(e) => {handle_submit(e)}}>Submit</button>

            </div>

           </form>

           

        </div>

    </div>



    </>)

}



export default Form;