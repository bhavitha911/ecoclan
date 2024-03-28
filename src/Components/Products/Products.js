import React from 'react';

import '../Products/Products.css'
import pic from '../../images/pickup.png'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import logout from '../../images/logout .png'
import { Col, Row } from 'antd';
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'

import Plastic from '../Plastic/Plastic';
import Misc from '../Misc/Misc';
import Appliances from '../Appliances/Appliances';
import Electronics from '../Electronics/Electronics';
import Metal from '../Metal/Metal';
import { Link } from 'react-router-dom';
const Products = () => {


    return (
        <div className='main-products'>
            <div className='submain-products'>
                <div className='products'>
                    <div style={{ width: "100%", background: "linear-gradient(to right, rgba(27, 235, 23, 0.822), hsl(173, 59%, 65%))", borderRadius: "10px", height: "60px" }}>
                        <Row>
                            <Col xs={5} sm={5} md={5} xl={5} ><Link to='/schepickup'> <img className='pick' src={pic} alt="Profile" /></Link></Col>
                            <Col xs={14} sm={14} md={14} xl={14}><h2 className='pt-2 text-white'>Products</h2></Col>
                            <Col xs={5} sm={5} md={5} xl={5}><Link to='/login'>  <img className='logouti' src={logout} alt="Logout" /></Link></Col>
                        </Row>
                    </div>
                </div>
                <div className='middle_part'>
                    <Tabs defaultActiveKey="first">

                        <Tab eventKey="first" title="Electronics">
                            <Electronics />
                        </Tab>
                        <Tab eventKey="second" title="Appliances">
                            <Appliances />
                        </Tab>
                        <Tab eventKey="third" title="Misc">
                            <Misc />
                        </Tab>
                        <Tab eventKey="fourth" title="Plastic">
                            <Plastic />
                        </Tab>
                        <Tab eventKey="fifth" title="Metal">
                            <Metal />
                        </Tab>
                    </Tabs>

                </div>


                <div className='footer_product'>
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
    )
}

export default Products;


