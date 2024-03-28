import React from 'react'
import '../SchePickup/SchePickup.css'
import pic from '../../images/pickup.png'
import logout from '../../images/logout .png'
import { Link } from 'react-router-dom'
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { IoMdArrowBack } from "react-icons/io";
import { Col, Row } from 'antd';


const SchePickup = () => {
    return (
        <div className='Schepickup-main'>
            <div className='Schepickup-submain'>
                <div className='row SchePickup'>
                    <div className='col-2'>
                        <img className='pic' src={pic} alt=" "></img>
                    </div>
                    <div className='col-8'>
                        <p style={{fontSize:"25px",fontWeight:"700",paddingTop:"7px"}}>EcoClan</p>
                    </div>
                    <div className='col-2'>
                     <Link to='/login'>  <img className='logouted' src={logout} alt=" "></img></Link> 
                    </div>

                </div>
                <div className='row pt-3'>
                    <div className='col-2 pt-2 '>
                        <Link className='schepick' to='/User'style={{color:"black"}}> <IoMdArrowBack /></Link>
                    </div>
                    <div className='col-5 w-75'>
                        <p className='text-dark pickuped'style={{fontSize:"21px",fontWeight:"700",paddingTop:"5px",display:"flex",justifyContent:"start",letterSpacing:"1px"}}>Schedule a PickUp</p>
                    </div>

                </div>


                <div className='mt-1 schedate'>
                    <p className='mb-0'style={{fontWeight:"700",display:"flex",justifyContent:"start",marginLeft:"18%"}}>Date & Time:</p>
                    <input className='timee pt-2' type='date' placeholder='dd-mm-yyyy'></input>
                </div>
                <div className='mt-1 schedate'>
                <p className='mb-0'style={{fontWeight:"700",display:"flex",justifyContent:"start",marginLeft:"18%"}}>Service Type:</p>
                    <input className='timee' type='text' placeholder='Enter the service type'></input>
                </div>
                <div className='mt-1 schedate'>
                <p className='mb-0'style={{fontWeight:"700",display:"flex",justifyContent:"start",marginLeft:"18%"}}>Approx Weight:</p>
                    <input className='timee' type='text' placeholder='Enter the weight'></input>
                </div>
                <div className='mt-1'>
                    <button className='submitt'style={{fontWeight:"500"}}>Submit</button>
                </div>

                <div className='footer_schepickup'>
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
    )
}

export default SchePickup