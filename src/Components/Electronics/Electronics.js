// // import React from 'react'
// // import '../Electronics/Electronics.css'

// // import { CurrencyRupee } from 'react-bootstrap-icons';

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';


// // import { useState } from 'react'
// // import { Link } from 'react-router-dom';

// // const Electronics = () => {
// //     const [price, setPrice] = useState(0);
// //     const incrementPrice = () => {
// //         setPrice(prevPrice => prevPrice + 1);
// //     };
// //     const decrementPrice = () => {
// //         if (price > 0) {
// //             setPrice(prevPrice => prevPrice - 1);
// //         }
// //     };
// //     return (
// //         <>


// //             <div className='product_electronics'>
// //                 <div className='electronics-submain-body'>
// //                     <div className='row'>
// //                         <div className='col-4'>
// //                             <img className='electronics_section' src={" "} alt="" />
// //                             <div className='electronics_section-part'>
// //                                 Laptop
// //                             </div>
// //                             <div className='electronics_third'>
// //                                 piece-<CurrencyRupee></CurrencyRupee> 500
// //                             </div>
// //                             <div className="electronics-container">
// //                                 <FontAwesomeIcon onClick={incrementPrice} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
// //                                 <span className="price">{price}</span>
// //                                 <FontAwesomeIcon onClick={decrementPrice} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
// //                             </div>
// //                         </div>
// //                         <div className='col-4'>
// //                             <img className='electronics_section' src={" "} alt="" />
// //                             <div className='electronics_section-part'>
// //                                 Monitor
// //                             </div>
// //                             <div className='electronics_third' style={{ width: "132px" }}>
// //                                 piece-<CurrencyRupee></CurrencyRupee> 300
// //                             </div>
// //                             <div className="electronics-container">
// //                                 <FontAwesomeIcon onClick={incrementPrice} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
// //                                 <span className="price">{price}</span>
// //                                 <FontAwesomeIcon onClick={decrementPrice} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
// //                             </div>
// //                         </div>
// //                         <div className='col-4'>
// //                             <img className='electronics_section' src={" "} alt="" />
// //                             <div className='electronics_section-part'>
// //                                 Mobile
// //                             </div>
// //                             <div className='electronics_third'>
// //                                 piece-<CurrencyRupee></CurrencyRupee> 200
// //                             </div>
// //                             <div className="electronics-container">
// //                                 <FontAwesomeIcon onClick={incrementPrice} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
// //                                 <span className="price">{price}</span>
// //                                 <FontAwesomeIcon onClick={decrementPrice} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div className='row'>
// //                         <div className='col-4'>
// //                             <img className='electronics_section' src={" "} alt="" />
// //                             <div className='electronics_section-part'>
// //                                 tablet
// //                             </div>
// //                             <div className='electronics_third'>
// //                                 piece-<CurrencyRupee></CurrencyRupee> 200
// //                             </div>
// //                             <div className="electronics-container">
// //                                 <FontAwesomeIcon onClick={incrementPrice} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
// //                                 <span className="price">{price}</span>
// //                                 <FontAwesomeIcon onClick={decrementPrice} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
// //                             </div>
// //                         </div>
// //                         <div className='col-4'>
// //                             <img className='electronics_section' src={" "} alt="" />
// //                             <div className='electronics_section-part'>
// //                                 CPU
// //                             </div>
// //                             <div className='electronics_third' style={{ width: "132px" }}>
// //                                 piece-<CurrencyRupee></CurrencyRupee> 100
// //                             </div>
// //                             <div className="electronics-container">
// //                                 <FontAwesomeIcon onClick={incrementPrice} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
// //                                 <span className="price">{price}</span>
// //                                 <FontAwesomeIcon onClick={decrementPrice} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
// //                             </div>
// //                         </div>
// //                         <div className='col-4'>
// //                             <img className='electronics_section' src={" "} alt="" />
// //                             <div className='electronics_section-part'>
// //                                 Smart Watch
// //                             </div>
// //                             <div className='electronics_third'>
// //                                 piece-<CurrencyRupee></CurrencyRupee> 100
// //                             </div>
// //                             <div className="electronics-container">
// //                                 <FontAwesomeIcon onClick={incrementPrice} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
// //                                 <span className="price">{price}</span>
// //                                 <FontAwesomeIcon onClick={decrementPrice} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div>
// //                     <button className='next_butto'><Link className='' style={{ textDecoration: "none", color: "black" }} to='/free'>NEXT</Link></button>
// //                 </div>
// //             </div>

