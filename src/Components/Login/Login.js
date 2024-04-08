import React, { useState } from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import { Asterisk, X } from 'react-bootstrap-icons';
import axios from 'axios'; // Import Axios for making HTTP requests


const Login = () => {
    const [data, setData] = useState({
        mobile: "",
        password: "",
    });
    const [error, setError] = useState({});
    const [loginError, setLoginError] = useState(""); 

    const updateData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const validateForm = () => {
        const validationErrors = {};

        if (!data.mobile.trim()) {
            validationErrors.mobile = "Enter the mobile";
        }
        if (!data.password.trim()) {
            validationErrors.password = "Enter the password";
        } else if (data.password.length < 6) {
            validationErrors.password = "Password should be at least 6 characters";
        }
        setError(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            try {
                const response = await axios.post('http://localhost:5000/api/login', {
                    mobile: data.mobile,
                    password: data.password
                });
                 if (response.status === 200) {
                    localStorage.setItem("auth", JSON.stringify(response.data.token));
                    console.log("Login successful",response);
                    window.location.href = "/dashboard"; // Redirect to dashboard
                }
            } catch (error) {
                console.error('Login error:', error);
                if (error.response && error.response.status === 401) {
                    setLoginError("Incorrect username or password"); 
                } else {
                    setLoginError("An error occurred while logging in. Please try again later."); // Set generic error message
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
            <div className='main-login'>
                <div className='submain-login pt-3'>
                    <div>
                        <p className='ecoclaned'>Login</p>
                    </div>
                    <div className='pt-3 pb-4'>
                        <p className='to'>Welcome to EcoClan</p>
                    </div>
                    <div className='form-hed'>
                        <form className='form-detailed' onSubmit={handleSubmit}>
                            <div className='forms'>
                                <label className='label-headd'><Asterisk className='text-danger' style={{ height: "10px", marginTop: "9px", }}></Asterisk>Mobile:</label><br />
                                <div className='login-space'>
                                    <input name='mobile' type='number' placeholder='Enter Your mobile' value={data.mobile} onChange={updateData} className='input_valuee' /><br />
                                    {error.username && (<span className="error-message">{error.username}</span>)}
                                </div>
                            </div>
                            <div className='forms mt-0'>
                                <label className='label-headd'><Asterisk className='text-danger' style={{ height: "10px", marginTop: "9px" }}></Asterisk>Password:</label><br />
                                <div className='login-space'>
                                    <input name="password" type={showInput ? 'text' : 'password'} placeholder='Enter the Password' value={data.password} onChange={updateData} className='input_valuee ' />
                                    {
                                        turnon ? (<span className='eye-icon' onClick={eyeIcon}><i className="bi bi-eye"></i></span>) : (<>
                                            <span className='eye-icon' onClick={eyeIcon}><i className="bi bi-eye-slash"></i></span></>)
                                    }
                                    <br />
                                    {error.password && (<span className="error-message">{error.password}</span>)}
                                </div>
                            </div>
                            <div className='forms'>
                                <button type="submit" className='OTPP'> Login</button>
                                <div className='new-user'>
                                    <p className='neww'>New User? <span > <Link className='userr' to="/signup">Signup</Link> </span></p>
                                </div>
                                {loginError && <span className="error-message text-danger">{loginError}</span>} 
                            </div>
                        </form>
                    </div>
                    <div className='boxg'></div>
                </div>
            </div>
        </>
    );
};

export default Login;
























