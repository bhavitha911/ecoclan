import React from 'react'
import '../../Components/Summary/Summary.css'
import pic from '../../images/pickup.png'
import logout from '../../images/logout .png'
import { Link } from 'react-router-dom'

import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { Col, Row } from 'antd';
import { IoMdArrowBack } from "react-icons/io";



const Summary = () => {
    return (
        <>
            <div className='summary-main'>
                <div className='summary-submain'>
                    <div className='summaryy row'>
                       <div style={{ width: "100%", marginTop: "5px", background: "linear-gradient(to right, rgba(27, 235, 23, 0.822), hsl(173, 59%, 65%))", borderRadius: "10px", height: "60px" }}>
              <Row>
                <Col xs={5} sm={5} md={5} xl={5} ><Link to='/schepickup'><img className='pick' src={pic} alt="Profile" /></Link></Col>
                <Col xs={14} sm={14} md={14} xl={14}><h2 className='pt-2 text-white mt-2'>Summary</h2></Col>
                <Col xs={5} sm={5} md={5} xl={5}><Link to='/login'> <img className='logouti' src={logout} alt="Logout" /></Link> </Col>
              </Row>
            </div>
                        <div className='row pt-5'>
                            <div className='col-md-2 pt-2 '>
                                <Link className='summary-arrow'to='/User' style={{ color: "black" }}> <IoMdArrowBack /></Link>
                            </div>
                            <div className='col-md-5 w-75'>
                                <p className='text-dark summary-pointt' style={{ fontSize: "23px", fontWeight: "600", paddingTop: "0px" }}>Points Summary</p>
                            </div>

                        </div>
                        <div className='summary_class' style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "70vh",
                        }}>
                            <div className='box-summary'>
                                <p className='container bhavitha pt-2'>Hello <br />Bhavitha!</p>
                                <p className='w-100 pt-2' style={{ fontSize: "15px", fontWeight: "500", paddingTop: "6px" }}>Your Points Balance<br />800<br /><span><button className='redeem' ><Link to='/rewards' style={{ textDecoration: "none", color: "white" }}>Redeem</Link></button></span></p>
                            </div>
                            <div className='col-md-12' style={{ marginTop: "-40%" }}>
                                <p className='no_transactions  text-dark pt-4' style={{ fontSize: "18px", fontWeight: "500", paddingTop: "6px" }}>You Have No Transactions</p>
                            </div>
                            <div className='footer_summary '>
                                <Row className='container ' >
                                    <Col md={5} xs={5}><Link to='/giveaway'><img className='gifth mt-2' src={hand} alt="Hand" /></Link>
                                    </Col>
                                    <Col md={5} xs={5}><Link to='/dashboard'><img className='gifth mt-2' src={globe} alt="Hand" /></Link>
                                    </Col>
                                    <Col md={5} xs={5}><Link to='/Aboutcompany'><img className='gifth mt-2' src={home} alt="Hand" /></Link>
                                    </Col>
                                    <Col md={5} xs={4}><Link to='/rewards'><img className='gifth mt-2' src={gift} alt="Hand" /></Link>
                                    </Col>
                                    <Col md={4} xs={5}><Link to='/user'><img className='gifth mt-2' src={user} alt="Hand" /></Link>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                </div>

            </div >
        </>
    )
}

export default Summary