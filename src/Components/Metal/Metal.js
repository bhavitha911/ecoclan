

// // import React, { useState, useEffect } from 'react';
// // import '../Metal/Metal.css';
// // import { CurrencyRupee } from 'react-bootstrap-icons';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';
// // import { jwtDecode } from "jwt-decode";


// // const Metal = () => {
// //     const [metalData, setMetalData] = useState([]);
// //     const [prices, setPrices] = useState([]);
// //     const[bikes,setBikes]=useState([]);
// //     const[userIdd,setUserIdd]=useState([]);
// //     console.log("bikes",bikes)
// //     console.log("userIdd",userIdd)
// //     const printpricess = () =>{
// //         console.log("prices",prices)
// //         localStorage.setItem("quantity", JSON.stringify(prices));
// //         localStorage.setItem("bikes", JSON.stringify(bikes));
// //         localStorage.setItem("userIdd", JSON.stringify(userIdd));

// //     }

// //     useEffect(() => {
// //         const token = localStorage.getItem('auth');
// //         if (token) {
// //             const decodedToken = jwtDecode(token);
      
// //             setUserIdd(decodedToken.id);
          
// //           }
// //         axios.get('http://localhost:5000/api/products/5')
// //             .then((response) => {
// //                 console.log("Response from API:",response)
// //                 setMetalData(response.data);
// //                 // console.log("metalData",metalData)
// //                 const initialPrices={};
// //                response.data.forEach(metal => {
// //                     initialPrices[metal.id] = 0; // Initialize prices with default value 0 for each metal ID
// //                 });
// //                 setPrices(initialPrices);
// //             })
// //             .catch(error => console.error('Error fetching data:', error));
// //     }, []);

// //     const incrementPrice = (index) => {
// //         setPrices((prevPrices) => {
// //             const newPrices = [...prevPrices];
// //             newPrices[index] += 1;
// //             return newPrices;
// //         });
// //         if(!bikes.includes(id)){
// //             setBikes((bikes) => [...bikes,id]);
           
// //             }
        
// //     };

// //     const decrementPrice = (id) => {
// //         if (prices[id] && prices[id]> 0) {
// //             setPrices(prevPrices => ({
// //                 ...prevPrices,
// //                 [id]: prevPrices[id] - 1
// //             }));
// //         }
// //     };

// //     return (
// //         <>
// //             <div className='metal_body'>
// //                 <div className='metal-submain-body'>
// //                     <div className='row'>
// //                         {metalData.map((item, index) => (
// //                             <div className='col-4' key={index}>
// //                                 <img className='metal_section' src={" "} alt="" />
// //                                 <div className='metal_section-part'>
// //                                     {item.name}
// //                                 </div>
// //                                 <div className='metal_third'>
// //                                     piece-<CurrencyRupee></CurrencyRupee> {item.price}
// //                                 </div>
// //                                 <div className="metal-container">
// //                                     <FontAwesomeIcon onClick={() => decrementPrice(index)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
// //                                     <span className="price">{prices[item.id]}</span>
// //                                     <FontAwesomeIcon onClick={() => incrementPrice(index)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //                 <div>
// //                     <Link to='/free'><button className='next_butto'>NEXT</button></Link>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // export default Metal;





// import React, { useState, useEffect } from 'react';
// import '../Metal/Metal.css';
// import { CurrencyRupee } from 'react-bootstrap-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { jwtDecode } from "jwt-decode";


// const Metal = () => {
//     const [metalData, setMetalData] = useState([]);
//     const [prices, setPrices] = useState([]);
//     const [bikes, setBikes] = useState([]);
//     const [userIdd, setUserIdd] = useState([]);
//     console.log("bikes", bikes);
//     console.log("userIdd", userIdd);

//     const printpricess = () => {
//         console.log("prices", prices);
//         localStorage.setItem("quantity", JSON.stringify(prices));
//         localStorage.setItem("bikes", JSON.stringify(bikes));
//         localStorage.setItem("userIdd", JSON.stringify(userIdd));
//     };

