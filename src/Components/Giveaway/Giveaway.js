// import React, { useState, useEffect } from 'react';
// import '../Giveaway/Giveaway.css'
// import pic from '../../images/pickup.png'
// import logout from '../../images/logout .png'
// import { Col, Row } from 'antd';
// import hand from '../../images/giftboxhand.png'
// import globe from '../../images/globeworld.png'
// import home from '../../images/home.png'
// import gift from '../../images/giftbox.png'
// import user from '../../images/user.png'
// import { Link } from 'react-router-dom';
// import axios from 'axios'; // Import Axios library


// const Giveaway = () => {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get('http://192.168.29.47:5000/api/category');
//                 setCategories(response.data);
//                 console.log(response)
//             } catch (error) {
//                 console.error('Error fetching categories:', error);
//             }
//         };

//         fetchCategories();
//     }, []);
//     return (
//         <div className='main-giveaway'>
//             <div className='submain-giveaway'>
//                 <div className='giveaway row'>
//                     <div className='col-2'>
//                         <img className='pic' src={pic} alt=" "></img>

//                     </div>
//                     <div className='col-8'>
//                         <p className='' style={{ fontSize: "25px", fontWeight: "700", paddingTop: "7px" }}>GiveAway</p>
//                     </div>
//                     <div className='col-2'>
//                         <img className='logouted' src={logout} alt=" "></img>
//                     </div>
//                 </div>
//                 <div>
//                     <h3 className='mt-3 select-give'>Select a Category</h3>
//                 </div>
//                 <div className='row'>
                  
//                         <div className='apparel col-6'>
//                         <Link to="/products"style={{textDecoration:"none",color:"black"}}>
//                             <img className='giff' src={hand}></img>
//                             <h6> Apparel</h6>
//                             </Link>
//                         </div>
                  
//                     <div className='apparel col-6'>
//                     <Link to="/products"style={{textDecoration:"none",color:"black"}}>

//                         <img className='giff' src={hand}></img>
//                         <h6> Electronics</h6>
//                         </Link>

//                     </div>
//                     <div className='apparel col-6'>
//                     <Link to="/products"style={{textDecoration:"none",color:"black"}}>

//                         <img className='giff' src={hand}></img>
//                         <h6> Appliances</h6>
//                         </Link>

//                     </div>
//                     <div className='apparel col-6'>
//                     <Link to="/products"style={{textDecoration:"none",color:"black"}}>

//                         <img className='giff' src={hand}></img>
//                         <h6> Misc</h6>
//                         </Link>

//                     </div>
//                     <div className='apparel col-6'>
//                     <Link to="/products"style={{textDecoration:"none",color:"black"}}>

//                         <img className='giff' src={hand}></img>
//                         <h6> Plastic</h6>
//                         </Link>

//                     </div>
//                     <div className='apparel col-6'>
//                     <Link to="/products"style={{textDecoration:"none",color:"black"}}>

//                         <img className='giff ' src={hand}></img>
//                         <h6> Metals</h6>
//                         </Link>

//                     </div>
//                     <div className='apparel col-6'>
//                     <Link to="/products"style={{textDecoration:"none",color:"black"}}>

//                         <img className='giff' src={hand}></img>
//                         <h6> Cars & Bikes</h6>
//                         </Link>

//                     </div>
//                     <div className='apparel col-6'>
//                     <Link to="/products"style={{textDecoration:"none",color:"black"}}>

//                         <img className='giff ' src={hand}></img>
//                         <h6> Recycables</h6>
//                         </Link>

//                     </div>




//                 </div>





//                 <div className='footer_giveaway'>
//                     <Row className='container ' >
//                         <Col md={5} xs={5}><Link to='/giveaway'><img className='gifths mt-2' src={hand} alt="Hand" /></Link>
//                         </Col>
//                         <Col md={5} xs={5}><Link to='/dashboard'><img className='gifths mt-2' src={globe} alt="Hand" /></Link>
//                         </Col>
//                         <Col md={5} xs={5}><Link to='/Aboutcompany'><img className='gifths mt-2' src={home} alt="Hand" /></Link>
//                         </Col>
//                         <Col md={5} xs={4}><Link to='/rewards'><img className='gifths mt-2' src={gift} alt="Hand" /></Link>
//                         </Col>
//                         <Col md={4} xs={5}><Link to='/user'><img className='gifths mt-2' src={user} alt="Hand" /></Link>
//                         </Col>
//                     </Row>
//                 </div>
//             </div>







//         </div>
//     )
// }
// export default Giveaway;


import React, { useState, useEffect } from 'react';
import hand from '../../images/giftboxhand.png'
import globe from '../../images/globeworld.png'
import home from '../../images/home.png'
import gift from '../../images/giftbox.png'
import user from '../../images/user.png'
import '../Giveaway/Giveaway.css';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library

const Giveaway = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/category');
                setCategories(response.data);
                console.log(response)
                 
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className='main-giveaway'>
            <div className='submain-giveaway'>
                {/* Your existing JSX */}
                <div>
                    <h3 className='mt-4 select-give'>Select a Category</h3>
                </div>
                <div className='row'>
                    {/* Map through categories and render */}
                    {categories.map(category => (
                        <div className='apparel col-6' key={category.id}>
                            <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
                                <img className='giff' src={category.imageUrl} alt={category.name} />
                                <h6>{category.name}</h6>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='footer_giveaway'>
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
    );
};

export default Giveaway;

