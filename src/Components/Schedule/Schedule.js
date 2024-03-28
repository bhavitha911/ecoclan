import React from 'react'
import '../Schedule/Schedule.css'
import pic from '../../images/pickup.png'
import logout from '../../images/logout .png'
import { ArrowLeft, CheckCircleFill, XCircleFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { Col, Row } from 'antd';
import { IoMdArrowBack } from "react-icons/io";


export const Schedule = () => {
  return (
    <>
      <div className='schedule-main'>
        <div className='schedule-submain'>
          <div className='schedule row'>
            <div style={{ width: "100%", marginTop: "5px", background: "linear-gradient(to right, rgba(27, 235, 23, 0.822), hsl(173, 59%, 65%))", borderRadius: "10px", height: "60px" }}>
              <Row>
                <Col xs={5} sm={5} md={5} xl={5} ><Link to='/schepickup'><img className='pick' src={pic} alt="Profile" /></Link></Col>
                <Col xs={14} sm={14} md={14} xl={14}><h2 className='pt-2 text-white mt-2'>Pickup's</h2></Col>
                <Col xs={5} sm={5} md={5} xl={5}><Link to='/login'> <img className='logouti' src={logout} alt="Logout" /></Link> </Col>
              </Row>
            </div>
          </div>

          <div className='schedule-cardd'>
            <div className='d-flex justify-content-start mx-5  pt-3 mb-1'>
              <Link to='/User' style={{ marginTop: "5px", color: "black" }}>  <IoMdArrowBack /></Link>
              <p className='mx-5 mb-1 upcoming'>Upcoming Pickup's</p>
            </div>
            <div className='row container  schedule-heightt mt-3'>
              <Row>
                <Col xs={14} md={14} sm={14} lg={14}><CheckCircleFill class="opacity1" cx="100" cy="100" r="50"></CheckCircleFill>
                </Col>
                <Col xs={10} md={10} sm={10} lg={10}><p className='poly'>Polythene(mix)<span style={{ fontSize: "15px", fontWeight: "400" }}> 23 Jan 2024</span></p>
                </Col>
              </Row>
            </div>
            <div className='row container  schedule-heightt mt-3'>
              <Row>
                <Col xs={14} md={14} sm={14} lg={14}><CheckCircleFill class="opacity1" cx="100" cy="100" r="50"></CheckCircleFill>
                </Col>
                <Col xs={10} md={10} sm={10} lg={10}><p className='poly'>Electronics(mob)<span style={{ fontSize: "15px", fontWeight: "400" }}> 28 Jan 2024</span></p>
                </Col>
              </Row>
            </div>
            <div className='row container  schedule-heightt mt-3'>
              <Row>
                <Col xs={14} md={14} sm={14} lg={14}><CheckCircleFill class="opacity1" cx="100" cy="100" r="50"></CheckCircleFill>
                </Col>
                <Col xs={10} md={10} sm={10} lg={10}><p className='poly'>Paper&metal(mix)<span style={{ fontSize: "15px", fontWeight: "400" }}> 12 Feb 2024</span></p>
                </Col>
              </Row>
            </div>
           
           <div className='pt-3' style={{ fontSize: "25px", fontWeight: "600", paddingTop: "10px" }}>
              <p>Completed Pickup's</p>
            </div>



            <div className='row container  schedule-heightt mt-3'>
            <Row>
                <Col xs={14} md={14} sm={14} lg={14}><CheckCircleFill class="opacity1" cx="100" cy="100" r="50"></CheckCircleFill>
                </Col>
                <Col xs={10} md={10} sm={10} lg={10}><p className='poly'>Paper(mix)<span style={{ fontSize: "15px", fontWeight: "400" }}>  27 Feb 2024</span></p>
                </Col>
              </Row>
              </div>
              <div className='row container  schedule-heightt mt-3'>
            <Row>
                <Col xs={14} md={14} sm={14} lg={14}><CheckCircleFill class="opacity1" cx="100" cy="100" r="50"></CheckCircleFill>
                </Col>
                <Col xs={10} md={10} sm={10} lg={10}><p className='poly'>Polythene(mix)<span style={{ fontSize: "15px", fontWeight: "400" }}>  2 Mar 2024</span></p>
                </Col>
              </Row>
              </div>
           


            <div className='pt-3' style={{ fontSize: "25px", fontWeight: "600", paddingTop: "10px" }}>
              <p>Cancelled Pickup's</p>
            </div>
            <div className='row container  schedule-heightt mt-3'>
            <Row>
                <Col xs={14} md={14} sm={14} lg={14}><XCircleFill class="opacity11" cx="100" cy="100" r="50"></XCircleFill>

                </Col>
                <Col xs={10} md={10} sm={10} lg={10}><p className='poly'>Polythene(mix)<span style={{ fontSize: "15px", fontWeight: "400" }}>  12 Mar 2024</span></p>
                </Col>
              </Row>
              </div>

              <div className='row container  schedule-heightt mt-3'>
            <Row>
                <Col xs={14} md={14} sm={14} lg={14}><XCircleFill class="opacity11" cx="100" cy="100" r="50"></XCircleFill>

                </Col>
                <Col xs={10} md={10} sm={10} lg={10}><p className='poly'>Appliances(mix)<span style={{ fontSize: "15px", fontWeight: "400" }}>  21 Mar 2024</span></p>
                </Col>
              </Row>
              </div>

            
          </div>

          <div style={{ width: "96%", marginLeft: "10px", background: "linear-gradient(to right, rgba(27, 235, 23, 0.822), hsl(173, 59%, 65%))", borderRadius: "10px", height: "60px", marginTop: "5.5px" }}>
            <Row className='schedule-pick'>
              <Col style={{ padding: "2%" }} xs={5} sm={5} md={5} xl={5}><Link to='/giveaway'>  <img className='giftk' src={hand} alt="Hand" /></Link></Col>
              <Col style={{ padding: "2%" }} xs={5} sm={5} md={5} xl={5}><Link to='/dashboard'> <img className='giftk' src={globe} alt="Hand" /></Link> </Col>
              <Col style={{ padding: "2%" }} xs={4} sm={4} md={4} xl={4}> <Link to='/Aboutcompany'><img className='giftk' src={home} alt="Hand" /></Link> </Col>
              <Col style={{ padding: "2%" }} xs={5} sm={5} md={5} xl={5}><Link to='/rewards'><img className='giftk' src={gift} alt="Hand" /></Link> </Col>
              <Col style={{ padding: "2%" }} xs={5} sm={5} md={5} xl={5}><Link to='/user'> <img className='giftk' src={user} alt="Hand" /></Link></Col>

            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
