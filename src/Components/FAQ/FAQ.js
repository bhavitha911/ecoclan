import React from 'react'
import '../FAQ/FAQ.css'
import pic from '../../images/pickup.png'
import logout from '../../images/logout .png'
import { ArrowLeft } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { Col, Row } from 'antd';
import { IoMdArrowBack } from "react-icons/io";




const FAQ = () => {
    return (
        <>
            <div className='faq-main'>
                <div className='faq-submain'>
                    <div className='faq row'>

                        <div className='col-2'>
                        <Link to='/SchePickup'> <img className='pic' src={pic} alt=" "></img></Link>  
                        </div>
                        <div className='col-8'>
                            <p className=''style={{fontSize:"25px",fontWeight:"700",paddingTop:"7px"}}>More</p>
                        </div>
                        <div className='col-2'>
                            <img className='logouted' src={logout} alt=" "></img>
                        </div>
                        <div className='pt-3 text-dark d-flex justify-content-start'>
                            <Link className=''style={{color:"black"}} to='/More'> <IoMdArrowBack /></Link>
                        </div>


                        <div className='faq-scroll'>
                            <div className='text-dark pt-1' style={{ textAlign: "start", marginLeft: '17px' }}>
                                <p style={{fontSize:"20px",fontWeight:"600",paddingTop:"7px"}}>Why ScrapBuddy's?<br /></p>
                                <p style={{fontSize:"16px",fontWeight:"400"}}>You will feel a new level of selling your scrap with our expectional services.</p>

                            </div>
                            <div className='text-dark' style={{ textAlign: "start", marginLeft: '17px' }}>
                                <p style={{fontSize:"20px",fontWeight:"600",marginbottom:"10px"}}>How Can I Cancel My Order?</p>
                                <p  style={{fontSize:"16px",fontWeight:"400",marginTop:"0px"}}>You can use the link provided in the order confirmation email. Alternatively, if you have a customer account with us, you can cancel the order through the order history.If nothing of them is working out for you,you can reach us at contact@ScarpBuddy's.com</p>
                            </div>
                            <div className='text-dark' style={{ textAlign: "start", marginLeft: '17px' }}>
                                <p style={{fontSize:"20px",fontWeight:"600",marginbottom:"10px"}}>How Can I Authenticate Pickup Boy?</p>
                                <p style={{fontSize:"16px",fontWeight:"400",marginTop:"0px"}}>You can ask him to show employee Id card and proper dress code is also there.</p>
                            </div>
                            <div className='text-dark' style={{ textAlign: "start", marginLeft: '17px' }}>
                                <p style={{fontSize:"20px",fontWeight:"600",marginbottom:"10px"}}>Is There Any Time Preference For Pickup?</p>
                                <p style={{fontSize:"16px",fontWeight:"400",marginTop:"0px"}}>Yes, after pickup request raised our executive will call you for order confirmation and time preference. </p>
                            </div>
                            <div className='text-dark' style={{ textAlign: "start", marginLeft: '17px' }}>
                                <p style={{fontSize:"20px",fontWeight:"600",marginbottom:"10px"}}>Which Weighing Machine You Are Using? </p>
                                <p style={{fontSize:"16px",fontWeight:"400",marginTop:"0px"}}>We are using Electronic Digital Weighing Machine. We will weight your material in front of you and pay you accordingly.</p>
                            </div>
                            <div className='text-dark' style={{ textAlign: "start", marginLeft: '17px' }}>
                                <p style={{fontSize:"20px",fontWeight:"600",marginbottom:"10px"}}>Will I Get Receipt For The Material I Have Sold? </p>
                                <p style={{fontSize:"16px",fontWeight:"400",marginTop:"0px"}}>Yes Defintely! you will get a proper receipt for the material you have sold</p>
                            </div>
                            <div className='text-dark' style={{ textAlign: "start", marginLeft: '17px' }}>
                                <p style={{fontSize:"20px",fontWeight:"600",marginbottom:"10px"}}>Any Additional Pickup Cost? </p>
                                <p style={{fontSize:"16px",fontWeight:"400"}}>No there is no additional cost for pickup. </p>                           
                                 </div>
                                 


                        </div>
                        <div className='footer_faq'>
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
        </>
    )
}

export default FAQ