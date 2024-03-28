// import React from 'react';
// import '../Metal/Metal.css';
// import { CurrencyRupee } from 'react-bootstrap-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// const Metal = () => {
//     const [prices, setPrices] = useState([0, 0, 0, 0, 0, 0]); // Initial prices for each item
//     const incrementPrice = (index) => {
//         setPrices((prevPrices) => {
//             const newPrices = [...prevPrices];
//             newPrices[index] += 1;
//             return newPrices;
//         });
//     };
//     const decrementPrice = (index) => {
//         if (prices[index] > 0) {
//             setPrices((prevPrices) => {
//                 const newPrices = [...prevPrices];
//                 newPrices[index] -= 1;
//                 return newPrices;
//             });
//         }
//     };
//     return (
//         <>
//             <div className='metal_body'>
//                 <div className='metal-submain-body'>
//                     <div className='row'>
//                         {[{ name: 'Tire', price: 100 }, { name: 'Car', price: 15000 }, { name: 'Bikes', price: 5000 }, { name: 'Drums', price: 1000 }, { name: 'Jerry Can', price: 500 }, { name: 'Others', price: 100 }].map((item, index) => (
//                             <div className='col-4' key={index}>
//                                 <img className='metal_section' src={" "} alt="" />
//                                 <div className='metal_section-part'>
//                                     {item.name}
//                                 </div>
//                                 <div className='metal_third'>
//                                     piece-<CurrencyRupee></CurrencyRupee> {item.price}
//                                 </div>
//                                 <div className="metal-container">
//                                     <FontAwesomeIcon onClick={() => incrementPrice(index)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
//                                     <span className="price">{prices[index]}</span>
//                                     <FontAwesomeIcon onClick={() => decrementPrice(index)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div>
//                 <Link to='/free'>     <button className='next_butto'>NEXT</button></Link>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Metal;

import React, { useState, useEffect } from 'react';
import '../Metal/Metal.css';
import { CurrencyRupee } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Metal = () => {
    const [metalData, setMetalData] = useState([]);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.29.47:5000/api/products/5')
            .then((response) => {
                console.log("metal.data",response.data)
                setMetalData(response.data);
                console.log("metalData",metalData)
                const initialPrices={};
                setPrices(initialPrices);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const incrementPrice = (index) => {
        setPrices((prevPrices) => {
            const newPrices = [...prevPrices];
            newPrices[index] += 1;
            return newPrices;
        });
    };

    const decrementPrice = (index) => {
        if (prices[index] > 0) {
            setPrices((prevPrices) => {
                const newPrices = [...prevPrices];
                newPrices[index] -= 1;
                return newPrices;
            });
        }
    };

    return (
        <>
            <div className='metal_body'>
                <div className='metal-submain-body'>
                    <div className='row'>
                        {metalData.map((item, index) => (
                            <div className='col-4' key={index}>
                                <img className='metal_section' src={" "} alt="" />
                                <div className='metal_section-part'>
                                    {item.name}
                                </div>
                                <div className='metal_third'>
                                    piece-<CurrencyRupee></CurrencyRupee> {item.price}
                                </div>
                                <div className="metal-container">
                                    <FontAwesomeIcon onClick={() => incrementPrice(index)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
                                    <span className="price">{prices[index]}</span>
                                    <FontAwesomeIcon onClick={() => decrementPrice(index)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Link to='/free'><button className='next_butto'>NEXT</button></Link>
                </div>
            </div>
        </>
    );
}

export default Metal;





