// import React,{useState} from 'react'
// import '../../App.css';
// import { Link } from 'react-router-dom'
// import axios from 'axios';



// const Signup = () => {
//     const [data, setData] = useState({
//         name: "",
//        mobile: "",

//     })

//     const [error, setError] = useState({});
//     const [signupError, setSignupError]=useState("");
//     const updateData = (e) => {
//         const { name, value } = e.target;
//         setData({ ...data, [name]: value })
//     }

//     const validateForm = () => {
//         const validationErrors = {}

//         if (!data.name.trim()) {
//             validationErrors.name = "Enter your name"
//         }
//         if (!data.mobile.trim()) {
//             validationErrors.mobile = "Enter your mobile number"
//         } else if (data.mobile.length < 10) {
//             validationErrors.otp = "mobile number  should be 10 characters"
//         }
//         setError(validationErrors)

//         return Object.keys(validationErrors).length === 0;
//     }


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const isValid = validateForm();
//         if (isValid) {
//             try{
//                 const response = await axios.post('http://192.168.29.47:5000/api/register', {
//                name:data.name,
//                mobile:data.mobile,

//             });
//             if(response.status===200){
//                 localStorage.setItem('mobile', data.mobile);

//                 console.log("Signup Successfully");
//                window.location.href = "/otp";


//             }
//             } catch(error){
//                 console.error('Login error:',error);
//                 if(error.response && error.response.status===401){
//                     setSignupError("Incorrect name or mobile number");
//                 }else{
//                     setSignupError("An error occured while signup. Please try again later");
//                 }
//                 }
                
//             };
        

    
//     }
//     return (
//         <>
//             <div className='main-signup'>
//                 <div className='submain-signup pt-2'>
//                     <center>
//                     <p className='ecoclang'>Signup</p>
//                     </center>
//                     <div className='pt-3 pb-4'>
//                         <p className='come'>Welcome to EcoClan</p>

//                     </div>
//                     <div className='sign-header'>
                   
//                     <form className='form-detailed' onSubmit={handleSubmit}>
//                         <div className='forms'>
//                             <label className='label-heading'>Name:</label><br />
//                             <div className='log-space'>
//                             <input name='name' type='text' placeholder='Enter Your name' value={data.name} onChange={updateData} className='input_value' />
//                             <br/>
//                             {error.name && (<span>{error.name}</span>)}
//                             </div>
//                         </div>
//                         <div className='forms'>
//                             <label className='label-headingg'>Mobile:</label><br />
//                             <div className='log-space'>
//                             <input name='mobile' type='text' placeholder='Enter Your Mobile Number'value={data.mobile} onChange={updateData} className='input_value' />
//                             <br/>
//                             {error.mobile && (<span>{error.mobile}</span>)}
//                             </div>
//                         </div>
//                         <div className='forms'>
//                           <button className='OTPp'> OTP</button>
//                         </div>
//                         <div className='euser'>
//                             <p className='existing'>Existing user?</p>
//                             <Link className='logg' to='/Login'><p>Login</p></Link>
//                         </div>
                    


                       
//                     </form>
//                     </div>
//                     <div className='boxer'>

// </div>
    
//                 </div>
   
//             </div>
//         </>
//     )
// }

// export default Signup

import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [data, setData] = useState({
        name: "",
        mobile: "",
    });

    const [error, setError] = useState({});
    const [signupError, setSignupError] = useState("");

    const updateData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const validateForm = () => {
        const validationErrors = {}

        if (!data.name.trim()) {
            validationErrors.name = "Enter your name";
        }
        if (!data.mobile.trim()) {
            validationErrors.mobile = "Enter your mobile number";
        } else if (data.mobile.length !== 10) {
            validationErrors.mobile = "Mobile number should be 10 characters";
        }
        setError(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            try {
                const response = await axios.post('http://localhost:5000/api/register', {
                    name: data.name,
                    mobile: data.mobile,
                });
                if (response.status === 200) {
                    console.log("Signup Successfully");
                    // Store data in local storage
                    localStorage.setItem('mobile', data.mobile);
                    // Redirect to OTP page
                    window.location.href = "/otp";
                }
            } catch (error) {
                console.error('Login error:', error);
                if (error.response && error.response.status === 401) {
                    setSignupError("Incorrect name or mobile number");
                } else {
                    setSignupError("An error occurred while signing up. Please try again later");
                }
            }
        }
    };

    return (
        <>
            <div className='main-signup'>
                <div className='submain-signup pt-2'>
                    <center>
                        <p className='ecoclang'>Signup</p>
                    </center>
                    <div className='pt-3 pb-4'>
                        <p className='come'>Welcome to EcoClan</p>
                    </div>
                    <div className='sign-header'>
                        <form className='form-detailed' onSubmit={handleSubmit}>
                            <div className='forms'>
                                <label className='label-heading'>Name:</label><br />
                                <div className='log-space'>
                                    <input name='name' type='text' placeholder='Enter Your name' value={data.name} onChange={updateData} className='input_value' />
                                    <br />
                                    {error.name && (<span>{error.name}</span>)}
                                </div>
                            </div>
                            <div className='forms'>
                                <label className='label-headingg'>Mobile:</label><br />
                                <div className='log-space'>
                                    <input name='mobile' type='text' placeholder='Enter Your Mobile Number' value={data.mobile} onChange={updateData} className='input_value' />
                                    <br />
                                    {error.mobile && (<span>{error.mobile}</span>)}
                                </div>
                            </div>
                            <div className='forms'>
                                <button type="submit" className='OTPp'>OTP</button>
                            </div>
                            <div className='euser'>
                                <p className='existing'>Existing user?</p>
                                <Link className='logg' to='/Login'><p>Login</p></Link>
                            </div>
                        </form>
                    </div>
                    <div className='boxer'></div>
                </div>
            </div>
        </>
    );
}

export default Signup;

