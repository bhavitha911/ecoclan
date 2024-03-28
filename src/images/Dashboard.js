import React from 'react'
import '../../Components/Dashboard/Dashboard.css'
import picture from '../../Components/Dashboard/girl-throwing-garbage-vector-illustration_642458-73.avif'
import oil from '../../Components/Dashboard/oil-green.png'
import tree from '../../Components/Dashboard/tree-green.png'
import energy from '../../Components/Dashboard/electricity-green.png'
import watertap from '../../Components/Dashboard/water-green.png'
import air from '../../Components/Dashboard/air-filter.png'
import land from '../../Components/Dashboard/landfill.png'
import hand from '../../Components/Dashboard/giftboxhand.png'
import globe from '../../Components/Dashboard/globeworld.png'
import home from '../../Components/Dashboard/home.png'
import gift from '../../Components/Dashboard/giftbox.png'
import user from '../../Components/Dashboard/user.png'
import logout from '../../Components/Dashboard/logout .png'
import { Link } from 'react-router-dom'

const Dashboard = () => {
   
    return (
        <>
            <div className='main'>
                <div className='submain pt-3'>
                    <div className='dashboard'>
                        <h1 className='ecoclan'>DashBoard</h1>
                        <img className='logout' src={logout}></img>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h5 className='headtotal'>A TOTAL OF <span className='material'>750</span> kgs OF METERIAL HAS BEEN RECYCLED!</h5>
                        </div>
                        <div className='col-md-6'>
                            <img className='pics' src={picture}></img>
                        </div>
                        <div className='col-md-12'>
                            <h4 className='impact'>OVERALL IMPACT FOR YOUR ORDERS!</h4>
                        </div>
                        <div className='col-md-12'>
                            <h3 className="text-success">Saved</h3>
                        </div>
                        <div className='col-md-6'>
                            <img className='tap' src={watertap}></img>
                            <h4>25</h4>
                            <h6 className='water'>Liters of water</h6>

                        </div>
                        <div className='col-md-6'>
                            <img className='tap' src={energy}></img>
                            <h4>25</h4>
                            <h6 className='water'>KWH Energy</h6>
                        </div>
                        <div className='col-md-6'>
                            <img className='oil' src={oil}></img>
                            <h4>124</h4>
                            <h6 className='water'>Liters of Oil</h6>

                        </div>

                        <div className='col-md-6'>
                            <img className='tree' src={tree}></img>
                            <h4>78</h4>
                            <h6 className='water'>Trees</h6>
                        </div>
                        <div className='col-md-12'>
                            <h3 className="elimi text-danger">Eliminated</h3>
                        </div>
                        <div className='col-md-6'>
                            <img className='air' src={air}></img>
                            <h4>124</h4>
                            <h6 className='water'>Liters of Oil</h6>

                        </div>

                        <div className='col-md-6'>
                            <img className='land' src={land}></img>
                            <h4>78</h4>
                            <h6 className='water'>Trees</h6>
                        </div>
                        <div className='row'>
                            <div className='boxes'>

                                <div className='col-md-2'>
                                    <img className='gifts' src={hand}></img>
                                </div>
                                <div className='col-md-2'>
                                    <img className='gifts' src={globe}></img>
                                </div>
                                <div className='col-md-3'>
                                    <img className='gifts' src={home}></img>
                                </div>
                                <div className='col-md-2'>
                                    <img className='gifts' src={gift}></img>
                                </div>
                                <div className='col-md-2'>
                                
                                <Link to="/user" ><img className='gifts' src={user}></img></Link>
                                </div>
                            
                            </div>

                        </div>
                    </div>
                </div>








            </div>
        </>

    )
}

export default Dashboard