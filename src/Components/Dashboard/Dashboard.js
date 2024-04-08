
import React, { useEffect, useState } from 'react';
import '../../Components/Dashboard/Dashboard.css';
import picture from '../../images/girl-throwing-garbage-vector-illustration_642458-73.avif';
import oil from '../../images/oil-green.png';
import tree from '../../images/tree-green.png';
import energy from '../../images/electricity-green.png';
import watertap from '../../images/water-green.png';
import air from '../../images/air-filter.png';
import land from '../../images/landfill.png';
import hand from '../../images/giftboxhand.png';
import globe from '../../images/globeworld.png';
import home from '../../images/home.png';
import gift from '../../images/giftbox.png';
import user from '../../images/user.png';
import logout from '../../images/logout .png';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import axios from 'axios';

const Dashboard = () => {
    const [category, setCategorys] = useState([]);

    useEffect(() => {
        const str = localStorage.getItem("auth")?.replace(/^"|"$/g, "");
        if (str) {
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${str}`
            };

            axios.get("http://localhost:5000/api/dashboard-metric ", { headers })
                .then((response) => {
                    console.log(response);
                    setCategorys(response.data);
                    console.log("category",category)

                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);


    return (
        <>
            <div className='main-dashboard'>
                <div className='submain-dashboard pt-3'>
                    <div className='dashboard'>
                        <p className='ecoclan'>DashBoard</p>
                        <Link to='/login'><img className='logout' src={logout} alt="Logout" /></Link>
                    </div>
                    <div className='container'>
                        <div>
                            <Row>
                                <Col xs={12} md={12} lg={12} sm={12}>
                                    <p className='headtotal'>A TOTAL OF <span className='material'>750</span> kgs OF MATERIAL HAS BEEN RECYCLED!</p>
                                </Col>
                                <Col xs={12} md={12} lg={12} sm={12}>
                                    <img className='pics' src={picture} alt="Girl Throwing Garbage" />
                                </Col>
                            </Row>
                            <div>
                                <h6 className='impact'>OVERALL IMPACT FOR YOUR ORDERS!</h6>
                            </div>
                            <center>
                                <h4 className="text-successs">Saved</h4>
                            </center>

                            <Row>
                                <Col xs={12} md={12} lg={12} sm={12}>
                                    <img className='tap' src={watertap} alt="Water Tap" />
                                    <h6>{category.energySaved}</h6>
                                    <h6 className='water'>Liters of water</h6>
                                </Col>
                                <Col xs={12} md={12} lg={12} sm={12}>
                                    <img className='tap' src={energy} alt="Energy" />
                                    <h6>{category.landFill}</h6>
                                    <h6 className='water'>KWH Energy</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} lg={12} sm={12}>
                                    <img className='oil' src={oil} alt="Oil" />
                                    <h6>{category.oilSaved}</h6>
                                    <h6 className='water'>Liters of Oil</h6>
                                </Col>
                                <Col xs={12} md={12} lg={12} sm={12}>
                                    <img className='trees' src={tree} alt="Trees" />
                                    <h6>{category.purifiedAir}</h6>
                                    <h6 className='water'>Trees</h6>
                                </Col>
                            </Row>
                            <center>
                                <h3 className="elimi">Eliminated</h3>
                            </center>
                            <Row>
                                <Col xs={12} md={12} lg={12} sm={12}>
                                    <img className='air' src={air} alt="Air" />
                                    <h6>{category.treesSaved}</h6>
                                    <h6 className='water'>Air Pollution</h6>
                                </Col>
                                <Col xs={12} md={12} lg={12} sm={12}>
                                    <img className='land' src={land} alt="Land" />
                                    <h6>{category.waterSaved}</h6>
                                    <h6 className='water'>CFT Land Fill</h6>
                                </Col>
                            </Row>
                        </div>
                        <div className='footer_dashboard'>
                            <Row className='container'>
                                <Col md={5} xs={5}><Link to='/giveaway'><img className='gifths mt-2' src={hand} alt="Hand" /></Link></Col>
                                <Col md={5} xs={5}><Link to='/dashboard'><img className='gifths mt-2' src={globe} alt="Globe" /></Link></Col>
                                <Col md={5} xs={5}><Link to='/Aboutcompany'><img className='gifths mt-2' src={home} alt="Home" /></Link></Col>
                                <Col md={5} xs={4}><Link to='/rewards'><img className='gifths mt-2' src={gift} alt="Gift" /></Link></Col>
                                <Col md={4} xs={5}><Link to='/user'><img className='gifths mt-2' src={user} alt="User" /></Link></Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import '../../Components/Dashboard/Dashboard.css';
// import { Link } from 'react-router-dom';
// import { Col, Row } from 'antd';
// import axios from 'axios';
// import picture from '../../images/girl-throwing-garbage-vector-illustration_642458-73.avif';
// import oil from '../../images/oil-green.png';
// import tree from '../../images/tree-green.png';
// import energy from '../../images/electricity-green.png';
// import watertap from '../../images/water-green.png';
// import air from '../../images/air-filter.png';
// import land from '../../images/landfill.png';
// import hand from '../../images/giftboxhand.png';
// import globe from '../../images/globeworld.png';
// import home from '../../images/home.png';
// import gift from '../../images/giftbox.png';
// import user from '../../images/user.png';
// import logout from '../../images/logout .png';

// const Dashboard = () => {
//     const [categories, setCategories] = useState({});

//     useEffect(() => {
//         axios.get('http://192.168.29.47:5000/api/dashboard-metric')
//             .then((response) => {
//                 console.log("Dashboard.data", response);
//                 // Check if response data is not empty before setting state
//                 if (response.data && Object.keys(response.data).length > 0) {
//                     setCategories(response.data);
//                 } else {
//                     console.log("API response is empty or does not contain data.");
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 // Handle errors, for example, setting categories to an empty object
//                 setCategories({});
//             });
//     }, []);   

//      useEffect(() => {
//         console.log("Updated categories:", categories);
//     }, [categories]);

//     // useEffect(() => {
//     //     const fetchData = async () => {



//     //         try {
//     //             const response = await axios.get("http://192.168.29.47:5000/api/dashboard-metric");
//     //             if (Array.isArray(response.data)) {
//     //                 setCategories(response.data);
//     //             } else {
//     //                 console.error("Data received from API is not an array:", response.data);
//     //             }
//     //         } catch (error) {
//     //             console.log(error);
//     //         }
//     //     };

//     //     fetchData();
//     // }, []);

//     return (
//         <div className='main-dashboard'>
//             <div className='submain-dashboard pt-3'>
//                 <div className='dashboard'>
//                     <p className='ecoclan'>Dashboard</p>
//                     <Link to='/login'><img className='logout' src={logout} alt="Logout" /></Link>
//                 </div>
//                 <div className='container'>
//                     <div>
//                         <Row>
//                             <Col xs={12} md={12} lg={12} sm={12}>
//                                 <p className='headtotal'>A TOTAL OF <span className='material'>750</span> kgs OF MATERIAL HAS BEEN RECYCLED!</p>
//                             </Col>
//                             <Col xs={12} md={12} lg={12} sm={12}>
//                                 <img className='pics' src={picture} alt="Girl Throwing Garbage" />
//                             </Col>
//                         </Row>
//                         <div>
//                             <h6 className='impact'>OVERALL IMPACT FOR YOUR ORDERS!</h6>
//                         </div>
//                         <center>
//                             <h4 className="text-successs">Saved</h4>
//                         </center>

//                         <Row>
                       
                            
//                             {/* {categories.map(category => (
//                                 <Col key={category.id} xs={12} md={12} lg={12} sm={12}>
//                                     <img className={category.icon} src={require(`../../images/${category.icon}.png`).default} alt={category.name} />
//                                     <h6>{category.count}</h6>
//                                     <h6 className='water'>{category.text}</h6>
//                                 </Col>
//                             ))} */}
//                         </Row>

//                         <center>
//                             <h3 className="elimi">Eliminated</h3>
//                         </center>

//                         <Row>
//                             {/* {categories.map(category => (
//                                 <Col key={category.id} xs={12} md={12} lg={12} sm={12}>
//                                     <img className={category.icon} src={require(`../../images/${category.icon}.png`).default} alt={category.name} />
//                                     <h6>{category.count}</h6>
//                                     <h6 className='water'>{category.text}</h6>
//                                 </Col>
//                             ))} */}
//                         </Row>
//                     </div>
//                     <div className='footer_dashboard'>
//                         <Row className='container'>
//                             <Col md={5} xs={5}><Link to='/giveaway'><img className='gifths mt-2' src={hand} alt="Hand" /></Link></Col>
//                             <Col md={5} xs={5}><Link to='/dashboard'><img className='gifths mt-2' src={globe} alt="Globe" /></Link></Col>
//                             <Col md={5} xs={5}><Link to='/Aboutcompany'><img className='gifths mt-2' src={home} alt="Home" /></Link></Col>
//                             <Col md={5} xs={4}><Link to='/rewards'><img className='gifths mt-2' src={gift} alt="Gift" /></Link></Col>
//                             <Col md={4} xs={5}><Link to='/user'><img className='gifths mt-2' src={user} alt="User" /></Link></Col>
//                         </Row>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;


