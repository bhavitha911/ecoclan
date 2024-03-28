import React from 'react'
import '../More/More.css'
import pic from '../../images/pickup.png'
import logout from '../../images/logout .png'
import { Link } from 'react-router-dom'
import { ChevronRight,Headset, ChatLeftText, BuildingFill, FileEarmark, Search } from 'react-bootstrap-icons'
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { IoMdArrowBack } from "react-icons/io";
import { Col, Row } from 'antd';




const More = () => {
    return (
        <>
            <div className='more-main' >
                <div className='more-submain'>
                    <div className='moree row'>
                        <div className='col-2'>
                            <Link to='/SchePickup'> <img className='pic' src={pic} alt=" "></img></Link>

                        </div>
                        <div className='col-8'>
                            <p className='' style={{ fontSize: "25px", fontWeight: "700", paddingTop: "7px" }}>More</p>
                        </div>
                        <div className='col-2'>
                            <Link to='/login'>   <img className='logouted' src={logout} alt=" "></img></Link>
                        </div>

                        <div className='row pt-1 ml-3'>
                            <div className='col-2'>
                                <Link className='' style={{ color: "black" }} to='/User'><IoMdArrowBack /> </Link>
                            </div>
                            <div className='col-8 pt-3'>
                                <h6 className='text-dark'>More</h6>
                            </div>
                        </div>
                       
                   
                        <div className='row mx-0  px-3 mainparted'>
                            <div className='col-1'>
                                <Headset className='personn' />
                            </div>
                            <div className='col-9'>

                                <p className='profiless'>Support</p>
                            </div>
                            <div className='col-1 '>
                                <ChevronRight className='royaled' />
                            </div>
                            <hr className='linear'/>
                        </div>  
                        <div className='row mx-0 px-3 mt-0 pt-0 mainparted'>
                            <div className='col-1'>
                                <ChatLeftText className='personn' />
                            </div>
                            <div className='col-9'>

                                <p className='profiles'>Chat With US</p>
                            </div>
                            <div className='col-1 '>
                                <ChevronRight className='royaled' />
                            </div>
                            <hr className='linear' />
                        </div>
                        <div className='row mx-0 px-3 mt-0 pt-0 mainparted'>
                            <div className='col-1'>
                                <Search className='personn' />
                            </div>
                            <div className='col-9'>

                             <Link to='/termsconditions'style={{textDecoration:"none"}}> <p className='profiled'>Terms & Conditions</p></Link>  
                            </div>
                            <div className='col-1 '>
                                <ChevronRight className='royaled' />
                            </div>
                            <hr className='linear' />
                        </div>


                        <div className='row mx-0 px-3 mt-0 pt-0  mainparted'>
                            <div className='col-1'>
                                <FileEarmark className='personn' />
                            </div>
                            <div className='col-9'>

                                <Link to="/FAQ" style={{ textDecoration: "none" }}> <p className='profiledd'>FAQ</p></Link>
                            </div>
                            <div className='col-1 '>
                                <ChevronRight className='royaled' />
                            </div>
                            <hr className='linear' />
                        </div>





                        <div className='row mx-0 px-3 mt-0 pt-0 mainparted'>
                            <div className='col-1'>
                                <BuildingFill className='personn' />
                            </div>
                            <div className='col-9'>

                                <Link to='/AboutCompany' style={{ textDecoration: "none" }}> <p className='profiledds'>About Company</p></Link>
                            </div>
                            <div className='col-1 '>
                                <ChevronRight className='royaled' />
                            </div>
                           
                        </div>
                        <div className='footer_more'>
                            <Row className='container ' >
                                <Col md={5} xs={5}><img className='gifths mt-2' src={hand} alt="Hand" />
                                </Col>
                                <Col md={5} xs={5}><img className='gifths mt-2' src={globe} alt="Hand" />
                                </Col>
                                <Col md={5} xs={5}><img className='gifths mt-2' src={home} alt="Hand" />
                                </Col>
                                <Col md={5} xs={4}><img className='gifths mt-2' src={gift} alt="Hand" />
                                </Col>
                                <Col md={4} xs={5}><img className='gifths mt-2' src={user} alt="Hand" />
                                </Col>
                            </Row>
                        </div>




                    </div>


                </div>


            </div>
        </>
    )
}

export default More