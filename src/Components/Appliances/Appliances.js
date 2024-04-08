import React, { useState, useEffect } from 'react';
import '../Appliances/Appliances.css';
import { CurrencyRupee } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


const Appliances = () => {
    const [appliancesData, setAppliancesData] = useState([]);
    const [prices, setPrices] = useState({});
    const[bikes,setBikes]=useState([]);
    const[userIdd,setUserIdd]=useState([]);
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
        axios.get('http://localhost:5000/api/products/3')
            .then((response) => {
                console.log("Response from API:", response);
                setAppliancesData(response.data);
                const initialPrices = {};
                response.data.forEach(appliance => {
                    initialPrices[appliance.id] = 0; // Initialize prices with default value 0 for each appliance ID
                });
                setPrices(initialPrices);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const incrementPrice = (id) => {
        setPrices(prevPrices => ({
            ...prevPrices,
            [id]: (prevPrices[id]) + 1 // If prevPrices[id] is undefined, default to 0 before incrementing
        }));
        if(!bikes.includes(id)){
            setBikes((bikes) => [...bikes,id]);
           
            }
        };
   

    const decrementPrice = (id) => {
        if (prices[id]&& prices[id] > 0) {
            setPrices(prevPrices => ({
                ...prevPrices,
                [id]: prevPrices[id] - 1
            }));
        }
    };

    return (
        <div className='product_appliances'>
            <div className='appliances-submain-body'>
                <div className='row'>
                    {appliancesData.map(appliance => (
                        <div className='col-4' key={appliance.id}>
                            <img className='appliances_section' src={" "} alt="" />
                            <div className='appliances_section-part'>{appliance.name}</div>
                            <div className='appliances_third'>
                                piece-<CurrencyRupee /> {appliance.price}
                            </div>
                            <div className="appliances-container">
                                <FontAwesomeIcon onClick={() => decrementPrice(appliance.id)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
                                <span className="price">{prices[appliance.id]}</span>
                                <FontAwesomeIcon onClick={() => incrementPrice(appliance.id)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Link to='/free'><button className='next_butto' onClick={printpricess}>NEXT</button></Link>
            </div>
        </div>
    );
}

export default Appliances;
 
