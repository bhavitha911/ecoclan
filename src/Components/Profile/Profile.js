import React, { useState } from 'react';
import '../../Components/Profile/Profile.css';
import pic from '../../images/pickup.png'

import logout from '../../images/logout .png'

import { ChevronDown, ChevronRight } from 'react-bootstrap-icons';
import { IoMdArrowBack } from "react-icons/io";

import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

export const Profile = () => {
  const [number, setNumber] = useState(null);

  const handleClick = (value) => {
    if (number === value) {
      setNumber(null);
    } else {
      setNumber(value);
    }
  };
  return (
    <>
      <div className='main-profile'>
        <div className='submain-profile'>
          <div className='user-profile'>
            <div style={{ width: "100%", marginTop: "5px", background: "linear-gradient(to right, rgba(27, 235, 23, 0.822), hsl(173, 59%, 65%))", borderRadius: "10px", height: "60px" }}>
              <Row>
                <Col xs={5} sm={5} md={5} xl={5} ><Link to='/schepickup'><img className='pick' src={pic} alt="Profile" /></Link></Col>
                <Col xs={14} sm={14} md={14} xl={14}><h2 className='pt-2 text-white mt-2'>EcoClan</h2></Col>
                <Col xs={5} sm={5} md={5} xl={5}><Link to='/login'> <img className='logouti' src={logout} alt="Logout" /></Link> </Col>
              </Row>
            </div>
          </div>

          <div className='d-flex justify-content-start pt-3 mx-4' style={{ color: "black" }}>
            <Link className='back' style={{ color: "black" }} to='/User'><IoMdArrowBack /></Link>
          </div>

          <div style={{ overflowY: "scroll", overflowX: "hidden", height: "362px" }}>
            <div className='container information'>

              <p className='Personal' onClick={() => handleClick(0)}>{number === 0 ? <ChevronDown /> : <ChevronRight />}PERSONAL INFORMATION</p>
              {number === 0 && <div className='container'>
                <div className='enter'>
                  <h6 className='holder'>Name:</h6>
                  <input type='text' placeholder='Enter Your Name '></input>
                  <div className='pt-4'>
                    <h6>Email Id:</h6>
                    <input type='text' placeholder='Enter Your Email Address '></input>
                  </div>
                  <div className='pt-4'>
                    <h6>Mobile Number:</h6>
                    <input className='you' type='number' placeholder='Enter Your Number  '></input>
                  </div>

                </div>
              </div>}
            </div>

            <div className='location pt-0'>
              <p className='locate' onClick={() => handleClick(1)}>{number === 1 ? <ChevronDown /> : <ChevronRight />}CHANGE MY LOCATION</p>
              {number === 1 && <div>
                <div className='entered'>
                  <h6>Location</h6>
                  <input type='text' placeholder='Enter Your Location'></input>
                </div>
              </div>}
            </div>



            <div className='panel'>
              <p className='panelr' onClick={() => handleClick(2)}>{number === 2 ? <ChevronDown /> : <ChevronRight />}THIS PANEL CAN'T BE COLLAPSED</p>
              {number === 2 && <div>
                <div className='add'>
                  <h6>+ Add a new Address</h6>
                  <input type='text' placeholder='Enter Address'></input>
                </div>
              </div>}
            </div>

          </div>
          <div className='footer_profile'>
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
    </>
  );
};
