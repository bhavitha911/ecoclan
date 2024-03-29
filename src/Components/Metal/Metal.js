

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
            .then((metal) => {
                console.log("metal.data",metal.data)
                setMetalData(metal.data);
                console.log("metalData",metalData)
                const initialPrices={};
                metal.data.forEach(metal => {
                    initialPrices[metal.id] = 0; // Initialize prices with default value 0 for each metal ID
                });
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
                                    <FontAwesomeIcon onClick={() => decrementPrice(index)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
                                    <span className="price">{prices[item.id]}</span>
                                    <FontAwesomeIcon onClick={() => incrementPrice(index)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
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