// //         </>
// //     )
// // }

// // export default Electronics




// import React, { useState } from 'react';
// import '../Electronics/Electronics.css';
// import { CurrencyRupee } from 'react-bootstrap-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
// import { Link } from 'react-router-dom';

// const Electronics = () => {
//     const electronicsData = [
//         { id: 1, name: 'Laptop', price: 500 },
//         { id: 2, name: 'Monitor', price: 300 },
//         { id: 3, name: 'Mobile', price: 200 },
//         { id: 4, name: 'Tablet', price: 200 },
//         { id: 5, name: 'CPU', price: 100 },
//         { id: 6, name: 'Smart Watch', price: 100 }
//     ];

//     const [prices, setPrices] = useState(electronicsData.reduce((acc, curr) => ({ ...acc, [curr.id]: 0 }), {}));

//     const incrementPrice = (id) => {
//         setPrices(prevPrices => ({
//             ...prevPrices,
//             [id]: prevPrices[id] + 1
//         }));
//     };

//     const decrementPrice = (id) => {
//         if (prices[id] > 0) {
//             setPrices(prevPrices => ({
//                 ...prevPrices,
//                 [id]: prevPrices[id] - 1
//             }));
//         }
//     };

//     return (
//         <div className='product_electronics'>
//             <div className='electronics-submain-body'>
//                 <div className='row'>
//                     {electronicsData.map(item => (
//                         <div className='col-4' key={item.id}>
//                             <img className='electronics_section' src={" "} alt="" />
//                             <div className='electronics_section-part'>{item.name}</div>
//                             <div className='electronics_third'>
//                                 piece-<CurrencyRupee /> {item.price}
//                             </div>
//                             <div className="electronics-container">
//                                 <FontAwesomeIcon onClick={() => incrementPrice(item.id)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
//                                 <span className="price">{prices[item.id]}</span>
//                                 <FontAwesomeIcon onClick={() => decrementPrice(item.id)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div>
//             <button className='next_butto'><Link className='' style={{ textDecoration: "none", color: "black" }} to='/free'>NEXT</Link></button>
//             </div>
//         </div>
//     );
// }

// export default Electronics;
// import React, { useState, useEffect } from 'react';
// import '../Electronics/Electronics.css';
// import { CurrencyRupee } from 'react-bootstrap-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
// import { Link } from 'react-router-dom';

// const Electronics = () => {
//     const [electronicsData, setElectronicsData] = useState([]);
//     const [prices, setPrices] = useState({});

//     useEffect(() => {
//         fetch('http://192.168.29.47:5000/api/products/2')
//             .then(response => response.json())
//             .then(data => {
//                 setElectronicsData(data.products);
//                 const initialPrices = {};
//                 data.products.forEach(product => {
//                     initialPrices[product.id] = 0;
//                 });
//                 setPrices(initialPrices);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     const incrementPrice = (id) => {
//         setPrices(prevPrices => ({
//             ...prevPrices,
//             [id]: prevPrices[id] + 1
//         }));
//     };

//     const decrementPrice = (id) => {
//         if (prices[id] > 0) {
//             setPrices(prevPrices => ({
//                 ...prevPrices,
//                 [id]: prevPrices[id] - 1
//             }));
//         }
//     };

//     return (
//         <div className='product_electronics'>
//             <div className='electronics-submain-body'>
//                 <div className='row'>
//                     {electronicsData.map(item => (
//                         <div className='col-4' key={item.id}>
//                             <img className='electronics_section' src={" "} alt="" />
//                             <div className='electronics_section-part'>{item.name}</div>
//                             <div className='electronics_third'>
//                                 piece-<CurrencyRupee /> {item.price}
//                             </div>
//                             <div className="electronics-container">
//                                 <FontAwesomeIcon onClick={() => incrementPrice(item.id)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
//                                 <span className="price">{prices[item.id]}</span>
//                                 <FontAwesomeIcon onClick={() => decrementPrice(item.id)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div>
//             <button className='next_butto'><Link className='' style={{ textDecoration: "none", color: "black" }} to='/free'>NEXT</Link></button>
//             </div>
//         </div>
//     );
// }

