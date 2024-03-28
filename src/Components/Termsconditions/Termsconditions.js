import React from 'react'
import '../Termsconditions/Termsconditions.css'
import pic from '../../images/pickup.png'
import logout from '../../images/logout .png'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { Col, Row } from 'antd';



const Termsconditions = () => {
    return (
        <div className='main-terms'>
            <div className='submain-terms'>
                <div className='terms row'>
                    <div className='col-2'>
                    <Link to='/schepickup'>   <img className='pic' src={pic} alt=" "></img></Link> 

                    </div>
                    <div className='col-8'>
                        <p className='' style={{ fontSize: "25px", fontWeight: "700", paddingTop: "8px" }}>Ecoclan</p>
                    </div>
                    <div className='col-2'>
                      <Link to='/login'>  <img className='logouted' src={logout} alt=" "></img></Link>
                    </div>
                    <div>
                        <Link className='arrow-terms' style={{ color: "black", display: "flex", justifyContent: "start", marginTop: "10px" }} to='/more'><IoMdArrowBack /> </Link>
                    </div>
                    <div className='terms-over'>
                        <div>
                            <p className='terms-content'>By using our Services, you are agreeing to these terms. Please
                                read them carefully.</p>
                        </div>
                        <div>
                            <p className='work'>Our Work:</p>
                        </div>
                        <div>
                            <p className='text-conent-1' >For our pickup service, you must have to provide your accurate
                                information like address. You pickup will held on the schedule
                                you provide while submitting the request. You can reschedule
                                or cancel your pickup request anytime after submitting your
                                request. You must have 10Kg or more scrap for pickup,
                                otherwise pickup charges may apply. Rates of all material are
                                fixed as mentioned on our price list. For the rates of other
                                materials that are not listed on the list your can contact us.
                                We can also reschedule your pickup request if we won't able to
                                do it due to some reasons after informing you.</p>
                        </div>
                        <div>
                            <p className='work'>Your Account</p>
                        </div>
                        <div>
                            <p className='text-conent-1' >
                            You need a valid mobile number to create your account. Your 
                  mobile number must need to be verified. In order to place a 
                  pickup request, you must have to provide your accurate address 
                  of the pickup, if the address was not accurate enough then 
                  your pickup request may get canceled.<br/><br/>
                  We want your information just for delivering our services. In 
                  some case, you may also require providing your other personal 
                  information such as "Date of Birth" etc. All the information 
                  you provide about yourself must be correct, if we find the 
                  information inaccurate then your account may be suspended.
                            </p>
                        </div>
                        <div>
                            <p className='work'>Privacy Policy</p>
                        </div>
                        <div>
                            <p className='text-conent-1' >
                            The ScrapBuddy’s privacy policy explains what information we 
                  collect and how we use it.
                            </p>
                        </div>
                        <div>
                            <p className='work'>Changes To Our Terms</p>
                        </div>
                        <div>
                            <p className='text-conent-1' >
                            Yes, Definitely you will get a proper receipt for the material 
                  you have sold.
                            </p>
                        </div>
                        <div>
                            <p className='work'>Any Additional Pickup Cost</p>
                        </div>
                        <div>
                            <p className='text-conent-1' >
                            We have the discretion to update our terms at any time, If we 
                  decide to change our terms, we will post those changes on this 
                  page, and/or update the Terms modification date below.
                            </p>
                        </div>
                      

                        
                    </div>
                    <div className='footer_terms'>
                            <Row className='container ' >
                                <Col md={5} xs={5}><Link to='/giveaway'><img className='gifths mt-2' src={hand} alt="Hand" /></Link>
                                </Col>
                                <Col md={5} xs={5}><Link to='/dashboard'><img className='gifths mt-2' src={globe} alt="Hand" /></Link>
                                </Col>
                                <Col md={5} xs={5}><Link to='/Aboutcompany'><img className='gifths mt-2' src={home} alt="Hand" /></Link>
                                </Col>
                                <Col md={5} xs={4}><Link to='/rewards'><img className='gifths mt-2' src={gift} alt="Hand" /></Link>
                                </Col>
                                <Col md={4} xs={5}><Link to='/user'><img className='gifths mt-2' src={user} alt="Hand" /></Link>
                                </Col>
                            </Row>
                        </div>

                </div>
            </div>



        </div>
    )
}

export default Termsconditions