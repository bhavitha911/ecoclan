// import React, { useState,useEffect } from 'react'
// import '../Create/Create.css'
// import { Link } from 'react-router-dom'
// import { IoMdArrowBack } from "react-icons/io";
// import axios from 'axios';

// const Create = () => {
//     const [data, setData] = useState({
//         mobile: "",
//         Password: "",
//     })
//     const [error, setError] = useState({});
//     const[createError,setCreateError]=useState("");
//     useEffect(() => {
//         // Retrieve mobile number from local storage
//         const mobileNumber = localStorage.getItem('mobile');
//         if (mobileNumber) {
//             setData(prevData => ({ ...prevData, number: mobileNumber }));
//         }
//     }, []);
//     const updateData = (e) => {
//         const { name, value } = e.target;
//         setData({ ...data, [name]: value })
//     }

//     const validateForm = () => {
//         const validationErrors = {}

//         if (!data.mobile.trim()) {
//             validationErrors.mobile = "Enter the mobile number"
//         }
//         if (!data.Password.trim()) {
//             validationErrors.Password = "Enter the password"
//         } else if (data.Password.length < 7) {
//             validationErrors.Password = "password should be at least 7 characters"
//         }
//         setError(validationErrors)

//         return Object.keys(validationErrors).length === 0;
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         const isValid = validateForm();
//         if (isValid) {
//             console.log(data)
//             try{
//                 const response=await axios.post('http://192.168.29.47:5000/api/createpassword',{
//                     mobile:data.mobile,
//                 password:data.Password
//                 });
//                 if(response.data.status===200){
//                     localStorage.setItem("auth",JSON.stringify(response.data.token));
//                     console.log("Password Successful");
//                     window.location.href = "/login";


//                 }
//             }catch(error){
//                 console.error('password error:',error);
//                 if(error.response && error.respone.status===401){
//                     setCreateError("Incorrect mobile or password");
//                 }
//                 else{
//                     setCreateError("An error occured. please try again later.")
//                 }
//             }
//         }
//     };

//     const [turnon, setTurnOn] = useState(false);
//     const [showInput, setShowInput] = useState(false)
//     const eyeIcon = () => {
//         setTurnOn(true)
//         setShowInput(!showInput)
//     }
//     return (
//         <>
//             <div className='main-create'>
//                 <div className='submain-create pt-3'>
//                     <center>
//                     <p className='ecoclann pt-2'>EcoClan</p>
//                     </center> 
//                     <div className=' marks d-flex justify-content-start mr-3'>
//                      <Link className='otp-link' to='/otp'><IoMdArrowBack />
// </Link>
//                     </div>
//                     <div className='pt-3 pb-4'>
//                         <p className='welcomee'>Welcome to EcoClan</p>

//                     </div>
//                     <form className='form-detailed' onSubmit={handleSubmit}>
//                         <div className='forms'>
//                             <label className='label-head'>Mobile:</label><br />
//                             <input name="mobile" type='text' placeholder='Enter mobile' value={data.number} onChange={updateData} className='input_valued' />
//                             <br />
//                             {error.mobile && (<span>{error.mobile}</span>)}
//                         </div>
//                         <div className='forms'>
//                             <label className='label-headsd'><span style={{ color: 'red',paddingTop:"5px" }}>*</span>Create Password:</label><br />
//                             <input name="Password" type={showInput ? 'text': 'password'} placeholder='Enter the Password' value={data.otp} onChange={updateData} className='input_valued ' />
//                             {
//                                 turnon ? (<><span className='eye-icon' onClick={eyeIcon}><i class="bi bi-eye"></i></span></>): (<>
//                                     <span className='eye-icon' onClick={eyeIcon}><i class="bi bi-eye-slash"></i></span></>)
//                             }

//                             <br />

//                             {error.Password && (<span>{error.Password}</span>)}

//                         </div>
//                         <div className='formse'>
//                             <button className='OTP'> Submit</button>
//                         </div>

//                         <div className='boxey'>

//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Create

import React, { useState, useEffect } from 'react';
import '../Create/Create.css';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import axios from 'axios';

const Create = () => {
    const [data, setData] = useState({
        mobile: '',
        Password: '',
    });
    const [error, setError] = useState({});
    const [createError, setCreateError] = useState('');

    useEffect(() => {
        // Retrieve mobile number from local storage
        const mobileNumber = localStorage.getItem('mobile');
        if (mobileNumber) {
            setData(prevData => ({ ...prevData, mobile: mobileNumber })); // Corrected here
        }
    }, []);

    const updateData = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const validateForm = () => {
        const validationErrors = {};

        if (!data.mobile.trim()) {
            validationErrors.mobile = 'Enter the mobile number';
        }
        if (!data.Password.trim()) {
            validationErrors.Password = 'Enter the password';
        } else if (data.Password.length < 7) {
            validationErrors.Password = 'Password should be at least 7 characters';
        }
        setError(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            console.log(data);
            try {
                const response = await axios.post('http://localhost:5000/api/createpassword', {
                    mobile: data.mobile,
                    password: data.Password,
                });
                if (response.data.status === 200) {
                    localStorage.setItem('auth', JSON.stringify(response.data.token));
                    console.log('Password Successful');
                    window.location.href = '/login';
                }
            } catch (error) {
                console.error('password error:', error);
                if (error.response && error.response.status === 401) {
                    setCreateError('Incorrect mobile or password');
                } else {
                    setCreateError('An error occurred. please try again later.');
                }
            }
        }
    };

    const [turnon, setTurnOn] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const eyeIcon = () => {
        setTurnOn(true);
        setShowInput(!showInput);
    };
    return (
        <>
            <div className="main-create">
                <div className="submain-create pt-3">
                    <center>
                        <p className="ecoclann pt-2">EcoClan</p>
                    </center>
                    <div className="marks d-flex justify-content-start mr-3">
                        <Link className="otp-link" to="/otp">
                            <IoMdArrowBack />
                        </Link>
                    </div>
                    <div className="pt-3 pb-4">
                        <p className="welcomee">Welcome to EcoClan</p>
                    </div>
                    <form className="form-detailed" onSubmit={handleSubmit}>
                        <div className="forms">
                            <label className="label-head">Mobile:</label>
                            <br />
                            <input
                                name="mobile"
                                type="text"
                                placeholder="Enter mobile"
                                value={data.mobile} // Changed data.number to data.mobile
                                onChange={updateData}
                                className="input_valued"
                            />
                            <br />
                            {error.mobile && <span>{error.mobile}</span>}
                        </div>
                        <div className="forms">
                            <label className="label-headsd">
                                <span style={{ color: 'red', paddingTop: '5px' }}>*</span>Create Password:
                            </label>
                            <br />
                            <input
                                name="Password"
                                type={showInput ? 'text' : 'password'}
                                placeholder="Enter the Password"
                                value={data.Password}
                                onChange={updateData}
                                className="input_valued "
                            />
                            {turnon ? (
                                <>
                                    <span className="eye-icon" onClick={eyeIcon}>
                                        <i class="bi bi-eye"></i>
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="eye-icon" onClick={eyeIcon}>
                                        <i class="bi bi-eye-slash"></i>
                                    </span>
                                </>
                            )}
                            <br />
                            {error.Password && <span>{error.Password}</span>}
                        </div>
                        <div className="formse">
                            <button className="OTP"> Submit</button>
                        </div>
                        <div className="boxey"></div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Create;
