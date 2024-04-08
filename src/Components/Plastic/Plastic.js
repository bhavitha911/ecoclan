// import React, { useEffect, useState } from 'react';
// import '../Plastic/Plastic.css';
// import { Link } from 'react-router-dom';
// import { CurrencyRupee } from 'react-bootstrap-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
// import axios from 'axios';
// import { jwtDecode } from "jwt-decode";




// const Plastic = () => {

//     const [plastics, setPlastics] = useState([]);
//     const [prices, setPrices] = useState({});
//     const[bikes,setBikes]=useState([]);
//     const[userIdd,setUserIdd]=useState([]);
//     console.log("bikes",bikes)
//     console.log("userIdd",userIdd)
//     const printpricess = () =>{
//         console.log("prices",prices)
//         localStorage.setItem("quantity", JSON.stringify(prices));
//         localStorage.setItem("bikes", JSON.stringify(bikes));
//         localStorage.setItem("userIdd", JSON.stringify(userIdd));

//     }

//     useEffect(() => {
//         const token = localStorage.getItem('auth');
//         if (token) {
//             const decodedToken = jwtDecode(token);
      
//             setUserIdd(decodedToken.id);
          
//           }
//         axios.get('http://localhost:5000/api/products/6')
//             .then((response) => {
//                 console.log("Response from API:", response);
//                 setPlastics(response.data)
//                 const initialPrices = {};
//                 response.data.forEach(plastic => {
//                     initialPrices[plastic.id] = 0; // Initialize prices with default value 0 for each plastic ID
//                 });

//                 setPrices(initialPrices)
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     const incrementPrice = (id) => {
//         setPrices(prevPrices => ({
//             ...prevPrices,
//             [id]: prevPrices[id] + 1
//         }));
//         if(!bikes.includes(id)){
//             setBikes((bikes) => [...bikes,id]);
           
//             }
//         };
//     };

//     const decrementPrice = (id) => {
//         if (prices[id] && prices[id] > 0) {
//             setPrices(prevPrices => ({
//                 ...prevPrices,
//                 [id]: prevPrices[id] - 1
//             }));
//         }
//     };

//     return (
//         <div className='product_plastic' style={{ marginTop: "60px" }}>
//             <div className='plastic-submain-body'>
//                 <div className='row'>
//                     {plastics.map(item => (
//                         <div className='col-4' key={item.id}>
//                             <img className='plastic_section' src={" "} alt="" />
//                             <div className='plastic_section-part'>
//                                 {item.name}
//                             </div>
//                             <div className='plastic_third'>
//                                 kg-<CurrencyRupee /> {item.price}
//                             </div>
//                             <div className="plastic-container">
//                                 <FontAwesomeIcon onClick={() => decrementPrice(item.id)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
//                                 <span className="price">{prices[item.id]}</span>
//                                 <FontAwesomeIcon onClick={() => incrementPrice(item.id)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div>
//                 <Link to='/free'>     <button className='next_butto' onClick={printpricess}>NEXT</button></Link>

//             </div>
//         </div>
//     );



// export default Plastic;
import React, { useEffect, useState } from 'react';
import '../Plastic/Plastic.css';
import { Link } from 'react-router-dom';
import { CurrencyRupee } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const Plastic = () => {
    const [plastics, setPlastics] = useState([]);
    const [prices, setPrices] = useState({});
    const [bikes, setBikes] = useState([]);
    const [userIdd, setUserIdd] = useState([]);
    console.log("bikes",bikes)
    console.log("userIdd",userIdd)
    const printpricess = () =>{
        console.log("prices",prices)
        localStorage.setItem("quantity", JSON.stringify(prices));
        localStorage.setItem("bikes", JSON.stringify(bikes));
        localStorage.setItem("userIdd", JSON.stringify(userIdd));

    }
    useEffect(() => {
        const token = localStorage.getItem('auth');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserIdd(decodedToken.id);
        }
        axios.get('http://localhost:5000/api/products/6')
            .then((response) => {
                setPlastics(response.data);
                const initialPrices = {};
                response.data.forEach(plastic => {
                    initialPrices[plastic.id] = 0; // Initialize prices with default value 0 for each plastic ID
                });
                setPrices(initialPrices);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const incrementPrice = (id) => {
        setPrices(prevPrices => ({
            ...prevPrices,
            [id]: prevPrices[id] + 1
        }));
        if (!bikes.includes(id)) {
            setBikes((bikes) => [...bikes, id]);
        }
    };

    const decrementPrice = (id) => {
        if (prices[id] && prices[id] > 0) {
            setPrices(prevPrices => ({
                ...prevPrices,
                [id]: prevPrices[id] - 1
            }));
        }
    };

   

    return (
        <div className='product_plastic' style={{ marginTop: "60px" }}>
            <div className='plastic-submain-body'>
                <div className='row'>
                    {plastics.map(item => (
                        <div className='col-4' key={item.id}>
                            <img className='plastic_section' src={" "} alt="" />
                            <div className='plastic_section-part'>
                                {item.name}
                            </div>
                            <div className='plastic_third'>
                                kg-<CurrencyRupee /> {item.price}
                            </div>
                            <div className="plastic-container">
                                <FontAwesomeIcon onClick={() => decrementPrice(item.id)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
                                <span className="price">{prices[item.id]}</span>
                                <FontAwesomeIcon onClick={() => incrementPrice(item.id)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Link to='/free'>
                    <button className='next_butto' onClick={printpricess}>NEXT</button>
                </Link>
            </div>
        </div>
    );
}

export default Plastic;

