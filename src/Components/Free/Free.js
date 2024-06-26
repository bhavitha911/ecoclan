import React from 'react'
import '../Free/Free.css'
import { IoMdArrowBack } from "react-icons/io";
import { Button } from 'antd';
import { Col, Row } from 'antd';
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { Link } from 'react-router-dom';


const Free = () => {
  return (
    <>
    <div className='main-free'>
        <div className='main-submain'>
              <div className='justify-content-start d-flex mt-4'style={{marginLeft:"20px"}}>
               <Link className='free-arrow' to='/products'style={{color:"black"}}>   <IoMdArrowBack /></Link>
        </div>
        <div className=''style={{display:"grid",placeItems:"center",height:"60vh"}}>
            <Button className='but-free'>Submit</Button>
        </div>
        <div className='next-but'>
            <button className='butt'><Link to='/hooray'style={{color:"black",textDecoration:"none"}}>NEXT</Link></button>

        </div>
        <div className='footer-free'>
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
  )
}

export default Free