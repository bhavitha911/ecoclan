import React, { useState, useEffect } from 'react';
import '../../Components/Wallett/Wallett.css'
import pic from '../../images/pickup.png'
import logout from '../../images/logout .png'
import { CurrencyRupee } from 'react-bootstrap-icons'
import mobile from '../../images/to mob.png'
import mob from '../../images/mobile2.png'
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import neft from '../../images/neft.png'
import history from '../../images/history.png'
import recharge from '../../images/mobilerechrage.png'
import currentbill from '../../images/currentbill.png'
import gas from '../../images/gas.png'
import dish from '../../images/dth.png'
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd';
import { IoMdArrowBack } from "react-icons/io";
import tickets from '../../images/tickets.png'
import train from '../../images/high-speed-train.png'
import wifi from '../../images/wifi-signal.png'
import busticket from '../../images/bus-ticket.png'
import axios from 'axios';

export const Wallett = () => {
  const [walletData, setWalletData] = useState([]);

  useEffect(() => {
    fetchWalletData();
  }, []);

  const fetchWalletData = () => {
    axios.get('http://192.168.29.47:5000/api/wallet-updated')
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWalletData(data);
      })
      .catch(error => {
        console.error('Error fetching wallet data:', error);
      });
  };
  return (
    <>
      <div className='main_Portion'>
        <div className='main_half'>
          <div className='wallett-head'>
          <div style={{ width: "100%", background: "linear-gradient(to right, rgba(27, 235, 23, 0.822), hsl(173, 59%, 65%))", borderRadius: "10px", height: "60px" }}>
            <Row >
              <Col xs={5} sm={5} md={5} xl={5} ><Link to='/schepickup'> <img className='pick' src={pic} alt="Profile" /></Link></Col>
              <Col xs={14} sm={14} md={14} xl={14}><h2 className='pt-2 text-white mt-2'>Wallet</h2></Col>
              <Col xs={5} sm={5} md={5} xl={5}><Link to='/login'> <img className='logouti' src={logout} alt="Logout" /></Link></Col>
            </Row>
            </div>

          </div>
          <div className='body_wallet'>
            <div className='row wallet-over'>
              <div className='col-2  pt-4 mx-3'>
                <Link className=''style={{color:"black"}}to='/User'> <IoMdArrowBack /></Link>
              </div>
              <div className='col-5 pt-4'>
                <h4 style={{ textAlign: "justify" }}>Hello</h4>
                <p className='available'>Your Available Balance</p>
              </div>
              <div className='col-4   pt-4'>
                <h2 className='currencyy'> <CurrencyRupee></CurrencyRupee></h2>
                <h6><button className='redee'>Redeem</button></h6>
              </div>
              <div className='col-12 pt-0'>
                <h4 className='utility'>Utilities</h4>
              </div>
              <div className='col-3'>
                <img className='mobi' src={mobile}></img>
                <p className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>Mobile</p>
              </div>
              <div className='col-3'>
                <img className='mobi' src={mob}></img>
                <h6 className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>Bank/UPI</h6>

              </div>
              <div className='col-3'>
                <img className='mobi' src={neft}></img>
                <h6 className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>NEFT</h6>

              </div>
              <div className='col-3'>
                <img className='mobi' src={history}></img>
                <h6 className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>History</h6>

              </div>
              <div className='col-12 pt-2'>
                <h4 className='utility'>Utilities</h4>
              </div>
              <div className='col-3'>
                <img className='mobis' src={recharge}></img>
                <h6 className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>Recharge</h6>
              </div>
              <div className='col-3'>
                <img className='mobis' src={currentbill}></img>
                <h6 className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>Electricity</h6>

              </div>
              <div className='col-3'>
                <img className='mobis' src={gas}></img>
                <h6 className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>Gas</h6>

              </div>
              <div className='col-3'>
                <img className='mobis' src={dish}></img>
                <h6 className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>DTH</h6>

              </div>
              <div className='col-12 pt-3'>
                <h3 className='payment'>Payments</h3>
              </div>
              <div className='col-3'>
                <img className='mobi' src={tickets}></img>
                <p className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>Tickets</p>
              </div>
              <div className='col-3'>
                <img className='mobi' src={busticket}></img>
                <p className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>Bus Tickets</p>
              </div>
              <div className='col-3'>
                <img className='mobi' src={wifi}></img>
                <p className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>Wifi</p>
              </div>
              <div className='col-3'>
                <img className='mobi' src={train}></img>
                <p className='mt-3' style={{ fontWeight: "500", fontSize: "15px" }}>Metro</p>
              </div>
            </div>
          </div>
          <div className='footer_wallet'>
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