//     useEffect(() => {
//         const token = localStorage.getItem('auth');
//         if (token) {
//             const decodedToken = jwtDecode(token);
//             setUserIdd(decodedToken.id);
//         }
//         axios.get('http://localhost:5000/api/products/5')
//             .then((response) => {
//                 console.log("Response from API:", response);
//                 setMetalData(response.data);
//                 const initialPrices = {};
//                 response.data.forEach(metal => {
//                     initialPrices[metal.id] = 0; // Initialize prices with default value 0 for each metal ID
//                 });
//                 setPrices(initialPrices);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     const incrementPrice = (index) => {
//         setPrices((prevPrices) => {
//             const newPrices = [...prevPrices];
//             newPrices[index] += 1;
//             return newPrices;
//         });
//         if (!bikes.includes(metalData[index].id)) {
//             setBikes((bikes) => [...bikes, metalData[index].id]);
//         }
//     };
    
//     const decrementPrice = (index) => {
//         if (prices[index] && prices[index] > 0) {
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
//                         {metalData.map((item, index) => (
//                             <div className='col-4' key={index}>
//                                 <img className='metal_section' src={" "} alt="" />
//                                 <div className='metal_section-part'>
//                                     {item.name}
//                                 </div>
//                                 <div className='metal_third'>
//                                     piece-<CurrencyRupee></CurrencyRupee> {item.price}
//                                 </div>
//                                 <div className="metal-container">
//                                     <FontAwesomeIcon onClick={() => decrementPrice(index)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
//                                     <span className="price">{prices[item.id]}</span>
//                                     <FontAwesomeIcon onClick={() => incrementPrice(index)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div>
//                     <Link to='/free'><button className='next_butto' onClick={printpricess}>NEXT</button></Link>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Metal;
import React, { useState, useEffect } from 'react';
import '../Metal/Metal.css';
import { CurrencyRupee } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const Metal = () => {
    const [metalData, setMetalData] = useState([]);
    const [prices, setPrices] = useState([]);
    const [bikes, setBikes] = useState([]);
    const [userIdd, setUserIdd] = useState([]);

    console.log("bikes", bikes);
    console.log("userIdd", userIdd);

    const printpricess = () => {
        console.log("prices", prices);
        localStorage.setItem("quantity", JSON.stringify(prices));
        localStorage.setItem("bikes", JSON.stringify(bikes));
        localStorage.setItem("userIdd", JSON.stringify(userIdd));
    };

    useEffect(() => {
        const token = localStorage.getItem('auth');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserIdd(decodedToken.id);
        }
        axios.get('http://localhost:5000/api/products/5')
            .then((response) => {
                console.log("Response from API:", response);
                setMetalData(response.data);
                const initialPrices = {};
                response.data.forEach(metal => {
                    initialPrices[metal.id] = 0; // Initialize prices with default value 0 for each metal ID
                });
                setPrices(initialPrices);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const incrementPrice = (index) => {
        setPrices((prevPrices) => {
            const newPrices = [...prevPrices];
            newPrices[index] = (newPrices[index] || 0) + 1;
            return newPrices;
        });
        if (!bikes.includes(metalData[index].id)) {
            setBikes((bikes) => [...bikes, metalData[index].id]);
        }
    };
    

    const decrementPrice = (index) => {
        setPrices((prevPrices) => {
            const newPrices = [...prevPrices];
            if (newPrices[index] && newPrices[index] > 0) {
                newPrices[index] = 1;
            }
            return newPrices;
        });
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
                                    <FontAwesomeIcon onClick={() => decrementPrice(index)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
                                    <span className="price">{prices[item.id]}</span>
                                    <FontAwesomeIcon onClick={() => incrementPrice(index)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Link to='/free'><button className='next_butto' onClick={printpricess}>NEXT</button></Link>
                </div>
            </div>
        </>
    );
}

export default Metal;
