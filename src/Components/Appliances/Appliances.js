import React, { useState, useEffect } from 'react';
import '../Appliances/Appliances.css';
import { CurrencyRupee } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Appliances = () => {
    const [appliancesData, setAppliancesData] = useState([]);
    const [prices, setPrices] = useState({});

    useEffect(() => {
        axios.get('http://192.168.29.47:5000/api/products/3')
            .then((response) => {
                console.log("appliances.data",response.data)
                setAppliancesData(response.data) // Ensure appliancesData is initialized as an empty array if response.data.products is undefined
                console.log("appliancesData",appliancesData)
                const initialPrices = {};
                
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
                                <FontAwesomeIcon onClick={() => incrementPrice(appliance.id)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
                                <span className="price">{prices[appliance.id]}</span>
                                <FontAwesomeIcon onClick={() => decrementPrice(appliance.id)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Link to='/free'><button className='next_butto'>NEXT</button></Link>
            </div>
        </div>
    );
}

export default Appliances;



