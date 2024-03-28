import React, { useState } from 'react'
import '../Otp/Otp.css'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import axios from 'axios';


const Otp = () => {
    const [data, setData] = useState({
        number: "",
        otp: "",
    })
    const [error, setError] = useState({})
    const[otpError,setOtpError]=useState("");
    const updateData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const validateForm = () => {
        const validationErrors = {}

        if (!data.number.trim()) {
            validationErrors.number = "Enter the number"
        }
        if (!data.otp.trim()) {
            validationErrors.otp = "Enter the otp"
        } else if (data.otp.length < 4) {
            validationErrors.otp = "OTP should be at least 4 characters"
        }
        setError(validationErrors)

        return Object.keys(validationErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            console.log(data)
            try {
                const response = await axios.post('http://192.168.29.47:5000/api/verify',
                    {
                        mobile: data.mobile,
                        otp: data.otp
                    });
                if (response.status === 200) {
                    localStorage.setItem("auth", JSON.stringify(response.data.token));
                    console.log("Otp Succesfull");
                    window.location.href = "/create";


                }



            }catch(error){
                console.error('otp error:',error);
                if(error.response && error.response.status===401){
                    setOtpError("Incorrect Otp or mobile");
                }
                else{
                    setOtpError("An error occured,please try again.");
                }
            }
        }
    }
    return (
        <div>
            <div className='main-otp'>
                <div className='submain-otp pt-3'>
                    <center>

                        <p className='ecoclanh'>EcoClan</p>
                    </center>

                    <div className=' marks d-flex justify-content-start mr-3'>
                        <Link className='signup-tick' to="/signup">  <IoMdArrowBack />
                        </Link>
                    </div>
                    <div className='pt-3 pb-4'>
                        <p className='scrapbuddy'> Welcome to ScrapBuddy</p>
                    </div>
                    <div>
                    <p className='helloww'>Enter OTP</p>
                    </div>

                    <div className='ot'>
                    <form className='form-detailedd' onSubmit={handleSubmit}>
                        <div className='forms'>
                            <label className='label-heads'>Mobile:</label><br />
                            <div className='mobile-head'>
                                <input name="number" type='text' placeholder='Enter Mobile Number' value={data.number} onChange={updateData} className='input_values' />
                                <br />
                                {error.number && (<span>{error.number}</span>)}
                            </div>
                        </div>
                        <div className='forms'>
                            <label className='label-headss'><span style={{ color: 'red' }}>*</span>OTP:</label><br />
                            <div className='mobile-heads'>

                                <input name="otp" type='text' placeholder='Enter OTP' value={data.otp} onChange={updateData} className='input_values' />

                                <br />
                                {error.otp && (<span>{error.otp}</span>)}
                            </div>
                        </div>
                        <div className='forms_button'>
                            <button type="submit" className='OTPs'><h6>Next</h6></button>
                        </div>
                       
                    </form>
                    <div className='box'></div>
                </div>
            </div>
        </div>
         </div>
    )
}

export default Otp
