import {ChangeEvent, FormEvent, } from 'react';
import './Form.css';
import useForm from '../custom hook/useForm';



function Form(){




      const { image , information , handle_inputs , handle_submit,setImage } = useForm();


    return(<>

    <div className="form-container">

        <div className="form-center">

           <form className="form-section" onSubmit={(e: FormEvent<HTMLFormElement>) => {handle_submit(e)}} >

           <div className="heading">

                <h3 className="title">form validation</h3>

                <div className="underline"></div>

            </div>

            <div className="upload-profile">

                <label htmlFor="upload-img" >

                    <img src={image ? URL.createObjectURL(image) : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" } alt="" />

                </label>

                <p>add profile</p>

                <input type="file"  accept="image/png, image/gif, image/jpeg" name="uplaod-img" id="upload-img"  onChange={(e: ChangeEvent<HTMLInputElement>) => { const file = e.target.files?.[0] ?? null;setImage(file);}} hidden/>

            </div>

            <div className="form">

                <div className="desktop">

                <div className="field">

                    <label htmlFor="firstname">firstname</label>

                    <input type="text" name="firstname" id="firstname"  placeholder='Enter firstname...' value={information.firstname} onChange={handle_inputs} required  />

                </div>

                <div className="field">

                    <label htmlFor="lastname">lastname</label>

                    <input type="text" name="lastname" id="lastname" placeholder='Enter lastname...'   value={information.lastname}  onChange={handle_inputs} required />

                </div>

                </div>

                <div className="field">

                    <label htmlFor="email">email</label>

                    <input type="email" name="email" id="email" placeholder='Enter email...'   value={information.email} onChange={handle_inputs}  required />

                </div>

               <div className="desktop">

                    <div className="field">

                            <label htmlFor="occupation">occupation</label>

                            <input type="text" name="occupation" id="occupation" placeholder='Enter occupation...'  value={information.occupation}  onChange={handle_inputs} required />

                    </div>

                    <div className="field">

                            <label htmlFor="company">company</label>

                            <input type="text" name="company" id="company" placeholder='Enter company... '   value={information.company} onChange={handle_inputs} required />

                    </div>

               </div>

                <div className="desktop">

                <div className="field">

                    <label htmlFor="password">password</label>

                    <input type="text" name="password" id="password" placeholder='Enter password...'  value={information.password}  onChange={handle_inputs} required />

                </div>

                <div className="field">

                    <label htmlFor="confirmpassword">Confirm password</label>

                    <input type="text" name="confirmpassword" id="confirmpassword" placeholder='Enter confirmpassword...'  value={information.confirmpassword}  onChange={handle_inputs} required />

                </div>

                </div>

                <div className="field-radio">

                    <p>gender</p>

                    <input type="radio" name="gender" id="male"  defaultChecked value="male"     onChange={handle_inputs}/>

                    <label htmlFor="male" >male</label>

                    <input type="radio" name="gender" id="female" value="female"   onChange={handle_inputs}/>

                    <label htmlFor="female">female</label>

                </div>

                <button type='submit'>Submit</button>

            </div>

           </form>

           

        </div>

    </div>



    </>)

}



export default Form;