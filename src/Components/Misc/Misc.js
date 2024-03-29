import React, { useState, useEffect } from 'react';
import '../Misc/Misc.css';
import { CurrencyRupee } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Misc = () => {
    const [miscData, setMiscData] = useState([]);
    const [prices, setPrices] = useState({});

    useEffect(() => {
        axios.get('http://192.168.29.47:5000/api/products/4')
            .then((misc) => {
                console.log("misc.data",misc.data)
                setMiscData(misc.data)
                console.log("miscData",miscData)
                const initialPrices = {};
                misc.data.forEach(misc => {
                    initialPrices[misc.id] = 0; // Initialize prices with default value 0 for each appliance ID
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
        <div className='product_misc'>
            <div className='misc-submain-body'>
                <div className='row'>
                    {miscData.map(item => (
                        <div className='col-4' key={item.id}>
                            <img className='misc_section' src={" "} alt="" />
                            <div className='misc_section-part'>{item.name}</div>
                            <div className='misc_third'>
                                kg-<CurrencyRupee /> {item.price}
                            </div>
                            <div className="misc-container">
                                <FontAwesomeIcon onClick={() => decrementPrice(item.id)} icon={faSquareMinus} style={{ height: "25px", width: "25px" }} />
                                <span className="price">{prices[item.id]}</span>
                                <FontAwesomeIcon onClick={() => incrementPrice(item.id)} icon={faSquarePlus} style={{ height: "25px", width: "25px" }} />
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

export default Misc;
