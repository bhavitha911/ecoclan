import React, { useEffect } from 'react';
import '../Hooray/Hooray.css'
import pic from '../../images/pickup.png'
import logout from '../../images/logout .png'
import sucess from '../../images/success.png'
import { Col, Row } from 'antd';
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import { Link } from 'react-router-dom';
const Hooray = () => {
 
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      
      window.location.href = '/rewards';
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, []); 





  return (
    <div className='main-hooray'>
      <div className='submain-hooray'>
        <div className='hooray row'>
          <div className='col-2'>
         <Link to='/schepickup'>  <img className='pic' src={pic} alt=" "></img></Link> 

          </div>
          <div className='col-8'>
            <p className='' style={{ fontSize: "25px", fontWeight: "700", paddingTop: "8px" }}>Ecoclan</p>
          </div>
          <div className='col-2'>
            <Link to='/login'><img className='logouted' src={logout} alt=" "></img></Link>
          </div>
          <div>
          <div >
            <img className='sucess' src={sucess} alt=''></img>
          </div>
          <div>
            <h4 className='text-success mt-5'>HOORAY !!!</h4>
          </div>
          <div>
            <h4 className='text-dark mt-2'>You're Request is Submitted Successfully !!!</h4>
          </div>
          </div>
      
          {/* -------------------------------------------footer */}
          <div className='footer_horray1'style={{marginTop:"107px"}}>
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




    </div>
  )
}

export default Hooray