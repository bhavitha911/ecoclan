import React from 'react'
import '../Rewards/Rewards.css'
import pic from '../../images/pickup.png'
import logout from '../../images/logout .png'
import { Link } from 'react-router-dom'
import {ShareFill } from 'react-bootstrap-icons'

import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { IoMdArrowBack } from "react-icons/io";
import { GiBurningTree } from "react-icons/gi";
import { Col, Row } from 'antd';



const Rewards = () => {
    return (
        <div className='rewards-main'>
            <div className='rewards-submain'>
                <div className='row rewards'>
                    <div className='col-2'>
                        <Link to='/SchePickup'> <img className='summary-pic' src={pic} alt=" "></img></Link>
                    </div>
                    <div className='col-8' style={{ fontSize: "25px", fontWeight: "700", paddingTop: "6px" }}>
                        <p>Rewards</p>
                    </div>
                    <div className='col-2'>
                   <Link to='/login'>    <img className='logouted' src={logout} alt=''></img></Link> 
                    </div>

                </div>
                <div className='rewards-scroll'>

                    <div className='row pt-4'>
                        <div className='col-md-2 pt-2'>
                            <Link className='rewards-arrow' to='/aboutcompany' style={{ color: "black" }}> <IoMdArrowBack /></Link>
                        </div>
                        <div className='col-md-5 w-75' style={{ fontSize: "25px", fontWeight: "700", paddingTop: "1px", letterSpacing: "1px" }}>
                            <p className='text-dark plant-reward'>Plant Goodness</p>
                        </div>

                    </div>
                    <div className='forest mx-2'>
                        <center>
                            <div>
                                <p className='text-white w-50 pt-3'>Every time you buy from us, we plant more trees</p>
                            </div>
                            <div>
                                <h4 className='text-white'>TRESS PLANTED</h4>
                            </div>
                            <div>
                            <p className=' pt-5 reward_textsize'>Hi kraft testing you are a plant parent of</p>
                            </div>
                        </center>

                    </div>
        
                    <div className='row'>
                        <div className='col-12 pt-2'>
                            <h1 className='text-success'>Tree</h1>
                        </div>
                        <div className='col-12'>
                        <GiBurningTree />

                        </div>
                        <div className='col-12 pt-2'>
                            <h1 className='text-success'>Tree</h1>
                        </div>
                        <div className='col-12 pt-2'>
                            <h5 className='text-success'>15 jan 2024</h5>
                        </div>
                        <div className='col-12 pt-2'>
                            <button className='share'> Share with friends<span className='px-2'><ShareFill></ShareFill></span>
                            </button>
                        </div>
                        <div className='col-12 pt-4 text-success' style={{ textAlign: "start", marginLeft: "20px" }}>
                            <h5 className='order-rewards'>ORDER #123123123 <br />15 Jan 2024</h5>

                        </div>
                    </div>
                    
                </div>
                <div className='footer_rewards'>
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
    )
}

export default Rewards