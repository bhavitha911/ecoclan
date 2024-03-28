import React from 'react'
import '../../Components/User/User.css'
import pic from '../../images/pickup.png'
import logout from '../../images/logout .png'
import { ChevronRight, FileEarmarkText, Microsoft, PersonFill, Share, Star } from 'react-bootstrap-icons'
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd';




const User = () => {
    return (
        <>
            <div className='main-user'>
                <div className='submain-user'>
                    <div className='Account row'>
                        <div style={{ width: "100%", background: "linear-gradient(to right, rgba(27, 235, 23, 0.822), hsl(173, 59%, 65%))", borderRadius: "10px", height: "60px" }}>
                            <Row>
                                <Col xs={5} sm={5} md={5} xl={5} ><Link to='/schepickup'><img className='pic' src={pic} alt="Profile" /></Link></Col>
                                <Col xs={14} sm={14} md={14} xl={14}><h2 className='pt-3 text-white'>Account</h2></Col>
                                <Col xs={5} sm={5} md={5} xl={5}><Link to='/login'> <img className='logouted' src={logout} alt="Logout" /></Link> </Col>
                            </Row>

                        </div>

                    </div>
                    <div className='pt-3'>
                        <h3>Hello,</h3>
                    </div>



                    <Row className='head-user'>
                        <Col xs={8} sx={8} md={8}><PersonFill className='person' /></Col>
                        <Col xs={8} sx={8} md={8}> <Link to='/Profile' style={{ textDecoration: "none" }} ><h6 className='profile'>My Profile</h6></Link></Col>
                        <Col xs={8} sx={8} md={8}> <ChevronRight className='royal' /></Col>
                        <div className='liner mx-5'>
                        </div>
                    </Row>
                    <Row className='mt-4'>
                        <Col xs={8} sx={8} md={8}><FileEarmarkText className='person'></FileEarmarkText>
                        </Col>
                        <Col xs={8} sx={8} md={8}><Link to='/Wallett' style={{ textDecoration: "none" }}> <h6 className='wallet'>Wallet</h6></Link></Col>
                        <Col xs={8} sx={8} md={8}><ChevronRight className='royal' /></Col>
                        <div className='liner mx-5'>
                        </div>
                    </Row>
                    <Row className='mt-4'>
                        <Col xs={8} sx={8} md={8}><Star className='person'></Star> </Col>
                        <Col xs={8} sx={8} md={8}><Link to='/summary' style={{ textDecoration: "none" }}> <h6 className='summary'>Points Summary</h6></Link></Col>

                        <Col xs={8} sx={8} md={8}><ChevronRight className='royal' /></Col>
                        <div className='liner mx-5'>
                        </div>
                    </Row>

                    <Row className='mt-4'>
                        <Col xs={8} sx={8} md={8}><Share className='person'></Share></Col>
                        <Col xs={8} sx={8} md={8}><Link to='/schedule' style={{ textDecoration: "none" }}><h6 className='pickup'>Scheduled Pickup's</h6></Link></Col>
                        <Col xs={8} sx={8} md={8}><ChevronRight className='royal' />
                        </Col>
                        <div className='liner mx-5'>
                        </div>
                    </Row>

                    <Row className='mt-3'>
                        <Col xs={8} sx={8} md={8}><Microsoft className='person'></Microsoft></Col>
                        <Col xs={8} sx={8} md={8}><Link to='/More' style={{ textDecoration: "none" }}>    <h6 className='more'>More</h6></Link>
</Col>
                        <Col xs={8} sx={8} md={8}><ChevronRight className='royal' />

                        </Col>
                       
                    </Row>

                    <div className='footer_user'>
                    <Row className='container ' >
                        <Col md={5} xs={5}><Link to='/giveaway'><img className='gifths mt-2' src={hand} alt="Hand" /></Link></Col>
                        <Col md={5} xs={5}><Link to='/dashboard'><img className='gifths mt-2' src={globe} alt="Hand" /></Link></Col>
                        <Col md={5} xs={5}><Link to='/Aboutcompany'><img className='gifths mt-2' src={home} alt="Hand" /></Link></Col>
                        <Col md={5} xs={4}><Link to='/rewards'><img className='gifths mt-2' src={gift} alt="Hand" /></Link></Col>
                        <Col md={4} xs={5}><Link to='/user'><img className='gifths mt-2' src={user} alt="Hand" /></Link></Col>
                    </Row>
                </div>

                </div>






            </div>
        </>
    )
}

export default User