// export default Electronics;
// import React, { useState, useEffect } from 'react';
// import '../Electronics/Electronics.css';
// import { CurrencyRupee } from 'react-bootstrap-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
// import { Link } from 'react-router-dom';

// const Electronics = () => {
//     const [electronicsData, setElectronicsData] = useState([]);
//     const [prices, setPrices] = useState({});

//     useEffect(() => {
//         fetch('http://192.168.29.47:5000/api/products/2')
//             .then(response => response.json())
//             .then(data => {
//                 setElectronicsData(data.products);
//                 const initialPrices = {};
//                 data.products.forEach(product => {
//                     initialPrices[product.id] = 0;
//                 });
//                 setPrices(initialPrices);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     const incrementPrice = (id) => {
//         setPrices(prevPrices => ({
//             ...prevPrices,
//             [id]: prevPrices[id] + 1
//         }));
//     };

//     const decrementPrice = (id) => {
//         if (prices[id] > 0) {
//             setPrices(prevPrices => ({
//                 ...prevPrices,
//                 [id]: prevPrices[id] - 1
//             }));
//         }
//     };

//     return (
//         <div className='product_electronics'>
//             <div className='electronics-submain-body'>
//                 <div className='row'>
//                     {electronicsData.length > 0 ? (
//                         electronicsData.map(item => (
//                             <div className='col-4' key={item.id}>
//                                 <img className='electronics_section' src={" "} alt="" />
//                                 <div className='electronics_section-part'>{item.name}</div>
//                                 <div className='electronics_third'>
//                                     piece-<CurrencyRupee /> {item.price}
//                                 </div>
//                                 <div className="electronics-container">
//                                     <FontAwesomeIcon onClick={() => incrementPrice(item.id)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
//                                     <span className="price">{prices[item.id]}</span>
//                                     <FontAwesomeIcon onClick={() => decrementPrice(item.id)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div>Loading...</div>
//                     )}
//                 </div>
//             </div>
//             <div>
//                 <button className='next_butto'><Link className='' style={{ textDecoration: "none", color: "black" }} to='/free'>NEXT</Link></button>
//             </div>
//         </div>
//     );
// }

// export default Electronics;

import React, { useState, useEffect } from 'react';
import '../Electronics/Electronics.css';
import { CurrencyRupee } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Electronics = () => {
    const [electronicsData, setElectronicsData] = useState([]);
    const [prices, setPrices] = useState({});

    useEffect(() => {
        axios.get('http://192.168.29.47:5000/api/products/2')
            .then((response) => {
                console.log(response.data)
                setElectronicsData(response.data);
                console.log("electronicsData",electronicsData)
     
                const initialPrices = {};   
                // response.data.products.forEach(product => {
                //     initialPrices[product.id] = 0;
                // });
                setPrices(initialPrices);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    

    const incrementPrice = (id) => {
        setPrices(prevPrices => ({
            ...prevPrices,
            [id]: prevPrices[id] + 1
        }));
    };

    const decrementPrice = (id) => {
        if (prices[id] > 0) {
            setPrices(prevPrices => ({
                ...prevPrices,
                [id]: prevPrices[id] - 1
            }));
        }
    };

    return (
        <div className='product_electronics'>
            <div className='electronics-submain-body'>
                <div className='row'>
                    {electronicsData && electronicsData.length > 0 ? (
                        electronicsData.map(item => (
                            <div className='col-4' key={item.id}>
                                <img className='electronics_section' src={" "} alt="" />
                                <div className='electronics_section-part'>{item.name}</div>
                                <div className='electronics_third'>
                                    piece-<CurrencyRupee /> {item.price}
                                </div>
                                <div className="electronics-container">
                                    <FontAwesomeIcon onClick={() => incrementPrice(item.id)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
                                    <span className="price">{prices[item.id]}</span>
                                    <FontAwesomeIcon onClick={() => decrementPrice(item.id)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
            <div>
                <button className='next_butto'><Link className='' style={{ textDecoration: "none", color: "black" }} to='/free'>NEXT</Link></button>
            </div>
        </div>
    );
}

export default Electronics;


