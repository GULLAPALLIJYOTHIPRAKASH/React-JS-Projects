import { ChangeEvent, FormEvent, useState } from "react";



type Gender = "male" | "female";

interface Information{

    firstname:string,

    lastname:string,

    email:string,

    occupation:string,

    company:string,

    password:string,

    confirmpassword:string,

    gender: Gender, 

}

type InputStatus = { 


     fname_status:   boolean,

        lname_status:  boolean,

        email_status:   boolean,

        occupation_status:   boolean,

        company_status:   boolean,

        password_status:   boolean,

        cpassword_status:  boolean,

        gender_status?: boolean,

        img_status:  boolean,


}

function useForm(){

    const [image , setImage] = useState<File |null>(null);

    const [information , setInfo] = useState<Information>({

        firstname:"",

        lastname:"",

        email:"",

        occupation:"",

        company:"",

        password:"",

        confirmpassword:"",

        gender:"male",   

    })



    const [input_status  ,setInput_Status] = useState<InputStatus>({



        fname_status:  false,

        lname_status: false,

        email_status:  false,

        occupation_status:  false,

        company_status:  false,

        password_status:  false,

        cpassword_status: false,

        // gender_status: true,

        img_status: false,



    })



    // to check email with

 const  email_check = (email_value:string):boolean => {

    // email regular expression

    let email_regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    // test with email regex with email input
    return email_regex.test(email_value);

}



const handle_submit =(e:FormEvent<HTMLFormElement>) =>{



        e.preventDefault();



    // image validation

     if(typeof image === null){



        alert('Please upload image');



        setInput_Status((prev) => { return({...prev , img_status: false})});

    }

    else if(image){

       

        setInput_Status((prev) => { return({...prev , img_status: true})});





    }



        // firstname validation

        if(information.firstname.trim().length == 0){





            setInput_Status((prev) => { return({...prev , fname_status: false})});



            alert("firstname can't be empty");



        }

        else if(information.firstname.trim().length < 3){



            setInput_Status((prev) => { return({...prev , fname_status: false})});

            alert("firstname should be aleast 3 characters");

        }

        else if(information.firstname.trim().length >= 3){



            setInput_Status((prev) => { return({...prev , fname_status: true})});



        }



        // lastname validation

        if(information.lastname.trim().length == 0){



            setInput_Status((prev) => { return({...prev , lname_status: false})});



            alert("lastname can't be empty");



        }

        else if(information.lastname.trim().length < 3){



            setInput_Status((prev) => { return({...prev , lname_status: false})});

            alert("lastname should be aleast 3 characters");

        }

        else if (information.lastname.trim().length >= 3){



            setInput_Status((prev) => { return({...prev , lname_status: true})});



        }





        // email validation

        if(information.email.trim().length == 0){



            setInput_Status((prev) => { return({...prev , email_status: false})});



            alert("email can't be empty");



        }

        else if(!email_check(information.email)){



            setInput_Status((prev) => { return({...prev , email_status: false})});

            alert("Please enter valid email");

        }

        else if (email_check(information.email)){



            setInput_Status((prev) => { return({...prev , email_status: true})});



        }







          // occupation validation

          if(information.occupation.trim().length == 0){



            setInput_Status((prev) => { return({...prev , occupation_status: false})});



            alert("occupation can't be empty");



        }

        else if(information.occupation.trim().length < 3){



            setInput_Status((prev) => { return({...prev , occupation_status: false})});

            alert("occupation should be aleast 3 characters");

        }

        else if (information.occupation.trim().length >= 3){



            setInput_Status((prev) => { return({...prev , occupation_status: true})});



        }



        // company validation

    if(information.company.trim().length == 0){





            setInput_Status((prev) => { return({...prev , company_status: false})});

        alert("company can't be empty");



    }

    else if(information.company.trim().length < 3){



        setInput_Status((prev) => { return({...prev , company_status: false})});

        alert("company should be aleast 3 characters");

    }

    else if (information.company.trim().length >= 3){



        setInput_Status((prev) => { return({...prev , company_status: true})});



    }





    // password validation

    if(information.password.trim().length == 0){



        setInput_Status((prev) => { return({...prev , password_status: false})});

        alert("password can't be empty");



    }

    else if(information.password.trim().length < 8){



        setInput_Status((prev) => { return({...prev , password_status: false})});

        alert("password should be aleast 8 characters");

    }

    else if (information.password.trim().length >= 8){



        setInput_Status((prev) => { return({...prev , password_status: true})});



    }





    // confirmpassword validation

    if(information.confirmpassword.trim().length == 0){



        setInput_Status((prev) => { return({...prev , cpassword_status: false})});

        alert("confirmpassword can't be empty");



    }

    else if(information.confirmpassword.trim().length < 8){



        setInput_Status((prev) => { return({...prev , cpassword_status: false})});

        alert("confirmpassword should be aleast 8 characters");

    }

    else if (information.confirmpassword.trim().length >= 8){





        if(information.confirmpassword.trim() === information.password.trim()){





            setInput_Status((prev) => { return({...prev , cpassword_status: true})});



        }



        else{



            alert("confirm password  not matched")

        }



    }

   



    // check all inputs filleds

        if(input_status.fname_status && input_status.lname_status &&  input_status.email_status &&  input_status.occupation_status &&  input_status.company_status &&  input_status.password_status &&  input_status.cpassword_status &&  input_status.img_status){



           

               

               

                const data = confirm("Please confirm the data.");



                if(data == true){



                    alert("Thanks Data Saved.")





                    // reset states

                            setImage(null)

                            setInfo({



                                firstname:"",

                                lastname:"",

                                email:"",

                                occupation:"",

                                company:"",

                                password:"",

                                confirmpassword:"",

                                gender:"male",

                               

                            })



                           

                            setInput_Status({

                                fname_status: false,

                                lname_status: false,

                                email_status:false,

                                occupation_status:false,

                                company_status:false,

                                password_status:false,

                                cpassword_status:false,

                                gender_status:true,

                                img_status: false

                       

                            })



                }

               



           

        }

   



   

    }





    const handle_inputs = (e:ChangeEvent<HTMLInputElement>) => {


          const { name, value } = e.target;


        setInfo({...information , [name  as keyof Information]: e.target.value.trim()});



       

           

    }

    return( {image , information , handle_inputs , handle_submit ,setImage })


   
}

export default useForm;